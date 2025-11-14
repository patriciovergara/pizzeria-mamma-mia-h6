// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { total } = useCart()
  const totalCLP = total.toLocaleString('es-CL')

  const getClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold" to="/">
        Pizzería Mamma Mía
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <NavLink className={getClass} to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={getClass} to="/register">Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={getClass} to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={getClass} to="/profile">Profile</NavLink>
          </li>
        </ul>

        <Link className="btn btn-outline-warning" to="/cart">
          🛒 Total: ${totalCLP}
        </Link>
      </div>
    </nav>
  )
}
