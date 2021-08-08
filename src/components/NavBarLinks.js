import {NavLink } from 'react-router-dom'

export default function NavBarLinks() {
    return ([
        <NavLink key="0" className="link-class" to="/home">Home</NavLink>,
        <NavLink key="1" className="link-class" to="/search">Search</NavLink>,
        <NavLink key="2" className="link-class" to="/favourites">favourites</NavLink>
    ]
    )
}