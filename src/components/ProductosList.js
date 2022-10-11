import React, {useState, useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SellIcon from '@mui/icons-material/Sell';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';

export default function ProductosList() {

    const [listado, setListado] = useState([])
    const paperStyle={padding:'50px 20px', width:'80%', margin:'20px auto'}

       
    useEffect(()=>{

        fetch('http://localhost:8080/producto/getAll')
        .then(res=>res.json())
        .then((result)=>{
            setListado(result);
        })

    },[]);

    return (
        <Paper elevation={3} style={paperStyle}>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                {listado.map((value) => (
                    <ListItem
                    key={value}
                    disableGutters
                    secondaryAction={
                        <div className='row'>
                            <IconButton title="Editar" >
                                <EditIcon />
                            </IconButton>
                            <IconButton title="Eliminar">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton title="Marcar como vendido">
                                <SellIcon />
                            </IconButton>
                            <IconButton title="Marcar como robado">
                                <HighlightAltIcon />
                            </IconButton>
                        </div>
                        }
                    >
                    <ListItemText primary={value.name} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    
    );
}
