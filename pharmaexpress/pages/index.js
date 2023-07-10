import { useState, useEffect } from "react"

export default function Home() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch("http://localhost:8080/api/test").then(
      res => res.json()
    ).then(
      (data) => {
        setUsers(data.users)
        console.log(data.users)
      }
    )
  }, [])
  
  return (
    <div>  
        {users?.length > 0 && users.map(user => (
            <div key={user.id}>{user}</div>
        ))}
    </div>
  )
}

// import { useState, useEffect } from "react"

// export default function Home() {

//   const [data, setMembers] = useState([])

//   useEffect(()=>{
//     fetch("http://localhost:8080/api/test").then(
//       res => res.json()
//     ).then(
//       (data) => {
//         setMembers(data.members)
//         console.log(data.members)
//       }
//     )
//   }, [])
  
//   return (
//     <main>
//       <h1>
//         {
//           data.map((user, index) =>(
//             <div key={index}>{user}</div>
//         ))}
//      </h1>

//     </main>
//   )
// }

