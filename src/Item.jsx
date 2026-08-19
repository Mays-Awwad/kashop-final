import React from 'react'

export default function item({year,children}) {
  return (
    <div>
         <h2>item {year}</h2>
         {children}
    </div>
  )
}
