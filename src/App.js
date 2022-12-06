import React from 'react';
import './App.css';
import Content from "../src/components/contents/contents";
import vetorthree from "../src/img/vetor3.png";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="register--container">
        <h1 className='title'>Seja bem-vindo ao <strong> BUSINESS</strong></h1>

        <div className='conteiner--inputs'>
          <p className='principal'>Nome completo </p>
          <input
            type="text"
            name="nome"
            className="register--input"
          />
        </div>
        <hr className='line'></hr>

        <div className='conteiner--inputs'>
          <p className='principal'> E-mail </p>
          <input
            type="email"
            name="email"
            className="register--input"
          />
          <hr className='line'></hr>
        </div>
        <hr className='line'></hr>


        <div className='conteiner--inputs'>
          <p className='principal'> Senha </p>
          <input
            type="password"
            name="senha"
            className="register--input"
          />

        </div>
        <hr className='line'></hr>

        <div className='conteiner--inputs'>
          <p className='principal'>  Telefone</p>
          <input
            type="tel"
            data-js="phone"
            name="telefone"
            className="register--input"
            maxLength='13'
          />

        </div>
        <hr className='line'></hr>

        <div className='conteiner--inputs'>
          <p className='principal'>Cpf</p>
          <input
            type="number"
            name="cpf"
            className="register--input"
          />
          <hr className='line'></hr>
        </div>
        <hr className='line'></hr>

        <div className='conteiner--inputs'>
          <p className='principal'> Idade</p>
          <input
            type="number"
            name="idade"
            className="register--input"
          />
        </div>
        <hr className='line'></hr>

        <div className='conteiner--inputs'>
          <p className='principal'> Serasa score</p>
          <input
            type="number"
            name="serasa"
            className="register--input serasa"
          />
          <hr className='line-input'></hr>
        </div>


        <div className='conteiner--inputs'>
          <p className='principal left'> Salário </p>
          <input
            type="number"
            name="salario"
            className="register--input salario"
          />
          <hr className='line-input left'></hr>
        </div>
        <button className="container--button">Cadastrar</button>

        <div className='container--img'>
          <img src={ vetorthree } alt="code" className='vetorthree' />
          <p className='paragrafh-img'>ACESSO EXCLUSIVO AO SEU CARTÃO ATRAVÉS DO QR CODE</p>
        </div>
      </div>
      <Content />
      <Footer />
    </div >

  );
}

export default App;
