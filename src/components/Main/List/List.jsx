import React,{useContext} from 'react'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from "@material-ui/core";
import {Delete,MoneyOff} from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTracker } from '../../../context/context';


const List = () => {
    const classes= useStyles();
    const {transaction,deleteTransaction} = useContext(ExpenseTracker);
    const transactions = transaction;

    const deleteTran = (id)=>{
        deleteTransaction(id);
    }
  return (
    <MUIList dense={false} className={classes.list}>
          {transactions.map((e)=>(
            <Slide direction="down" in mountOnEnter unmountOnExit key={transactions.id}>
                <ListItem>
                      <ListItemAvatar>
                        <Avatar className={e.type==='Income'?classes.avatarIncome:classes.avatarExpense} >
                            <MoneyOff/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={e.category} secondary={`${e.amount} - ${e.date}`}/>
                      <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete" onClick={()=>{
                             deleteTran(e.id);
                          }}>
                            <Delete/>
                          </IconButton>
                      </ListItemSecondaryAction>
                </ListItem>
            </Slide>
          ))}
    </MUIList>
  )
}

export default List