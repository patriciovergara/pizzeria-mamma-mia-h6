// src/pages/Pizza.jsx
import { useParams } from 'react-router-dom'
import { pizzas } from '../pizzas'

export default function Pizza() {
  const { id } = useParams()
  const numericId = Number(id)

  const pizza = pizzas.find((p) => p.id === numericId) || pizzas[0]

  if (!pizza) return null

  return (
    <div className="container py-4" style={{ maxWidth: 960 }}>
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-12 col-md-6">
          <h2>{pizza.name}</h2>
          {pizza.desc && (
            <p className="text-muted mb-3">{pizza.desc}</p>
          )}

          <h5>Ingredientes</h5>
          <ul className="list-unstyled mb-3">
            {pizza.ingredients?.map((ing) => (
              <li key={ing}>🍕 {ing}</li>
            ))}
          </ul>

          <h4>
            Precio: <strong>${pizza.price.toLocaleString('es-CL')}</strong>
          </h4>
        </div>
      </div>
    </div>
  )
}
