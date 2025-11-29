import { Link } from 'react-router-dom';


function PcNavbar() {
  return (
    <div className='topbar d-flex justify-content-between item-center'>
      <div className=''>
        <img src="/vite.svg" alt="blog" />
      </div>
      <div className="top-navbar-area d-lg-blcok d-sm-none w-99">
        <div>
          <Link to="/store">Store</Link>
        </div>
        <div>
          <Link to="/card">Cards</Link>
        </div>
        <div>
          <Link to="/order">Orders</Link>
        </div>
        <div>
          <Link to="/about-us">About Us</Link>
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
