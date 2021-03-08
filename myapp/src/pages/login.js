import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Login() {
    return (
		<div className="account-page">
		<div className="main-wrapper">
		<Header/>
        <div className="account-page">

            <div className="content">
				<div className="container-fluid">
					
					<div className="row">
						<div className="col-md-8 offset-md-2">
							
						
							<div className="account-content">
								<div className="row align-items-center justify-content-center">
									<div className="col-md-7 col-lg-6 login-left">
										<img src="assets/img/login-banner.png" className="img-fluid" alt="Doccure Login"/>	
									</div>
									<div className="col-md-12 col-lg-6 login-right">
										<div className="login-header">
											<h3>Login <span>Doccure</span></h3>
										</div>
										<form action="https://dreamguys.co.in/demo/doccure/index.html">
											<div className="form-group form-focus">
												<input type="email" className="form-control floating"/>
												<label className="focus-label">Email</label>
											</div>
											<div className="form-group form-focus">
												<input type="password" className="form-control floating"/>
												<label className="focus-label">Password</label>
											</div>
									
											<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
											
										
										</form>
									</div>
								</div>
							</div>
					
								
						</div>
					</div>

				</div>
</div>
			</div>	

			<Footer/>
            </div>
        </div>
    )
}
