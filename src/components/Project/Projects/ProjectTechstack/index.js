import React from 'react'
import style from './style'
import techstack_all from '../../../../data/techstack'



export default function ProjectTechstack({techstack}) {


    const display_techstack= techstack?.map((ts , index)=>{
     
        for(const key in techstack_all ){
      
            if(key==ts){

                return(
                    <img key={index} style={style.image_techstack} src ={techstack_all[key]}/>
                )
            }
        }

    })

    return (
        <div style={style.container}>
            {/* <h3>ProjectTechstack</h3> */}
            {display_techstack}
        </div>
    )
}
