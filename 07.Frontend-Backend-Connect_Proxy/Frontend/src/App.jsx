import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

// vite config file me proxy add krdi.

function App() {
  const [fruits, setFruits] = useState(null)

  useEffect(() => {
    getFruits();
  }, [])

  const getFruits = async () => {
    try {
      const fruitsGet = await axios.get('/api/fruits');
      setFruits(fruitsGet.data);
      // console.log(fruitsGet.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("fruits", fruits);
  return (
    <>
      <h2>Fruits</h2>
      {
        fruits.map((data) => {
          return <ul style={{
            listStyle: 'none'
          }}>
            <li>{data?.id}</li>
            <li>{data?.name}</li>
          </ul>
        })
      }
    </>
  )
}

export default App
