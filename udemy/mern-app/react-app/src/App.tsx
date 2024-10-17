import React, { useEffect, useState } from 'react';

const App = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState(''); // State to store the input field value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch existing names from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/name');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setNames(data); // Set the fetched names
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Fetch names only once when the component mounts

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    if (newName.trim() === '') {
      alert('Please enter a name'); // Validate input
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }), // Send the new name in the body
      });

      if (!response.ok) {
        throw new Error('Failed to add name');
      }

      const addedName = await response.json(); // Get the response (newly added name)

      // Update the list of names
      setNames((prevNames) => [...prevNames, addedName]);

      // Clear the input field
      setNewName('');
    } catch (error) {
      setError(error.message);
    }
  };

  // If data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>hello docker updated!</h1>

      {/* Input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)} // Update newName state with input value
          placeholder="Enter a name"
        />
        <button type="submit">Add Name</button>
      </form>

      {/* Display the list of names */}
      <ul>
        {names.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
