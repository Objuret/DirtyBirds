import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './views/Home'
import Events from './views/Events'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
