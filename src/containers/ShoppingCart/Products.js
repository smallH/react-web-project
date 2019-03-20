import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '@/reducers/ShoppingCart/actions'
import { getVisibleProducts } from '@/reducers/ShoppingCart'
import ProductItem from '@/containers/ShoppingCart/components/Products/ProductItem'
import ProductsList from '@/containers/ShoppingCart/components/Products/ProductsList'

const ProductsContainer = ({
	products,
	addToCart
}) => (
	<ProductsList title="商品">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		inventory: PropTypes.number.isRequired
	})).isRequired,
	addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	products: getVisibleProducts(state)
})

export default connect(
	mapStateToProps, {
		addToCart
	}
)(ProductsContainer)