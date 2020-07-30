import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';
import {makeStyles, withStyles}from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'black',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
      },
      margin: 10,
      borderRadius: 4,
      width: 400,
      '@media (max-width:600px)': {
        width:250,
    },
    },
  })(TextField);
  

const useStyle = makeStyles({
boxContainer:{
    width: "100%",
    textAlign: "center",
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
},
form:{
    margin: 10,
    width:"400px",
    '@media (max-width:600px)': {
        width:"100%",
    },
},
button:{
    width:400,
    margin: 10,
    background:"#97F5E8",
    borderRadius: 4,
    '@media (max-width:600px)': {
        width:250,
    },
}

})


const Form = ({ setExpense, setCreateExpense }) => {
    const classes = useStyle();
    const [ nameExpense, setNameExpense ] = useState('');
    const [ amountExpense, setAmountExpense ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
         // validar
         if(nameExpense === '' || amountExpense < 1 || isNaN(amountExpense)) {
            setError(true);
            return;
        }
        const newExpense = {
            name: nameExpense,
            amount: amountExpense,
            id: shortid.generate()
        }
        setExpense(newExpense);
        setCreateExpense(true)
        setError(false);
        setNameExpense('');
        setAmountExpense('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h3" color="initial">Agrega tus gastos</Typography>
            {error && 
                <Error message='Ambos campos son obligatorios o datos incorrectos' />}
                <Box align='center'>
                    <CssTextField  
                        type="text" 
                        name="name"
                        placeholder="Ej. Transporte" 
                        onChange={event => setNameExpense(event.target.value)}
                        value={nameExpense}
                    />
                    <CssTextField 
                        type="number"
                        name="amount"
                        placeholder="Ej. 300" 
                        onChange={event => setAmountExpense(parseInt(event.target.value, 10))}
                        value={amountExpense}
                    />
                </Box>
                <Button
                    className={classes.button}
                    variant="contained" 
                    color="default"
                    type="submit" >
                        Agregar gasto
                </Button>
        </form>
    );
};

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired,
};

export default Form;