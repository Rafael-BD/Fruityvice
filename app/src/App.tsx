import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Context from './contexts/Context';
import Shop from './screens/Shop';
import GetFruits from './screens/GetFruits';
import Header from './components/Header';
import Carrinho from './screens/Carrinho';

function App() {
  const [produtos, setProdutos] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [noCarrinho, setNoCarrinho] = React.useState(false);

  if(loading) {
    return (
      <Context.Provider value={{produtos, setProdutos, carrinho, setCarrinho, noCarrinho, setNoCarrinho}}>
        <Header/>    
        {noCarrinho ? <Carrinho/> : <Shop/>}    
      </Context.Provider>
  );
  } 
  else {
    return (
      <Context.Provider value={{produtos, setProdutos, loading, setLoading}}>
          <Header/>    
          <GetFruits/>  
        </Context.Provider>
    )
  }
}

export default App;
