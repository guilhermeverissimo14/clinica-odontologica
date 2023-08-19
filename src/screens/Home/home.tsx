import './home.css';
import Header from '../../components/header/header';
import { TrashSimple, PencilSimple, Plus } from "phosphor-react";

export default function Home() {

    return (
        <div className='home'>
            <Header />
            <main>
                <div className='card'>
                    <div className='add-patient'>
                        <input placeholder='Nome do paciente...' type="text" />
                        <button> <Plus/>Adicionar Paciente</button>
                    </div>
                    <details>
                        <summary>
                            <span>José Guilherme Verissímo andrade <br /> 12/03/2021</span>
                            <div className="accordion-icons">
                                <div className="accordion-button-icons">
                                    <button className='btn-edit'>
                                        <PencilSimple  size={30} />
                                    </button>
                                    <button className='btn-delete'>
                                        <TrashSimple size={30} />
                                    </button>
                                </div>
                            </div>
                        </summary>
                        <div className="accordion-content">
                            <span>Telefone: (33)998527687</span> <br/>
                            <span>Cidade: São João Evangelista</span>  <br/>
                            <span>Endereço: Rua Coronel Antonio Borges do Amaral</span>  <br/>
                            <span>Numero: 593</span>  <br/>
                            <span>Dentista: Guilherme</span>   <br/>
                            <span>Descrição: Dor de dente na parte inferior da boca e na parte superior da boca.</span>  <br/>
                        </div>
                    </details>
                    <details>
                        <summary>
                            <span>José Guilherme Verissímo andrade <br /> 12/03/2021</span>
                            <div className="accordion-icons">
                                <div className="accordion-button-icons">
                                    <button className='btn-edit'>
                                        <PencilSimple  size={30} />
                                    </button>
                                    <button className='btn-delete'>
                                        <TrashSimple size={30} />
                                    </button>
                                </div>
                            </div>
                        </summary>
                        <div className="accordion-content">
                            <span>Telefone: (33)998527687</span> <br/>
                            <span>Cidade: São João Evangelista</span>  <br/>
                            <span>Endereço: Rua Coronel Antonio Borges do Amaral</span>  <br/>
                            <span>Numero: 593</span>  <br/>
                            <span>Dentista: Guilherme</span>   <br/>
                            <span>Descrição: Dor de dente na parte inferior da boca e na parte superior da boca.</span>  <br/>
                        </div>
                    </details>

                    <details>
                        <summary>
                            <span>José Guilherme Verissímo andrade <br /> 12/03/2021</span>
                            <div className="accordion-icons">
                                <div className="accordion-button-icons">
                                    <button className='btn-edit'>
                                        <PencilSimple  size={30} />
                                    </button>
                                    <button className='btn-delete'>
                                        <TrashSimple size={30} />
                                    </button>
                                </div>
                            </div>
                        </summary>
                        <div className="accordion-content">
                            <span>Telefone: (33)998527687</span> <br/>
                            <span>Cidade: São João Evangelista</span>  <br/>
                            <span>Endereço: Rua Coronel Antonio Borges do Amaral</span>  <br/>
                            <span>Numero: 593</span>  <br/>
                            <span>Dentista: Guilherme</span>   <br/>
                            <span>Descrição: Dor de dente na parte inferior da boca e na parte superior da boca.</span>  <br/>
                        </div>
                    </details>

                    <details>
                        <summary>
                            <span>José Guilherme Verissímo andrade <br /> 12/03/2021</span>
                            <div className="accordion-icons">
                                <div className="accordion-button-icons">
                                    <button className='btn-edit'>
                                        <PencilSimple size={30} />
                                    </button>
                                    <button className='btn-delete'>
                                        <TrashSimple  size={30} />
                                    </button>
                                </div>
                            </div>
                        </summary>
                        <div className="accordion-content">
                            <span>Telefone: (33)998527687</span> <br/>
                            <span>Cidade: São João Evangelista</span>  <br/>
                            <span>Endereço: Rua Coronel Antonio Borges do Amaral</span>  <br/>
                            <span>Numero: 593</span>  <br/>
                            <span>Dentista: Guilherme</span>   <br/>
                            <span>Descrição: Dor de dente na parte inferior da boca e na parte superior da boca.</span>  <br/>
                        </div>
                    </details>
                </div>
            </main>
        </div>


    )
}