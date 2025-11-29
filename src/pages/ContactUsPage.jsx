export default function ContactUsPage() {
  return (
    <>
    <div>ContactUs</div>
    <div>
        <form action="">
            <div>
                <label className="form-label" htmlFor="fullname">Fullname</label>
                <input className="form-control" type="text" id="fullname" name="fullname" placeholder="john due" />
            </div>
            <div>
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-control" type="email" id="email" name="email" placeholder="john.due@gmail.com"/>
            </div>
            <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" type="text" id="message" name="message" rows="10"></textarea>
            </div>
            <div>
                <button className="btn btn-blue" type="submit">Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}
