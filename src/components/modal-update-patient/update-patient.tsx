import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';


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
            <DialogTitle>Edit Patient</DialogTitle>
            <DialogContent>
                <TextField
                    label="Name"
                    name="name"
                    value={editedPatient?.name}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Data"
                    name="date"
                    value={editedPatient?.date}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Telefone"
                    name="phone"
                    value={editedPatient?.phone}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Cidade"
                    name="city"
                    value={editedPatient?.city}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Endereço"
                    name="address"
                    value={editedPatient?.address}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Número"
                    name="number"
                    value={editedPatient?.number}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Dentista"
                    name="doctor"
                    value={editedPatient?.doctor}
                    onChange={handleInputChange}
                    fullWidth
                /><TextField
                    label="Descrição"
                    name="description"
                    value={editedPatient?.description}
                    onChange={handleInputChange}
                    fullWidth
                />

                <Button onClick={onClose} color="primary">Cancelar</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogContent>
        </Dialog>
    );
};

export default EditPatientDialog;
