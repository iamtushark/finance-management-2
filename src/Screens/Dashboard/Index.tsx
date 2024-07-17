import React, { useState } from 'react';
import { Container, Grid, Stack, Button, Typography, Paper } from '@mui/material';
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
import MiniDrawer from '../../Components/Common/CommonSideBar';


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
      <MiniDrawer />
      {/* <Container sx={{ bgcolor: "white", border: '1px ', borderRadius: '16px', padding: '12px' }}> */}
          <div style={
            { backgroundColor: "#f1f1f1f1",
              marginBottom:'4rem',
              minWidth:'100%', 
              maxWidth:'100%', 
              overflow:'hidden', 
              maxHeight:'5rem'

            }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ minWidth:'100%', maxWidth:'100%'}}>

              <Grid item xs={10} sm={6} md={2}>
                <Typography variant="h1" align="left" sx={{ margin:'2.25rem', fontSize: '2.5rem', fontWeight: 'bold' }}>
                  Overview
                </Typography>   
              </Grid>   

              <Grid item xs={10} sm={6} md={2}>
              </Grid> 

              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <Grid item xs={10} sm={6} md={3}>
                  <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    sx={{ width: '100%', height: '5.3rem', fontSize: '0.52rem' }}
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={3}>
                  <DatePicker
                    label="End Date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    sx={{ width: '100%', height: '5.3rem', fontSize: '0.25rem'}}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid item xs={10} sm={6} md={2} display="flex" alignItems="center" >
                <Button 
                  variant="contained" 
                  onClick={handleSave}
                  sx={{
                    backgroundColor: 'primary.main',
                    height:50,
                    fontSize:'0.9rem', 
                    fontWeight:'600',
                    maxWidth:350,
                    borderRadius:'50px',
                    marginLeft:'1rem',
                    color: 'white',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                  }}>Save</Button>
              </Grid>

            </Grid>
          </div>

        <Grid container spacing={4} justifyContent="center">
        </Grid>

        <Grid container spacing={4} justifyContent="center" maxWidth={"100%"}>
          {/* Summary Cards */}
          <Grid item xs={10} sm={6} md={3}>
            <SummaryCard
              title="Total Income"
              value={String(filteredIncomeSum)}
              icon={<AttachMoneyIcon sx={{ fontSize: 30, color: 'primary.main' }} />}
            />
          </Grid>
          <Grid item xs={10} sm={6} md={3}>
            <SummaryCard
              title="Total Spent"
              value={String(filteredExpenseSum)}
              icon={<SavingsIcon sx={{ fontSize: 30, color: 'success.main' }} />}
            />
          </Grid>
          <Grid item xs={10} sm={6} md={3}>
            <SummaryCard
              title="Available Balance"
              value={String(filteredIncomeSum - filteredExpenseSum)}
              icon={<AccountBalance sx={{ fontSize: 30, color: 'success.main' }} />}
            />
          </Grid>
        </Grid>

        {/* Pie Charts */}
        <Grid container spacing={4} justifyContent="center" sx={{m:'4px', maxWidth: '100%'}}>
          <Grid item xs={10} sm={6} md={5}>
            <Stack sx={{
              width: '85%', 
              mx: 'auto', 
              my: 1, 
              p: 2, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              borderRadius: '8px', 
              backgroundColor: 'rgba(255, 255, 255, 0.3)', 
              backdropFilter: 'blur(10px)'
              // border: '2px solid #ccc',
              // borderRadius: '16px',
              // padding: '24px',
              // display: 'flex',
              // flexDirection: 'column',
              // alignItems: 'center'
            }}>
              <h3>Expenses</h3>
              <PieChart type="expense" data={groupAndSumByCategory(filteredExpenseArray)} />
            </Stack>
          </Grid>
          <Grid item xs={10} sm={6} md={5}>
            <Stack sx={{
              width: '85%', 
              mx: 'auto', 
              my: 1, 
              p: 2, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              borderRadius: '8px', 
              backgroundColor: 'rgba(255, 255, 255, 0.3)', 
              backdropFilter: 'blur(10px)'
            }}>
              <h3>Income</h3>
              <PieChart type="income" data={groupAndSumByCategory(filteredIncomeArray)} />
            </Stack>
          </Grid>
        </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Dashboard;
