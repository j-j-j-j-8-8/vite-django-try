import React, {useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) =>{
    e.preventDefault();
    const userData = {
      username, email, password
    }

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      console.log('response.data===>', response.data)
      console.log('registration successful')
      setErrors({})
      setSuccess(true)
    } catch(error){
      setErrors(error.response.data)
      console.error('Registration error: ', error.response.data)
    } finally{
      setLoading(false)
    }

  }

  return (
    <>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 bg-light-dark p-5 rounded mb-3'>
          <h3 className='text-light text-center'>Create an Account</h3>
            <form onSubmit={handleRegistration}>
              <div className='mb-3'>
                <input type="text" className="form-control mb-3" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                {errors.username && (<small className="text-danger">{errors.username}</small>)}
              </div>
              <div className='mb-3'>
                <input type="email" className='form-control mb-3' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='mb-3'>
                <input type="password" className='form-control mb-3' placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                {errors.password && (<small className="text-danger">{errors.password}</small>)}
              </div>    
              {success &&<div className='alert alert-success'>Registraion successful</div> }    
              <button
                type="submit"
                className="btn btn-info d-block mx-auto"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                    Please wait...
                  </>
                ) : (
                  "Register"
                )}
              </button>            
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register