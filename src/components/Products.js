import React, { Component } from 'react';
import { getProducts } from '../data';
import { Link } from 'react-router-dom'

export default class Products extends Component {
    constructor() {
        super()

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        //this is where you would make an HTTP request to get product data
        this.setState({
            products: getProducts()
        })
    }

    render() {

        const products = this.state.products.map((item, i) => (
            <Link to={`/products/${item.id}`} key={i}>
                <p>{item.name}</p>
            </Link>
        ))

        return (
            <div>
                <h1>This is the Products page!</h1>
                {products}
            </div>
        )
    }
}