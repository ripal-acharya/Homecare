import React from "react"
import { Link } from "gatsby"
import Search from "../components/search"


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `1rem auto`, maxWidth: 1000, padding: `0 1rem` }}>
    <header style={{ marginBottom: `2rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Homecare2go</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">List On Your business on Homecare2go</ListLink>
        <ListLink to="/login/">Login</ListLink>
        <ListLink to="/signup/">Signup</ListLink>
      </ul>
    </header>
    {children}
    
    <Search/>
  </div>
)