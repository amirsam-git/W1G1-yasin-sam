import { Link } from 'react-router-dom';


function PcNavbar() {
  return (
    <div className='topbar d-flex justify-content-between item-center'>
      <div className=''>
        <img src="/vite.svg" alt="blog" />
      </div>
      <div className="top-navbar-area d-lg-blcok d-sm-none w-99">
        <div>
          <Link to="/store">Home</Link>
        </div>
        <div>
          <Link to="/card">Store</Link>
        </div>
        <div>
          <Link to="/about-us">Posts</Link>
        </div>
        <div>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className='me-4'>
        <Link to="/login" className='btn btn-warning' style={{color:'black'}}>Login</Link>
      </div>
    </div>
  )
}

export default PcNavbar
