import React from 'react'
import { useRouter } from 'next/router'
import data from '../../data.json' assert {type: 'json'}
import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../styles/Shoe.module.css'
import Legend from '../../components/Legend'

export default function Item() {
  const router = useRouter()
  const { number } = router.query
  const element = data.elements[(number - 1)]
  console.log(element)
  
  return (
    (element != undefined) ? <div className='Page'>
      <Head>
        <title>{element.name} | Atomic Kicks</title>
      </Head>
      <Header />
      <div className={styles.page}>
        <div className={styles.image_container}>
          <img className={styles.image} src={element.image} alt='shoe' />
        </div>
        <div className={styles.details}>
          <div>
            <span className={styles.name}>{element.name}</span>
            <div className={styles.brand}>{element.brand}</div>
          </div>
          <div className={styles.info}>
            <p>$ {element.atomic_number}</p>
            <p>Color: {element.color}</p>
            <div className={styles.image_container} style={{height: '70px', width: '70px', backgroundColor: 'lightgrey', border: '1px lightgrey solid', borderBottom: '2px black solid'}}>
              <img className={styles.image} src={element.image} alt='shoe' />
            </div>
            <p>Size: {element.shoe_size}</p>
            <div className={styles.stats}>
              <span style={{fontSize: '24px', fontWeight: '700'}}>Stats & Specs</span>
              <ul>
                <li>Type: {element.type}</li>
                <li>Weight: {element.shoe_weight}</li>
              </ul>
              <p style={{textAlign: 'left'}}>This shoe is inspired by the element {element.name}. {element.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Legend />
    </div> : <></>
  )
}
