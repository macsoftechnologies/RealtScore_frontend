import { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import Badge from "../components/Badge/Badge";
import Modalstyle from "../components/Modal/Modal.module.css";


const properties = [
  {
    id: 101,
    location: "Vizag Beach Road",
    score: 88,
    badges: [
      { label: "Residential", type: "residential" },
      { label: "Investment", type: "investment" },
    ],
    description: "Beautiful property facing the sea, ideal for family living.",
  },
  {
    id: 102,
    location: "Guntur Ring Road",
    score: 81,
    badges: [{ label: "Investment", type: "investment" }],
    description: "Prime property for long-term investment potential.",
  },
  {
    id: 103,
    location: "Araku Valley",
    score: 75,
    badges: [{ label: "Guest House", type: "guestHouse" }],
    description: "Peaceful hill retreat, perfect for guest house use.",
  },
];

// Example param names and max scores (without icons)
const parameterDefinitions = [
  {
    key: "proximityNH",
    label: "Proximity to NH",
    max: 15,
    icon: "fa-solid fa-road",
  },
  {
    key: "nearestCity",
    label: "Nearest City",
    max: 10,
    icon: "fa-solid fa-city",
  },
  {
    key: "publicPlaces",
    label: "Public Places",
    max: 10,
    icon: "fa-solid fa-tree-city",
  },
  { key: "education", label: "Education", max: 10, icon: "fa-solid fa-school" },
  {
    key: "hospitals",
    label: "Hospitals",
    max: 10,
    icon: "fa-solid fa-hospital",
  },
  {
    key: "commercialZones",
    label: "Commercial Zones",
    max: 10,
    icon: "fa-solid fa-store",
  },
  {
    key: "connectivity",
    label: "Connectivity",
    max: 10,
    icon: "fa-solid fa-wifi",
  },
  {
    key: "infrastructure",
    label: "Infrastructure",
    max: 5,
    icon: "fa-solid fa-tools",
  },
  {
    key: "growthPotential",
    label: "Growth Potential",
    max: 5,
    icon: "fa-solid fa-chart-line",
  },
  {
    key: "legalClarity",
    label: "Legal Clarity",
    max: 5,
    icon: "fa-solid fa-gavel",
  },
  {
    key: "environmentalSafety",
    label: "Environmental Safety",
    max: 5,
    icon: "fa-solid fa-leaf",
  },
  {
    key: "internalAmenities",
    label: "Internal Amenities",
    max: 15,
    icon: "fa-solid fa-home",
  },
];

// helper for coloring
const getScoreClass = (score, max) => {
  const pct = (score / max) * 100;
  if (pct >= 70) return "good";
  if (pct >= 40) return "warn";
  return "bad";
};

export default function ExploreProperties() {
  const [search, setSearch] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [reportData, setReportData] = useState(null);

  const handlePreview = (property) => {
    setSelectedProperty(property);
    setPreviewOpen(true);
  };

  const handleReport = (property) => {
    setSelectedProperty(property);

    // mock fetch report
    fetchReport(property.id).then((data) => {
      setReportData(data);
      setReportOpen(true);
    });
  };

  const fetchReport = async (propertyId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          proximityNH: { score: 12 },
          nearestCity: { score: 7 },
          publicPlaces: { score: 8 },
          education: { score: 10 },
          hospitals: { score: 9 },
          commercialZones: { score: 6 },
          connectivity: { score: 7 },
          infrastructure: { score: 4 },
          growthPotential: { score: 3 },
          legalClarity: { score: 5 },
          environmentalSafety: { score: 4 },
          internalAmenities: { score: 13 },
        });
      }, 500);
    });
  };

  return (
    <div className="explore-container">
      <h1 className="title">Explore Properties</h1>
      <p className="subtitle">
        Browse and compare properties by REALTScore, location, and use-case
        badges.
      </p>

      {/* Search */}
      <div className="search-bar row justify-content-center mb-4">
        <div className="col-md-6 col-sm-8 mb-2">
          <Input
            placeholder="Search by location or property ID..."
            value={search}
            onChange={(val) => setSearch(val)}
          />
        </div>
        <div className="col-md-2 col-sm-4 mb-2 justify-content-center">
          <Button variant="serchbtn">Search</Button>
        </div>
      </div>

      {/* Cards */}
      <div className="card-grid">
        {properties
          .filter(
            (p) =>
              p.location.toLowerCase().includes(search.toLowerCase()) ||
              p.id.toString().includes(search)
          )
          .map((property) => (
            <Card
              key={property.id}
              title={`Property #${property.id}`}
              location={property.location}
              score={property.score}
              badges={property.badges}
              footer={
                <div className="actions">
                  <Button
                    variant="secondary"
                    onClick={() => handlePreview(property)}
                  >
                    👁 Preview
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => handleReport(property)}
                  >
                    View Report
                  </Button>
                </div>
              }
            />
          ))}
      </div>

      {/* Preview Modal (small) */}
      <Modal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        title={`Preview – Property #${selectedProperty?.id ?? ""}`}
        className={Modalstyle.small} // add small class
      >
        {selectedProperty && (
          <div>
            <p>
              <strong>Location:</strong> {selectedProperty.location}
            </p>
            <p style={{ color: "var(--color-success)" }}>
              <strong>Score:</strong> {selectedProperty.score}
            </p>
            <div className="badges">
              {selectedProperty.badges.map((b, i) => (
                <Badge key={i} variant={b.type}>
                  {b.label}
                </Badge>
              ))}
            </div>
            <p className="desc">{selectedProperty.description}</p>
          </div>
        )}
      </Modal>

      {/* Report Modal (large) */}
      <Modal
        open={reportOpen}
        onClose={() => {
          setReportOpen(false);
          setReportData(null);
        }}
        title={`REALTScore Report – Property #${selectedProperty?.id ?? ""}`}
        className={Modalstyle.large} // add large class
      >
        {selectedProperty && reportData ? (
          <div className="report-container">
            <p>
              <strong>Location:</strong> {selectedProperty.location}
            </p>
            <p>
              <strong>Total Score:</strong> {selectedProperty.score}/100
            </p>

            <div className="report-grid">
              {parameterDefinitions.map((param) => (
                <div key={param.key} className="report-item">
                  <i className={param.icon} style={{ marginRight: "8px" }}></i>
                  <span className="label">{param.label}:</span>
                  <span
                    className={`value ${getScoreClass(
                      reportData[param.key].score,
                      param.max
                    )}`}
                  >
                    {reportData[param.key].score}/{param.max} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>Loading report...</div>
        )}
      </Modal>
      
    </div>
  );
}
