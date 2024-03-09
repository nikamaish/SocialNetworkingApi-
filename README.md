
# Social Networking API with MongoDB


Welcome to the Social Networking API, a powerful platform designed to facilitate seamless communication and connection between users. This API is built on Node.js and MongoDB, ensuring efficient data storage and retrieval for a rich social networking experience. The primary goal is to empower developers to create robust social applications with features including user profiles, posts, authentication, and some cool mechanisms. This API focuses on data modeling, security, and performance. MongoDB ensures optimal data storage and retrieval, while Node.js powers the backend with its asynchronous, event-driven architecture.

##  Prerequisites

- Node.js (v18.12.1)
- MongoDB (v4.4.15)

## Setup Instructions

To get a copy of this project, simply clone the repository:

git clone https://github.com/nikamaish/SocialNetworkingApi-.git
cd backend


## Install dependencies
npm init -y
npm install

## Environment Variables

Create a .env file in the root directory and add the following variables:

PORT=5000

MONGODB_URI= MONGODB_URI=mongodb+srv://your-username:your-password@clustername.mongodb.net/your-database?retryWrites=true&w=majority

JWT_SECRET = JWT_SECRET=your-secret-key


## Running the Application

Start the application:

```bash
npm start
