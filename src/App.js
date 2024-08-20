import React, { useEffect, useState } from 'react';

function App() {
  // State to store the fetched data
  const [data, setData] = useState(null);

  // Fetch data from the Django API when the component mounts
  useEffect(() => {
    fetch('http://localhost:8000/api/data/')
      .then(response => {
        // Ensure the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))  // Update the state with the fetched data
      .catch(error => console.error('There was a problem with the fetch operation:', error));
  }, []);  // The empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple Website</h1>
        <p>This is a basic website created with React and Django.</p>

        {/* Conditional rendering to handle data loading */}
        {data ? (
          <div>
            <h2>Data present in the API call from Django:</h2>
            <table>
              <tr>
                <td>
                  Name:
                </td>
                <td>
                  Designation:
                </td>
              </tr>
              <tr>
                <td>
                {data.name}
                </td>
                <td>{data.role}
                </td>
              </tr>
            </table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
