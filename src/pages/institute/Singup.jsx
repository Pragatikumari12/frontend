import React from 'react'

const Singup = () => {
  return (
    <div>
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h1 className='text-center'>Singup</h1>
        <div className='card rounded-5 border-0 shadow'>
          <div className='card-body'>
            <form>
              <div className="mb-3">
                <label className="form-label">Enter Name</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control"/>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"/>
              </div>
              <button type="submit" className="btn btn-secondary">Submit</button>
              <p>Have Account?</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Singup