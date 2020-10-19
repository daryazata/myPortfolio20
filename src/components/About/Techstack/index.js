import React from 'react'
import techstacks from '../../../data/techstack'
import style from './style'
import './style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function TechstackImage() {
    

    const techstack_list= Object.keys(techstacks).map((key, index)=>
        
    <LazyLoadImage className='my_stack_logo_middle'
    key={index}
    style={style.my_stack_logo}
    src={techstacks[key]} 
    alt={key} title={key}
    />
 
        //  <img key={index} className='my_stack_logo_middle' style={style.my_stack_logo} src={techstacks[key]} alt={key} title={key}></img>
    )
    return (
        <>
        <h2 style={{fontFamily: 'Quicksand, sans-serif',
                        fontWeight:'bold',
                        margin:'3rem 0'
    
    }}   >Technologies I worked with:</h2>
        <div>
            
            {techstack_list}
            </div>
        </>

    )
}
