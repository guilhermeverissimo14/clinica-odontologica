import { useState, useEffect } from "react";

import { TrashSimple, PencilSimple, Plus } from "phosphor-react";

import './home.css';
import Header from '../../components/header/header';
import api from "../../service/api";
import AddPatientDialog from "../../components/modal-add-patient/add-patient";
import DeletePatientDialog from "../../components/modal-delete-patient/delete-patient";
import EditPatientDialog from "../../components/modal-update-patient/update-patient";
import axios from "axios";


export default function Home() {

    const [searchTerm, setSearchTerm] = useState('');

    const [patients, setPatient] = useState<PatientRecord[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedPatientId, setSelectedPatientId] = useState<number | null>(null);

    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState<PatientRecord | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    //filtrar por nome
    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    //Listar todos os registros
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

    //Funções para editar paciente
    const handleEditDialogOpen = (patient: PatientRecord) => {
        setSelectedPatient(patient);
        setEditDialogOpen(true);
    };

    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
    };

    const handleEditPatient = async (editedPatient: PatientRecord) => {
        try {
          const response = await axios.put(`http://localhost:3000/patient-record/${editedPatient.id}`, editedPatient);
          
          // Atualizar a lista de pacientes com o paciente editado
          const updatedPatients = patients.map(patient => 
            patient.id === editedPatient.id ? response.data : patient
          );
          setPatient(updatedPatients);
      
          alert("Paciente atualizado com sucesso!");
        } catch (error) {
          console.error("Error editing patient:", error);
        }
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
                        <input
                            placeholder='Pesquisar nome...'
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="button-add-patient" onClick={handleDialogOpen}>
                            <Plus /> Cadastrar Paciente
                        </button>
                    </div>
                    {filteredPatients.map((patient) => (
                        <details key={patient.id}>
                            <summary>
                                <span>{patient.name}<br /> {patient.date}</span>
                                <div className="accordion-icons">
                                    <div className="accordion-button-icons">
                                        <button onClick={() => handleEditDialogOpen(patient)} className='btn-edit'>
                                            <PencilSimple size={30} />
                                        </button>
                                        <button onClick={() => handleDeleteDialogOpen(patient.id)} className='btn-delete'>
                                            <TrashSimple size={30} />
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
            <EditPatientDialog
                open={editDialogOpen}
                onClose={handleEditDialogClose}
                onSave={handleEditPatient}
                patient={selectedPatient}
            />
            <DeletePatientDialog
                open={deleteDialogOpen}
                onClose={handleDeleteDialogClose}
                onDelete={handleDeletePatient}
                patientId={selectedPatientId || 0}
            />

            <AddPatientDialog
                open={dialogOpen}
                onClose={handleDialogClose}
                onAdd={handleAddPatient} />

        </div>

    )
}