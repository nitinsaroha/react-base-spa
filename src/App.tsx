import React from 'react';
import './App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SideNav from 'components/SideNav';
import Main from 'components/Main';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <aside className="sidenav">
        <SideNav />
      </aside>
      <main className="main">
        <Main />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
