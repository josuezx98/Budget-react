import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyle = makeStyles({
    boxContainer:{
        display: "flex",
        flexDirection:"column",
    },
  })


const ExpenseList = ({expenseArray, deleteExpense}) => {
const classes = useStyle();
    return (
        <Box>
            <Typography variant="h3" color="initial">Listado</Typography>
            <Box align="center" className={classes.boxContainer}>
                {expenseArray.map(expense => <Expense expense={expense} deleteExpense={deleteExpense} key={expense.id} />)}
            </Box>
        </Box>
    );
};

ExpenseList.propTypes = {
    expenseArray: PropTypes.array.isRequired,
    deleteExpense: PropTypes.func.isRequired,
};

export default ExpenseList;