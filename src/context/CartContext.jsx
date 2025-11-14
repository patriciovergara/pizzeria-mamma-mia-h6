/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === pizza.id)
      if (found) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, qty: p.qty + 1 } : p
        )
      }
      return [...prev, { ...pizza, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: p.qty - 1 } : p
        )
        .filter((p) => p.qty > 0)
    )
  }

  const total = useMemo(
    () => cart.reduce((sum, p) => sum + p.price * p.qty, 0),
    [cart]
  )

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, total }),
    [cart, total]
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside provider')
  return ctx
}
