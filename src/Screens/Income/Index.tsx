import React from 'react';
import { Container } from '@mui/material';
import CommonSummarySection from '../../Components/Common/CommonSummarySection';
import { CommonTableSection, AddButton } from '../../Components/Common/CommonTableSection';
import { Transaction, TransactionType } from '../../dbOperations/interfaces';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';

const Incomes:React.FC = () => {
  const trxns = useSelector(selectTransactions);
  const incomes = trxns.filter((trxn: Transaction)=>(trxn.type==='Income'));
  let sum = 0;
  incomes.forEach((income)=>{sum += income.amount});

  return(
    <Container sx={{
      p: 4,
    }}>
      <CommonSummarySection total={sum} type='Income'/>
      <CommonTableSection transactions={incomes}/>
      <AddButton />
    </Container>
  );
}

export default Incomes;
