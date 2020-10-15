import React from 'react'
import techstacks from '../../../data/techstack'
import style from './style'
import './style.css'

export default function TechstackImage() {
    

    const techstack_list= Object.keys(techstacks).map((key, index)=>
        
 
         <img key={index} className='my_stack_logo_middle' style={style.my_stack_logo} src={techstacks[key]} alt={key}></img>
    )
    return (
        <>
        {techstack_list}
        </>

    )
}
