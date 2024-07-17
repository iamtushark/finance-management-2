import React, { useEffect, useState } from "react";
import { Container, Grid, Button } from "@mui/material";
import SummaryCard from "../../Components/SummaryCard";
import PieActiveArc from "../../Components/PieChart";
import AddBudgetDialog from "../../Components/AddBudget";
import { AccountBalance } from "@mui/icons-material";
import AddButton from "../../Components/Common/AddButton";
import { useAppSelector } from "../../app/hooks";
import { selectBudget, selectBudgetStatus } from "../../features/budget/budgetSlice";
import { Budget } from "../../dbOperations/interfaces";
import { convertBudgetDataToList } from "../../utils/chartUtils";
import CommonBox from "../../Components/Common/CommonBox";
import CommonCircularProgress from "../../Components/Common/CommonCircularProgress";

const BudgetPage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const budget = useAppSelector(selectBudget);
  const budgetStatus = useAppSelector(selectBudgetStatus)
  const [budgetItems, setBudgetItems] = useState<Budget>(budget);
  const totalBudget = Object.values(budgetItems).reduce(
    (value, currentCategory) => {
      return value + currentCategory.amountSet;
    },
    0,
  );

  const totalBudgetSpent = Object.values(budgetItems).reduce(
    (value, currentCategory) => {
      return value + currentCategory.amountSpent;
    },
    0,
  );

  const budgetGraphData = convertBudgetDataToList(budgetItems);

  const budgetSetData = useEffect(() => {
    setBudgetItems(budget);
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
  }

  else {
    return (
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <SummaryCard
              value={String(totalBudget)}
              title="Budget"
              icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}
            />
            <SummaryCard
              value={String(totalBudgetSpent)}
              title="Budget"
              icon={
                <AccountBalance
                  sx={{
                    fontSize: 30,
                    color:
                      totalBudgetSpent < totalBudget ? "inherit" : "error.main",
                  }}
                />
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PieActiveArc data={budgetGraphData} type={"expense"} />
          </Grid>
        </Grid>
        <AddButton onClick={handleDialogOpen} />
        <AddBudgetDialog open={dialogOpen} onClose={handleDialogClose} />
      </Container>
    );
  }
};

export default BudgetPage;
