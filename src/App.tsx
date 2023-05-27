import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';


import Users from 'pages/users/users.component';
import News from 'pages/users/news/news.component';
import Header from 'shared/components/Header/header.component';

const theme = {
  colors: {
   header: '#ebfbff',
   body: '#fff',
   footer: '#003333'
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Users />
        <News />
      </div>
    </ThemeProvider>
  );
}

export default App;
