import React from 'react';
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import useStyles from './styles';
import useTransactions from '../../utils/useTransactions';
import { Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement,Tooltip,Legend} from 'chart.js'
Chart.register(ArcElement,Tooltip,Legend);

const Details = ({title})=>{
  const classes = useStyles();
  const {total,chartData} = useTransactions(title);
  return (
    <Card className={title==="Income"?classes.income:classes.expense}>
       <CardHeader title={title} />
       <CardContent>
          <Typography variant="h5">${total}</Typography>
          <Doughnut
           options={{responsive:true}}
           data={chartData}/>
       </CardContent>
    </Card>
  )
}
export default Details;