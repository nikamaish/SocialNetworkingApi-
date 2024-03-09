
# Social Networking API with MongoDB


Welcome to the Social Networking API, a powerful platform designed to facilitate seamless communication and connection between users. This API is built on Node.js and MongoDB, ensuring efficient data storage and retrieval for a rich social networking experience. The primary goal is to empower developers to create robust social applications with features including user profiles, posts, authentication, and some cool mechanisms. This API focuses on data modeling, security, and performance. MongoDB ensures optimal data storage and retrieval, while Node.js powers the backend with its asynchronous, event-driven architecture.

##  Prerequisites

- Node.js (version x.x.x)
- MongoDB (version x.x.x)

## Setup Instructions

To get a copy of this project, simply clone the repository:


git clone https://github.com/nikamaish/SocialNetworkingApi-.git
cd backend

## Install dependencies
npm install

## Environment Variables


Create a .env file in the root directory and add the following variables:

PORT=5000

MONGODB_URI= mongodb+srv://aish:5ICVq93au8Gte7UC@cluster0.wptflvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

JWT_SECRET = eyJhbGciOiJIUzUxMiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwOTkwMjMwMywiaWF0IjoxNzA5OTAyMzAzfQ.x34HKgAJR8ycA5FKTCqFBIHxT6zayenW2lxv6PCNojqRRoDZ5RPTGOYJvZzleLYIm46MwtlcvJL_rwz7yxnd-Q
## Running the Application

Start the application:

```bash
npm start
