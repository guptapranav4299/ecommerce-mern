import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import  Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import cartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import {BrowserRouter as Router, Route } from 'react-router-dom'
const App= () =>{
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
      <Route path='/login' component={LoginScreen} exact></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/product/:id' component={ProductScreen} exact></Route>
        <Route path='/cart/:id?' component={cartScreen} exact></Route>
      </Container>
      </main>
    <Footer />
    </Router>
    
  );
}

export default App;
