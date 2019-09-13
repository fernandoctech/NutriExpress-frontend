import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';
import Route from'./routes';


const App = () => (
  <div className="App" >
    <Header/>
    <Route/>
    <Footer/>
    
  </div>
);

export default App;
