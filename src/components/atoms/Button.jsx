import React from 'react'

export default function Button({label, bg, hover, type, w}) {
  return (
    <>
    <button className={"bg-" +bg+ " hover:bg-" +hover+ " text-white font-bold py-2 px-5 rounded-md transition-all duration-300 uppercase shadow-md w-"+w || "inherit"} type={type || "button" }>{label}</button>
    </>
  )
}
