import React , {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import AddCategory from './components/AddCategory';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Chart from './components/Chart';
import TransactionTable from './components/TransactionTable';
export default function App() {
  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [categories , setCategories] = useState([]);
  if (showAddCategory) {
    return <AddCategory setCategories={setCategories} setShowAddCategory={setShowAddCategory} />;
  }
  if (showAddTransaction) {
    return <AddTransaction  setShowAddTransaction={setShowAddTransaction} />;
  }

  return (
    <div className="container">
      <div className="row">
        <Header categories={categories} setShowAddCategory={setShowAddCategory} />
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
