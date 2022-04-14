import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
// import getAnimeFacts from '../Services/GetAnimeFacts.service'

function AnimeFacts() {
  // const [facts, setFacts] = useState('')
  
  useEffect(() => {
    //let data = getAnimeFacts()
    // let data = async () => { await getAnimeFacts()}
    // setFacts(data)
  },[])

  return (
    <div>
      <Typography mt={2}>  
        Hello from anime facts
      </Typography>
    </div>
  )
}

export default AnimeFacts