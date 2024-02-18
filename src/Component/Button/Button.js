import React from 'react'


const Button = (prpos) => {
  console.log("Buttn js");
  return (
    <div>
        <button className='btn btn-outline-success btn-sm m-1' onClick={prpos.eventHandler}>{prpos.children}</button>
    </div>
  )
}

export default Button;  