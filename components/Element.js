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
      router.push('/product/' + element.atomic_number)
    }} >
      <div className='img-container'><img src={element.image} fill={true} className='image' alt='element' /></div>
      <span style={{display: 'flex', padding: '0 4px'}}>
        <span style={{marginRight: 'auto'}}>{element.symbol}</span>
        <span style={{justifySelf: 'flex-end'}}>${element.atomic_number}</span>
      </span>
    </div>
  )
}
