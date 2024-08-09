import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
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
  processCategoryDataForDualBarChart,
  processTransactionsForDualLineChart,
} from "../../utils/chartUtils";
import CommonCircularProgress from "../../Components/Common/CommonCircularProgress";
import CommonBox from "../../Components/Common/CommonBox";
import CommonTopBar from "../../Components/Common/CommonTopBar";
import CommonHeadingTypography from "../../Components/Common/CommonHeadingTypography";
import DualLineChart from "../../Components/DualLineChart";
import DualBarChart from "../../Components/DualBarChart";
import { selectBudget } from "../../features/budget/budgetSlice";

const Dashboard: React.FC = () => {
  const incomeArray = useAppSelector(selectIncomeTransactions);
  const expenseArray = useAppSelector(selectExpenseTransactions);
  const expenseSum = useAppSelector(selectExpenseSum);
  const incomeSum = useAppSelector(selectIncomeSum);
  const budget = useAppSelector(selectBudget)

  const transactionStatus = useAppSelector(selectStatus);
  const [filteredIncomeArray, setFilteredIncomeArray] = useState(incomeArray);
  const [filteredExpenseArray, setFilteredExpenseArray] = useState(expenseArray);
  const [filteredExpenseSum, setFilteredExpenseSum] = useState(expenseSum);
  const [filteredIncomeSum, setFilteredIncomeSum] = useState(incomeSum);

  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
  const handleDateRangeChange = (newRange: [Dayjs | null, Dayjs | null]) => {
    setDateRange(newRange);
  };

  useEffect(() => {
    const [startDate, endDate] = dateRange;
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
  }, [incomeSum, expenseSum, dateRange]);

  const { incomeAmounts, expenseAmounts, dates } =
    processTransactionsForDualLineChart(
      filteredIncomeArray,
      filteredExpenseArray,
    );

  const { categories, budgetedAmounts, spentAmounts } = processCategoryDataForDualBarChart(filteredExpenseArray, budget);

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
        <CommonBox sx={{ flexDirection: 'column', padding: '2.4vw', color: "black", backgroundColor: "#f9f9f9", }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">

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
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{marginBottom: 4}}>Expenses</Typography>
                <PieChart type="expense" data={groupAndSumByCategory(filteredExpenseArray)} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{marginBottom: 4}}>Income</Typography>
                <PieChart type="income" data={groupAndSumByCategory(filteredIncomeArray)} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ height: '100%' }}>
                <Typography variant="h6" sx={{marginBottom: 4}}>Budget and Expense</Typography>
                <DualBarChart categories={categories} BudgetArray={budgetedAmounts} ExpenseArray={spentAmounts} />
              </Box>
            </Grid>
          </Grid>
        </CommonBox>
      </>
    );
  }
};

export default Dashboard;
