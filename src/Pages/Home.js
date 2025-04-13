import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    //getusername
    const userName = JSON.parse(localStorage.getItem("user"));

    //handleLogout
    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate('/login');
    }
  return (
    <section className="vh-100" style={{backgroundColor: '#9A616D'}}>
    <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
            <div className="card" style={{borderRadius: '1rem'}}>
            <div className="row g-0">
                {/* <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                </div> */}
                <div className="col-md-12 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">

                   <h3>HOME PAGE</h3>
                  <h5>Welcome, {userName.name}</h5>
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-lg btn-block" type="submit" onClick={handleLogout}>Logout</button>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default Home
