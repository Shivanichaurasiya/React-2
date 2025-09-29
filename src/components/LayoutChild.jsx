import React from 'react'

const LayoutChild = (props) => {
  return (
    <div>
      <h1>I am {props.name}</h1>
      {props.children}
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

export default LayoutChild
