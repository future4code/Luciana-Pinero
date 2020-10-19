import React from 'react';
import './Etapa3.css';

class Etapa3 extends React.Component {
    render(){
  return (
    <div className="etapa3">
    <h1> Informações Gerais de Ensino </h1>
    <h2>7. Por que você não terminou um curso de graduação?</h2>
    <input></input>
    <h2>8. Você fez algum curso complementar?</h2>  
    <select>
        <option>Curso Técnico</option>
        <option>Cursos de Inglês</option>
        <option>Não fiz curso complementar</option>
    </select>
    </div>
  );
}}

export default Etapa3;
