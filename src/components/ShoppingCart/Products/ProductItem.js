import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({product, onAddToCartClicked}) => (
	<div style={{ marginBottom: 20 }}>
    <Product title={product.title} price={product.price} quantity={product.inventory} />
    <button style={styles.buttonStyle} onClick={onAddToCartClicked} disabled={product.inventory > 0 ? '' : 'disabled'}>
			{product.inventory > 0 ? '加入购物车' : '商品卖光了'}
    </button>
  </div>
)

ProductItem.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		inventory: PropTypes.number.isRequired
	}).isRequired,
	onAddToCartClicked: PropTypes.func.isRequired
}

const styles = {
	buttonStyle: {
		backgroundColor: '#00746a',
		color: 'white',
		padding: '5px'
	}
}

export default ProductItem