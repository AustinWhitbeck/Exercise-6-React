import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OrderContextProvider } from './context/OrderContextProvider';
import MenuList from './components/MenuList/MenuList';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="MenuBarSection">
      <OrderContextProvider>
        <MenuList/>
      </OrderContextProvider>
      <Sidebar/>
      </section>
    </div>
  );
}

export default App;
