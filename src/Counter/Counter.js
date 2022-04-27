import React, { useState } from 'react'
import styled from 'styled-components'
const Counter = () => {
    const [counter,setCounter]=useState(0)
    const increment=_=>setCounter((prev)=>prev + 1)
    const decrement=_=>setCounter((prev)=>prev-1)
    
    const Container = styled.div`
        display:flex;
        justify-content:center;
    `
    
  return (
    <Container>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={counter===0}>-</button>

    </Container>
  )
}
export default Counter