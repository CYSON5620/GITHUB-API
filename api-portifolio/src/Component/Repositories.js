import React, { useState, useEffect } from "react";
import axios from "axios";

function Repositories() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/YOUR_USERNAME/repos?page=${page}&q=${searchTerm}`);
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchData();
  }, [page, searchTerm]);

  // Pagination and search logic here

  return (
    <div className="container mx-auto">
      {/* Render repositories */}
    </div>
  );
}

export default RepositoriesPage;
