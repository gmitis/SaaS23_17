import React from 'react'

import { Carousel, Container } from 'react-bootstrap'

import './previewCarousel.css'

import img1 from '../../assets/line_chart.png'
import img2 from '../../assets/multi_axes_line_chart.png'
import img3 from '../../assets/radar.png'


const PreviewCarousel = () => {
  return (
    <>
      <Container className='header-container'><h2>Welcome to MyCharts!</h2></Container>
      <Container className='carousel-container'>
        <Carousel>
          <Carousel.Item>
            <Container className='carousel-img'><img src={img1} alt="Line Chart" /></Container>
            <Carousel.Caption bsPrefix='my-carousel-caption'>
              <h3>Line Chart</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='carousel-img'><img src={img2} alt="Multi Axes Line Chart" /></Container>
            <Carousel.Caption bsPrefix='my-carousel-caption'>
              <h3>Multi Axes Line Chart</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container className='carousel-img'><img src={img3} alt="Radar Chart" /></Container>
            <Carousel.Caption bsPrefix='my-carousel-caption'>
              <h3>Radar chart</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel >
      </Container >
    </>
  )
}

export default PreviewCarousel