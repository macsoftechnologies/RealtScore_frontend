// import React, { useState } from "react";
// import Input from "../components/Input/Input";

// function App() {
//   const [num, setNum] = useState("");
//   const [alpha, setAlpha] = useState("");
//   const [alnum, setAlnum] = useState("");

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Custom Inputs</h2>

//       <label>Numeric Only</label>
//       <Input 
//         placeholder="Enter numbers only" 
//         value={num} 
//         onChange={setNum} 
//         mode="numeric" 
//       />

//       <label>Alphabets Only</label>
//       <Input 
//         placeholder="Enter alphabets only" 
//         value={alpha} 
//         onChange={setAlpha} 
//         mode="alpha" 
//       />

//       <label>Alphanumeric Only</label>
//       <Input 
//         placeholder="Enter letters & numbers" 
//         value={alnum} 
//         onChange={setAlnum} 
//         mode="alphanumeric" 
//       />
//     </div>
//   );
// }

// export default App;

// home...


// src/pages/Home.js
// import React, { useState } from "react";
// import Card from "../components/Card/Card";
// import Button from "../components/Button/Button";
// import Input from "../components/Input/Input";
// import Modal from "../components/Modal/Modal";

// const propertyData = [
//   {
//     id: "101",
//     title: "Property #101",
//     location: "Vizag Beach Road",
//     score: 88,
//     badges: [
//       { label: "Residential", type: "residential" },
//       { label: "Investment", type: "investment" },
//     ],
//   },
//   {
//     id: "102",
//     title: "Property #102",
//     location: "Guntur Ring Road",
//     score: 81,
//     badges: [{ label: "Investment", type: "investment" }],
//   },
//   {
//     id: "103",
//     title: "Property #103",
//     location: "Araku Valley",
//     score: 75,
//     badges: [{ label: "Guest House", type: "guestHouse" }],
//   },
// ];

// function Home() {
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter properties by ID or Location
//   const filteredProperties = propertyData.filter(
//     (property) =>
//       property.id.includes(searchTerm) ||
//       property.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearch = () => {
//     console.log("Search triggered:", searchTerm);
//     // In real app, you could fetch from backend here
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ marginBottom: "8px" }}>Explore Properties</h2>
//       <p style={{ marginBottom: "16px", color: "var(--color-muted)" }}>
//         Browse and compare properties by REALTScore, location, and use-case badges.
//       </p>

//       {/* 🔍 Search Input + Button */}
//       <div style={{ display: "flex", gap: "8px", maxWidth: "500px", marginBottom: "24px" }}>
//         <Input
//           placeholder="Search by location or property ID..."
//           value={searchTerm}
//           onChange={setSearchTerm}
//           mode="text"
//         />
//         <Button variant="primary" size="md" onClick={handleSearch}>
//           🔍 Search
//         </Button>
//       </div>

//       {/* Property Cards */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
//         {filteredProperties.length > 0 ? (
//           filteredProperties.map((property) => (
//             <Card
//               key={property.id}
//               title={property.title}
//               location={property.location}
//               score={property.score}
//               badges={property.badges}
//               footer="Explore full property details"
//             >
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setSelectedProperty(property)}
//               >
//                 👁 Preview
//               </Button>
//               <Button variant="secondary" size="sm">
//                 View Report
//               </Button>
//             </Card>
//           ))
//         ) : (
//           <p style={{ color: "var(--color-muted)" }}>No properties found.</p>
//         )}
//       </div>

//       {/* Modal for preview */}
//       <Modal
//         open={!!selectedProperty}
//         onClose={() => setSelectedProperty(null)}
//         title={selectedProperty ? `Preview – ${selectedProperty.title}` : ""}
//       >
//         {selectedProperty && (
//           <div>
//             <p>
//               Location: {selectedProperty.location} <br />
//               <strong style={{ color: "var(--color-success)" }}>
//                 Score: {selectedProperty.score}
//               </strong>
//             </p>

//             {/* badges */}
//             <div
//               style={{
//                 display: "flex",
//                 gap: "var(--space-2)",
//                 marginTop: "var(--space-3)",
//                 flexWrap: "wrap",
//               }}
//             >
//               {selectedProperty.badges.map((badge) => (
//                 <span
//                   key={badge.label}
//                   style={{
//                     background:
//                       badge.type === "residential"
//                         ? "var(--color-residential-bg)"
//                         : badge.type === "guestHouse"
//                         ? "var(--color-guest-bg)"
//                         : "var(--color-badge-bg)",
//                     color:
//                       badge.type === "investment"
//                         ? "var(--color-badge-text)"
//                         : "white",
//                     padding: "2px 8px",
//                     borderRadius: "var(--radius-sm)",
//                     fontSize: "var(--font-size-sm)",
//                   }}
//                 >
//                   {badge.label}
//                 </span>
//               ))}
//             </div>

//             <p style={{ marginTop: "var(--space-3)", color: "var(--color-muted)" }}>
//               This is a quick preview of the property&apos;s REALTscore.  
//               Click &quot;View Report&quot; on the card to get full scoring details and insights.
//             </p>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// }

// export default Home;

