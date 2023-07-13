import { useState, useEffect } from "react"

const [message, setMessage] = useState("LOADING")

useEffect(() => {
  fetch('http://localhost:8080/api/home').then(
    (response) => response.json())
    .then((data) => {
      setMessage(data.message)
    }
  )
})

export default function Home() {
  return (
    <h1>{message}</h1>
  )
}
