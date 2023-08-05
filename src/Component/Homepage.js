import React from 'react';
import './Homepage.css'
import {motion } from'framer-motion'
import About from './About';
import Project from './Project';
import Contact from './Assests/Contact';
import {useState } from 'react';
import { useAnimation } from 'framer-motion';
const Homepage = () => {
         const name = 'SANNITH KUMAR'
        const letter=name.split('')
        const [cliked,iscliked] = useState(false);
        const menuanimation = useAnimation()
    

        const handlecliked=()=>{
            console.log(cliked)
            if(cliked){
                iscliked(false)
            }
            if(!cliked){
                iscliked(true)
            }
            
                if(cliked){
                    menuanimation.start({
                        opacity:1,
                        x:0,
                        transition:{
                            stiffness:100
                        }
                    })}
                if(!cliked){
                    menuanimation.start({
                        x:-500,
                        opacity:0,
                        style:{display:'none'}})
                }
        }


    return (
           
        <div>
            <div className='header-web'>
                <div className='logo'>
                    <img  src={require('../Component/Assests/TECH.png') } alt='mainlogo'/>
                </div>
                <div className='Navbar'>
                    <ul>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Projects'>Projects</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                     </ul>
                </div>
                <div className='sociallogo'>
                     <li><a href='https://www.linkedin.com/in/sannith-kumar-nalluri/'><img src={require('../Component/Assests/linkedwhite.png')} alt='emiallogo'/></a></li>
                    <li><a href='https://github.com/Sannith673'><img src={require('../Component/Assests/githubw.png')} alt='emiallogo'/></a></li>

                </div>
                </div>
                <div className='header-phone'>
                    <div className='phone-header'>
                    <motion.div style={{display:cliked?'block':'none'}}className='menu'>
                        <motion.img onClick={handlecliked} src={require('./Assests/menu2.png')} alt='menu'/>
                    </motion.div>
                    <div className='menu'>
                        <motion.img  onClick={handlecliked} style={{display:cliked?'none':'block'}} src={require('./Assests/cross2.png')} alt='cross'/>
                    </div>
                <div className='logo'>
                    <img  src={require('../Component/Assests/TECH.png') } alt='mainlogo'/>
                </div>
                    </div>
                    
                <motion.div animate={menuanimation}  style={{display:cliked?'none':'block'}}className='Navbar'>
                    <ul>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#About'>About</a></li>
                        <li><a href='#Projects'>Projects</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                     </ul>
                </motion.div>
                <hr/>
                </div>
                <hr/>
                <div className='main-content'>
         
                    <div className='text'>
                        <div className='sub-text'>
                        <h1 >I'M</h1>
                        </div>
                    
                    <div className='name'
                      style={{display:'flex',flexDirection:'row'}}>
                    
                        {letter.map((letter,index)=>{
                            return(
                                  <motion.div  className='nametext' animate={{
                                    y:0,
                                    x:0,
                                    opacity:1,
                                    transition:{
                                        
                                        delay: index * 0.1,
                                        bounce:100
                
                                    }
                                  }}
                                  initial={{
                                    y:110,
                                    x:120,
                                    opacity:0,
                                
                                  }}
                                 >
                                 <h2>{letter}</h2>
                            </motion.div>)
                        })}
                    </div>
                    <div class="marquee">
                        <p>Full stack web developer</p>
                    </div>

                    </div>
                   <div className='image'>
                    <img  src={require('../Component/Assests/myimg.png')} alt='loho'/>
                   </div>
                   
                </div>
                <div className='Scroll'>
                    <h3>Scroll more</h3>
                </div>
        <div className='About' id='About'>
            <About/>
        </div>
        <div className='Project' id='Projects'>
        <Project/>
            
        </div>
        <div className='Contact' id='Contact'>
        <Contact/>
        </div>
        </div>
    );
}

export default Homepage;
