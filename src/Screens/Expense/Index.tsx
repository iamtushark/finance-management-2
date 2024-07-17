import React, { useState } from 'react';
import { Container } from '@mui/material';
import { CommonTableSection} from '../../Components/Common/CommonTableSection';
import AddButton from '../../Components/Common/AddButton';
import { Transaction, TransactionType } from '../../dbOperations/interfaces';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';
import CommonSummarySection from '../../Components/Common/CommonSummarySection';
import AddExpenseDialog from '../../Components/AddExpense';
import SummaryCard from '../../Components/SummaryCard';
import { AccountBalance } from '@mui/icons-material';
import MiniDrawer from '../../Components/Common/CommonSideBar';

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


  return(
    <Container sx={{
      p: 4,
    }}>
      <MiniDrawer />
      <SummaryCard value={String(sum)} title='Expense' icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}/>
      <CommonTableSection transactions={expenses}/>
      <AddButton onClick={handleDialogOpen} />
        <AddExpenseDialog open={dialogOpen} onClose={handleDialogClose} />
    </Container>
  );
}

export default Expenses;
