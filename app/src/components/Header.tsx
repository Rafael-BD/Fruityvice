import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import SpaSharpIcon from '@mui/icons-material/SpaSharp';
import Context from '../contexts/Context';

export default function Header() {
    const {carrinho, setCarrinho, noCarrinho, setNoCarrinho, update, setUpdate } = React.useContext(Context);

    const header = (
        <React.Fragment>
            <Box sx={{ flexGrow: 1, marginBottom: 10, opacity: 0.9, }}>
            <AppBar position="fixed" style={{backgroundColor: 'green'}}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="Home"
                    sx={{ mr: 2 }}
                    onClick={() => {setNoCarrinho(false)}}
                >
                    <SpaSharpIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Fruityvice Store
                </Typography>
                    <IconButton
                        size="large"
                        aria-label="show new notifications"
                        color="inherit"
                        onClick={() => {setNoCarrinho(true)}}
                    >
                        <Badge badgeContent={carrinho.length} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {setUpdate(false)}
            </Box>
            </React.Fragment>
    )
    //Caso o estado do carrinho seja alterado a variavel update será mudada para true e o componente Header será renderizado novamente para
    //atualizar a quantidade de produtos no carrinho
    if(update) {
        return (header);
    }else{
        return (header)
    }
     
}
