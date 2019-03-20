import React from 'react';
import ProductsContainer from '@/containers/ShoppingCart/Products.js'
import CartContainer from '@/containers/ShoppingCart/Cart.js'
import { connect } from 'react-redux'
import { getAllProducts } from '@/reducers/ShoppingCart/actions'
import PropTypes from 'prop-types'

class ShoppingCart extends React.Component {
	static propTypes = {
		init: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		const {init} = this.props;
		init();
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

const mapDispatchToProps = (dispatch, ownProps) => ({
	init: () => (dispatch(getAllProducts()))
})

export default connect(null, mapDispatchToProps)(ShoppingCart)