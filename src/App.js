import React , {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import AddCategory from './components/AddCategory';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Chart from './components/Chart';
import TransactionTable from './components/TransactionTable';
export default function App() {
  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  if (showAddCategory) {
    return <AddCategory setShowAddCategory={setShowAddCategory} />;
  }
  if (showAddTransaction) {
    return <AddTransaction setShowAddTransaction={setShowAddTransaction} />;
  }

  return (
    <div className="container">
      <div className="row">
        <Header setShowAddCategory={setShowAddCategory} />
      </div>
      <div className="row">
        <div className="col">
          <TransactionTable setShowAddTransaction={setShowAddTransaction} />
        </div>
        <div className="col">
          <Chart />
        </div>
      </div>
    </div>
  );
}

//export default App;
