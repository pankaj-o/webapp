
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/alert';


function App() {
const [Mode , setMode]=useState('light');
const Togglemode = () =>{
  if (Mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor=("grey")
  }

   
  else{
    setMode("light")
    document.body.style.backgroundColor=("white")
  }

}
  return (
    <>
      <Navbar title="App" About="about" mode={Mode} toggle={Togglemode}/>
      
      <Alert  alertmsg="hi alert"/>
      
      <div className="container">
        <Textform heading="Enter your text here" mode={Mode}/>
        
      </div>
      
    </>
  );
}

export default App;
