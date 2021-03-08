import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'
import './Createpackage.css'
export default function CreatePackage() {
  return (
    <div>
      <AdminHeader/>
        <Sidebar/>
        <div class="page-wrapper">
                <div class="content container-fluid">
		
					<div class="page-header">
						<div class="row">
							<div class="col-sm-7 col-auto">
							<div class="alert alert-primary" role="alert">
                Packages
              </div>
							</div>
							{/* <div class="col-sm-5 col">
								<a href="#Add_Specialities_details" data-toggle="modal" class="btn btn-primary float-right mt-2">Add</a>
							</div> */}
						</div>
					</div>

          <div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 ">
            <Link to='/packages'>
							<div class="card one">
								<div class="card-body ">
                      <h2 className='text-center mb-4'>For Payer</h2>
                      <ul className='text-white font-weight-bold'>
                        <li>Includes Monthly Package</li>
                        <li>Includes Yearly Package</li>
                      </ul>
                      <div className='d-flex justify-content-around'>
                          <div>
                          <button className='buton1 btn text-white'>Update</button>
                          </div>
                          <div>
                          <button className='buton2 btn text-white'>Delete</button>
                          </div>
                     </div>
                </div>
                </div>



                </Link>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6 ">
                <Link to='/packages'>
							<div class="card one">
								<div class="card-body ">
                      <h2 className='text-center mb-4'>For Provider</h2>
                     
                      <ul className='text-white font-weight-bold'>
                        <li>Includes Monthly Package</li>
                        <li>Includes Yearly Package</li>
                      </ul>
                     <div className='d-flex justify-content-around'>
                          <div>
                          <button className='buton1 btn text-white'>Update</button>
                          </div>
                          <div>
                          <button className='buton2 btn text-white'>Delete</button>
                          </div>
                     </div>
                     
                </div>
                </div>
                </Link>
                </div>


                </div>







				
    </div>
    </div>
    </div>
  )
}
