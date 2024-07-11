import React, { useEffect, useReducer } from "react";
import axios from "axios";

// Initial state of the data fetching
const initialState = {
  loading: true,
  posts: {},
  error: "",
};

// Reducer function to manage state transitions
const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      // Update state when data fetching is successful
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };

    case "FETCH_FAILURE":
      // Update state when data fetching fails
      return {
        loading: false,
        posts: {},
        error: "Something went wrong",
      };

    default:
      // Return initial state for any unknown action type
      return initialState;
  }
};

export default function DataFetchingOne() {
  // useReducer hook to manage state based on actions
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // Simulate a delay of 500ms before dispatching success action
        setTimeout(() => {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: response.data,
          });
        }, 500);
      })
      .catch((error) => {
        // Dispatch failure action immediately if there's an error
        dispatch({
          type: "FETCH_FAILURE",
        });
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container">
      {state.loading ? (
        // Show loading message while data is being fetched
        "Loading..."
      ) : (
        <div>
          {/* Display post title when data fetching is complete */}
          <p>{state.posts.title}</p>
        </div>
      )}
      {/* Display error message if there's an error */}
      {state.error ? state.error : null}
    </div>
  );
}