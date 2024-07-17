import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { Transaction } from '../dbOperations/interfaces';

interface EditTransactionDialogProps {
  open: boolean;
  onClose: () => void;
  transaction: Transaction;
  onSave: (updatedTransaction: Transaction) => void;
}

const EditTransactionDialog: React.FC<EditTransactionDialogProps> = ({ open, onClose, transaction, onSave }) => {
  const [amount, setAmount] = useState<number>(transaction.amount);
  const [category, setCategory] = useState<string>(transaction.category);
  const [date, setDate] = useState<string>(transaction.date.toISOString().substring(0, 10));

  const handleSave = () => {
    const updatedTransaction: Transaction = {
      ...transaction,
      amount,
      category,
      date: new Date(date),
    };
    onSave(updatedTransaction);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Transaction</DialogTitle>
      <DialogContent>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          margin="normal"
        />
        <TextField
          label="Category"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Date"
          type="date"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTransactionDialog;
