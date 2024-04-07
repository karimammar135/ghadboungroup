import React from 'react'

import { useParams } from 'react-router-dom'

export default function Gallery() {
  const { category } = useParams()
  console.log(`parameter: ${category}`)

  return (<h1>Gallery {category}</h1>)
}
