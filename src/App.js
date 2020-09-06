import React from 'react';
import './App.css';
import Header from "./Content/Header/Header";
import MainContent from "./Content/MainContent/MainContent";
import Footer from "./Content/Footer/Footer";

function App() {
  return (<div className={'App'}>
    <Header/>
    <MainContent/>
    <Footer/>
  </div>);
}

export default App;
