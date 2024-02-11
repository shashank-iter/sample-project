import React from 'react'
import Test from './test'
import dynamic from 'next/dynamic'

function index() {
  const Test = dynamic(() => import('./test'), { ssr: false })
  return (
    <div>index
    
    <Test />
    </div>
  )
}

export default index