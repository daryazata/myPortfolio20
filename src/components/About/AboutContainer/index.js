import React from 'react'
import style from './style'

export default function AboutContainer() {
    return (
        <div style={style.container}>
           <h2 style={style.container_h2}>Hi there, Im Darya!</h2> 
            <p style={style.container_h2}>{`I'm a passionate JS developer. I have almost
                finished my Computer Scince Studies at the HTW in Berlin.
                Not long ago I discovered JS  and I simply fell in love with it. Since then I use JS and its frameworks wheneverI can.
                And everytime I get to know it better, and how powerfully the JS world nowadays is. 
                `}</p>
        </div>
    )
}

