import React from 'react';
import './Project.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pryanam  from './Assests/prayanam-web.png'
import siic from './Assests/siic.png'
const images = [
    {
      imgUrl: pryanam,
      caption: 'This project envisions creating a generation of environmentally conscious citizens who are equipped with the knowledge and tools to make eco-friendly choices in their daily lives. By fostering a sense of responsibility and unity, we aim to contribute to the preservation of our planet for current and future generations.This project envisions creating a generation of environmentally conscious citizens who are equipped with the knowledge and tools to make eco-friendly choices in their daily lives. By fostering a sense of responsibility and unity, we aim to contribute to the preservation of our planet for current and future generations.This project envisions creating a generation of environmentally conscious citizens who are equipped with the knowledge and tools to make eco-friendly choices in their daily lives. By fostering a sense of responsibility and unity, we aim to contribute to the preservation of our planet for current and future generations.',
      
    },
    {
      imgUrl: siic,
      caption: 'The SIIC Blog and Events Update project is aimed at enhancing the online presence and engagement of the Startup Incubation and Innovation Centre. The project focuses on creating a dynamic web application to publish and manage blog articles and event announcements. The technology stack chosen for this project includes React.js for interactive components, HTML for structuring content, and CSS for styling. React.js: Used to build the front-end components and provide a dynamic and interactive user interface.HTML: Used for structuring the content and defining the layout of web pages.CSS: Used to style the application, ensuring a visually pleasing and responsive design.'
    },
    {
      imgUrl: siic,
      caption: 'The SIIC Blog and Events Update project is aimed at enhancing the online presence and engagement of the Startup Incubation and Innovation Centre. The project focuses on creating a dynamic web application to publish and manage blog articles and event announcements. The technology stack chosen for this project includes React.js for interactive components, HTML for structuring content, and CSS for styling. React.js: Used to build the front-end components and provide a dynamic and interactive user interface.HTML: Used for structuring the content and defining the layout of web pages.CSS: Used to style the application, ensuring a visually pleasing and responsive design.'
    },
    // Add more images with captions
  ];
const Project = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='project'>
            <div className='line'>

            </div>
            <div className='heading'>
                <h1>Project</h1>
                </div>
                <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <div>
            <img src={image.imgUrl} alt={image.caption} />
            </div>
            <div className='pdesc'>
            <p className="caption">{image.caption}</p>
            </div>
            
           
          </div>
        ))}
      </Slider>
    </div>

             
            
        </div>
    );
}

export default Project;
