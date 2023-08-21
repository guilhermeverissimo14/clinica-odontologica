import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField
} from '@mui/material';
import InputMask from 'react-input-mask';

const EditPatientDialog: React.FC<EditPatientDialogProps> = ({ open, onClose, onSave, patient }) => {
    const [editedPatient, setEditedPatient] = useState<PatientRecord | null>(null);

    //useEffect para preencher os campos quando o diálogo for aberto
    useEffect(() => {
        setEditedPatient(patient);
    }, [patient]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editedPatient) {
            const { name, value } = e.target;
            setEditedPatient((prevPatient) => ({
                ...prevPatient,
                [name]: value,
            }));
        }
    };

    const handleSave = () => {
        if (editedPatient) {
            onSave(editedPatient);
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <div className='dialog'>
                <DialogTitle>Editar Paciente</DialogTitle>
                <DialogContent className='dialog-content'>
                    <TextField
                        className='input-dialog'
                        label="Name"
                        name="name"
                        value={editedPatient?.name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        className='input-dialog'
                        label="Data"
                        name="date"
                        value={editedPatient?.date}
                        onChange={handleInputChange}
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
                        value={editedPatient?.phone}
                        onChange={handleInputChange}
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
                        value={editedPatient?.city}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        className='input-dialog'
                        label="Endereço"
                        name="address"
                        value={editedPatient?.address}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        className='input-dialog'
                        label="Número"
                        name="number"
                        value={editedPatient?.number}
                        onChange={handleInputChange}
                        fullWidth
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                    />
                    <TextField
                        className='input-dialog'
                        label="Dentista"
                        name="doctor"
                        value={editedPatient?.doctor}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        className='input-dialog'
                        label="Descrição"
                        name="description"
                        value={editedPatient?.description}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <div className='btns-form'>
                        <button className='btn-cancel' onClick={onClose} color="primary">Cancelar</button>
                        <button className='btn-save' onClick={handleSave} color="primary">Salvar</button>
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    );
};

export default EditPatientDialog;
