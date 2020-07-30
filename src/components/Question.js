import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
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
      width:"100%",
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
        width:300,
    },
},
button:{
    width:"100%",
    margin: 10,
    background:"#97F5E8",
    borderRadius: 4,
    '@media (max-width:600px)': {
        width:250,
    },
}

})

const Question = ({ setBudget, setRestBudget, setQuestionInitial }) => {
    const classes = useStyle();
    const [ amount, setAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        // validar
        if(amount < 1 || isNaN(amount)) {
            setError(true);
            return;
        }
        // paso la validacion
        setError(false);
        setBudget(amount);
        setRestBudget(amount);
        setQuestionInitial(false);
    }
    return (
<Box className={classes.boxContainer}>
    <Typography variant="h4" align="center" color="initial">
        Defina su presupuesto
    </Typography>
    {error && <Error message='El presupuesto es Incorrecto' />}
    <form 
        onSubmit={handleSubmit} 
        className={classes.form}>
        <CssTextField 
            type="number"
            name="budget" 
            placeholder="Agrega tu presupuesto"
            onChange={event => setAmount(parseInt(event.target.value, 10))}/>
        <Button
            type="submit"
            value="Agregar presupuesto"
            variant="contained"
            color="default"
            className={classes.button}>
            Agregar presupuesto        
        </Button>
    </form>
</Box>
    );
};

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setQuestionInitial: PropTypes.func.isRequired,
};

export default Question;