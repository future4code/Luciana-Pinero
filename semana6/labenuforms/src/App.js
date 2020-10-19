import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import Etapa4 from './components/Etapa4/Etapa4';

class App extends React.Component {
  render() {
    return (
      <div className={'mae'}>
      <div className={'etapa1'}>
        <Etapa1
          
        />
      <button>Próxima etapa</button>
      </div>

      <div className={'etapa2'}>
        <Etapa2
        />
        <button>Próxima etapa</button>
      </div>

      <div className={'etapa3'}>
        <Etapa3
        />
      
        <button>Próxima etapa</button>
      </div>

      <div className={'etapa4'}>
        <Etapa4
        />
        <button>Próxima etapa</button>
      </div>

      </div>
      
    );
  }
}

export default App;
