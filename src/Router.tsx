import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from './pages/Home'
import { CompleteOrder } from './pages/CompleteOrder'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/completeOrder" element={<CompleteOrder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
