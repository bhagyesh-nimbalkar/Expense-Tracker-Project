import React,{useReducer,createContext} from 'react';
import contextReducer from './contextReducer';

const initialState =JSON.parse(localStorage.getItem('transaction')) || [];

export const ExpenseTracker = createContext(initialState);

export const Provider = ({children})=>{
       const [transaction,dispatch] = useReducer(contextReducer,initialState);
       // Action Creators 
      
       const deleteTransaction = (id)=>{
           dispatch({type:'DELETE_TRANSACTION',payload:id});
           localStorage.setItem('transaction',JSON.stringify(transaction.join(',')));
       }
       const addTransaction = (t)=>{
           dispatch({type:'ADD_TRANSACTION',payload:t});
           
       }
       return (
          <ExpenseTracker.Provider value={{
            deleteTransaction,
            addTransaction,
            transaction
          }}>
            {children}
          </ExpenseTracker.Provider>
       )
}