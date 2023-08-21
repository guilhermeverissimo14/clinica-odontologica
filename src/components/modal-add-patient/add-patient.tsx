import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import InputMask from 'react-input-mask';

import './add-patient.css'

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
      <div className='dialog'>
        <DialogTitle className='dialog-title'>Cadastrar Paciente</DialogTitle>
        <DialogContent className='dialog-content'>
          <TextField
            className='input-dialog'
            label="Name"
            name="name"
            value={patientData.name}
            onChange={handleInputChange('name')}
            fullWidth
          />

          <TextField
            className='input-dialog'
            label="Data"
            name="date"
            value={patientData.date}
            onChange={handleInputChange('date')}
            fullWidth
            InputProps={{
              inputComponent: InputMask as any,
              inputProps: {
                mask: '99/99/9999',
              },
            }}
          />
          <TextField
            className='input-dialog'
            label="Telefone"
            name="phone"
            value={patientData.phone}
            onChange={handleInputChange('phone')}
            fullWidth
            InputProps={{
              inputComponent: InputMask as any,
              inputProps: {
                mask: '(99) 99999-9999',
              },
            }}
          />
          <TextField
            className='input-dialog'
            label="Cidade"
            name="city"
            value={patientData.city}
            onChange={handleInputChange('city')}
            fullWidth
          />

          <TextField
            className='input-dialog'
            label="Endereço"
            name="address"
            value={patientData.address}
            onChange={handleInputChange('address')}
            fullWidth
          />

          <TextField
            className='input-dialog'
            label="Numero"
            name="number"
            value={patientData.number}
            onChange={handleInputChange('number')}
            fullWidth
          />

          <TextField
            className='input-dialog'
            label="Nomde do dentista..."
            name="doctor"
            value={patientData.doctor}
            onChange={handleInputChange('doctor')}
            fullWidth
          />

          <TextField
            className='input-dialog'
            label="Descrição..."
            name="description"
            value={patientData.description}
            onChange={handleInputChange('description')}
            fullWidth
          />
        </DialogContent>
        <div className='btns-form'>
          <button className='btn-cancel' onClick={onClose} color="primary">
            Cancelar
          </button>
          <button className='btn-save' onClick={handleAdd} color="primary">
            Cadastrar
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddPatientDialog;
