import React , {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import AddCategory from './components/AddCategory';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Chart from './components/Chart';
import TransactionTable from './components/TransactionTable';
import "./style.css";
export default function App() {
  const [categories, setCategories] = useState([
    // { name: "Gas", type: "expense" },
    // { name: "Salary", type: "income" }
  ]);
  const [transactions, setTransactions] = useState([
    // {
    //   amount: 5,
    //   date: new Date(),
    //   category: { name: "Gas", type: "expense" }
    // },
  ]);
  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const removeTransaction = (index) => {
    const newTransactions = transactions.filter((transaction, idx) => {
      return idx !== index;
    });
    setTransactions(newTransactions);
  };

  const filterTransactions = () => {
    return transactions
      .filter((transaction) =>
        activeCategory ? transaction.category.name === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  };

  if (showAddCategory) {
    return (
      <AddCategory
        setShowAddCategory={setShowAddCategory}
        setCategories={setCategories}
      />
    );
  }
  if (showAddTransaction) {
    return (
      <AddTransaction
        categories={categories}
        setTransactions={setTransactions}
        setShowAddTransaction={setShowAddTransaction}
      />
    );
  }

  return (
    <div className="container">
      <div className="row">
        <Header
          categories={categories}
          activeCategory={activeCategory}
          setShowAddCategory={setShowAddCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <div className="row">
        <div className="col">
          <TransactionTable
            setShowAddTransaction={setShowAddTransaction}
            removeTransaction={removeTransaction}
            transactions={filterTransactions(transactions)}
          />
        </div>
        <div className="col">
          <Chart transactions={filterTransactions(transactions)} />
        </div>
      </div>
    </div>
  );
}
