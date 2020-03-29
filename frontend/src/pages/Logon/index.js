import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api';

import './styles.css';
import logImg from '../../assets/icon.svg';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


export default function Logon(){
const [id, setId] = useState('');
const history = useHistory();
 async function handleLogin(e){
e.preventDefault();

try{
 const response = await api.post('sessions', {id});
 
 
  history.push('/profile');

}catch(err){
  alert('Falha no login, tente novamente');

}


 }


return(
    <div className="logon-container">

    <section className="form">

     <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
        <h1>faça seu logon</h1>

        <input 
        placeholder="sua ID"
        value={id}
        onChange={e => setId(e.target.value)}
        />
        <button className="button" type="submit">Entrar</button>

        <Link className="back-link" to="/register">
            <img src={logImg} alt=""/>
          Não tenho cadastro
        </Link>


        </form>




    </section>
     
     <img src={heroesImg} alt="Heroes"/>



    </div>




);


}