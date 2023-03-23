import { useAuthContext } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import useForm from '@/hooks/useForm'
import { loginUserService } from '@/services/userServices'
import logo from '@/assets/e-c.svg'
import '@/styles/form.css'

const Login = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/')
      }
    } catch (error) {
      console.log('Ocurrio un error con el login', error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main className='form-signin bg-white rounded-3 w-100 m-5 mx-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logo} alt='' width='58.24' height='32' />
        <h1 className='h3 mb-3 fw-normal text-center'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            name='email'
            value={input.email}
            onChange={handleInputChange}
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            name='password'
            value={input.password}
            placeholder='Password'
            onChange={handleInputChange}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary text-white' type='submit'>Sign in</button>
      </form>
    </main>
  )
}

export default Login
