import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from '@mui/material';
import axios from 'axios';


const DeletePatientDialog: React.FC<DeletePatientDialogProps> = ({
  open,
  onClose,
  onDelete,
  patientId,
}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/patient-record/${patientId}`);
      onDelete(patientId);
      alert("Paciente excluído com sucesso!");
      onClose();
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Tem certeza que deseja <br/> deletar esse paciente?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDelete} color="primary">
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletePatientDialog;

