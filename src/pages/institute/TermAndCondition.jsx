import React from 'react'

const TermAndCondition = () => {
  return (
    <div className='container'>
      <h1 className="text-center">TermAndCondition</h1>
      <div className="card">
        <div className="card-body">
          <div>
            <p className="text-secondary mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">I agree this term & condition</label>
            </div>
            <button className='btn btn-secondary'>Accept</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermAndCondition