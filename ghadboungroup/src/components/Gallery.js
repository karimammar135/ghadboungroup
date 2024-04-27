import React from 'react'

import { useParams } from 'react-router-dom'
import TopSection from './TopSection'

export default function Gallery() {
  const { category } = useParams()
  console.log(`parameter: ${category}`)

  return (
    <section>
      <TopSection header={`Gallery ${category != undefined && category || ''}`} />
      <h1>Gallery {category}</h1>
    </section>
  )
}
