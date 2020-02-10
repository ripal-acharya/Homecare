import React from "react"
import { Link } from "gatsby"




export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
    <header style={{ marginBottom: `2rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Homecare2go</h3>
      </Link>

    </header>
    {children}
  </div>
)