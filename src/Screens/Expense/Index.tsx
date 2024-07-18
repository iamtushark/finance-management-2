import React, { useState } from 'react';
import { Box, Container, Divider, Grid } from '@mui/material';
import { CommonTableSection} from '../../Components/Common/CommonTableSection';
import AddButton from '../../Components/Common/AddButton';
import { Transaction } from '../../dbOperations/interfaces';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';
import AddExpenseDialog from '../../Components/AddExpense';
import SummaryCard from '../../Components/SummaryCard';
import { AccountBalance } from '@mui/icons-material';
import MiniDrawer from '../../Components/Common/CommonSideBar';
import SingleLineChart from '../../Components/SingleLineChart';
import { processTransactionsForSingleLineChart } from '../../utils/chartUtils';
import DualLineChart from '../../Components/DualLineChart';
import CommonTopBar from '../../Components/Common/CommonTopBar';
import CommonCard from '../../Components/Common/CommonCard';

const Expenses:React.FC = () => {
  const trxns = useSelector(selectTransactions);
  const expenses = trxns.filter((trxn: Transaction)=>(trxn.type==='Expense'));
  let sum = 0;
  expenses.forEach((income)=>{sum += income.amount});
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const {amounts, dates} = processTransactionsForSingleLineChart(expenses)

  return(
    <>
    <CommonTopBar title="Expense"/>
    <Container sx={{
      p: 1,
      alignItems: 'left'
      // al
    }}>
      <Box component="h3" sx={{ mx: 0}}>
        Summary
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',

      }}>
        <SummaryCard value={String(sum)} title='Expense' icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}/>
      </Box>
      <Box component="h3" sx={{ mx: 0, marginTop:2}}>
        Reports
      </Box>
      <CommonCard>
        <SingleLineChart data={amounts} label='Expense' dates={dates}/>
      </CommonCard>
      <CommonTableSection transactions={expenses} type='Expense'/>
      <AddButton onClick={handleDialogOpen} />
        <AddExpenseDialog open={dialogOpen} onClose={handleDialogClose} />
    </Container>
    </>
  );
}

export default Expenses;
