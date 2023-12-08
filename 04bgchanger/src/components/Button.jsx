import React from 'react'

function Button(props) {
  return (
    <button className="outline-none px-4 rounded-2xl text-white shadow-lg py-1" style={{backgroundColor: props.color}}>{props.color}</button>
  )
}

export default Button