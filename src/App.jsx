import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import RoutesIndex from '@/routes/Index'

function App () {
  return (
    <div className='bg-dark'>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
