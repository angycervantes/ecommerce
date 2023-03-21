import './Footer.scss'

export const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <span className='mb-3 mb-md-0 text-white'>©2017–2022</span>
        </div>

        <ul className='nav col-md-6 justify-content-end list-unstyled d-flex'>
          <li className='ms-3 text-white'>Twitter</li>
          <li className='ms-3 text-white'>instagram</li>
          <li className='ms-3 text-white'>Facebook</li>
        </ul>
      </footer>
    </div>
  )
}
