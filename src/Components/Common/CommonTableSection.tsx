import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Add as AddIcon, Edit as EditIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { editTransaction, selectTransactions } from '../../features/transaction/transactionSlice';
import { Transaction } from '../../dbOperations/interfaces';
import EditTransactionDialog from '../EditTransaction';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectLoggedInUser } from '../../features/user/userSlice';
import { toast } from 'react-toastify';

interface CommonTableSectionProps {
  transactions: Transaction[];
}

const CommonTableSection: React.FC<CommonTableSectionProps> = ({ transactions }) => {
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectLoggedInUser)

  const handleEditClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTransaction(null);
  };

  const handleSave = (updatedTransaction: Transaction) => {
    if(user){
    dispatch(editTransaction({userId : user, updatedTransaction: updatedTransaction, transactionId : updatedTransaction.id}))}
    else{
      toast.error("Log In before editing transaction")
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((trxn) => (
                <TableRow key={trxn.id}>
                  <TableCell>{trxn.category}</TableCell>
                  <TableCell>{trxn.amount}</TableCell>
                  <TableCell>{new Date(trxn.date).toDateString()}</TableCell>
                  <TableCell sx={{width: 10, maxHeight: 20}}>
                    <IconButton onClick={() => handleEditClick(trxn)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">No data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedTransaction && <EditTransactionDialog
        open={open}
        transaction={selectedTransaction}
        onClose={handleClose}
        onSave={handleSave}
      /> }
    </>
  );
};

const AddButton = () => (
  <IconButton color="primary" style={{ position: 'fixed', bottom: 16, right: 16 }}>
    <AddIcon fontSize="large" />
  </IconButton>
);

export { CommonTableSection, AddButton };
