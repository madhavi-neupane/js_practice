import React from 'react'
import UserList from './UserList' // Import the UserList component
import First from './First'
import Hero from './Hero'
import Body from './Body'

// import React from 'react'

function App() {
  return (
    <div className="App">
      <First /> {}
      <UserList /> {/* Use the UserList component */}
    </div>
  )
}

function Content() {
  return (
    <div className="App">
      <First /> {}
      <Hero /> {}
      <Body /> {}
    </div>
  )
}

export default Content
// export default App
