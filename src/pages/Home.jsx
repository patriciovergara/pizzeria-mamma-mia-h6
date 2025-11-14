// src/pages/Home.jsx
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { pizzas } from '../pizzas'

export default function Home() {
  return (
    <>
      <Header />

      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pz) => (
            <div key={pz.id} className="col-12 col-sm-6 col-lg-4">
              <CardPizza {...pz} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
