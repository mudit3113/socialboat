import React from 'react'
import './header.css'

function Header({ handleSearch, searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    handleSearch(query)
  }

  return (
    <header className="header">
      <img
        src="https://ik.imagekit.io/socialboat/Component_6__1__CgPWY-2O0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663242315232"
        alt="Logo"
      />
      <input
        type="text"
        placeholder="Search videos..."
        value={searchQuery}
        onChange={handleChange}
      />
      <img
        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        alt="Profile"
      />
    </header>
  )
}

export default Header
