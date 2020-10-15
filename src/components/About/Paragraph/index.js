//react-native rfn
//react rfc

import React from 'react'
import about_me from '../../../data/about_me'


export default function Paragraph() {

    const paragraph_list = Object.keys(about_me).map((key, index)=>
    
        <p  key={index} >{about_me[key]}</p>
    )
    return (
        <>
        
        {paragraph_list}
        </>
    )
}
