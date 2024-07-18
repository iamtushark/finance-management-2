import React, { useState } from 'react';
import { Container } from '@mui/material';
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
    <Container sx={{
      p: 4,
    }}>
      <MiniDrawer />
      <SummaryCard value={String(sum)} title='Expense' icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}/>
      <SingleLineChart data={amounts} label='Expense' dates={dates}/>
      <CommonTableSection transactions={expenses} type='Expense'/>
      <AddButton onClick={handleDialogOpen} />
        <AddExpenseDialog open={dialogOpen} onClose={handleDialogClose} />
    </Container>
  );
}

export default Expenses;
