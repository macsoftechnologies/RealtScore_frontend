import { useState } from "react";
import ManageProperties from "./components/ManageProperties";
import ScoringCriteria from "./components/ScoringCriteria";
import UserActivity from "./components/UserActivity";
import "./AdminPanel.css";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("properties");

  const renderContent = () => {
    switch (activeTab) {
      case "properties":
        return <ManageProperties />;
      case "criteria":
        return <ScoringCriteria />;
      case "activity":
        return <UserActivity />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-bg py-4">
      <div className="container-fulid  rounded bg-white p-4">
        <h1 className="text-center mb-5 admin-title">
          Admin Panel – REALTScore
        </h1>

        {/* Navigation Tabs */}
        <ul className="nav nav-pills bg-color justify-content-center mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "properties" ? "active" : ""
              }`}
              onClick={() => setActiveTab("properties")}
            >
              Manage Properties
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "criteria" ? "active" : ""
              }`}
              onClick={() => setActiveTab("criteria")}
            >
              Scoring Criteria
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "activity" ? "active" : ""
              }`}
              onClick={() => setActiveTab("activity")}
            >
              User Activity
            </button>
          </li>
        </ul>

        {/* Dynamic Section */}
        <div className="admin-content">{renderContent()}</div>
      </div>
    </div>
  );
}
