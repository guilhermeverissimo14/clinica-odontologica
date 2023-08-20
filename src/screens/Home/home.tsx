import { useState, useEffect } from "react";

import { TrashSimple, PencilSimple, Plus } from "phosphor-react";

import './home.css';
import Header from '../../components/header/header';
import api from "../../service/api";
import AddPatientDialog from "../../components/modal-add-patient/add-patient";
import DeletePatientDialog from "../../components/modal-delete-patient/delete-patient";


export default function Home() {

    const [patients, setPatient] = useState<PatientRecord[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await api.get("patient-record");
            const data = await response.data;
            setPatient(data);
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    //Funções para cadstrar Pacientes
    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleAddPatient = (newPatient: PatientRecord) => {
        setPatient((prevPatients) => [...prevPatients, newPatient]);
    };

    //Funçoes para deletar pacientes
    const handleDeleteDialogOpen = (patientId: number) => {
        setSelectedPatientId(patientId);
        setDeleteDialogOpen(true);
      };
    
      const handleDeleteDialogClose = () => {
        setSelectedPatientId(null);
        setDeleteDialogOpen(false);
      };
    
      const handleDeletePatient = (deletedPatientId: number) => {
        setPatient((prevPatients) => prevPatients.filter((patient) => patient.id !== deletedPatientId));
      };

    return (
        <div className='home'>
            <Header />
            <main>
                <div className='card'>
                    <div className='add-patient'>
                        <input placeholder='Nome do paciente...' type="text" />
                        <button className="button-add-patient" onClick={handleDialogOpen}>
                           <Plus/> Cadastrar Paciente
                        </button>
                        <AddPatientDialog open={dialogOpen} onClose={handleDialogClose} onAdd={handleAddPatient} />
                    </div>
                    {patients.map((patient) => (
                        <details key={patient.id}>
                            <summary>
                                <span>{patient.name}<br /> {patient.date}</span>
                                <div className="accordion-icons">
                                    <div className="accordion-button-icons">
                                        <button className='btn-edit'>
                                            <PencilSimple size={30} />
                                        </button>
                                        <button onClick={() => handleDeleteDialogOpen(patient.id)} className='btn-delete'>
                                            <TrashSimple size={30} />
                                            <DeletePatientDialog
                                            open={deleteDialogOpen}
                                            onClose={handleDeleteDialogClose}
                                            onDelete={handleDeletePatient}
                                            patientId={selectedPatientId || 0}
                                        />
                                        </button>
                                    </div>
                                </div>
                            </summary>
                            <div className="accordion-content">
                                <span>Telefone:{patient.phone}</span> <br />
                                <span>Cidade: {patient.city}</span>  <br />
                                <span>Endereço:{patient.address}</span>  <br />
                                <span>Numero: {patient.number}</span>  <br />
                                <span>Dentista: {patient.doctor}</span>   <br />
                                <span>Descrição:{patient.description}</span>  <br />
                            </div>
                        </details>
                    ))}
                </div>

            </main>

        </div>

    )
}