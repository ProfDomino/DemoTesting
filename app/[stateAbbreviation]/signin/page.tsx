/**
 * an effort to understand useState better
 * https://www.freecodecamp.org/news/usestate-hook-3-different-examples/
 * 
 * Note - this doesn't compile out of the box from the url
 **/

// not part of the tutorial but this tutorial is for 
// client-side rendering and nextjs is server-side 
// rendering by default
"use client";

import React, { useState } from 'react'


const Signin = () => {
    console.log("asdf")
    //ensure our initial state is false
    const [signedin, setSignedin] = useState(false)

    // the tutorial had 2 different handlers for signing out and in
    // but I wanted to see how parameters worked so I adjusted
    const handleClick = (value:boolean) => {
        console.log("asdf")
        setSignedin(value)
    }
  return (
      // if `signedin` == true...
      // show the "good to see you in here" text and show the "sign out" button
      // else....
      // show the "please sign in" text and the "sign in" button
      // clicking the button changes what `signedin` equals.
         <div>
           { signedin ? ( 
        <div>
            <button type="button" onClick={() => handleClick(false)}>Sign Out</button>
            <p>Welcome back, good to see you in here</p>
        </div>) :
        
        (<div>
            <button type="button"onClick={() => handleClick(true)}>Sign In</button>
            <p>Please Sign in</p>
        </div>)
           }
        </div>
  )
}

export default Signin
