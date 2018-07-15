import React from 'react';
import { Link } from 'react-router-dom';

const product = props => {
	return (
		<div className="col-lg-4 mb-4">
			<div className="card h-100">

				{/* <h4 class="card-header">{props.productName}</h4> */}
				<Link to="/shop">
					<img src="images/gallery-02.jpg" className="card-img-top" alt="IMG-BANNER" />
					<div className="card-body">
						<p className="card-text">{props.productName}</p>
					</div>
					<div className="card-footer">
						<button className="btn btn-primary">Shop Now</button>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default product;