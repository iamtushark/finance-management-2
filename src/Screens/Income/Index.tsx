import React, { useState } from 'react';
import { Box, Container, Divider } from '@mui/material';
import { CommonTableSection } from '../../Components/Common/CommonTableSection';
import { Transaction, TransactionType } from '../../dbOperations/interfaces';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';
import { AccountBalance } from '@mui/icons-material';
import SummaryCard from '../../Components/SummaryCard';
import AddButton from '../../Components/Common/AddButton';
import AddIncomeDialog from '../../Components/AddIncome';
import MiniDrawer from '../../Components/Common/CommonSideBar';
import SingleLineChart from '../../Components/SingleLineChart';
import { processTransactionsForSingleLineChart } from '../../utils/chartUtils';

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

  const {amounts, dates} = processTransactionsForSingleLineChart(incomes)

  return(
    <Container sx={{
      p: 1,
    }}>
      <MiniDrawer />
      <Box component="h1" sx={{ marginLeft: 6, marginTop: 2 }}>
        Income
      </Box>
      <Divider sx={{ position: 'absolute', left: 0, right: 0, top: 64, border: '1px inset black', backgroundColor: '#ffffff' }} />
      <Box component="h3" sx={{ marginLeft: 6 }}>
        Summary
      </Box>      
      <SummaryCard value={String(sum)} title='Income' icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}/>
      <CommonTableSection transactions={incomes} type={"Income"}/>
      <SingleLineChart data={amounts} label='Income' dates={dates}/>
      <CommonTableSection transactions={incomes} type = {"Income"}/>
      <AddButton onClick={handleDialogOpen} />
        <AddIncomeDialog open={dialogOpen} onClose={handleDialogClose} />
    </Container>
  );
}

export default Incomes;
