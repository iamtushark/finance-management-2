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
import CommonTopBar from '../../Components/Common/CommonTopBar';
import CommonCard from '../../Components/Common/CommonCard';

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
      <CommonTopBar title="Income"/>
      <MiniDrawer />
      <Divider sx={{ position: 'absolute', left: 0, right: 0, top: 64, border: '1px inset black', backgroundColor: '#ffffff' }} />
       
      <SummaryCard value={String(sum)} title='Income' icon={<AccountBalance sx={{ fontSize: 30, color: "inherit" }} />}/>
      <CommonTableSection transactions={incomes} type={"Income"}/>
      <CommonCard>
        <SingleLineChart data={amounts} label='Income' dates={dates}/>
      </CommonCard>
      <CommonTableSection transactions={incomes} type = {"Income"}/>
      <AddButton onClick={handleDialogOpen} />
        <AddIncomeDialog open={dialogOpen} onClose={handleDialogClose} />
    </Container>
  );
}

export default Incomes;
