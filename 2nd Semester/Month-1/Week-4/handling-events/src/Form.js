import React from "react";

// Handle form input changes
function handleChange(event) {
  event.preventDefault();
  console.log(`The value is ${event.target.value}`);
}

// Render
function Form() {
  return (
    <div className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { name, email, password } = event.target.elements;
          console.log(
            `Your name is ${name.value}, your email is ${email.value}, and your password length is ${password.value.length}`
          );
        }}
      >
        <input
          placeholder="Enter your name"
          type="text"
          onChange={handleChange}
          name="name"
        />
        <input
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          name="email"
        />
        <input
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
