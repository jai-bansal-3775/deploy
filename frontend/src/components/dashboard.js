


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItems } from "../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getItems();
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <main>
        <h1 className="dashboard-title">Welcome to the Real-Estate</h1>
        <div className="item-cards">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item._id} className="card">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-email">Added by: {item.email}</p>
              </div>
            ))
          ) : (
            <p className="no-items">No items found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

