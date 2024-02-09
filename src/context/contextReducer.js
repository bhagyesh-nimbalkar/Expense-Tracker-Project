const contextReducer = (state,action)=>
{
     let transaction;
     switch(action.type)
     {
         case 'DELETE_TRANSACTION':
             transaction = state.filter((ele)=> ele.id !== action.payload);
             localStorage.setItem('transaction',JSON.stringify(transaction));
             return transaction;
         case 'ADD_TRANSACTION':
             transaction= [...state,action.payload];
             localStorage.setItem('transaction',JSON.stringify(transaction));
             return transaction;
         default:
             return state;
     }
}
export default contextReducer;