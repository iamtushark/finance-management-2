import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Stack,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import PieChart from "../../Components/PieChart";
import SummaryCard from "../../Components/SummaryCard";
import SavingsIcon from "@mui/icons-material/Savings";
import { AccountBalance } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectExpenseSum,
  selectExpenseTransactions,
  selectIncomeSum,
  selectIncomeTransactions,
  selectStatus,
  selectTransactions,
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
import MiniDrawer from "../../Components/Common/CommonSideBar";
import DualLineChart from "../../Components/DualLineChart";
import { selectBudgetStatus } from "../../features/budget/budgetSlice";
import CommonCircularProgress from "../../Components/Common/CommonCircularProgress";
import CommonBox from "../../Components/Common/CommonBox";
import CommonCard from "../../Components/Common/CommonCard";
import CommonTopBar from "../../Components/Common/CommonTopBar";
import { padding } from "@mui/system";
import CommonHeadingTypography from "../../Components/Common/CommonHeadingTypography";
import CommonTypography from "../../Components/Common/CommonTypography";

const Dashboard: React.FC = () => {
  const incomeArray = useAppSelector(selectIncomeTransactions);
  const expenseArray = useAppSelector(selectExpenseTransactions);
  const expenseSum = useAppSelector(selectExpenseSum);
  const incomeSum = useAppSelector(selectIncomeSum);

  const transactionStatus = useAppSelector(selectStatus);
  const budgetStatus = useAppSelector(selectBudgetStatus);
  const userStatus = useAppSelector(selectStatus);
  const [filteredIncomeArray, setFilteredIncomeArray] = useState(incomeArray);
  const [filteredExpenseArray, setFilteredExpenseArray] =
    useState(expenseArray);
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
  }, [incomeSum, expenseSum]);

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
  console.log(budgetStatus, transactionStatus, userStatus);
  if (
    budgetStatus === "idle" ||
    budgetStatus === "loading" ||
    transactionStatus === "idle" ||
    transactionStatus === "loading" ||
    userStatus === "idle" ||
    userStatus === "loading"
  ) {
    console.log("hit");
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
      <div>
        {/* style={{overflow: 'hidden', maxWidth:'100%', maxHeight:'100%'}} */}
        <CommonTopBar title="Overview" />

        {/* <Container sx={{ bgcolor: "white", border: '1px ', borderRadius: '16px', padding: '12px' }}> */}
        <div
          style={{
            padding: 1,
            marginLeft: "0px",
            paddingLeft: "0px",
            backgroundColor: "#f9f9f9",
            width: "100%",
            // justifySelf: 'center',
          }}
        >
          <div
            style={{
              maxWidth: "95%",
              marginTop: "16px",
              marginLeft: "72px",
              // backgroundColor: "#f1f1f1f1",
              // marginBottom: '1.6rem',
              // padding: "0rem 1.6rem",
              // paddingBottom: "2rem",
              // marginBottom: "2rem",
              // minWidth: "100%",
              // maxWidth: "100%",
              // overflow: "hidden",
              // maxHeight: "5rem",
            }}
          >
            <Grid
              container
              spacing={2}
              // justifyContent="center"
              // alignItems="center"
              sx={{ minWidth: "100%", maxWidth: "100%" }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid item xs={10} sm={6} md={3}>
                  <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={10} sm={6} md={3}>
                  <DatePicker
                    label="End Date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid
                item
                xs={10}
                sm={6}
                md={2}
                // display="flex"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{
                    backgroundColor: "primary.main",
                    height: 50,
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    maxWidth: 350,
                    borderRadius: "50px",
                    marginLeft: "1rem",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>

            {/* <CommonTypography sx={{marginTop: '16px'}}>Summary</CommonTypography> */}
            <h3 style={{ marginBottom: "0px", marginTop: "16px" }}>Summary</h3>
            <Grid
              container
              maxWidth={"100%"}
              sx={{ margin: "0px", padding: "0px" }}
            >
              {/* Summary Cards */}
              <SummaryCard
                title="Total Income"
                value={String(filteredIncomeSum)}
                icon={
                  <AttachMoneyIcon
                    sx={{ fontSize: 30, color: "primary.main" }}
                  />
                }
              />
              <SummaryCard
                title="Total Spent"
                value={String(filteredExpenseSum)}
                icon={
                  <SavingsIcon sx={{ fontSize: 30, color: "success.main" }} />
                }
              />
              <SummaryCard
                title="Available Balance"
                value={String(filteredIncomeSum - filteredExpenseSum)}
                icon={
                  <AccountBalance
                    sx={{ fontSize: 30, color: "success.main" }}
                  />
                }
              />
            </Grid>

            {/* <CommonTypography sx={{marginTop: '16px'}}>Reports</CommonTypography> */}
            <h3 style={{ marginTop: "16px" }}>Reports</h3>
            {/* Pie Charts */}
            <Grid
              container
              // spacing={2}
              // justifyContent="center"
              sx={{ m: "0px", p: "0px", marginTop: "2px", maxWidth: "95%" }}
            >
              <Grid item xs={12} sm={12} md={3} sx={{ m: "0px", p: "0px" }}>
                <CommonCard sx={{ mx: "4px" }}>
                  <h3>Expenses</h3>
                  <PieChart
                    type="expense"
                    data={groupAndSumByCategory(filteredExpenseArray)}
                  />
                </CommonCard>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <CommonCard sx={{ mx: "4px" }}>
                  <h3>Income</h3>
                  <PieChart
                    type="income"
                    data={groupAndSumByCategory(filteredIncomeArray)}
                  />
                </CommonCard>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <CommonCard sx={{ maxHeight: "63%", marginX: "4px" }}>
                  <h3>Income and Expense</h3>
                  <DualLineChart
                    dates={dates}
                    IncomeArray={incomeAmounts}
                    ExpenseArray={expenseAmounts}
                  />
                </CommonCard>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
