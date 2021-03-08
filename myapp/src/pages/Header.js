import React from 'react'
import {NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <div>
           
			<header className="header">
				<nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						<a id="mobile_btn" href="javascript:void(0);">
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<NavLink  to='/' className="navbar-brand logo">
						<h2>logo</h2>
						</NavLink>
						
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<NavLink  to='/' className="menu-logo">
							<h2>logo</h2>
							</NavLink>
							<a id="menu_close" className="menu-close" href="javascript:void(0);">
								<i className="fas fa-times"></i>
							</a>
						</div>
						<ul className="main-nav">
							<li className="active">
								<NavLink  to="/">Home</NavLink>
							</li>
							<li >
							<NavLink  to="/">Home </NavLink>
								
							</li>	
							<li className="has-submenu">
							<NavLink  to="/">Home</NavLink>
	
							</li>	
							<li className="has-submenu">
							<NavLink  to="/">Home</NavLink>
								
							</li>
							<li>
								<NavLink  to='/createpackage'>Admin</NavLink>
							</li>
							<li className="login-link">
								<NavLink  to='/login'>Login / Signup</NavLink>
							</li>
						</ul>		 
					</div>		 
					<ul className="nav header-navbar-rht">
						<li className="nav-item contact-item">
							<div className="header-contact-img">
								<i className="far fa-hospital"></i>							
							</div>
							<div className="header-contact-detail">
								<p className="contact-header">Contact</p>
								<p className="contact-info-header">00000000000000</p>
							</div>
						</li>
						<li className="a">
							<NavLink  className=" header-login a" to='/login'>login / Signup </NavLink>
						</li>
					</ul>
				</nav>
			</header>
		
        </div>
    )
}
