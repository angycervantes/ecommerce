import logo from '@/assets/e-com_3.svg'
import '@/styles/form.css'

const Login = () => {
  return (
    <main className='form-signin bg-white rounded-3 w-100 m-5 mx-auto'>
      <form>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal text-center'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            name='email'
            value=''
            onChange={() => {}}
            placeholder='name@example.com'
          />
          <label htmlFor='floatingInput'>Email address</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            name='email'
            value=''
            placeholder='Password'
            onChange={() => {}}
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary text-white' type='submit'>Sign in</button>
      </form>
    </main>
  )
}

export default Login
