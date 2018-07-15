
import React from 'react';
// import type from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../../actions/productActions';
import Product from '../Product/Product';


class NewArivals extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {}
	componentDidMount() {
		this.props.getAllProducts();
	}

	render() {
		console.log(this.props.products.products);
		let products = this.props.products.products;
		let renderProducts = null;
		if (products) {
			renderProducts = products.map((product, i) => {
				return (
					<Product key={i} productName={product.name} />
				);
			});
		}
		return (
			<div className="sec-banner bg0 p-t-80 p-b-50">
				<div className="container">
					<div className="p-b-10">
						<h3 className="ltext-103 cl5">
							New Arivals
						</h3>
					</div>
					<div className="row">
						{renderProducts}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { products } = state.productReducer;
	return {
		products
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllProducts: () => dispatch(getAllProducts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArivals);