import React from "react";
import FormPage from "./components/FormPage";
import UserListPage from "./components/UserListPage";
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

const BodyAll = styled.body`
    display:flex;
    flex-direction:row;
    justify-content:center;
    
`;


class App extends React.Component {
  state = {
    formPage: true
  };

  changePage = () => {
    this.setState({ formPage: !this.state.formPage });
  };

  render() {
    const currentPage = this.state.formPage ? <FormPage /> : <UserListPage />;

    return (
      <BodyAll>
      <div className="App">
        {currentPage}
        <ButtonCreate onClick={this.changePage}>Mudar de Página</ButtonCreate>
      </div>
      </BodyAll>
    );
  }
}

export default App;
