import React from 'react';

import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import useTransactions from '../../utils/useTransactions';

const Main = ()=>{
    const classes = useStyles();
    let incomeTotal = useTransactions("Income").total;
    let expenseTotal = useTransactions("Expense").total;
    console.log({incomeTotal,expenseTotal})
    if(incomeTotal===undefined) incomeTotal=0;
    if(expenseTotal===undefined) expenseTotal=0;

     return (
        <Card className=''>
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: {(incomeTotal-expenseTotal)}</Typography>
                <Typography variant="subtitle1" style={{lineHeight:'1.5em',marginTop:'20px'}}></Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
     )
}
export default Main;