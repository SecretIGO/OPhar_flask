import { useState, useEffect } from "react"

export default function Home() {

  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("/api/test").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  
  return (
    <main>
      <h1>
        Hello world!
     </h1>

    </main>
  )
}
