import React from 'react';
import { Container } from '@mui/material';
import { CommonTableSection} from '../../Components/Common/CommonTableSection';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';
import MiniDrawer from '../../Components/Common/CommonSideBar';

const TransactionPage:React.FC = () => {
  const trxns = useSelector(selectTransactions);

  return(
    <Container sx={{
      p: 4,
    }}>
      <MiniDrawer />
      <CommonTableSection transactions={trxns} showType={true} showEditButton={false} type='Expense'/>
    </Container>
  );
}

export default TransactionPage;
