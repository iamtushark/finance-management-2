import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  Typography,
  useTheme
} from "@mui/material";
import PieChart from "../../Components/PieChart";
import SummaryCard from "../../Components/SummaryCard";
import SavingsIcon from "@mui/icons-material/Savings";
import { AccountBalance } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useAppSelector } from "../../app/hooks";
import {
  selectExpenseSum,
  selectExpenseTransactions,
  selectIncomeSum,
  selectIncomeTransactions,
  selectStatus,
} from "../../features/transaction/transactionSlice";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import {
  getDateFilteredExpenseSum,
  getDateFilteredExpenseTransactions,
  getDateFilteredIncomeSum,
  getDateFilteredIncomeTransactions,
} from "../../features/transaction/utils";
import { toast } from "react-toastify";
import {
  groupAndSumByCategory,
  processTransactionsForDualLineChart,
} from "../../utils/chartUtils";
import CommonCircularProgress from "../../Components/Common/CommonCircularProgress";
import CommonBox from "../../Components/Common/CommonBox";
import CommonTopBar from "../../Components/Common/CommonTopBar";
import CommonHeadingTypography from "../../Components/Common/CommonHeadingTypography";
import DualLineChart from "../../Components/DualLineChart";
import DualBarChart from "../../Components/DualBarChart";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const incomeArray = useAppSelector(selectIncomeTransactions);
  const expenseArray = useAppSelector(selectExpenseTransactions);
  const expenseSum = useAppSelector(selectExpenseSum);
  const incomeSum = useAppSelector(selectIncomeSum);

  const transactionStatus = useAppSelector(selectStatus);
  const [filteredIncomeArray, setFilteredIncomeArray] = useState(incomeArray);
  const [filteredExpenseArray, setFilteredExpenseArray] = useState(expenseArray);
  const [filteredExpenseSum, setFilteredExpenseSum] = useState(expenseSum);
  const [filteredIncomeSum, setFilteredIncomeSum] = useState(incomeSum);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleStartDateChange = (date: Dayjs | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Dayjs | null) => {
    setEndDate(date);
  };

  useEffect(() => {
    if (startDate && endDate) {
      setFilteredExpenseArray(
        getDateFilteredExpenseTransactions(
          expenseArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      setFilteredIncomeArray(
        getDateFilteredIncomeTransactions(
          incomeArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      setFilteredExpenseSum(
        getDateFilteredExpenseSum(
          expenseArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      setFilteredIncomeSum(
        getDateFilteredIncomeSum(
          incomeArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      if (filteredExpenseArray.length === 0) {
        toast.info("Add Expense/Income for graphical insights");
      }
    } else {
      setFilteredExpenseArray(expenseArray);
      setFilteredIncomeArray(incomeArray);
      setFilteredExpenseSum(expenseSum);
      setFilteredIncomeSum(incomeSum);
    }
  }, [startDate, endDate, expenseArray, incomeArray, expenseSum, incomeSum]);

  const handleSave = () => {
    if (startDate && endDate) {
      setFilteredExpenseArray(
        getDateFilteredExpenseTransactions(
          expenseArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      setFilteredIncomeArray(
        getDateFilteredIncomeTransactions(
          incomeArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      setFilteredExpenseSum(
        getDateFilteredExpenseSum(
          expenseArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      setFilteredIncomeSum(
        getDateFilteredIncomeSum(
          incomeArray,
          startDate.toISOString(),
          endDate.toISOString(),
        ),
      );
      if (filteredExpenseArray.length === 0) {
        toast.info("Add Expense/Income for graphical insights");
      }
    } else {
      toast.warn("Set Appropriate Start and End dates");
    }
  };

  const { incomeAmounts, expenseAmounts, dates } =
    processTransactionsForDualLineChart(
      filteredIncomeArray,
      filteredExpenseArray,
    );

  if (
    transactionStatus === "idle" ||
    transactionStatus === "loading"
  ) {
    return (
      <CommonBox
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CommonCircularProgress size={80} sx={{ color: "black" }} />
      </CommonBox>
    );
  } else {
    return (
      <>
        <CommonTopBar title="Overview" />
        <CommonBox sx={{ flexDirection: 'column', padding: '2.4vw' }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid item xs={12} sm={6} md={4}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={handleStartDateChange}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={handleEndDateChange}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} >
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{
                    backgroundColor: "primary.main",
                    height: 50,
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    borderRadius: "50px",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Search
                </Button>
              </Grid>
            </LocalizationProvider>
          </Grid>

          <Typography variant="h5" sx={{ marginY: "4vh" }}>Summary</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <SummaryCard
                title="Total Income"
                value={String(filteredIncomeSum)}
                icon={<AttachMoneyIcon sx={{ fontSize: 30, color: "primary.main" }} />}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <SummaryCard
                title="Total Spent"
                value={String(filteredExpenseSum)}
                icon={<SavingsIcon sx={{ fontSize: 30, color: "success.main" }} />}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <SummaryCard
                title="Available Balance"
                value={String(filteredIncomeSum - filteredExpenseSum)}
                icon={<AccountBalance sx={{ fontSize: 30, color: "success.main" }} />}
              />
            </Grid>
          </Grid>

          <Typography variant="h5" sx={{ marginY: "4vh" }}>Reports</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ height: '100%' }}>
                <Typography variant="h6">Expenses</Typography>
                <PieChart type="expense" data={groupAndSumByCategory(filteredExpenseArray)} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ height: '100%' }}>
                <Typography variant="h6">Income</Typography>
                <PieChart type="income" data={groupAndSumByCategory(filteredIncomeArray)} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ height: '100%' }}>
                <Typography variant="h6">Income and Expense</Typography>
                <DualLineChart dates={dates} IncomeArray={incomeAmounts} ExpenseArray={expenseAmounts} />
              </Box>
            </Grid>
          </Grid>
        </CommonBox>
      </>
    );
  }
};

export default Dashboard;
