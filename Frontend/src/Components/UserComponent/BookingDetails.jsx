// import "bootstrap/dist/css/bootstrap.min.css";
// import "./bookingDetails.css";
// import backgroundImage from "../../images/pk2.jpeg";
// import { Button } from "react-bootstrap";
// import axios from "axios";
// import { Link } from "react-router-dom";
// function BookingDetails() {
//   const areaName = localStorage.getItem("areaName");
//   const areaId = localStorage.getItem("areaId");
//   const zoneName = localStorage.getItem("zoneName");
//   const zoneId = localStorage.getItem("zoneId");
//   const slotName = localStorage.getItem("slotName");
//   const slotId = localStorage.getItem("slotId");
//   const userId = localStorage.getItem("userId");
//   const carId = localStorage.getItem("carNo");
//   const fromDate = localStorage.getItem("parkingFromDate");
//   const fromTime = localStorage.getItem("parkingFromTime");
//   const toDate = localStorage.getItem("parkingToDate");
//   const toTime = localStorage.getItem("parkingToTime");
//   const rate = localStorage.getItem("areaRate");

//   const fromDateTime = new Date(`${fromDate}T${fromTime}`);
//   const toDateTime = new Date(`${toDate}T${toTime}`);
//   const timeDiffInMs = toDateTime.getTime() - fromDateTime.getTime();
//  // const timeDiffInHours = timeDiffInMs / 3600000;

//   const timeDiffInHours = (timeDiffInMs / 3600000).toFixed(2); 
// const totalAmt = (timeDiffInHours * rate).toFixed(2); 


//  // const totalAmt = timeDiffInHours * rate;
//   const token = localStorage.getItem("token");

//   var onButtonClick = () => {
//     localStorage.setItem("totalAmt", totalAmt);
//     const data = {
//       fromDate,
//       toDate,
//       totalAmt,
//       areaId,
//       zoneId,
//       slotId,
//       userId,
//       carId,
//     };
//     console.log('=================',data)
//     const headers = { Authorization: `Bearer ${token}` };

//     axios
//       .post("http://parkvilla.ap-south-1.elasticbeanstalk.com/api/ParkingSlots", data, {
//         headers: headers,
//       })
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
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
//         <table className="table-bordered">
//           <tbody>
//             <tr>
//               <td>Area Name</td>
//               <td>{areaName}</td>
//             </tr>
//             <tr>
//               <td>Zone Name</td>
//               <td>{zoneName}</td>
//             </tr>
//             <tr>
//               <td>Slot Name</td>
//               <td>{slotName}</td>
//             </tr>
//             <tr>
//               <td>Duration (in hours)</td>
//               <td>{timeDiffInHours}</td>
//             </tr>
//             <tr>
//               <td>Rate</td>
//               <td>{rate}</td>
//             </tr>
//             <tr>
//               <td>Car Number</td>
//               <td>{carId}</td>
//             </tr>
//             <tr>
//               <td>Total Amount</td>
//               <td>{totalAmt}</td>
//             </tr>
//           </tbody>
//         </table>
//         <div className="text-center mt-3">
//           <Link to="/parkingreceipt">
//             <Button
//               onClick={onButtonClick}
//               className='btn btn-dark "me-2"'
//               style={{ height: 50, width: 150 }}
//               variant="primary"
//             >
//               Confirm Payment
//             </Button>
//           </Link>
//           {/* <button className="btn btn-primary" onClick={onButtonClick}>
//           Confirm Payment
//         </button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookingDetails;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bookingDetails.css";
import backgroundImage from "../../images/pk2.jpeg";
import { Button } from "react-bootstrap";

function BookingDetails() {
  const navigate = useNavigate();
  
  // Fetching stored data
  const areaName = localStorage.getItem("areaName");
  const areaId = localStorage.getItem("areaId");
  const zoneName = localStorage.getItem("zoneName");
  const zoneId = localStorage.getItem("zoneId");
  const slotName = localStorage.getItem("slotName");
  const slotId = localStorage.getItem("slotId");
  const userId = localStorage.getItem("userId");
  const carId = localStorage.getItem("carNo");
  const fromDate = localStorage.getItem("parkingFromDate");
  const fromTime = localStorage.getItem("parkingFromTime");
  const toDate = localStorage.getItem("parkingToDate");
  const toTime = localStorage.getItem("parkingToTime");
  const rate = localStorage.getItem("areaRate");
  const token = localStorage.getItem("token");

  // Calculate duration and total amount
  const fromDateTime = new Date(`${fromDate}T${fromTime}`);
  const toDateTime = new Date(`${toDate}T${toTime}`);
  const timeDiffInHours = (toDateTime - fromDateTime) / 3600000;
  const totalAmt = (timeDiffInHours * rate).toFixed(2);

  // Function to handle Razorpay payment
  const handlePayment = async () => {
    if (!totalAmt || totalAmt <= 0) {
      alert("Invalid amount. Cannot proceed with payment.");
      return;
    }

    // Load Razorpay script dynamically
    const loadRazorpayScript = () => {
      return new Promise((resolve, reject) => {
        if (window.Razorpay) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = resolve;
        script.onerror = () => reject("Failed to load Razorpay SDK.");
        document.body.appendChild(script);
      });
    };

    try {
      await loadRazorpayScript();

      const options = {
        key: "rzp_test_gXvTF8VHcbbdzp", // Use your Razorpay test/live key
        amount: totalAmt * 100, // Convert to paise
        currency: "INR",
        name: "Car Parking Service",
        description: "Parking Slot Booking Payment",
        handler: async (response) => {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);

          // Store payment details in local storage
          localStorage.setItem("paymentId", response.razorpay_payment_id);

          // Save booking details in backend
          const bookingData = {
            fromDate,
            toDate,
            totalAmt,
            areaId,
            zoneId,
            slotId,
            userId,
            carId,
          };

          const headers = { Authorization: `Bearer ${token}` };

          try {
           // await axios.post("http://parkvilla.ap-south-1.elasticbeanstalk.com/api/ParkingSlots", bookingData, {
              await axios.put(`http://parkvilla.ap-south-1.elasticbeanstalk.com/api/ParkingSlots/${slotId}`, bookingData, {
              //  headers: headers,

              headers: headers,
            });

            // Redirect to Receipt Page
            navigate("/parkingreceipt");
          } catch (error) {
            console.error("Booking failed:", error);
            alert("Booking failed. Please contact support.");
          }
        },
        prefill: {
          name: "Customer",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: { color: "#F37254" },
      };

      const razorpayInstance = new window.Razorpay(options);

      razorpayInstance.on("payment.failed", (response) => {
        alert(`Payment Failed: ${response.error.description}`);
      });

      razorpayInstance.open();
    } catch (error) {
      alert("An unexpected error occurred. Please try again.");
    }
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
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="style">
        <table className="table-bordered">
          <tbody>
            <tr>
              <td>Area Name</td>
              <td>{areaName}</td>
            </tr>
            <tr>
              <td>Zone Name</td>
              <td>{zoneName}</td>
            </tr>
            <tr>
              <td>Slot Name</td>
              <td>{slotName}</td>
            </tr>
            <tr>
              <td>Duration (in hours)</td>
              <td>{timeDiffInHours}</td>
            </tr>
            <tr>
              <td>Rate</td>
              <td>{rate}</td>
            </tr>
            <tr>
              <td>Car Number</td>
              <td>{carId}</td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>{totalAmt}</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-3">
          <Button
            onClick={handlePayment}
            className="btn btn-dark"
            style={{ height: 50, width: 150 }}
            variant="primary"
          >
            Confirm Payment
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;

