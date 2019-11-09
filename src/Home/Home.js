import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
padding: 10px;
`
const Body = styled.div`
display: grid;
grid-gap: 10px;
`
const Header = styled.div`
justify-self: Centre;
`
class Home extends Component {
    componentDidMount () {
        console.log('test did mount')
    }
    
    render () {
        const { header} = this.props
        return (
            <Container data-test ='Home'>
                <Header>
                {/* <h1>{header && header.header1}</h1> */}
                <h1>{header.header1}</h1>
                </Header>
                <Body>
                <div> box2</div>
                <div> box3</div>
                </Body>
            </Container>
        )
    }
}

export default Home