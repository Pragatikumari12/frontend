
import React from 'react'

const ContactUs = () => {
  return (
    <div className='container'>
      <h1 className="text-center">ContactUs</h1>
      <div className="card rounded-5 border-0 shadow">
        <div className="card-body">
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Name</label>
        <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="name" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">Phone</label>
        <input type="phone" className="form-control" id="exampleFormControlInput2" placeholder="phone" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput3" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput4" className="form-label">Address</label>
        <input type="address" className="form-control" id="exampleFormControlInput4" placeholder="address" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className='d-grid'>
      <button className=' btn btn-secondary'>send Message</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs