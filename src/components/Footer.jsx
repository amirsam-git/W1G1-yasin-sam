export default function Footer() {
  return (
    <footer>
        <div className="col-lg-2 col-sm-1 p-5">
            {/* address and menu */}
            <div className="col-2">
                <div className="bg-red">
                    <h3>Address</h3>
                    <hr />
                    <div>
                        <p>
                            Email: sample@gmail.com
                        </p>
                        <p>
                            Tell: +98-933-3333-212
                        </p>
                        <p>
                            Mobile: +98-933-3333-323
                        </p>
                        <p>
                            Address: 63 No. A Ave. B street
                        </p>
                    </div>
                </div>
                <div className="bg-blue">
                    <p>menu</p>
                </div>
            </div>
            {/* form */}
            <div className="bg-green">
                <p>form</p>
            </div>
        </div>
    </footer>
  )
}