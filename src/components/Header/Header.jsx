import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import './Header.scss'
import logo from '@/assets/e-commerce.svg'
import shopping from '@/assets/icons/shopping_cart.svg'

export const Header = () => {
  const { isAuth, logout } = useAuthContext()

  const linkIsActive = (isActive, isPending) => {
    if (isPending) return 'header__item-link'
    if (isActive) return 'header__item-link header__item-link--is-active'
    else return 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink href='/' className='header__logo'><img className='mb-4' src={logo} alt='' width='174' height='32' /></NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink
            to='/' className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >Home
          </NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink
            to='/dashboard' className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >Dashboard
          </NavLink>
        </li>

        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/secret' className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Secret
                </NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink
                  to='/' className='header__item-link'
                  onClick={logout}
                >Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/login' className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Login
                </NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink
                  to='/signup' className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Signup
                </NavLink>
              </li>
            </>)}
        <li className='header__list-item'>
          <NavLink
            to='/' className='header__item-link'
          ><img className='mb-4' src={shopping} alt='' width='24' height='24' />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
