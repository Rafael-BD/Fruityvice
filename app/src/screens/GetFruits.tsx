import axios from "axios";
import * as React from 'react';
import Context from "../contexts/Context";
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fruit from "../models/Fruit";


export default function GetFruits() {
    const { produtos, setProdutos, loading, setLoading } = React.useContext(Context);
    const n = Array.from(new Array(6));
    let frutas : Array<Object> = [];

    React.useEffect(() => {
        if(produtos.length > 0) {
            setLoading(false);
        }
        axios
            .get("http://localhost:3002/")
            .then(res => {
                if(res){   
                    frutas = []      
                    for(let i = 0; i < res.data.length; i++) {
                        let fruit = new Fruit(res.data[i].name, res.data[i].nutritions);
                        frutas.push(fruit);
                    }     
                    setProdutos(frutas); 
                    console.log(produtos);                        
                }              
            }).catch(err => {
                console.log(err);
            }
            );
    })
    return (
        <div>
            <Grid container wrap="nowrap"justifyContent={"center"}>
                {n.map((item, index) => (
                    <Box sx={{ width: 210, marginRight: 2, my: 5 }}>
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Skeleton sx={{marginBottom: 5}} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Skeleton sx={{marginBottom: 5}} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Skeleton sx={{marginBottom: 5}} />
                </Box>
                ))}
            </Grid>
        </div>
    )
}