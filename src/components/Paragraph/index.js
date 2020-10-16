import React from 'react'

export default function Paragraph({text}) {

    const text_display= text?.map((par, index)=>
        <p key={index}>
           {par} 
        </p>
     ) 

    return (
        <>
        {text_display}
    </>
    )
}
