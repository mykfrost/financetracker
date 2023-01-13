import React , {useState} from 'react';
import './App.css';
import AddCategory from './components/AddCategory';
import AddTransaction from './components/AddTransaction';
import Header from './components/Header';
import Chart from './components/Chart';
import TransactionTable from './components/TransactionTable';
export default function App() {
  const [showAddCategory , setShowAddCategory] = useState(true);
    const [showAddTransaction , setShowAddTransaction] = useState(false);
  // return (
  //   <div className="App">
  //     <Header/>
  //      <TransactionTable/>
  //      <Chart/>
  //     <AddCategory/>
  //     <AddTransaction/>
     
  //   </div>
  // );

  if(showAddCategory){
    return <AddCategory setShowAddCategory={setShowAddCategory}/>;
  }
  if(showAddTransaction){
    return <AddTransaction setShowAddTransaction={setShowAddTransaction}/>
  }

  return  (
    <div className='App'>
      <Header setShowAddCategory={setShowAddCategory}/>
      <TransactionTable setShowAddTransaction={setShowAddTransaction}/>
      <Chart/>
    </div>
  );
}

//export default App;
