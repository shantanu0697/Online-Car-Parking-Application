import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("We will reach you soon", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 9090,
    });
    navigate("/Home");
  };

  return (
    <div className="contact3 py-5">
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <div className="container">
        <div className="row">
          {/* Left Side - Image */}
          <div className="col-lg-6">
            <div className="card-shadow">
              <img
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                className="img-fluid rounded"
                alt="Contact Us"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-6">
            <div className="contact-box ml-3">
              <h1 className="font-weight-light mt-2">Quick Contact</h1>

              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="row">
                  {/* Name */}
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-lg-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                    >
                      <span>SUBMIT</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="col-lg-12 mt-5">
            <div className="card border-0 mb-4">
              <div className="row">
                {/* Address */}
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                        alt="Address"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Address</h6>
                      <p className="mb-0">Parkvilla Parking Space, Pune</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                        alt="Phone"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Phone</h6>
                      <p className="mb-0">02582 112233</p>
                      <p className="mb-0">02582 223344</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="col-lg-4 col-md-4">
                  <div className="card-body d-flex align-items-center c-detail">
                    <div className="mr-3 align-self-center">
                      <img
                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                        alt="Email"
                      />
                    </div>
                    <div>
                      <h6 className="font-weight-medium">Email</h6>
                      <p className="mb-0">parkvilla@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div> {/* End of row */}
            </div> {/* End of card */}
          </div> {/* End of col-lg-12 */}
        </div> {/* End of row */}
      </div> {/* End of container */}
    </div> //{/* End of contact3 */}
  );
}

export default Contact;
