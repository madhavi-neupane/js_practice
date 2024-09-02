import React, { useState, useEffect } from 'react'

const UserList = () => {
  const [users, setUsers] = useState([]) // State to hold the list of users
  const [loading, setLoading] = useState(true) // State to handle loading

  // Function to fetch user data from the API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5') // API call to fetch 5 random users
      const data = await response.json() // Convert response to JSON
      setUsers(data.results) // Update users state with fetched data
      setLoading(false) // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching users:', error) // Handle errors
    }
  }

  useEffect(() => {
    fetchUsers() // Fetch users when the component mounts
  }, [])

  // Render loading text or the list of users
  return (
    <div>
      <div className="testuser">
        <p>one human</p>
        <p>two human</p>
      </div>

      <h1>Random Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <img
                src={user.picture.thumbnail}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <p>
                {user.name.first} {user.name.last}
              </p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList
