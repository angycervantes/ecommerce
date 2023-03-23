import './Footer.scss'
import facebook from '../../assets/redesSociales/facebook.svg'
import instagram from '../../assets/redesSociales/instagram.svg'
import linkedIn from '../../assets/redesSociales/in.svg'
import twitter from '../../assets/redesSociales/twitter.svg'

export const Footer = () => {
  return (
    <div className='footer bg-dark'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <span className='mb-3 mb-md-0 text-white'>©2017–2022</span>
        </div>

        <ul className='nav col-md-6 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'><img className='mb-4' src={facebook} alt='' /></li>
          <li className='ms-3'><img className='mb-4' src={instagram} alt='' /></li>
          <li className='ms-3'><img className='mb-4' src={twitter} alt='' /></li>
          <li className='ms-3'><img className='mb-4' src={linkedIn} alt='' /></li>
        </ul>
      </footer>
    </div>
  )
}
