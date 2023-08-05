import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='Contact'>
            <div className='line'> 

            </div>
            <div className='heading'>
                <h1>Contact</h1>
                </div>

            <div className='Social-logo'>
                <div className='contact'>
                <img src={require('./phone.png')} alt='phone'/>
                <h2>9398112724</h2>
                </div>
                <div className='contact'>
                <img src={require('./google.png')} alt='google'/>
                <h2>sannithnalluri@gmail.com</h2>
                </div>
               
                
                <div>
               <a href='https://www.linkedin.com/in/sannith-kumar-nalluri/'><img src={require('./linkedin.png')} alt='linkedin'/></a> 
                <a href='https://github.com/Sannith673'> <img src={require('./github2.png')} alt='github'/></a>  
                <img src={require('./twitter.png')} alt='twitter'/>
                </div>
              
            </div>
        </div>
    );
}

export default Contact;
