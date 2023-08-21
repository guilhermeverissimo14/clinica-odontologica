import React from 'react';
import {
  Dialog,
  DialogTitle,
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
      <div className='dialog'>
        <DialogTitle>Tem certeza que deseja <br /> deletar esse paciente?</DialogTitle>
        <div className='btns-form'>
          <button className='btn-cancel' onClick={onClose} color="primary">
            Cancelar
          </button>
          <button className='btn-save' onClick={handleDelete} color="primary">
            Deletar
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default DeletePatientDialog;

