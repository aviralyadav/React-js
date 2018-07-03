import React from 'react';
import { Link } from 'react-router-dom';

const product = props => {
    return (
            // <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto" style={{'paddingLeft':'1%','paddingRight':'1%'}}>
			// 			<div className=" wrap-pic-w" >
							// <img src="images/banner-01.jpg"  class="card-img-top" alt="IMG-BANNER" />
							// <Link to="/shop" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							// 	<div className="block1-txt-child1 flex-col-l">
							// 		<span className="block1-name ltext-102 trans-04 p-b-8">
							// 			Women
							// 	    </span>
							// 		<span className="block1-info stext-102 trans-04">
							// 			{props.productName}
							// 	    </span>
							// 	</div>
							// 	<div className="block1-txt-child2 p-b-4 trans-05">
							// 		<div className="block1-link stext-101 cl0 trans-09">
							// 			Shop Now
							// 	</div>
							// 	</div>
							// </Link>
			// 			</div>
			// </div>
            <div className="col-lg-4 mb-4">
            <div className="card h-100">
            
              {/* <h4 class="card-header">{props.productName}</h4> */}
              <Link to="/shop">
              <img src="images/banner-01.jpg"  className="card-img-top" alt="IMG-BANNER" />
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