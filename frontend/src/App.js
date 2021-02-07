import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import  Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import cartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import {BrowserRouter as Router, Route } from 'react-router-dom'
const App= () =>{
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
      <Route path='/shipping' component={ShippingScreen} exact></Route>
      <Route path='/payment' component={PaymentScreen} exact></Route>
      <Route path='/login' component={LoginScreen} exact></Route>
      <Route path='/register' component={RegisterScreen} exact></Route>
      <Route path='/profile' component={ProfileScreen} exact></Route>
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
