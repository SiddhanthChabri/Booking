Booking.com Clone
Overview
The Booking.com Clone is a full-stack web application inspired by Booking.com, designed to allow users to search, filter, and book hotels. As a final-year Computer Science student, I developed this project to apply my skills in modern web development, focusing on creating a responsive user interface, a robust backend, and efficient database integration. The project demonstrates my proficiency in building scalable web applications using React, Node.js, and PostgreSQL, with an emphasis on clean code and REST API design.
Features

Hotel Search and Filtering: Users can search for hotels by location, dates, or preferences and filter results based on criteria like price or rating.
Booking System: Enables users to book hotels with a streamlined checkout process, including user authentication.
Responsive Design: The frontend adapts seamlessly to desktop and mobile devices for an intuitive user experience.
RESTful APIs: Backend APIs handle user management, hotel data, and booking operations with secure and efficient communication.
Database Integration: Stores hotel listings and booking records in PostgreSQL with optimized queries for performance.

Technologies Used

Frontend: React.js, HTML, CSS
Backend: Node.js, Express
Database: PostgreSQL
Tools: Git, GitHub, Postman (for API testing), Visual Studio Code

Setup Instructions
To run this project locally, follow these steps:
Prerequisites

Node.js (v16 or higher)
PostgreSQL (v12 or higher)
Git

Installation

Clone the Repository:
git clone https://github.com/SiddhanthChabri/Booking.git
cd Booking


Set Up the Backend:

Navigate to the backend directory:cd backend


Install dependencies:npm install


Configure the PostgreSQL database:
Create a database named booking_db.
Update the database connection settings in backend/config/database.js with your PostgreSQL credentials.


Run database migrations (if applicable) or execute the SQL schema in backend/database/schema.sql to set up tables.
Start the backend server:npm start




Set Up the Frontend:

Navigate to the frontend directory:cd ../frontend


Install dependencies:npm install


Start the frontend development server:npm start




Access the Application:

Open your browser and navigate to http://localhost:3000 to view the frontend.
The backend API runs on http://localhost:5000 (or the port specified in backend/.env).


Test APIs (Optional):

Use Postman or Insomnia to test API endpoints (e.g., /api/hotels, /api/bookings).
Refer to backend/api-docs.md (if available) for endpoint details.



Project Structure

frontend/: Contains React.js components, HTML, and CSS for the user interface.
backend/: Includes Node.js/Express server, REST API routes, and PostgreSQL database configuration.
backend/database/: SQL scripts for database schema and sample data.

Screenshots
Below are screenshots showcasing the application’s key features:



Learning Outcomes
This project strengthened my skills in:

Designing and implementing RESTful APIs with Node.js and Express.
Building responsive and user-friendly interfaces using React.js.
Managing database operations with PostgreSQL, including schema design and query optimization.
Writing clean, modular code and documenting it effectively for collaboration.
Debugging and testing full-stack applications using tools like Postman.

Future Improvements

Add user reviews and ratings for hotels.
Implement advanced search filters (e.g., by amenities or proximity).
Integrate payment processing for a complete booking experience.
Deploy the application on a platform like Vercel or Heroku for live access.



Developed by Siddhanth Chabri, a final-year B.Tech student passionate about full-stack development and innovative software solutions.
