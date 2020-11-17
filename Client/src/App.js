import './App.css';

import Header from "./Components/Header/Header.component";
import Balance from "./Components/Balance/Balance.component";
import IncomeExpense from "./Components/Income-Expense/Income-Expense.component";
import TransactionList from "./Components/TransactionList/TransactionList.component";
import AddTransaction from "./Components/AddTransaction/AddTransaction.component";

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
