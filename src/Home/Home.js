import React, { Component } from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Fab from'@material-ui/core/Fab'
import Image1 from '../Images/image1.jpg'
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

const ImageHeader = styled.div`
padding: 10px;
`
const PaperHeader = styled.div`
display:grid;
grid-gap: 8px;
grid-template-columns: repeat(4, 1fr);
`
class Home extends Component {
    componentDidMount () {
        console.log('test did mount')
    }
    
    render () {
        const { header} = this.props
        return (
            <React.Fragment>
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
                <div style= {{ padding: '0px 10%'}} >
                    <Fab>test</Fab>
                <PaperHeader>
                <Paper elevation={10}> 
                    <ImageHeader>
                    <img src={Image1} />
                    </ImageHeader>
                </Paper>
                    <Paper> 
                    <ImageHeader>
                    <img src={Image1} />
                    </ImageHeader>
                    </Paper>
                    <Paper> 
                    <ImageHeader>
                    <img src={Image1} />
                    </ImageHeader>
                    </Paper>
                    <Paper> 
                    <ImageHeader>
                    <img src={Image1} />
                    </ImageHeader>
                    </Paper>
                    </PaperHeader>
                    </div>
                </React.Fragment>
            
        )
    }
}

export default Home