// import React,{useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// import "./Navbar.css";

// export default function NavBar() {

//   const[ isLoggedIn, setIsLoggedIn] = useState(false);

//   function handleLogin(){
//     setIsLoggedIn(true);
//   }

//   function handleLogout(){

//     setIsLoggedIn(false);
//     localStorage.removeItem("token");
//     
//   }
//   return (

    
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
//   <div className="container-fluid">
//     <a className="navbar-brand logo"  href="#">Parkvilla</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link to="/" className="nav-link active" aria-current="page">Home</Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/about" className="nav-link active" aria-current="page">About</Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/contact" className="nav-link active" aria-current="page">Contact</Link>
//         </li>
//       </ul>

//       {isLoggedIn ? (
//        <Link to="/home"><Button className="gradient-button" onClick={handleLogout}>Logout</Button></Link> 
//       ) : (

//          <Link to="/login"><button className="gradient-button" onClick={handleLogin}>Login</button></Link> 
        
        
//       )}

//       {/* <form>
//         <button className="btn btn-outline-primary" type="submit">LogOut</button>
//       </form> */}
//     </div>
//   </div>
// </nav>







    
//   );
// }


// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

// import "./Navbar.css";

// export default function NavBar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check login status when component mounts
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token); // Convert token to boolean
//   }, []);

//   function handleLogout() {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <a className="navbar-brand logo" href="#">Parkvilla</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link to="/" className="nav-link active">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about" className="nav-link active">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-link active">Contact</Link>
//             </li>
//           </ul>

//           {isLoggedIn ? (
//             <Link to="/home">
//               <Button className="gradient-button" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </Link>
//           ) : (
//             <Link to="/login">
//               <Button className="gradient-button">
//                 Login
//               </Button>
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button, Container, Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <Navbar expand="lg" className="navbar-dark bg-dark shadow-sm py-3">
      <Container>
        <Navbar.Brand className="fw-bold fs-4 text-white" href="/">
          Parkvilla
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white fw-semibold mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white fw-semibold mx-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white fw-semibold mx-2">
              Contact
            </Nav.Link>
          </Nav>
          <div className="ms-3">
            {isLoggedIn ? (
              <Link to="/home">
                <Button
                  variant="outline-light"
                  className="gradient-button px-4"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="primary" className="gradient-button px-4">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
