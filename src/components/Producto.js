import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper, Button } from '@mui/material';

export default function InputProducto() {
    const paperStyle={padding:'50px 20px', width:'100%', margin:'20px auto'}
    const [nombre, setNombre]=useState("");

    const handleClick=(e)=>{
        e.preventDefault()
        const name = {
            created_by:1,
            estado:'ingresado',
            name:nombre,
            sold_by:0
        }
        console.log(name)
        fetch('http://localhost:8080/producto/add', {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(name)
        }).then(()=>{
            console.log('Producto agregado')
        })
    }
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Agregar Producto</h1>
            <div className='row'>
                <TextField 
                    id="outlined-basic" 
                    label="Producto" 
                    variant="outlined" 
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    style={{'marginRight':'20px', 'width':'60%'}}

                />

                <Button 
                    variant="contained" 
                    color="success"
                    style={{'marginTop':'16px'}}
                    onClick={handleClick}
                    >
                    Guardar
                </Button>
            </div>
        </Paper>
    </Container>
  );
}
