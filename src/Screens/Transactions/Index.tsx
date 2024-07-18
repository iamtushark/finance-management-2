import React from 'react';
import { Container } from '@mui/material';
import { CommonTableSection} from '../../Components/Common/CommonTableSection';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../../features/transaction/transactionSlice';
import MiniDrawer from '../../Components/Common/CommonSideBar';
import CommonTopBar from '../../Components/Common/CommonTopBar';

const TransactionPage:React.FC = () => {
  const trxns = useSelector(selectTransactions);

  return(
    <>
    <CommonTopBar title="Transactions"/>
    <Container sx={{
      p: 1,
    }}>

      <Container sx={{p:4} }>
        <CommonTableSection transactions={trxns} showType={true} showEditButton={false} type='Expense' />
      </Container>
    </Container>
    </>
  );
}

export default TransactionPage;
