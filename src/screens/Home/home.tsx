import  Logo  from '../../assets/images/logo.png'
import './home.css';

export default function Home(){
    
    return(
        <div>  
            <div style={{backgroundColor:'#cd9200', float:'left', width:'100%'}}>
            <img style={{ float:'left'}} src={ Logo} alt="Logo" />
            </div>
            <div style={{backgroundColor:'#3B4B59', width:'100%', height:'80vh'}}>
                <p>Teste</p>
            </div>
        </div>
        
    )
}