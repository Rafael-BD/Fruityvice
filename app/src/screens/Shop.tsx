import React from 'react';
import Context from "../contexts/Context";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Shop() {
  const { produtos, setProdutos, carrinho, setCarrinho } = React.useContext(Context);
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}
