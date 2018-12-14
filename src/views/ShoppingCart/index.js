import React from 'react';
//import './index.styl';
import ProductsContainer from '@/containers/ShoppingCart/Products.js'
import CartContainer from '@/containers/ShoppingCart/Cart.js'

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div>
				<h2>购物车实例</h2>
			    <hr/>
			    <ProductsContainer />
			    <hr/>
			    <CartContainer />
			</div>
		);
	}
}

export default ShoppingCart;