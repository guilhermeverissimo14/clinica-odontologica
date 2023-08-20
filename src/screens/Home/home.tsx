import{ useState, useEffect } from "react";

import './home.css';

import Header from '../../components/header/header';

import { TrashSimple, PencilSimple, Plus } from "phosphor-react";


export default function Home() {

    const [patients, setPatient] = useState<PatientRecord[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:3000/patient-record"); // Substitua pela URL da sua API
            const data = await response.json();
            setPatient(data);
            console.log("Dados da API:", data);
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    }

    return (
        <div className='home'>
            <Header />
            <main>
                <div className='card'>
                    <div className='add-patient'>
                        <input placeholder='Nome do paciente...' type="text" />
                        <button> <Plus />Adicionar Paciente</button>
                    </div>
                    {patients.map((patient) => (
                        <details>
                            <summary>
                                <span>{patient.name}<br /> {patient.date}</span>
                                <div className="accordion-icons">
                                    <div className="accordion-button-icons">
                                        <button className='btn-edit'>
                                            <PencilSimple size={30} />
                                        </button>
                                        <button className='btn-delete'>
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
        </div>


    )
}