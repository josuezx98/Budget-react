import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyle = makeStyles({
    boxContainer:{
        border: "2px solid black",
        color: "black",
        background:"#97F5E8",
        margin:10,
        borderRadius:5,
        width: 400,
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: 10,
        '@media (max-width:600px)': {
            width: 300,
        },
    },
    icon:{
        fontSize:15,
        color: "black",
    },
    button:{
        fontSize: 2,
    }
  })

const Expense = ({ expense, deleteExpense }) => {
    const classes = useStyle()
return (
        <Box className={classes.boxContainer}>
            <Typography variant="h5" color="initial">
                {expense.name}
            </Typography>
            <Typography variant="h5" color="initial">
                $ {expense.amount}
            </Typography>
            <IconButton
                    className={classes.button}
                    aria-label="delete" 
                    variant="contained" 
                    color="default" 
                    onClick={() => deleteExpense(expense.id)}>
                    <DeleteIcon className={classes.icon}/>
            </IconButton>
        </Box>
    )
}

Expense.propTypes = {
    expense: PropTypes.object.isRequired,
    deleteExpense: PropTypes.func.isRequired,
};

export default Expense;