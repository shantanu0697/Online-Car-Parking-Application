// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from "react-toastify";

// const ZoneDashboard1 = () => {
//   const [zones, setZones] = useState([]);
//   const [zoneSlots, setZoneSlots] = useState({});
//   const [selectedZoneId, setSelectedZoneId] = useState(null);
//   const [selectedZoneName, setSelectedZoneName] = useState(null);
//   const [selectedSlotId, setSelectedSlotId] = useState(null);
//   const [selectedSlotName, setSelectedSlotName] = useState("No slot selected");

//   useEffect(() => {
//     const area = localStorage.getItem("areaId");
//     const token = localStorage.getItem("token");
//     axios
//       .get(`http://parkvilla.ap-south-1.elasticbeanstalk.com/api/Parkingareas/${area}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         console.log("API Response:", response.data);
//         const uniqueZones = response.data.reduce((accumulator, currentZone) => {
//           if (!accumulator.some((zone) => zone.zoneId === currentZone.zoneId)) {
//             accumulator.push(currentZone);
//           }
//           return accumulator;
//         }, []);
//         setZones(uniqueZones);
//         const slots = {};
//         uniqueZones.forEach((zone) => {
//           slots[zone.zoneId] = zone.slots;
//         });
//         setZoneSlots(slots);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleZoneClick = (zoneId, zoneName) => {
//     setSelectedZoneId(zoneId);
//     setSelectedZoneName(zoneName);
//     setSelectedSlotId(null);
//     setSelectedSlotName("No slot selected");
//   };

//   const handleSlotClick = (slotId, slotName) => {
//     setSelectedSlotId(slotId);
//     setSelectedSlotName(slotName);
//   };

//   const BookButton = () => {
//     if (selectedSlotId === null || selectedZoneId === null) {
//       toast.error("Please select zone and slot first", {
//         autoClose: 2500, // Set the time (in milliseconds) for the message to be displayed
//         position: toast.POSITION.TOP_CENTER, // Set the position of the message
//       });
//     } else {
//       localStorage.setItem("slotId", selectedSlotId);
//       localStorage.setItem("slotName", selectedSlotId);
//       localStorage.setItem("zoneId", selectedZoneId);
//       localStorage.setItem("zoneName", selectedZoneName);
//       window.location.href = "/CarDashboard";
//     }
//   };

//   const slotStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "80px",
//     height: "40px",
//     margin: "2px",
//     borderRadius: "2px",
//     cursor: "pointer",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
//   };

//   const availableSlotStyle = {
//     ...slotStyle,
//     backgroundColor: "green",
//   };

//   const occupiedSlotStyle = {
//     ...slotStyle,
//     backgroundColor: "red",
//   };

//   return (
//     <div
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center",
//       }}
//     >
//       <ToastContainer position={toast.POSITION.TOP_CENTER} />
//       {zones.map((zone) => {
//         const zoneId = zone.zoneId;
//         const zoneArea = zone.zoneArea;
//         const totalSlots = zone.totalSlots;
//         const availSlots = zone.availSlots;
//         const slots = zoneSlots[zoneId];

//         // Check if this zone has already been displayed
//         const isZoneDisplayed =
//           zones
//             .slice(0, zones.indexOf(zone))
//             .findIndex((z) => z.zoneId === zoneId) !== -1;

//         return (
//           !isZoneDisplayed && (
//             <div key={zoneId}>
//               <button onClick={() => handleZoneClick(zoneId, zoneArea)}>
//                 {zoneArea}
//               </button>
//               {selectedZoneId === zoneId && (
//                 <div>
//                   <p>Total Slots: {totalSlots}</p>
//                   <p>Available Slots: {availSlots}</p>
//                   <div>
//                     {slots.map((slot) => (
//                       <div
//                         key={slot.slotId}
//                         style={
//                           slot.occupied ? occupiedSlotStyle : availableSlotStyle
//                         }
//                         onClick={() =>
//                           handleSlotClick(slot.slotId, slot.slotName)
//                         }
//                       >
//                         {slot.slotName}
//                       </div>
//                     ))}
//                   </div>
//                   <p>Selected Slot: {selectedSlotName}</p>
//                 </div>
//               )}
//             </div>
//           )
//         );
//       })}
//       <div>
//         <button className="btn btn-primary" onClick={BookButton}>
//           Book
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZoneDashboard1;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from "react-toastify";

// const ZoneDashboard1 = () => {
//   const [zones, setZones] = useState([]);
//   const [zoneSlots, setZoneSlots] = useState({});
//   const [selectedZoneId, setSelectedZoneId] = useState(null);
//   const [selectedZoneName, setSelectedZoneName] = useState(null);
//   const [selectedSlotId, setSelectedSlotId] = useState(null);
//   const [selectedSlotName, setSelectedSlotName] = useState("No slot selected");

//   useEffect(() => {
//     const area = localStorage.getItem("areaId");
//     const token = localStorage.getItem("token");

//     axios
//       .get(`http://parkvilla.ap-south-1.elasticbeanstalk.com/api/Parkingareas/${area}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         console.log("API Response:", response.data);

//         const zonesData = response.data.zones || []; // Extract zones safely

//         if (!Array.isArray(zonesData)) {
//           console.error("Zones data is not an array:", zonesData);
//           return;
//         }

//         // Get unique zones based on zoneId
//         const uniqueZones = zonesData.reduce((accumulator, currentZone) => {
//           if (!accumulator.some((zone) => zone.zoneId === currentZone.zoneId)) {
//             accumulator.push(currentZone);
//           }
//           return accumulator;
//         }, []);

//         setZones(uniqueZones);

//         // Extract slots for each zone
//         const slots = {};
//         uniqueZones.forEach((zone) => {
//           slots[zone.zoneId] = zone.slots || [];
//         });

//         setZoneSlots(slots);
//       })
//       .catch((error) => {
//         console.error("Error fetching zones:", error);
//         toast.error("Failed to load parking zones. Please try again.");
//       });
//   }, []);

//   const handleZoneClick = (zoneId, zoneName) => {
//     setSelectedZoneId(zoneId);
//     setSelectedZoneName(zoneName);
//     setSelectedSlotId(null);
//     setSelectedSlotName("No slot selected");
//   };

//   const handleSlotClick = (slotId, slotName) => {
//     setSelectedSlotId(slotId);
//     setSelectedSlotName(slotName);
//   };

//   const BookButton = () => {
//     if (selectedSlotId === null || selectedZoneId === null) {
//       toast.error("Please select zone and slot first", {
//         autoClose: 2500,
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       localStorage.setItem("slotId", selectedSlotId);
//       localStorage.setItem("slotName", selectedSlotId);
//       localStorage.setItem("zoneId", selectedZoneId);
//       localStorage.setItem("zoneName", selectedZoneName);
//       window.location.href = "/CarDashboard";
//     }
//   };

//   const slotStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "80px",
//     height: "40px",
//     margin: "2px",
//     borderRadius: "2px",
//     cursor: "pointer",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
//   };

//   const availableSlotStyle = {
//     ...slotStyle,
//     backgroundColor: "green",
//   };

//   const occupiedSlotStyle = {
//     ...slotStyle,
//     backgroundColor: "red",
//   };

//   return (
//     <div
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center",
//       }}
//     >
//       <ToastContainer position={toast.POSITION.TOP_CENTER} />
//       {zones.length > 0 ? (
//         zones.map((zone) => {
//           const zoneId = zone.zoneId;
//           const zoneName = zone.zoneName;
//           const zoneArea = zone.zoneArea;
//           const totalSlots = zone.totalSlots || 0;
//           const availSlots = zone.availSlots || 0;
//           const slots = zoneSlots[zoneId] || [];

//           return (
//             <div key={zoneId}>
//               <button onClick={() => handleZoneClick(zoneId, zoneArea)}>
//                 {zoneArea}
//               </button>
//               {console.log('----------------',zoneArea)
//               }
//               {selectedZoneId === zoneId && (
//                 <div>
//                   <p>Total Slots: {totalSlots}</p>
//                   <p>Available Slots: {availSlots}</p>
//                   <div>
//                     {slots.length > 0 ? (
//                       slots.map((slot) => (
//                         <div
//                           key={slot.slotId}
//                           style={
//                             slot.occupied ? occupiedSlotStyle : availableSlotStyle
//                           }
//                           onClick={() =>
//                             handleSlotClick(slot.slotId, slot.slotName)
//                           }
//                         >
//                           {slot.slotName}
//                         </div>
//                       ))
//                     ) : (
//                       <p>No slots available</p>
//                     )}
//                   </div>
//                   <p>Selected Slot: {selectedSlotName}</p>
//                 </div>
//               )}
//             </div>
//           );
//         })
//       ) : (
//         <p>No zones found.</p>
//       )}
//       <div>
//         <button className="btn btn-primary" onClick={BookButton}>
//           Book
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZoneDashboard1;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from "react-toastify";

// const ZoneDashboard1 = () => {
//   const [zones, setZones] = useState([]);
//   const [zoneSlots, setZoneSlots] = useState({});
//   const [selectedZoneId, setSelectedZoneId] = useState(null);
//   const [selectedZoneName, setSelectedZoneName] = useState(null);
//   const [selectedSlotId, setSelectedSlotId] = useState(null);
//   const [selectedSlotName, setSelectedSlotName] = useState("No slot selected");

//   useEffect(() => {
//     const area = localStorage.getItem("areaId");
//     const token = localStorage.getItem("token");

//     axios
//       .get(`http://parkvilla.ap-south-1.elasticbeanstalk.com/api/Parkingareas/${area}`, {
        
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         console.log("API Response:", response.data);

//         const zonesData = response.data.zones || []; // Extract zones safely
//         console.log("Extracted zones:", zonesData);

//         if (!Array.isArray(zonesData)) {
//           console.error("Zones data is not an array:", zonesData);
//           return;
//         }

//         // Get unique zones based on zoneId
//         const uniqueZones = zonesData.reduce((accumulator, currentZone) => {
//           if (!accumulator.some((zone) => zone.zoneId === currentZone.zoneId)) {
//             accumulator.push(currentZone);
//           }
//           return accumulator;
//         }, []);

//         setZones(uniqueZones);

//         // Extract slots for each zone
//         const slots = {};
//         uniqueZones.forEach((zone) => {
//           slots[zone.zoneId] = zone.slots || [];
//         });

//         setZoneSlots(slots);
//       })
//       .catch((error) => {
//         console.error("Error fetching zones:", error);
//         toast.error("Failed to load parking zones. Please try again.");
//       });
//   }, []);

//   const handleZoneClick = (zoneId, zoneName) => {
//     console.log("Selected Zone ID:", zoneId);
//     console.log("Selected Zone Name:", zoneName);
//     setSelectedZoneId(zoneId);
//     setSelectedZoneName(zoneName);
//     setSelectedSlotId(null);
//     setSelectedSlotName("No slot selected");
//   };

//   const handleSlotClick = (slotId, slotName) => {
//     console.log("Selected Slot ID:", slotId);
//     console.log("Selected Slot Name:", slotName);
//     setSelectedSlotId(slotId);
//     setSelectedSlotName(slotName);
//   };

//   const BookButton = () => {
//     if (selectedSlotId === null || selectedZoneId === null) {
//       toast.error("Please select zone and slot first", {
//         autoClose: 2500,
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       localStorage.setItem("slotId", selectedSlotId);
//       localStorage.setItem("slotName", selectedSlotId);
//       localStorage.setItem("zoneId", selectedZoneId);
//       localStorage.setItem("zoneName", selectedZoneName);
//       window.location.href = "/CarDashboard";
//     }
//   };

//   const slotStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "80px",
//     height: "40px",
//     margin: "2px",
//     borderRadius: "2px",
//     cursor: "pointer",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
//   };

//   const availableSlotStyle = {
//     ...slotStyle,
//     backgroundColor: "green",
//   };

//   const occupiedSlotStyle = {
//     ...slotStyle,
//     backgroundColor: "red",
//   };

//   return (
//     <div
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//         alignContent: "center",
//       }}
//     >
//       <ToastContainer position={toast.POSITION.TOP_CENTER} />
//       {zones.length > 0 ? (
//         zones.map((zone) => {
//           const zoneId = zone.zoneId;
//           //const zoneName = zone.zoneName; // Correctly fetching `zoneName`
// console.log('----------------',zone.zoneName);

//           const zoneName = zone.zoneName && zone.zoneName.trim() !== "" ? zone.zoneName : "Unknown Zone";

//           const zoneArea = zone.zoneArea;
//           const totalSlots = zone.totalSlots || 0;
//           const availSlots = zone.availSlots || 0;
//           const slots = zoneSlots[zoneId] || [];

//           console.log("Zone Object:", zone); // Debugging

//           return (
//             <div key={zoneId}>
//               <button onClick={() => handleZoneClick(zoneId, zoneName)}> {/* Use `zoneName` */}
//                 {zoneName} {/* Use `zoneName` instead of `zoneArea` */}
//               </button>
//               {selectedZoneId === zoneId && (
//                 <div>
//                   <p>Total Slots: {totalSlots}</p>
//                   <p>Available Slots: {availSlots}</p>
//                   <div>
//                     {slots.length > 0 ? (
//                       slots.map((slot) => (
//                         <div
//                           key={slot.slotId}
//                           style={
//                             slot.occupied ? occupiedSlotStyle : availableSlotStyle
//                           }
//                           onClick={() =>
//                             handleSlotClick(slot.slotId, slot.slotName)
//                           }
//                         >
//                           {slot.slotName}
//                         </div>
//                       ))
//                     ) : (
//                       <p>No slots available</p>
//                     )}
//                   </div>
//                   <p>Selected Slot: {selectedSlotName}</p>
//                 </div>
//               )}
//             </div>
//           );
//         })
//       ) : (
//         <p>No zones found.</p>
//       )}
//       <div>
//         <button className="btn btn-primary" onClick={BookButton}>
//           Book
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZoneDashboard1;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ZoneDashboard1 = () => {
//   const [zones, setZones] = useState([]);
//   const [zoneSlots, setZoneSlots] = useState({});
//   const [selectedZoneId, setSelectedZoneId] = useState(null);
//   const [selectedZoneName, setSelectedZoneName] = useState(null);
//   const [selectedSlotId, setSelectedSlotId] = useState(null);
//   const [selectedSlotName, setSelectedSlotName] = useState("No slot selected");

//   useEffect(() => {
//     const area = localStorage.getItem("areaId");
//     const token = localStorage.getItem("token");

//     axios
//       .get(`http://parkvilla.ap-south-1.elasticbeanstalk.com/api/Parkingareas/${area}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const zonesData = response.data.zones || [];
//         if (!Array.isArray(zonesData)) return;

//         const uniqueZones = zonesData.reduce((acc, currentZone) => {
//           if (!acc.some((zone) => zone.zoneId === currentZone.zoneId)) {
//             acc.push(currentZone);
//           }
//           return acc;
//         }, []);

//         setZones(uniqueZones);
//         const slots = {};
//         uniqueZones.forEach((zone) => {
//           slots[zone.zoneId] = zone.slots || [];
//         });
//         setZoneSlots(slots);
//       })
//       .catch(() => {
//         toast.error("Failed to load parking zones. Please try again.");
//       });
//   }, []);

//   const handleZoneClick = (zoneId, zoneName) => {
//     setSelectedZoneId(zoneId);
//     setSelectedZoneName(zoneName);
//     setSelectedSlotId(null);
//     setSelectedSlotName("No slot selected");
//   };

//   const handleSlotClick = (slotId, slotName) => {
//     setSelectedSlotId(slotId);
//     setSelectedSlotName(slotName);
//   };

//   const BookButton = () => {
//     if (!selectedSlotId || !selectedZoneId) {
//       toast.error("Please select a zone and slot first");
//     } else {
//       localStorage.setItem("slotId", selectedSlotId);
//       localStorage.setItem("slotName", selectedSlotName);
//       localStorage.setItem("zoneId", selectedZoneId);
//       localStorage.setItem("zoneName", selectedZoneName);
//       window.location.href = "/CarDashboard";
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <ToastContainer position={toast.POSITION.TOP_CENTER} />
//       <div className="row">
//         {zones.length > 0 ? (
//           zones.map((zone) => {
//             const { zoneId, zoneName = "Unknown Zone", totalSlots = 0, availSlots = 0 } = zone;
//             const slots = zoneSlots[zoneId] || [];

//             return (
//               <div key={zoneId} className="col-md-6 mb-4">
//                 <div className="card shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title">{zoneName}</h5>
//                     <p className="card-text">Total Slots: {totalSlots}</p>
//                     <p className="card-text">Available Slots: {availSlots}</p>
//                     {/* <button
//                       className="btn btn-outline-primary mb-3"
//                       onClick={() => handleZoneClick(zoneId, zoneName)}
//                     >
//                       clear
//                     </button> */}
//                     {selectedZoneId === zoneId && (
//                       <div>
//                         <div className="d-flex flex-wrap gap-2">
//                           {slots.length > 0 ? (
//                             slots.map((slot) => (
//                               <button
//                                 key={slot.slotId}
//                                 className={`btn ${slot.occupied ? "btn-danger" : "btn-success"} mx-1`}
//                                 onClick={() => handleSlotClick(slot.slotId, slot.slotName)}
//                               >
//                                 {slot.slotName}
//                               </button>
//                             ))
//                           ) : (
//                             <p>No slots available</p>
//                           )}
//                         </div>
//                         <p className="mt-2">Selected Slot: {selectedSlotName}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-center">No zones found.</p>
//         )}
//       </div>
//       <div className="text-center mt-4">
//         <button className="btn btn-primary" onClick={BookButton}>Book</button>
//       </div>
//     </div>
//   );
// };

// export default ZoneDashboard1;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ZoneDashboard1 = () => {
  const [zones, setZones] = useState([]);
  const [zoneSlots, setZoneSlots] = useState({});
  const [selectedZoneId, setSelectedZoneId] = useState(null);
  const [selectedZoneName, setSelectedZoneName] = useState(null);
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [selectedSlotName, setSelectedSlotName] = useState("No slot selected");

  useEffect(() => {
    const area = localStorage.getItem("areaId");
    const token = localStorage.getItem("token");

    axios
      .get(`http://parkvilla.ap-south-1.elasticbeanstalk.com/api/Parkingareas/${area}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const zonesData = response.data.zones || [];
        if (!Array.isArray(zonesData)) return;

        const uniqueZones = zonesData.reduce((acc, currentZone) => {
          if (!acc.some((zone) => zone.zoneId === currentZone.zoneId)) {
            acc.push(currentZone);
          }
          return acc;
        }, []);

        setZones(uniqueZones);
        const slots = {};
        uniqueZones.forEach((zone) => {
          slots[zone.zoneId] = zone.slots || [];
        });
        setZoneSlots(slots);
      })
      .catch(() => {
        toast.error("Failed to load parking zones. Please try again.");
      });
  }, []);

  const handleZoneClick = (zoneId, zoneName) => {
    setSelectedZoneId(zoneId);
    setSelectedZoneName(zoneName);
    setSelectedSlotId(null);
    setSelectedSlotName("No slot selected");
  
    // Fixing Available Slots Calculation
    const slots = zoneSlots[zoneId] || [];
    const availableSlotCount = slots.filter(slot => slot.isOccupied === 0).length;
  
    console.log(`Total Slots: ${slots.length}, Available Slots: ${availableSlotCount}`);
  };
  

  // const handleSlotClick = (slotId, slotName) => {
  //   setSelectedSlotId(slotId);
  //   setSelectedSlotName(slotName);
  // };



  const handleSlotClick = (slotId, slotName) => {
    const token = localStorage.getItem("token");
  
    axios
      .put(`http://parkvilla.ap-south-1.elasticbeanstalk.com/api/parkingslots/occupy/${slotId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(() => {
        setSelectedSlotId(slotId);
        setSelectedSlotName(slotName);
        toast.success("Slot booked successfully! It will be released after 2 hours.");
      })
      .catch(() => {
        toast.error("Failed to book slot. Please try again.");
      });
  };
  

  const BookButton = () => {
    if (!selectedSlotId || !selectedZoneId) {
      toast.error("Please select a zone and slot first");
    } else {
      localStorage.setItem("slotId", selectedSlotId);
      localStorage.setItem("slotName", selectedSlotName);
      localStorage.setItem("zoneId", selectedZoneId);
      localStorage.setItem("zoneName", selectedZoneName);
      window.location.href = "/CarDashboard";
    }
  };

  return (
    <div className="container mt-4">
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      <div className="row">
        {zones.length > 0 ? (
          zones.map((zone) => {
            const { zoneId, zoneName = "Unknown Zone", totalSlots = 0 } = zone;
            const slots = zoneSlots[zoneId] || [];
            const availableSlots = slots.reduce(
              (acc, slot) => (slot.isOccupied ? acc : acc + 1),
              0
            );

            return (
              <div key={zoneId} className="col-md-6 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{zoneName}</h5>
                    <p className="card-text">Total Slots: {slots.length}</p>
<p className="card-text">Available Slots: {slots.filter(slot => slot.isOccupied === 0).length}</p>

                    <button
                      className="btn btn-outline-primary mb-3"
                      onClick={() => handleZoneClick(zoneId, zoneName)}
                    >
                      Select Zone
                    </button>
                    {selectedZoneId === zoneId && (
                      <div>
                        <div className="d-flex flex-wrap gap-2">
                          {slots.length > 0 ? (
                            slots.map((slot) => (
                              <button
                                key={slot.slotId}
                                className={`btn ${slot.isOccupied ? "btn-danger" : "btn-success"} mx-1`}
                                onClick={() => handleSlotClick(slot.slotId, slot.slotName)}
                                disabled={slot.isOccupied}
                              >
                                {slot.slotName}
                              </button>
                            ))
                          ) : (
                            <p>No slots available</p>
                          )}
                        </div>
                        <p className="mt-2">Selected Slot: {selectedSlotName}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center">No zones found.</p>
        )}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={BookButton}>Book</button>
      </div>
    </div>
  );
};

export default ZoneDashboard1;

