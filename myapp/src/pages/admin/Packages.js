import React, { useState } from 'react';
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Form from './Form';
import './Createpackage.css'
export default function Packages() {
      const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
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
               Monthly And Yearly Packages
              </div>
							</div>
							<div class="col-sm-5 col">
                            <button onClick={onOpenModal} class="btn btn-primary float-right mt-2">Add</button>
                            <Modal open={open} onClose={onCloseModal} center  className="modal">
                           <Form/>
                            </Modal>
							</div>
						</div>
					</div>
 
          <div class="row">
                      <div class="col-lg-4 col-md-4 col-sm-6 ">
							<div class="card ">
                    <div className='text-center'>
                    <h2>$30</h2>
                      <p>per month</p>
                    </div>
								<div class="card-body one text-center ">
                      <h2 className='text-center mb-4'>Premium</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                      <button className='buton2 btn text-white text-center'>Delete</button>
                </div>
                </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 ">
							<div class="card ">
              
              <div className='text-center'>
                    <h2>$30</h2>
                      <p>per month</p>
                    </div>

								<div class="card-body one text-center">
                      <h2 className='text-center mb-4'>Premium</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                      <button className='buton2 btn text-white text-center'>Delete</button>
                </div>


                </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-6 ">
							<div class="card ">
              
              <div className='text-center'>
                    <h2>$30</h2>
                      <p>per month</p>
                    </div>

								<div class="card-body one text-center">
                      <h2 className='text-center mb-4'>Premium</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                      <button className='buton2 btn text-white text-center'>Delete</button>
                </div>

                
                </div>
                </div>



                </div>







				
    </div>
    </div>
    </div>
  )
}
