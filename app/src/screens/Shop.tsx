import React from 'react';
import Context from "../contexts/Context";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export default function Shop() {
  const { produtos, setProdutos, carrinho, setCarrinho,update,setUpdate } = React.useContext(Context);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

 const addToCart = (produto: any) => {
    let novoCarrinho : Array<any> = carrinho
    //O for é utilizado para verificar se o produto já está no carrinho, caso esteja, o produto não será adicionado novamente e
    //sua quantidade será somada
    for(let i = 0; i < novoCarrinho.length; i++){
      if(novoCarrinho[i]== produto){
        novoCarrinho[i]._qtd = novoCarrinho[i]._qtd++
        setCarrinho(novoCarrinho);
        handleClick();
        return;
      }
    }
    novoCarrinho.push(produto)
    setCarrinho(novoCarrinho);
    setUpdate(true); //Atualiza o componente Header para mostrar a nova quantidade de produtos no carrinho
    handleClick();
 }

  return (
    <div>
      <Typography sx={{margin: 1, justifyContent: 'center', textAlign: 'center'}}  variant="h4" color="green" component="p">
        Produtos
      </Typography>
      <Divider />
      <Grid container wrap="wrap"justifyContent={"center"}>
                {produtos.map((item: {_nutritions: any; _nome: string},index: number) => (
                    <Box sx={{ width: 210, marginRight: 2, my: 5, textAlign: 'center', 
                      p: 2, border: '1px solid #e0e0e0',
                      backgroundColor: '',
                      '&:hover': {
                      backgroundColor: '#c0c4c8',
                      opacity: [5, 5, 5],
                    }, }}>
                      <img width={80} src='https://cdn-icons-png.flaticon.com/512/1257/1257673.png?w=740&t=st=1659895613~exp=1659896213~hmac=3529adfb59add1768a333e2c78e84f884128c8a9bea2c085cdfe63d48a5f5581'/>
                      <ImageListItemBar
                        title={item._nome}
                        position="below"
                      />
                      <Grid container wrap="nowrap"justifyContent={"center"}>
                        <Accordion sx={{opacity: 0.9, backgroundColor: 'transparent'}}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Informações Nutricionais</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Carboidratos: {item._nutritions.carbohydrates}                          
                          </Typography>
                          <Typography>
                            Proteínas: {item._nutritions.protein}                   
                          </Typography>
                          <Typography>
                            Gorduras: {item._nutritions.fat}
                          </Typography>
                          <Typography>
                            Calorias: {item._nutritions.calories}
                          </Typography>
                          <Typography>
                            Açúcar: {item._nutritions.sugar}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={() => addToCart(item)}>
                          <AddShoppingCartIcon />
                        </IconButton>
                      </Grid>                 
                    </Box>
                ))}
            </Grid>
            <Snackbar
              open={open}
              autoHideDuration={1500}
              onClose={handleClose}
              message="Produto adicionado ao carrinho"
              action={action}
            />
    </div>
  );
}
