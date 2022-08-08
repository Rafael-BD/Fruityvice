import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Context from '../contexts/Context';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Carrinho() {
  const { carrinho, setCarrinho,update,setUpdate, noCarrinho, setNoCarrinho } = React.useContext(Context);

  const removeItem = (item: any) =>{ // Função para remover um item do produto especifico
    let index = carrinho.indexOf(item)
    if(carrinho[index]._qtd - 1 <= 0){
      carrinho.splice(index,1);
    }else{
      carrinho[index]._qtd--;
    }
    setCarrinho(carrinho)
    setUpdate(true);
  }

  const addItem = (item: any) =>{ // Função para adicionar um item do produto especifico
    let index = carrinho.indexOf(item)
    carrinho[index]._qtd++;
    setCarrinho(carrinho)
    setUpdate(true);
  }

  const removeAllItem = (item: any) =>{ // Função para remover todos os itens do produto especifico
    let index = carrinho.indexOf(item)
    carrinho.splice(index,1);
    setCarrinho(carrinho)
    setUpdate(true);
  }

  const clearCart = () => { // Função para limpar o carrinho
    setCarrinho([])
    setUpdate(true);
  }

  const carr = (
    <React.Fragment>
      <div>
        <Box sx={{ margin: 10}}>
        <Stack spacing={2}>
        <Typography sx={{margin: 1, justifyContent: 'center', textAlign: 'center'}}  variant="h4" color="green" component="p">
          Carrinho
        </Typography>
        <Divider />
        {carrinho.length > 0 && <Button onClick={() => clearCart()} sx={{backgroundColor: 'red', marginTop: 5}} variant="contained" startIcon={<DeleteIcon />}>
          Limpar Carrinho
        </Button>}   
          {carrinho.map((iten: any) => (
            <Item>
              <Typography variant="body2" color="textSecondary" component="h1">
                  {iten._nome}
                </Typography>
              <img width={80} src='https://cdn-icons-png.flaticon.com/512/1257/1257673.png?w=740&t=st=1659895613~exp=1659896213~hmac=3529adfb59add1768a333e2c78e84f884128c8a9bea2c085cdfe63d48a5f5581'/>
              <Typography variant="body2" color="black" component="p">
                  Quantidade:
              </Typography>
              <Grid container wrap="nowrap"justifyContent={"center"}>
              <IconButton onClick={() => removeItem(iten)}><RemoveCircleIcon /></IconButton>
                <Typography sx={{margin: 1}}  variant="h5" color="black" component="p">
                  {iten._qtd}
                </Typography>
                <IconButton onClick={() => addItem(iten)}><AddCircleIcon /></IconButton>
              </Grid>
              <IconButton onClick={() => removeAllItem(iten)}><DeleteForeverIcon /></IconButton>
            </Item>
          ))}
          {carrinho.length > 0 && <Button sx={{backgroundColor: 'green', marginTop: 5}} variant="contained" startIcon={<PaymentIcon />}>
            Finalizar Compra
          </Button>}
          
        </Stack>
      </Box>
      <Fab 
        onClick={() => setNoCarrinho(false)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }} 
        variant="extended">
        <ArrowLeftIcon sx={{ mr: 1 }} />
        Voltar a loja
      </Fab>
      {setUpdate(false)}
    </div>
    </React.Fragment>
  )
  
  //Atualiza o carrinho apos alguma mudanca
  if(update) {
    return (carr);
  }else{
    return (carr)
  }
}