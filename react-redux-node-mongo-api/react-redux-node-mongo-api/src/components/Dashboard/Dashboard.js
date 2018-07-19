import React, { Component, Fragment } from 'react';
import requireAuth from '../requireAuth';


class Dashboard extends Component {
    state = {}
    gotoCart = () => {
        // this.props.history.push('/cart?id=12345&name=aviral');
        this.props.history.push({
            pathname: '/cart',
            search: '?id=12345&name=aviral'
        });
    }
    render() {
        return (
            <Fragment>
                <div style={{ minHeight: '492px' }}>
                    <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ 'backgroundImage': "url('images/products/bg-01.jpg')" }}>
                        <h2 className="ltext-105 cl0 txt-center">
                            Dashboard
		            </h2>
                    </section>
                    <p style={{ marginTop: '20px' }}>Welcome Back User!</p>
                    <p onClick={this.gotoCart} style={{ 'cursor': 'pointer' }}>Cart</p>
                </div>
            </Fragment>
        );
    }
}

export default requireAuth(Dashboard);