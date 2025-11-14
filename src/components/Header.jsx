// src/components/Header.jsx
import hero from '../assets/img/header.jpg'

export default function Header() {
  return (
    <header>
      <img
        src={hero}
        alt="Pizza header"
        className="img-fluid w-100"
        style={{ maxHeight: '300px', objectFit: 'cover' }}
      />

      <div className="text-center py-4">
        <h1 className="fw-bold">¡Pizzería Mamma Mía!</h1>
        <p className="text-muted fs-5">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  )
}
