import React, { Component } from 'react'

export default class Youtube extends Component {
    render() {
        return (
            <div>
                <button>Get youtube videos</button>
                <div className="youtube">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-ZoVCLmPzSU" 
                    frameBorder="0" 
                    allowFullScreen>
                    </iframe>
                </div>
            </div>
        )
    }
}
