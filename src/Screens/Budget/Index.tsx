import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";
import SummaryCard from "../../Components/SummaryCard";
import PieActiveArc from "../../Components/PieChart";
import AddBudgetDialog from "../../Components/AddBudget";
import { AccountBalance, Wallet } from "@mui/icons-material";
import AddButton from "../../Components/Common/AddButton";
import { useAppSelector } from "../../app/hooks";
import { selectBudget, selectBudgetStatus } from "../../features/budget/budgetSlice";
import { Budget } from "../../dbOperations/interfaces";
import { convertBudgetDataToList } from "../../utils/chartUtils";
import CommonBox from "../../Components/Common/CommonBox";
import CommonCircularProgress from "../../Components/Common/CommonCircularProgress";
import MiniDrawer from "../../Components/Common/CommonSideBar";
import { selectExpenseSum } from "../../features/transaction/transactionSlice";
import CommonTopBar from "../../Components/Common/CommonTopBar";

const BudgetPage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const budget = useAppSelector(selectBudget);
  const totalBudgetSpent = useAppSelector(selectExpenseSum);
  const budgetStatus = useAppSelector(selectBudgetStatus);
  const [budgetItems, setBudgetItems] = useState<Budget>(budget || {});
  const totalBudget = Object.values(budgetItems).reduce((value, currentCategory) => {
    return value + currentCategory.amountSet;
  }, 0);

  const budgetGraphData = convertBudgetDataToList(budgetItems);

  useEffect(() => {
    setBudgetItems(budget || {});
  }, [budget]);

  if (budgetStatus === "idle" || budgetStatus === "loading") {
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
      <Container sx={{ bgcolor: "white", borderRadius: '16px', padding: '12px', marginLeft:'72px' }}>
        <MiniDrawer />
        <CommonTopBar title="Overview"/>
        <h3>Summary</h3>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SummaryCard
              value={String(totalBudget)}
              title="Total Budget"
              icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SummaryCard
              value={String(totalBudgetSpent)}
              title="Budget Spent"
              icon={
                <Wallet
                  sx={{
                    fontSize: 30,
                    color: totalBudgetSpent < totalBudget ? "inherit" : "error.main",
                  }}
                />
              }
            />
          </Grid>
        </Grid>
        <h3>Reports</h3>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Stack sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px' }}>
              <PieActiveArc data={budgetGraphData} type={"expense"} />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Stack sx={{ border: '1px solid #ccc', borderRadius: '8px',}}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell align="right">Amount Set</TableCell>
                      <TableCell align="right">Amount Spent</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(budgetItems).map(([category, details]) => (
                      <TableRow key={category}>
                        <TableCell component="th" scope="row">
                          {category}
                        </TableCell>
                        <TableCell align="right">{details.amountSet}</TableCell>
                        <TableCell align="right">{details.amountSpent}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Grid>
        </Grid>
        <AddButton onClick={handleDialogOpen} />
        <AddBudgetDialog open={dialogOpen} onClose={handleDialogClose} />
      </Container>
    );
  }
};

export default BudgetPage;
