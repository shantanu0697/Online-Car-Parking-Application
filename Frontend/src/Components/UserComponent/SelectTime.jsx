// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import backgroundImage from "../../images/pk2.jpeg";
// import "./selectTime.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DateTimePicker = () => {
//   const [fromDate, setFromDate] = useState(new Date().toISOString().slice(0, 10));
//   const [fromTime, setFromTime] = useState("");
//   const [toDate, setToDate] = useState(new Date().toISOString().slice(0, 10));
//   const [toTime, setToTime] = useState("");

//   const currentDate = new Date().toISOString().slice(0, 10);
//   const currentTime = new Date().toISOString().slice(11, 16);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Ensure times are selected
//     if (!fromTime || !toTime) {
//       toast.error("Please select both From Time and To Time", { autoClose: 2500, position: toast.POSITION.TOP_CENTER });
//       return;
//     }

//     // Convert to Date objects for comparison
//     const fromDateTime = new Date(`${fromDate}T${fromTime}`);
//     const toDateTime = new Date(`${toDate}T${toTime}`);
//     const now = new Date();

//     if (fromDateTime < now) {
//       toast.error("From time should not be in the past", { autoClose: 2500, position: toast.POSITION.TOP_CENTER });
//       setFromTime("");
//       return;
//     }

//     if (toDateTime <= fromDateTime) {
//       toast.error("To time should be after From time", { autoClose: 2500, position: toast.POSITION.TOP_CENTER });
//       setToTime("");
//       return;
//     }

//     // Store data and navigate
//     localStorage.setItem("parkingFromDate", fromDate);
//     localStorage.setItem("parkingFromTime", fromTime);
//     localStorage.setItem("parkingToDate", toDate);
//     localStorage.setItem("parkingToTime", toTime);
//     navigate("/tozone");
//   console.log('=================',fromDate,fromTime,toDate,toTime);
  
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div className="style">
//         <ToastContainer position={toast.POSITION.TOP_CENTER} />
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="fromDate">
//             <Form.Label>From Date:</Form.Label>
//             <Form.Control type="date" min={currentDate} value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="fromTime">
//             <Form.Label>From Time:</Form.Label>
//             <Form.Control type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="toDate">
//             <Form.Label>To Date:</Form.Label>
//             <Form.Control type="date" min={fromDate || currentDate} value={toDate} onChange={(e) => setToDate(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="toTime">
//             <Form.Label>To Time:</Form.Label>
//             <Form.Control type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
//           </Form.Group>
//           <br />

//           <Button variant="warning" type="submit">
//             Submit
//           </Button>
//           <hr />
//           <Link to={"/userDashboard"}>
//             <Button variant="primary">Previous</Button>
//           </Link>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default DateTimePicker;



// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import backgroundImage from "../../images/pk2.jpeg";
// import "./selectTime.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DateTimePicker = () => {
//   const currentDate = new Date().toISOString().slice(0, 10);
//   const currentTime = new Date().toISOString().slice(11, 16);

//   const [fromDate, setFromDate] = useState(currentDate);
//   const [fromTime, setFromTime] = useState(currentTime);
//   const [toDate, setToDate] = useState(currentDate);
//   const [toTime, setToTime] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!fromTime || !toTime) {
//       toast.error("Please select both From Time and To Time", { autoClose: 2500, position: toast.POSITION.TOP_CENTER });
//       return;
//     }

//     const fromDateTime = new Date(`${fromDate}T${fromTime}`);
//     const toDateTime = new Date(`${toDate}T${toTime}`);
//     const now = new Date();

//     if (fromDateTime < now) {
//       toast.error("From time should not be in the past", { autoClose: 2500, position: toast.POSITION.TOP_CENTER });
//       setFromTime("");
//       return;
//     }

//     if (toDateTime <= fromDateTime) {
//       toast.error("To time should be after From time", { autoClose: 2500, position: toast.POSITION.TOP_CENTER });
//       setToTime("");
//       return;
//     }

//     localStorage.setItem("parkingFromDate", fromDate);
//     localStorage.setItem("parkingFromTime", fromTime);
//     localStorage.setItem("parkingToDate", toDate);
//     localStorage.setItem("parkingToTime", toTime);
//     navigate("/tozone");
//     console.log('=================', fromDate, fromTime, toDate, toTime);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div className="style">
//         <ToastContainer position={toast.POSITION.TOP_CENTER} />
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="fromDate">
//             <Form.Label>From Date:</Form.Label>
//             <Form.Control type="date" min={currentDate} value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="fromTime">
//             <Form.Label>From Time:</Form.Label>
//             <Form.Control type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="toDate">
//             <Form.Label>To Date:</Form.Label>
//             <Form.Control type="date" min={fromDate || currentDate} value={toDate} onChange={(e) => setToDate(e.target.value)} required />
//           </Form.Group>

//           <Form.Group controlId="toTime">
//             <Form.Label>To Time:</Form.Label>
//             <Form.Control type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} required />
//           </Form.Group>
//           <br />

//           <Button variant="warning" type="submit">
//             Submit
//           </Button>
//           <hr />
//           <Link to={"/userDashboard"}>
//             <Button variant="primary">Previous</Button>
//           </Link>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default DateTimePicker;



import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../../images/pk2.jpeg";
import "./selectTime.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DateTimePicker = () => {
  const navigate = useNavigate();

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const roundedMinutes = Math.ceil(now.getMinutes() / 5) * 5;
    now.setMinutes(roundedMinutes, 0, 0);

    const date = now.toISOString().slice(0, 10);
    const time = now.toTimeString().slice(0, 5); // Extract HH:MM format

    return { date, time };
  };

  const { date: currentDate, time: currentTime } = getCurrentDateTime();

  const [fromDate, setFromDate] = useState(currentDate);
  const [fromTime, setFromTime] = useState(currentTime);
  const [toDate, setToDate] = useState(currentDate);
  const [toTime, setToTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fromTime || !toTime) {
      toast.error("Please select both From Time and To Time", { autoClose: 2500 });
      return;
    }

    const fromDateTime = new Date(`${fromDate}T${fromTime}`);
    const toDateTime = new Date(`${toDate}T${toTime}`);
    const now = new Date();

    if (fromDateTime < now) {
      toast.error("From time should not be in the past", { autoClose: 2500 });
      setFromTime(currentTime);
      return;
    }

    if (toDateTime <= fromDateTime) {
      toast.error("To time should be after From time", { autoClose: 2500 });
      setToTime("");
      return;
    }

    localStorage.setItem("parkingFromDate", fromDate);
    localStorage.setItem("parkingFromTime", fromTime);
    localStorage.setItem("parkingToDate", toDate);
    localStorage.setItem("parkingToTime", toTime);
    navigate("/tozone");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="p-4 shadow-lg rounded bg-light">
            <ToastContainer />
            <h3 className="text-center mb-3 text-primary">Select Parking Time</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="fromDate">
                <Form.Label>From Date:</Form.Label>
                <Form.Control
                  type="date"
                  min={currentDate}
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="fromTime">
                <Form.Label>From Time:</Form.Label>
                <Form.Control
                  type="time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="toDate">
                <Form.Label>To Date:</Form.Label>
                <Form.Control
                  type="date"
                  min={fromDate || currentDate}
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="toTime">
                <Form.Label>To Time:</Form.Label>
                <Form.Control
                  type="time"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-between mt-4">
                <Link to={"/userDashboard"}>
                  <Button variant="secondary">Previous</Button>
                </Link>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DateTimePicker;

