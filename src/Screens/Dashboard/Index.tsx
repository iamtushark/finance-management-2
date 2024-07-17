import React, { useState } from 'react';
import { Container, Grid, Stack, Button } from '@mui/material';
import PieChart from '../../Components/PieChart';
import SummaryCard from '../../Components/SummaryCard';
import SavingsIcon from '@mui/icons-material/Savings';
import { AccountBalance } from '@mui/icons-material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectExpenseSum, selectExpenseTransactions, selectIncomeSum, selectIncomeTransactions, selectTransactions } from '../../features/transaction/transactionSlice';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs';
import { getDateFilteredExpenseSum, getDateFilteredExpenseTransactions, getDateFilteredIncomeSum, getDateFilteredIncomeTransactions } from '../../features/transaction/utils';
import { toast } from 'react-toastify';
import { groupAndSumByCategory } from '../../utils/chartUtils';


const Dashboard: React.FC = () => {

  const incomeArray = useAppSelector(selectIncomeTransactions)
  const expenseArray = useAppSelector(selectExpenseTransactions)
  const expenseSum = useAppSelector(selectExpenseSum)
  const incomeSum = useAppSelector(selectIncomeSum)
  const [filteredIncomeArray, setFilteredIncomeArray] = useState(incomeArray);
  const [filteredExpenseArray, setFilteredExpenseArray] = useState(expenseArray);
  const [filteredExpenseSum, setFilteredExpenseSum] = useState(expenseSum)
  const [filteredIncomeSum, setFilteredIncomeSum] = useState(incomeSum)
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleStartDateChange = (date: Dayjs | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    setEndDate(date);
  };

  const handleSave = () => {
    if (startDate && endDate) {
      setFilteredExpenseArray(getDateFilteredExpenseTransactions(expenseArray, startDate.toISOString(), endDate.toISOString()))
      setFilteredIncomeArray(getDateFilteredIncomeTransactions(incomeArray, startDate.toISOString(), endDate.toISOString()))
      setFilteredExpenseSum(getDateFilteredExpenseSum(expenseArray, startDate.toISOString(), endDate.toISOString()))
      setFilteredIncomeSum(getDateFilteredIncomeSum(incomeArray, startDate.toISOString(), endDate.toISOString()))
      if(filteredExpenseArray.length === 0){
        toast.info("Add Expense/Income for graphical insights")
      }
    }
    else{
      toast.warn("Set Appropriate Start and End dates")
    }
  };

  return (
    <div>
      <Container sx={{ bgcolor: "white", border: '1px ', borderRadius: '16px', padding: '12px' }}>
        <h1>Overview</h1>
        <Grid container spacing={4} justifyContent="center">
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Grid item xs={12} sm={6} md={3}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Button variant="contained" onClick={handleSave}>Save</Button>
            </Grid>
          </LocalizationProvider>
        </Grid>
        <h3>Summary</h3>
        <Grid container spacing={4} justifyContent="center" width={"100%"}>
          {/* Summary Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <SummaryCard
              title="Total Income"
              value={String(filteredIncomeSum)}
              icon={<AttachMoneyIcon sx={{ fontSize: 30, color: 'primary.main' }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SummaryCard
              title="Total Spent"
              value={String(filteredExpenseSum)}
              icon={<SavingsIcon sx={{ fontSize: 30, color: 'success.main' }} />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SummaryCard
              title="Available Balance"
              value={String(filteredIncomeSum - filteredExpenseSum)}
              icon={<AccountBalance sx={{ fontSize: 30, color: 'success.main' }} />}
            />
          </Grid>
        </Grid>

        <h3>Reports</h3>

        {/* Pie Charts */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            <Stack sx={{
              border: '2px solid #ccc',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h3>Expenses</h3>
              <PieChart type="expense" data={groupAndSumByCategory(filteredExpenseArray)} />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Stack sx={{
              border: '2px solid #ccc',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h3>Income</h3>
              <PieChart type="income" data={groupAndSumByCategory(filteredIncomeArray)} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
