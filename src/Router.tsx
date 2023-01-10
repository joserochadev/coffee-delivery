import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { CompleteOrder } from './pages/CompleteOrder'
import { DefaultLayout } from './layout/DefaultLayout'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/completeOrder" element={<CompleteOrder />} />
          <Route path="/orderConfirmed" element={<OrderConfirmed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
