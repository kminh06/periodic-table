import React from 'react'
import Element from './Element'
import data from '../data.json' assert {type: 'json'};

export default function Table(props) {
  let elements = []
  for (let i = 0; i < 36; i++) {
    elements.push(data.elements[i])
  }

  return (
    <div className='Table'>
      {elements.map((element) => <Element element={element} key={element.atomic_number} />)}
    </div>
  )
}
