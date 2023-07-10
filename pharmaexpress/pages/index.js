import React, { useState } from 'react';
import axios from 'axios';

function MyForm() {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8080/api/submit_username', { username }, {
      headers: {
        'Content-Type': 'application/json'
      }}
      )
      .then(response => {
        console.log('Success:', response.data);
        setSubmittedUsername(response.data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      
      {submittedUsername && (
        <div>
          <h2>Submitted Username:</h2>
          <p>{submittedUsername}</p>
          {console.log('Submitted Username:', submittedUsername)}
        </div>
      )}
    </div>
  );
}

export default MyForm;

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
