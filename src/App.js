import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <main>
      <header>
        <h1>Sally's Resume</h1>
      </header>
      <section><Education /></section>
      <section><Experience /></section>
      <section><Contact /></section>
    </main>
    </div>
  );
}

export default App;
