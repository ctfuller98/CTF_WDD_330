/*
When page loads: 
    output expense tables
    add event handler to submit button
When enter button is clicked:
    get description, amount, month
    add new expense to expenses
    calculate new totals
    render results
*/
import {qs} from './utils.js'
import ExpenseTracker from "./ExpenseTracker.js"

const janExpenses = new ExpenseTracker('#janOutput', 'January');