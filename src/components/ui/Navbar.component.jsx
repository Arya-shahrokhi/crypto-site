import React from 'react';
import { Link } from "react-router-dom"



const NavbarComponent = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div>
                    <span className="navbar-item" > Crypto tracking </span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link active" to={"/HomePage"} >HomePage</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link active" to={"/faq"} >FAQPage</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link active" to={'/ContactUs'} >ContactUs</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link active" to={"/AboutUs"} >AboutUs</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    );

};
export default NavbarComponent;