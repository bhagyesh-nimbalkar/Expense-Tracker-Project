import React,{useContext,useState} from 'react';
import {TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';
import useStyles from './styles';
import { ExpenseTracker } from '../../../context/context';
import { incomeCategories,expenseCategories} from '../../../constants/Categories';
import FormatDate from '../../../utils/FormatDate';
import SnackBar from '../../SnackBar/SnackBar';

const initialState  = {
     amount:0,
     category:'',
     type:'Income',
     date:FormatDate(new Date()),
}
const Form = ()=>{
    const {addTransaction} = useContext(ExpenseTracker);
    const [formData,setFormData] = useState(initialState);
    const [open,setOpen] = useState(false);

    const createTransaction = ()=>{
         const trans = {...formData,amount:Number(formData.amount),id:uuidv4()};
         setOpen(true);
         addTransaction(trans);
         setFormData(initialState);
    }
    const selectedCat = formData.type==='Income'?incomeCategories:expenseCategories;
    const classes = useStyles();
     return (
        <Grid container spacing={2}>
            <SnackBar open={open} setOpen={setOpen}/>
            <Grid item xs={12}>
                <Typography align='center' variant="subtitle2"
                gutterBottom></Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} key={formData.id} onChange={(e)=>{setFormData({...formData, type:e.target.value })}}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e)=>setFormData({...formData,category:e.target.value})}>
                        {selectedCat.map((e)=>{
                             return <MenuItem value={e.type}>{e.type}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField type="number" label="Amount" fullWidth value={formData.amount} 
              onChange={(e)=>{setFormData({...formData,amount:e.target.value})}}/>
            </Grid>
            <Grid item xs={6}>
              <TextField type="date" label="Date" fullWidth
              value={formData.date} onChange={(e)=>{setFormData({...formData,date:FormatDate(e.target.value)})}}/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary"
            fullWidth onClick={createTransaction}>Create</Button>
        </Grid>
     )
}

export default Form;