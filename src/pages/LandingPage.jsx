import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl= useNavigate()

  return (

    <>
    <Row className='mt-5 mb-5 d-flex justify-content-center align-items-center'>
      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Media Player</span> </h3>
        <p className='mt-3' style={{textAlign:'justify'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga 
          soluta vero repellendus explicabo. Ex non eveniet natus tenetur suscipit officia 
          at rem, debitis eos, repellat ducimus minus quo praesentium!
        </p>
        <Button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-warning '>Get Started <i class="fa-solid fa-arrow-right"></i></Button>
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </Col>

    </Row>

    <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
      <h3>Features</h3>
      <div className="cards  d-flex justify-content-evenly align-items-center w-100">
      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Categorized video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img style={{width:'100%', height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className='container border border-2 border-secondary rounded w-100 p-5 mt-5 mb-5 d-flex align-items-center justify-content-between'>
      <Row>
        <Col lg={5}>
          <h3 className='text-warning mb-5'> simple fast and powerful</h3>
          <h6 className='mb-3'> <span className='fw-bolder fs-5'>Play everything</span>:
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum molestias enim 
          consectetur excepturi rem, corporis dicta soluta maxime modi error sapiente id quam alias eos ad quos doloribus eius.</h6>
          <h3 className='text-warning mb-5'> simple fast and powerful</h3>
          <h6 className='mb-3'> <span className='fw-bolder fs-5'>Play everything</span>:
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum molestias enim 
          consectetur excepturi rem, corporis dicta soluta maxime modi error sapiente id quam alias eos ad quos doloribus eius.</h6>
          <h3 className='text-warning mb-5'> simple fast and powerful</h3>
          <h6 className='mb-3'> <span className='fw-bolder fs-5'>Play everything</span>:
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatum molestias enim 
          consectetur excepturi rem, corporis dicta soluta maxime modi error sapiente id quam alias eos ad quos doloribus eius.</h6>
           </Col>

        <Col></Col>

        <Col lg={6}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/szvt1vD0Uug?si=ENKrQfLmBElzjZqd" title="YouTube video player"
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" width="500px" allowfullscreen></iframe>
        </Col>

      </Row>
    </div>
    
    </>
  )
}

export default LandingPage