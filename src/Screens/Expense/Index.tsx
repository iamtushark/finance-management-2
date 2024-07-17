import React from 'react';
import { Container } from '@mui/material';
import { CommonTableSection, AddButton } from '../../Components/Common/CommonTableSection';
import { Transaction, TransactionType } from '../../dbOperations/interfaces';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';
import CommonSummarySection from '../../Components/Common/CommonSummarySection';

const Expenses:React.FC = () => {
  const trxns = useSelector(selectTransactions);
  const expenses = trxns.filter((trxn: Transaction)=>(trxn.type==='Expense'));
  let sum = 0;
  expenses.forEach((income)=>{sum += income.amount});

  return(
    <Container sx={{
      p: 4,
    }}>
      <CommonSummarySection total={sum} type='Expense'/>
      <CommonTableSection transactions={expenses}/>
      <AddButton />
    </Container>
  );
}

export default Expenses;
