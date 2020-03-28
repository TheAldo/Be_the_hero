import React from 'react';
import './styles.css';
import logImg from '../../assets/icon.svg';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


export default function Logon(){


return(
    <div className="logon-container">

    <section className="form">

     <img src={logoImg} alt="Be The Hero" />

        <form>
        <h1>faça seu logon</h1>

        <input placeholder="sua ID" />
        <button className="button" type="submit">Entrar</button>

        <a href="/register">
            <img src={logImg} alt=""/>
          Não tenho cadastro
        </a>


        </form>




    </section>
     
     <img src={heroesImg} alt="Heroes"/>



    </div>




);


}