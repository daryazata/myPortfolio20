import React from 'react'

export default function Paragraph({text}) {

    const text_display= text?.map((par, index)=>
        { if(par instanceof Array){

        const li_elem= par.map((elem, index)=> <li key={index}>{elem}</li>)
          return (
              < ul key={index*7} >
                  {li_elem}
              </ul>
          )  
        }else{
        
            return (<p key={index}>
            {par} 
            </p>)

        }
        }
     ) 

    return (
        <>
        {text_display}
    </>
    )
}
