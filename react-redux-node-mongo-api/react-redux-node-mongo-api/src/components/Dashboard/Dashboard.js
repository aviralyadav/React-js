import React, { Component } from 'react';

class Dashboard extends Component {
    state = {  }
    render() {
        return (
            <div style={{minHeight: '492px'}}>
            <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ 'backgroundImage': "url('images/bg-01.jpg')" }}>
                    <h2 className="ltext-105 cl0 txt-center">
                        Dashboard
		            </h2>
                </section>
                <p style={{marginTop:'20px'}}>Welcome Back Admin!</p>
            </div>
        );
    }
}

export default Dashboard;