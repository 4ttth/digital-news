import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="outline">Button</Button> // This is a button component from the UI library
    </>
  )
}

export default App
