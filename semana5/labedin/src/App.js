import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequenoUm from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQENLYw2xCHpWA/profile-displayphoto-shrink_400_400/0?e=1608768000&v=beta&t=s5UyLRkUUk3Hjcs3Tru-pHKl_8MwhtDhXAEXJe5qaiM" 
          nome="Luciana Verdinelli" 
          descricao="Profissional com mais de 14 anos de experiência em negócios financeiros em Empresas Médias e Grandes. Carreira desenvolvida no Banco Santander na área de Varejo em Florianópolis 
          com Empresas de Faturamento de 30MM a 200MM ano, experiência com empréstimos, investimentos e produtos bancários.

          Desde 07/2016 fui promovida à São Paulo onde liderei uma equipe de 5 gerentes de um Núcleo de Médias e Grandes Empresas na Zona Sul de São Paulo. Em 08/2018 iniciei um novo projeto lidando 
          diretamente com Empreendedores Endeavor e foco em Empresas de Tecnologia na qual inauguramos um Núcleo de Atendimento 100% vocacionado à este público.
          
          Em 2020 tomei a decisão de sair do Banco para trilhar um caminho direcionado ao Ecossistema de Startups e Inovação com uma experiência de estudo e trabalho no Exterior.
          Sou graduada em Administração pela Universidade Federal de Santa Catarina, Pós graduada em gestão de pessoas e realizei diversos cursos e, Fusões, Aquisições, Valuation e agora Liderança 
          em Inovação no MIT e Programação Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Email</h2>
        <CardPequenoUm 
          imagem="https://image.flaticon.com/icons/png/512/20/20061.png" 
          nome="Email: luverdinelli@gmail.com " 
          
          
        />
        <h2>Endereço</h2>
        <CardPequenoUm
          imagem="https://w7.pngwing.com/pngs/849/42/png-transparent-computer-icons-famille-marie-jeunesse-address-logo-logo-mobile-phones-address.png" 
          nome="Endereço: Florianópolis " 
          

      />    
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEseNkj-coYgg/company-logo_100_100/0?e=1611187200&v=beta&t=gtfLBs5nOGC5UJwOxrSK0wnuhQxGsV4HoDg0Hn3N4Tc" 
          nome="Santander" 
          descricao="Tech Companies
                    ago de 2018 – mar. de 2020
          em São Paulo, São Paulo
          Relacionamento com Empresas de crescimento acelerado. Integrada à estrutura de Gestão Comercial da Diretoria de Negócios e Empresas do 
          Banco Santander - Este foi meu último cargo, mas comecei como estagiária e trabalhei 14 anos no Santander"
          
        />
        
        <CardGrande 
          imagem="https://cdn.domtotal.com/img/noticias/2019-12/1402279_426531.jpg" 
          nome="Caracteristicas Pessoais" 
          descricao="Persistência, Garra, Determinação, Força de Vontade, Comprometimento! " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
