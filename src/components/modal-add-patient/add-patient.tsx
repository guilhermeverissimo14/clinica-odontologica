import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';

import axios from 'axios';

const AddPatientDialog: React.FC<AddPatientDialogProps> = ({ open, onClose, onAdd }) => {
  const [patientData, setPatientData] = useState({
    name: '',
    phone: '',
    date: '',
    doctor: '',
    description: '',
    city: '',
    address: '',
    number: '',
  });

  const handleInputChange = (fieldName) => (e) => {
    const { value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleAdd = async () => {
    //Verificar se todos os campos estão preenchidos
    if (!patientData.name ||
      !patientData.phone ||
      !patientData.date ||
      !patientData.doctor ||
      !patientData.description ||
      !patientData.city ||
      !patientData.address ||
      !patientData.number
    ) {
      alert("Por favor, preencha todos os campos antes de cadastrar.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/patient-record', patientData);
      onAdd(response.data);
      alert("Paciente cadastrado com sucesso!")

      // Limpar os inputs 
      setPatientData({
        name: '',
        phone: '',
        date: '',
        doctor: '',
        description: '',
        city: '',
        address: '',
        number: '',
      });
      //fechar modal
      onClose();
    } catch (error) {
      console.error('Erro ao adicionar paciente:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Cadastrar Pacientes</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          name="name"
          value={patientData.name}
          onChange={handleInputChange('name')}
          fullWidth
        />

        <TextField
          label="Data"
          name="date"
          value={patientData.date}
          onChange={handleInputChange('date')}
          fullWidth
        />

        <TextField
          label="Telefone"
          name="phone"
          value={patientData.phone}
          onChange={handleInputChange('phone')}
          fullWidth
        />

        <TextField
          label="Cidade"
          name="city"
          value={patientData.city}
          onChange={handleInputChange('city')}
          fullWidth
        />

        <TextField
          label="Endereço"
          name="address"
          value={patientData.address}
          onChange={handleInputChange('address')}
          fullWidth
        />

        <TextField
          label="Numero"
          name="number"
          value={patientData.number}
          onChange={handleInputChange('number')}
          fullWidth
        />

        <TextField
          label="Nomde do dentista..."
          name="doctor"
          value={patientData.doctor}
          onChange={handleInputChange('doctor')}
          fullWidth
        />

        <TextField
          label="Descrição..."
          name="description"
          value={patientData.description}
          onChange={handleInputChange('description')}
          fullWidth
        />


      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleAdd} color="primary">
          Cadastrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPatientDialog;
