import { Link } from 'react-router-dom';


function PcNavbar() {
  return (
    <>
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
    </>
  )
}

export default PcNavbar
