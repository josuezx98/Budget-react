import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
    boxContainer:{
        width: "100%",
        margin:10,
        textAlign: "center",
        display:"flex",
        justifyContent:"center"
    },
    list:{
        width: 200,
        background:"#97F5E8",
        color: "black",
        padding: 15,
        borderRadius:5,
    }
  })
const BudgetControl = ({ budget, restBudget }) =>{ 
const classes = useStyle();    
    
return(
<Box className={classes.boxContainer}>
    <Box className={classes.list}>
        <Typography variant="h5" color="initial">
            Presupuesto: $ {budget}
        </Typography>
        <Typography variant="h5" color="initial">
            Restante: $ {restBudget}
        </Typography>
    </Box>  
</Box>
);
}
BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    restBudget: PropTypes.number.isRequired,
};

export default BudgetControl;