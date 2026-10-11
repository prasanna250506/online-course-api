# Online Course Management REST API

## Project Overview
A REST API built using Node.js, Express.js, MongoDB Atlas, and Mongoose to manage online courses. It supports creating, retrieving, updating, and deleting course records.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman

## Features
- Add a new course
- Retrieve all courses
- Retrieve a course by ID
- Update course details
- Delete a course
- Validate course data
- Store course information in MongoDB Atlas

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/courses` | Create a course |
| GET | `/api/courses` | Get all courses |
| GET | `/api/courses/:id` | Get a course by ID |
| PUT | `/api/courses/:id` | Update a course |
| DELETE | `/api/courses/:id` | Delete a course |

## Course Data Example

```json
{
  "title": "Python for Beginners",
  "instructor": "Nihar",
  "duration": "6 weeks",
  "price": 1991
}
```

## Setup Instructions

1. Install Node.js.
2. Clone or download this repository.
3. Open a terminal in the project directory.
4. Install dependencies:

   `npm install`

5. Create a `.env` file in the project root:

   `PORT=3000`

   `MONGODB_URI=your_mongodb_connection_string`

6. Start the server:

   `node server.js`

7. Open Postman and test the API endpoints.

## Environment Variables
Keep database credentials in `.env`. Never commit `.env` or share your database password publicly.

## Testing
The API endpoints were tested using Postman. Course data is stored in MongoDB Atlas.
