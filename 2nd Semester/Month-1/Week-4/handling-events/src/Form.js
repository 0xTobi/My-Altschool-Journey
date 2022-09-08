import React from 'react'

// Handle form input changes
function handleChange(event) {
  event.preventDefault();
  console.log(`Value is ${event.target.value}`);
}

// Render
function Form() {
  return (
    <div className="App">
      <form>
        <input
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
        />
        <input
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Form;
