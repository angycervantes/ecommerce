import React, { useState, useEffect } from 'react'
import { getAllItems } from '@/services/userServices'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const products = async (data) => {
      try {
        const response = await getAllItems(data)
        if (response.status === 200) {
          setProducts(response.data)
          console.log(response.data)
        }
      } catch (error) {
        console.log('Ocurrio un error con el login', error.message)
      }
    }
    products()
    console.log(products)
  }, [])

  return (
    <section className='w-100'>
      <div className='row row-cols-1 row-cols-md-4 g-5'>
        {products && products.map((product) => (
          <div className='col' key={product.id}>
            <div className='card text-black bg-white'>
              <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
              <img
                src={product.image}
                className='card-img-top' style={{ maxHeight: '250px' }}
                alt={product.product_name}
              />
              <div className='card-body'>
                <div className='text-center'>
                  <h5 className='card-title'> {product.product_name}</h5>
                  <p className='text-muted lead mb-4'>{product.brand}</p>
                </div>
                <div>
                  <p className='mb-4 text-truncate'>{product.description}</p>
                  <div className='d-flex h3'>
                    <span>$</span><span>{product.price}</span>
                  </div>
                  <a href='#' className='link-primary'>ver más</a>
                </div>
              </div>
            </div>
          </div>))}
      </div>
    </section>
  )
}

export default Home

{ /*

<div className='col'>
          <div className='card text-black bg-white'>
            <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'
              className='card-img-top' alt='Apple Computer'
            />
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>Awesome Granite Bacon</h5>
                <p className='text-muted lead mb-4'>Osinski - Prosacco</p>
              </div>
              <div>
                <p className='mb-4'>The beautiful range of Apple Naturalé that fhdjfhajdfhajdhfad djfhadjkfh djfhadjhfakdjfha ajkhdfakjdhfa</p>
                <div className='d-flex h3'>
                  <span>$</span><span>5,999</span>
                </div>
                <a href='#' className='link-primary'>ver más</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-black bg-white'>
            <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'
              className='card-img-top' alt='Apple Computer'
            />
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>Awesome Granite Bacon</h5>
                <p className='text-muted lead mb-4'>Osinski - Prosacco</p>
              </div>
              <div>
                <p className='mb-4'>The beautiful range of Apple Naturalé that fhdjfhajdfhajdhfad djfhadjkfh djfhadjhfakdjfha ajkhdfakjdhfa</p>
                <div className='d-flex h3'>
                  <span>$</span><span>5,999</span>
                </div>
                <a href='#' className='link-primary'>ver más</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-black bg-white'>
            <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'
              className='card-img-top' alt='Apple Computer'
            />
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>Awesome Granite Bacon</h5>
                <p className='text-muted lead mb-4'>Osinski - Prosacco</p>
              </div>
              <div>
                <p className='mb-4'>The beautiful range of Apple Naturalé that fhdjfhajdfhajdhfad djfhadjkfh djfhadjhfakdjfha ajkhdfakjdhfa</p>
                <div className='d-flex h3'>
                  <span>$</span><span>5,999</span>
                </div>
                <a href='#' className='link-primary'>ver más</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-black bg-white'>
            <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'
              className='card-img-top' alt='Apple Computer'
            />
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>Awesome Granite Bacon</h5>
                <p className='text-muted lead mb-4'>Osinski - Prosacco</p>
              </div>
              <div>
                <p className='mb-4'>The beautiful range of Apple Naturalé that fhdjfhajdfhajdhfad djfhadjkfh djfhadjhfakdjfha ajkhdfakjdhfa</p>
                <div className='d-flex display-6'>
                  <span>$</span><span>5,999</span>
                </div>
              </div>
              <div className='d-flex justify-content-between total font-weight-bold mt-4'>
                <a href='#' className='link-primary'>ver más</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-black bg-white'>
            <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'
              className='card-img-top' alt='Apple Computer'
            />
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>Awesome Granite Bacon</h5>
                <p className='text-muted lead mb-4'>Osinski - Prosacco</p>
              </div>
              <div>
                <p className='mb-4'>The beautiful range of Apple Naturalé that fhdjfhajdfhajdhfad djfhadjkfh djfhadjhfakdjfha ajkhdfakjdhfa</p>
                <div className='d-flex display-6'>
                  <span>$</span><span>5,999</span>
                </div>
              </div>
              <div className='d-flex justify-content-between total font-weight-bold mt-4'>
                <a href='#' className='link-primary'>ver más</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-black bg-white'>
            <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'
              className='card-img-top' alt='Apple Computer'
            />
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>Awesome Granite Bacon</h5>
                <p className='text-muted lead mb-4'>Osinski - Prosacco</p>
              </div>
              <div>
                <p className='mb-4'>The beautiful range of Apple Naturalé that fhdjfhajdfhajdhfad djfhadjkfh djfhadjhfakdjfha ajkhdfakjdhfa</p>
                <div className='d-flex display-6'>
                  <span>$</span><span>5,999</span>
                </div>
              </div>
              <div className='d-flex justify-content-between total font-weight-bold mt-4'>
                <a href='#' className='link-primary'>ver más</a>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card text-black bg-white'>
            <i className='fab fa-apple fa-lg pt-3 pb-1 px-3' />
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp'
              className='card-img-top' alt='Apple Computer'
            />
            <div className='card-body'>
              <div className='text-center'>
                <h5 className='card-title'>Awesome Granite Bacon</h5>
                <p className='text-muted lead mb-4'>Osinski - Prosacco</p>
              </div>
              <div>
                <p className='mb-4'>The beautiful range of Apple Naturalé that fhdjfhajdfhajdhfad djfhadjkfh djfhadjhfakdjfha ajkhdfakjdhfa</p>
                <div className='d-flex display-6'>
                  <span>$</span><span>5,999</span>
                </div>
              </div>
              <div className='d-flex justify-content-between total font-weight-bold mt-4'>
                <a href='#' className='link-primary'>ver más</a>
              </div>
            </div>
          </div>
        </div>
       */ }
