import React from 'react'
function App() {
  // Example #1
  const users = [
    {
      username: "Anthony Nchore",
      email: "kayanchore@gmail.com",
      location: "Nairobi"
    },
    {
      username: "Mokaya Nchore",
      email: "kayanchore@gmail.com",
      location: "Nakuru"
    },
    {
      username: "Anthony kaya",
      email: "kayanchore@gmail.com",
      location: "Mombasa"
    }
  ]

  return (
    <div>
      {users.map((user)=>(
        <ul key = {user.username}>
          <li>{user.username}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </div>
  )
}

export default App
