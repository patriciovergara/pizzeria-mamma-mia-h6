// src/components/CardPizza.jsx
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CardPizza({ id, name, price, img, ingredients }) {
  const { addToCart } = useCart()

  return (
    <div className="card shadow-sm h-100">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>

        <p className="text-muted text-center m-0">Ingredientes:</p>
        <ul className="list-unstyled small text-center">
          {ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>

        <h5 className="text-center fw-bold">
          Precio: ${price.toLocaleString('es-CL')}
        </h5>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <Link className="btn btn-outline-secondary btn-sm" to={`/pizza/${id}`}>
          Ver Más 👀
        </Link>

        <button
          className="btn btn-dark btn-sm"
          onClick={() => addToCart({ id, name, price, img })}
        >
          Añadir 🛒
        </button>
      </div>
    </div>
  )
}

CardPizza.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
}
