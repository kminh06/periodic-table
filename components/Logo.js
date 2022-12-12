import React from 'react'
import { useRouter } from 'next/router';

export default function Logo() {
  const router = useRouter()

  return (
    <div className='logo' onClick={(e) => {
      e.preventDefault;
      router.push('/')
    }}>ATOMIC KICKS</div>
  )
}
