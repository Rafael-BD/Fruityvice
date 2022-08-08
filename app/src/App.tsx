import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Context from './contexts/Context'; //Contexto para utilizacao de estados globais entre os componentes
import Shop from './screens/Shop';
import GetFruits from './screens/GetFruits';
import Header from './components/Header';
import Carrinho from './screens/Carrinho';

function App() {
  const [produtos, setProdutos] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [noCarrinho, setNoCarrinho] = React.useState(false);
  const [update, setUpdate] = React.useState(true);

  //se loading for true, carrega a tela GetFruits responsável por carregar os produtos, e entao seta loading para false apos a lista
  //de produtos ser preenchida para que a tela Shop seja carregada

  if(!loading) {
    return (
      <Context.Provider value={{produtos, setProdutos, carrinho, setCarrinho, noCarrinho, setNoCarrinho,update,setUpdate}}>
        <Header/>    
        {noCarrinho ? <Carrinho/> : <Shop/>}    
      </Context.Provider>
  );
  } 
  else {
    return (
      <Context.Provider value={{produtos, setProdutos, loading, setLoading, carrinho, setCarrinho,update,setUpdate}}>
          <Header/>    
          <GetFruits/>  
        </Context.Provider>
    )
  }
}

export default App;
