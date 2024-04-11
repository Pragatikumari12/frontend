import React from 'react'

const login = () => {
  return (
    <div>
      <div className="row justify-content-center"><div className="col-lg-4">
        <h1 className='text-center'>Login</h1>
        <div className="card rounded-5 border-0 shadow">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="*********" valu />
              </div>
              <div className="mb-3 text-center">
                <button type='submit' className="btn shadow btn-secondary px-4">
                  Login
                </button>
              </div>
              <p>Donot have Account?</p>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default login