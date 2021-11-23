
import React from 'react'
import ReactPlayer from 'react-player'
import {Container,Row,Col ,Button} from 'react-bootstrap'
import '../App.css'
import './Style.css'
const Description = (props) => {
    return (
        <div className="description">
          {/* <h1>text{props.match.params.id}</h1>  */}
        <h1>{props.match.params.name}</h1>
        

          


          <Container>
  <Row>
    <Col>  <Button variant="primary" size="lg" onClick={()=>{props.history.goBack()}}>
      Home
    </Button></Col>
    <Col xs={6}>  <p>{props.match.params.descri}</p> </Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col xs={6}><ReactPlayer url={`https://youtu.be/${props.match.params.trailer}`}/></Col>
    <Col></Col>
  </Row>
</Container>
</div>
    )
}

export default Description

