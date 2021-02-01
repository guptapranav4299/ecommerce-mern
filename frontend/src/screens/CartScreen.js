import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'

const CartScreen= ({match, location, hitory}) => {
    const prdouctId= match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch= useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if(prdouctId){
            dispatch(addToCart(prdouctId,qty))
        }
    }, [dispatch, prdouctId, qty])
    return (
        <div>
            Cart Screen
        </div>
    )
}

export default CartScreen
