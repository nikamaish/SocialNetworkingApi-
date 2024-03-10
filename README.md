
# Social Networking API with MongoDB


Welcome to the Social Networking API, a powerful platform designed to facilitate seamless communication and connection between users. This API is built on Node.js and MongoDB, ensuring efficient data storage and retrieval for a rich social networking experience. The primary goal is to empower developers to create robust social applications with features including user profiles, posts, authentication, and some cool mechanisms. This API focuses on data modeling, security, and performance. MongoDB ensures optimal data storage and retrieval, while Node.js powers the backend with its asynchronous, event-driven architecture.


##  Prerequisites

- Node.js (v18.12.1)
- MongoDB (v4.4.15)


## Setup Instructions

To get a copy of this project, simply clone the repository:
```
git clone https://github.com/nikamaish/SocialNetworkingApi-.git
cd backend
```

## Install dependencies
```bash
npm init -y
npm install
```


## Environment Variables

```env
Create a .env file in the root directory and add the following variables:

PORT=5000

MONGODB_URI= mongodb+srv://your-username:your-password@clustername.mongodb.net/your-database?retryWrites=true&w=majority

JWT_SECRET=your-secret-key
```

## Database Setup

Ensure MongoDB is running and follow the steps below to set up the database:

1. **MongoDB Installation:**
   - If MongoDB is not installed on your machine, [install MongoDB](https://docs.mongodb.com/manual/installation/).

2. **MongoDB Atlas:**
   - If you're using MongoDB Atlas, make sure you have created a cluster and obtained the connection URI.

3. **Configuration:**
   - Open the `.env` file in the project's root directory.
   - Update the `MONGODB_URI` variable with your MongoDB connection URI.

4. **Run MongoDB:**
   - Start your MongoDB server. If installed locally, run `mongod` in the terminal.

5. **Verify Connection:**
   - Run your application and verify that it successfully connects to the MongoDB database.

Now, your database should be set up and ready to use. If you encounter any issues, refer to MongoDB's official documentation for troubleshooting.


## Running the Application

Start the application:

```bash
npm start
```

## API Documentation

[ API Documentation](https://drive.google.com/file/d/1y_pOisj81wo03u8paW0wwKsyPZBgufNN/view?usp=sharing)


## Testing Documentation

[ Testing Documentation](https://drive.google.com/file/d/1kVC99uMIMsEPjjmVSD-Mv8PlAN1yIPqL/view?usp=sharing)(

## Deployment Link

[ Deployment Link] (https://socialnetworking-backend-2.onrender.com)



## Schema Design

![Schema Diagram](https://github.com/nikamaish/SocialNetworkingApi-/assets/100349291/be5cd75b-16e5-4d54-82e6-d300c9304591)









