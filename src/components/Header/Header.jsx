import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '@/assets/e-com_2.svg'

export const Header = () => {
  return (
    <nav className='header'>
      <Link href='/' className='header__logo'><img className='mb-4' src={logo} alt='' width='40' height='40' />COMMERCE</Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link header__item-link--is-active'>Home</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/dashboard' className='header__item-link'>Dashboard</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/secret' className='header__item-link'>Secret</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/login' className='header__item-link'>Login</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/signup' className='header__item-link'>Signup</Link>
        </li>
      </ul>
    </nav>
  )
}
