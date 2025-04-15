import React, { useState } from 'react'
import Button from './componet/button';
import Decreasebtn from './componet/Decreasebtn';

const app = () => {

  const [count, setCount] = useState(0)


  function increment() {
    setCount(count + 1);
    if (count > 4) {
      setCount(0)
    }

  }
  function decrement() {
    setCount(count - 1);
    if (count < -9) {
      setCount(0)
    }


  }

  return (
    <div>
      <span>counter = {count}</span>
      <br />

      <Decreasebtn
        decrease={decrement}/>
      <Button
        increase={increment} />
    </div>
  )
}

export default app