import React from 'react';
import './Etapa1.css';

class Etapa1 extends React.Component {
  render(){
  return (
    <div className="etapa1">
    <h1> Dados Gerais </h1>
    <h2>1. Qual o seu nome?</h2>
    <input></input>
    <h2>2. Qual sua idade?</h2>  
    <input></input>
    <h2>3. Qual seu email?</h2>
    <input></input>
    <h2>4. Qual sua Escolaridade?</h2>
    <select>
        <option>Ensino Médio Incompleto</option>
        <option>Ensino Médio Completo</option>
        <option>Ensino Superior Incompleto</option>
        <option>Ensino Superior Completo</option>
    </select>
    </div>
  );
}}

export default Etapa1;
