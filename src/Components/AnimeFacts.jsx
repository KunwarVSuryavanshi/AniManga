import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import getAnimeFacts from '../Services/GetAnimeFacts.service'

function AnimeFacts() {
  const [facts, setFacts] = useState('')
  
  useEffect(() => {
    let data = getAnimeFacts()
    // let data = async () => { await getAnimeFacts()}
    setFacts(data)
  },[])

  useEffect(() => {
    console.log("Facts ----->",facts)
  },[facts])

  return (
    <div>
      <Typography mt={2}>  
        Hello from anime facts
      </Typography>
    </div>
  )
}

export default AnimeFacts