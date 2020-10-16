//react-native rfn
//react rfc

import React from 'react'
import about_me from '../../../data/about_me'
import style from './style'


export default function Paragraph() {

    const paragraph_list = Object.keys(about_me).map((key, index)=>
    
        <p style={{
            // backgroundColor:`rgba(123, ${index*23}, 153, 0.05)`,
        // border:'.1rem solid white',
        // padding:'1rem',
        // borderRadius: '1rem',
        fontFamily: 'Quicksand, sans-serif'
    
    } }  key={index}  >{about_me[key]}</p>
    )
    return (
        <>
        <div style={style.container}>
            {paragraph_list}

        </div>
        </>
    )
}
