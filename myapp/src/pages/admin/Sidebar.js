import React from 'react'
import {NavLink } from 'react-router-dom'
export default function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span>Main</span>
              </li>
              <li className="active"> 
                <NavLink  to='/'><i className="fe fe-home" /> <span>Dashboard</span></NavLink>
              </li>
              <li> 
                <NavLink   to='/createpackage'><i className="fe fe-layout" /> <span>Create Package</span></NavLink>
              </li>
              <li> 
                <NavLink  to='provideracc'><i className="fe fe-users" /> <span>Create Provider Account</span></NavLink>
              </li>
              <li> 
                <a href="doctor-list.html"><i className="fe fe-user-plus" /> <span>Crete Payer Account</span></a>
              </li>
              <li> 
                <a href="patient-list.html"><i className="fe fe-user" /> <span>Service Category</span></a>
              </li>
              <li> 
                <a href="reviews.html"><i className="fe fe-star-o" /> <span>Service Sub Category</span></a>
              </li>
              <li> 
                <a href="transactions-list.html"><i className="fe fe-activity" /> <span>Transactions</span></a>
              </li>
              <li> 
                <NavLink to='/profile'><i className="fe fe-vector" /> <span>Profile</span></NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    )
}
