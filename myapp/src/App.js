import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminHeader from './pages/admin/AdminHeader'
import CreatePackage from './pages/admin/CreatePackage'
import Packages from './pages/admin/Packages'
import Profile from './pages/admin/Profile'
import ProviderAcc from './pages/admin/ProviderAcc'
import Front from './pages/Front'
import Login from './pages/login'
export default function App() {
  return (
    <div class="main-wrapper">

      <BrowserRouter>
      
        <Switch>
          <Route exact path='/' component={Front}></Route>
          <Route path='/adminheader' component={AdminHeader}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/createpackage' component={CreatePackage}></Route>
          <Route path='/provideracc' component={ProviderAcc}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/packages' component={Packages}></Route>
        </Switch>
      </BrowserRouter>
  
 
    </div>
  )
}
// import React, { useState } from 'react';
// import 'react-responsive-modal/styles.css';
// import { Modal } from 'react-responsive-modal';

// export default function App() {
//   const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

//   return (
//     <div>
//       <button onClick={onOpenModal}>Open modal</button>
//       <Modal open={open} onClose={onCloseModal} center>
//       <section className="container text-center news">
    
//         <div className="row news">
//           <div className="col-lg-8 col-md-8  offset-lg-2 offset-md-2">
//             <form>
//               <div className="input-group mb-3">
//                 <input type="text" className="form-control " placeholder="Your Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//                 <div className="input-group-append">
//                   <span className="input-group-text bg-info" id="basic-addon2">SUBSCRIBE</span>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//       </Modal>
//     </div>
//   );
// };
