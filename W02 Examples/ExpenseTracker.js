import {qs} from "./utils.js"
export default class ExpenseTracker {
    constructor(outputId, label) {
        this.outputId = outputId;
        this.outputElement = qs(this.outputId);
        this.label = label;
        this.renderTable();
    }
    addExpense(expense) {

    }
    calculateTotals(){

    }
    renderTable(){
        const html = `
        <h2>${this.label}</h2>
        <table>
        <thead>
            <tr><th>Description</th><th>Amount</th><th>Total</th></tr>
        </thead>
        <tbody class = "expenses"></tbody>
        </table>`;
        this.outputElement.innerHTML = html;
    }
    renderExpenses(){

    }
}