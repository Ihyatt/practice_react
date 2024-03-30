import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}


function App() {
  return (
    <div>
    <h1>Welcome to my app</h1>
    <MyButton title="I'm a button" />
  </div>
  );
}

export default App;
