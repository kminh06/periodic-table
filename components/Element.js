import React from 'react'
import { useRouter } from 'next/router'

export default function Element(props) {
  const element = props.element
  const router = useRouter()
  const style = {
    gridRow: element.period,
    gridColumn: element.group
  }
  
  return (
    <div className='element' key={element.atomic_number} style={style} onClick={(e) => {
      e.preventDefault();
      router.push('/element/' + element.atomic_number)
    }} >
      <p>{element.symbol}</p>
      <p>{element.atomic_number}</p>
    </div>
  )
}
