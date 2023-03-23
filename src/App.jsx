import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import RoutesIndex from '@/routes/Index'
import { AuthProvider } from '@/context/AuthContext'

function App () {
  return (
    <div className='bg-white'>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <RoutesIndex />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
