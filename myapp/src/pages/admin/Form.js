import React from 'react'

export default function Form() {
    return (
        <div>
             <section className="container-fluid">
    
        <div className="row">
          <div className="col-lg-8 col-md-8  offset-lg-2 ">
            <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Package Name</label>
                            <input type="email" class="form-control" placeholder="Enter Package Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Package Price</label>
                            <input type="email" class="form-control" placeholder="Price" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Start Date</label>
                            <input type="date" class="form-control" placeholder="Date" />
                        </div>
                        <button className='buton2 btn text-white '>Delete</button>
            </form>
          </div>
        </div>
      </section>
        </div>
    )
}
