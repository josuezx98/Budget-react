import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ExpenseList from './components/ExpenseList';
import BudgetControl from './components/BudgetControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
  boxContainer:{
      background: "#303030",
      marginTop:20,
      textAlign: "center",
      width: "100%",
      borderRadius:25,
      '@media (max-width:600px)': {
        borderRadius:5,
    },
  },
  grid:{
      display:"flex",
      marginTop:50,
      '@media (max-width:600px)': {
        flexDirection: "column",
        marginTop:20,
    },
  }
  
})

function App() {
  const classes = useStyle();
  // para el Question
  const [ budget, setBudget ] = useState(0);
  const [ restBudget, setRestBudget ] = useState(0);
  const [ questionInitial, setQuestionInitial ] = useState(true);
  // para el Form
  const [ createExpense, setCreateExpense ] = useState(false)
  const [ expense, setExpense ] = useState({});
  const [ expenseArray, setExpenseArrray ] = useState([]);

  useEffect(() => {
    if(createExpense) {    
      const expenseList = [...expenseArray, expense];
      setExpenseArrray(expenseList);
      
      const rest = restBudget - expense.amount;
      setRestBudget(rest);

      setCreateExpense(false);
    }
  }, [createExpense])

  const deleteExpense = id => {
    let amount = 0;
    const newExpenseArray = expenseArray.filter(expense => {
      if(expense.id !== id) {
        return true;
      } else {
        amount = restBudget + expense.amount;
        return false;
      }
    });
    setExpenseArrray(newExpenseArray);
    setRestBudget(amount)
  }

  return (
  <Grid container>
    <Box className={classes.boxContainer}>
      <Typography variant="h2" color="initial">
      Gasto Semanal
      </Typography>
        <div >
         {
           questionInitial ?
            <Question 
              setBudget={setBudget} 
              setRestBudget={setRestBudget}
              setQuestionInitial={setQuestionInitial}
            />
            :
            <div className={classes.grid}>
                <Grid item xs={12} sm={6} md={6}>
                    <Form 
                      setExpense={setExpense} 
                      setCreateExpense={setCreateExpense}  
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <ExpenseList 
                      expenseArray={expenseArray}
                      deleteExpense={deleteExpense}
                    />
                    <BudgetControl
                      budget={budget}
                      restBudget={restBudget}
                    />
                </Grid>
            </div>
         }
        </div>
    </Box>
  </Grid>
  );
}

export default App;
