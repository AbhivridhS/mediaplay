import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../assets/new-gif.gif'
import { Card } from 'react-bootstrap'
import image1 from '../assets/images.jpeg'
import image2 from '../assets/im2.jpeg'
import image3 from '../assets/im3.jpeg'
const Landing = () => {
  return (
    <div style={{ paddingTop: "100px" }} className='container'>
      {/* landing part */}
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3 >welcome to<span className='text-warning'>media player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quisquam dolorem eius voluptates consequuntur. Laborum, similique magnam aliquam obcaecati dolorem velit fugiat hic explicabo ut fuga magni optio fugit eos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus recusandae nisi, voluptas sed aliquam suscipit dolorem blanditiis praesentium eum rem quae reiciendis illo pariatur minima? Ex vero non laborum quibusdam.</p>
          <Link to={'/home'} className='btn btn-info'>Get started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img className='ms-5' src={gif} alt='Landing img' />
        </div>
      </div>
      <div className='ms-5 my-5 row align-items-center'>
        <h3 className='text-center' >features</h3>
        <div className='row mt-5'>
          <div className='col lg-4'>
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant='top' height={'250px'} src={image1} />
              <Card.Body>
                <Card.Title>Manging videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div className='col lg-4'>
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant='top' height={'250px'} src={image2} />
              <Card.Body>
                <Card.Title>Manging videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
          <div className='col lg-4'>
            <Card className='p-2' style={{ width: '20rem' }}>
              <Card.Img variant='top' height={'250px'} src={image3} />
              <Card.Body>
                <Card.Title>Manging videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='m-4 row align-items-center justify-content-evenly border rounded p-3'>
        <div className='col-lg-6'>
          <h3 className='text-warning'>Simple,Fast and Powerful</h3>
          <p className='text-white'><span className='fs-5'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae laborum obcaecati nobis, maxime molestias eligendi quisquam facere optio illum rem nesciunt, autem fugiat rerum aut, </p><br />
          <p className='text-white'><span className='fs-5'>Categorise Videos:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae laborum obcaecati nobis, maxime molestias eligendi quisquam facere optio illum rem nesciunt, autem fugiat rerum aut, </p><br />
          <p className='text-white'><span className='fs-5'>Managing History:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae laborum obcaecati nobis, maxime molestias eligendi quisquam facere optio illum rem nesciunt, autem fugiat rerum aut, </p>
        </div>
        <div className='col-lg-6'><iframe className='rounded m-4' width="600" height="475" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Landing