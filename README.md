## Getting Started

First, install dependancies

npm install

Then, run the development server:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

To run an optimised production build:

npm run build

Once the project has successfully built, run:

npm start

# Level 1: Dashboard

In this level, a dashboard layout is established utilising the new app router from Next.js. The project structure and the use of server and client components are critical in this setup. Here's a detailed breakdown:

## Project Structure:

- **layout.js:** Serves a similar purpose to the traditional `_document` file in Next.js.
- **page.js:** Resembles the old `_app.js` file, acting as the home page with links leading to either the dashboard or form tasks.
- **components:** This directory houses any reusable modular components.
- **dashboard:**
  - **layout.js:** Contains the navigation for the dashboard and any other shared components.
  - **page.js:** Hosts all the components on the main dashboard page.

## Server and Client Components:

With the use of Next.js's new app router, all components are considered server components by default. However, if a file contains 'use client' at the top, it's treated as a client component instead.

```javascript
"use client"; // This line makes a component a client component
```

# Bonus Level 2: Form

The form component was designed with simplicity and user-friendliness in mind. Here's a breakdown of how it was developed and how it functions:
NOTE: the username and password for the mongodb string is located at root level in credentials.pdf. The file's password has been provided to Giuseppe Muci.

## Overview:

1. The form consists of three primary input fields: `email`, `password`, and `confirmPassword`.
2. The `email` input field is of type `email` which ensures basic email format validation.
3. The `password` and `confirmPassword` fields are of type `password` ensuring the content is hidden while typing.
4. Upon submitting the form, basic client-side validation is performed to ensure all fields are filled. If not, an error message is shown.
5. If the form passes the initial client-side validation, an API call is made to the backend to further validate and process the data.

## Client-side:

The front-end part of the form is built using React hooks:

1. **State Management**: We utilise React's `useState` to manage the state of each input field and any messages or errors that need to be displayed.
2. **Form Submission**: The `handleSubmit` function is responsible for:
   - Basic client-side validation
   - Making the API call to the backend
   - Displaying any subsequent messages or errors received from the backend.
3. **Input Change**: The `handleInputChange` function updates the state of the respective input field whenever its value changes.

## Styling:

The form and its components are styled using a CSS module named `Form.module.css`. This ensures styles scoped only to this component and avoids unwanted global style interference.

# Bonus Level 2: MongoDB

Our backend leverages MongoDB, a NoSQL database, to store user information.

## API Endpoint: `/api/form`

When the user submits the form, a POST request is made to this endpoint.

### Functionality:

1. **MongoDB Connection**: A connection is established to the MongoDB database using the provided URI (with credentials). Typically, these credentials would be stored in environment variables for security.
2. **Validation**:
   - The email format is validated against a regex pattern.
   - The `password` and `confirmPassword` fields are checked for consistency.
3. **Data Insertion**: If the validations pass, the user's email and password are inserted into the `users` collection in the MongoDB database.
   - **Note**: In a production scenario, passwords should be hashed before being stored.
4. **Response Handling**: The API then sends a response back to the client. This could either be a success message or an error message based on the outcome of the above steps.

### Error Handling:

The entire API operation is wrapped in a try-catch block to handle any potential errors during the execution. Specific error messages are returned based on the type of error, ensuring the user is informed of any issues during the registration process.
