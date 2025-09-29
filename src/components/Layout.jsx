import React from 'react'
import LayoutChild from './LayoutChild'

const Layout = () => {
  function handleClick() {
    alert("button was clicked")
  }

  return (
    <div>
      <LayoutChild name="shivani" handleClick={handleClick} text="Click me">
        <h1>my name is shivani</h1>
      </LayoutChild>
    </div>
  )
}

export default Layout
