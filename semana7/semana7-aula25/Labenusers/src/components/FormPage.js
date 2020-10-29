import React from "react";
import axios from "axios";
import styled from "styled-components";

const ButtonCreate = styled.button`
    background: blue;
    border: 2px solid blue;
    border-radius: 1px;
    color: white;
    font-size: 15px;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;

const InputCreate = styled.input`
    background: lightgrey;
    border: 2px solid blue;
    border-radius: 1px;
    color: black;
    font-size: 15px;
    margin: 10px;
    padding: 10px 10px;
`;


class FormPage extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  };

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "luciana-pinero-dumont"
          }
        }
      )
      .then((response) => {
        alert("Usuário criado com sucesso!!");
        this.setState({ nameValue: "", emailValue: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  render() {
    return (
      <div>
        <h1> Formulário de Cadastro de Usuário LABENUSERS </h1>
        <InputCreate type="text" placeholder="Escreva seu nome" value={this.state.nameValue} onChange={this.onChangeNameValue} />
        <InputCreate
          type="text" placeholder="Escreva seu e-mail"  
          value={this.state.emailValue}
          onChange={this.onChangeEmailValue}
        />
        <ButtonCreate onClick={this.createUser}>Criar Usuário</ButtonCreate >
      </div>
    );
  }
}

export default FormPage;
