import React from 'react'
import Element from './Element'
import data from '../data.json' assert {type: 'json'};

export default function Table(props) {
  let elements = []
  for (let i = 0; i < 36; i++) {
    elements.push(data.elements[i])
  }

  const filter = props.filter

  return (
    <div className='Table'>
      {elements.map((element) => <Element element={element} key={element.atomic_number} />)}
    </div>
  )
}
