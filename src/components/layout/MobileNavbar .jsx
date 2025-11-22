import { Link } from 'react-router-dom';

function MobileNavbar() {
  return (
    <>
      <div className="mobile-navbar-area d-sm-block d-lg-none">
        <div>
          <Link to="/store">
            <i class="bi bi-house-door-fill"></i>
            {/* Store */}
          </Link>
        </div>
        <div>
          <Link to="/card">
            <i class="bi bi-bag-check-fill"></i>
            {/* Cards */}
          </Link>
        </div>
        <div>
          <Link to="/order">
            <i class="bi bi-list-check"></i>
            {/* Orders */}
          </Link>
        </div>
        <div>
          <Link to="/contact-us">
            <i class="bi bi-headset"></i>
            {/* Contact Us */}
          </Link>
        </div>
        <div>
          <Link to="/about-us">
            <i class="bi bi-person-bounding-box"></i>
            {/* About Us */}
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar 
