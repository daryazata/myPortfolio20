import React from 'react'
import style from './style'
import techstack_all from '../../../../data/techstack'
import './style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';



export default function ProjectTechstack({techstack}) {


    const display_techstack= techstack?.map((ts , index)=>{
     
        for(const key in techstack_all ){
      
            if(key==ts){

                return(
                    <LazyLoadImage
                    className='stack_logo' key={index} title={key} style={style.image_techstack} src ={techstack_all[key]}
                    />
                )
            }
        }

    })

    return (
        <div style={style.container}>
            {display_techstack}
        </div>
    )
}
