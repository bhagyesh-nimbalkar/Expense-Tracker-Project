import { useContext } from "react";
import { incomeCategories,expenseCategories,resetCategories } from "../constants/Categories";
import { ExpenseTracker } from "../context/context";

const useTransactions = (title)=>{
    resetCategories();
    const {transaction} = useContext(ExpenseTracker);
    const transactionsperType = transaction.filter((e)=> e.type===title);
    const total = transactionsperType.reduce((acc,currVal)=>acc+=currVal.amount,0);

    const categories = title==='Income'?incomeCategories:expenseCategories;

    transactionsperType.forEach((e)=>{
        const category = categories.find((t)=>e.category === t.type);

        if(category) category.amount+=e.amount;
    })
    const filteredCategories = categories.filter((c)=>c.amount>0);
    const chartData = {
         datasets:[{
            data:filteredCategories.map((c)=>c.amount),
            backgroundColor:filteredCategories.map((c)=>c.color)
         }],
         labels:filteredCategories.map((c)=>c.type)
    }
    return {total,chartData};
}
export default useTransactions;