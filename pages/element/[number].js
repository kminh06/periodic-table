import React from 'react'
import { useRouter } from 'next/router'
import data from '../../data.json' assert {type: 'json'}
import Head from 'next/head'
import Header from '../../components/Header'

export default function Item() {
  const router = useRouter()
  const { number } = router.query
  const element = data.elements[(number - 1)]
  console.log(element)
  
  return (
    <div className=''>
      <Head>
        <title>{element.name} | Atomic Kicks</title>
      </Head>
      <Header />
      <h1>{element.name}</h1>
      <p>Brand: {element.brand}</p>
      <p>Size: {element.size}</p>
      <p>Color: {element.color}</p>
      <p>Weight: {element.weight}</p>
    </div>
  )
}
