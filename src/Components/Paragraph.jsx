import { useState } from 'react'
import '../Styles/Paragraph.css'

function Paragraph({text}) {

  return (
    <div className="Paragraph" >
      <p>Una pagina che sfrutta Api di Chuck Norris per generare un testo</p>
      <p>{text}</p>
    </div>
  )
}

export default Paragraph