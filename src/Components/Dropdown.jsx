import { useState } from 'react'
import '../styles/Dropdown.css'

function Dropdown({data,id}) {

  return (
    <div className="Dropdown">
      <select id={id}>
         {data.map((ele,id) => {return<option key={id} value={ele}>{ele}</option>})} 
      </select>
    </div>
  )
}

export default Dropdown