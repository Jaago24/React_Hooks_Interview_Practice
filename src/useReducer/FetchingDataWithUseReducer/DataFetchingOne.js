import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetchingOne() {
  // State variables for loading, posts, and error
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // Simulate a delay of 500ms before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 500);
        // Set the received data to the posts state
        setPosts(response.data);
        // Clear any previous error
        setError("");
      })
      .catch((error) => {
        // Set loading to false immediately if there's an error
        setLoading(false);
        // Clear posts state
        setPosts({});
        // Set error message
        setError("Error fetching data");
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container">
      {loading ? (
        // Show loading message while data is being fetched
        "Loading..."
      ) : (
        <div>
          {/* Display post title when data fetching is complete */}
          <p>{posts.title}</p>
        </div>
      )}
      {/* Display error message if there's an error */}
      {error ? error : null}
    </div>
  );
}
