import React, { Component } from 'react';
import Home from './Home';

class HomeContainer extends Component {
    render() {
        const data={
            header1: 'Our Interesting History',
        }
        return (
        <div>
            <Home header={data} />
        </div>
        )
    }
}
export default HomeContainer
