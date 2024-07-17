import React, { useState } from 'react';
import { Container } from '@mui/material';
import CommonSummarySection from '../../Components/Common/CommonSummarySection';
import { CommonTableSection } from '../../Components/Common/CommonTableSection';
import { Transaction, TransactionType } from '../../dbOperations/interfaces';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';
import { AccountBalance } from '@mui/icons-material';
import SummaryCard from '../../Components/SummaryCard';
import AddButton from '../../Components/Common/AddButton';
import AddIncomeDialog from '../../Components/AddIncome';
import MiniDrawer from '../../Components/Common/CommonSideBar';

const Incomes:React.FC = () => {
  const trxns = useSelector(selectTransactions);
  const incomes = trxns.filter((trxn: Transaction)=>(trxn.type==='Income'));
  let sum = 0;
  incomes.forEach((income)=>{sum += income.amount});
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
      <SummaryCard value={String(sum)} title='Income' icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}/>
      <CommonTableSection transactions={incomes}/>
      <AddButton onClick={handleDialogOpen} />
        <AddIncomeDialog open={dialogOpen} onClose={handleDialogClose} />
    </Container>
  );
}

export default Incomes;
