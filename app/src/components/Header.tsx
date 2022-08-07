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
    const {carrinho, setCarrinho, noCarrinho, setNoCarrinho } = React.useContext(Context);
    const qtdCarrinho = carrinho.length;

     return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor: 'green'}}>
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
                    aria-label="show 17 new notifications"
                    color="inherit"
                    onClick={() => {setNoCarrinho(true)}}
                >
                    <Badge badgeContent={qtdCarrinho} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
