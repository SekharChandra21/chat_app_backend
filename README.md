# Chat Application – Backend

## Overview
This is the backend server for a real-time chat application.

It provides authentication APIs, messaging APIs, and WebSocket functionality for real-time communication.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (JWT)
- Socket.IO
- Cloudinary
- Railway (Deployment)

---

## Features

- Secure authentication using JWT
- Protected API routes
- Real-time messaging
- Online user tracking
- Profile image upload
- RESTful API architecture

---


---

## Installation

Clone repository:

```
cd Backend
```

## Install dependencies:
```
npm install
nodemon start
```

---

## Run the Server

```
Server runs at: http://localhost:3000
```


---

## API Endpoints

### Authentication

```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/check
PUT /api/auth/update-profile
```


### Messaging

```
GET /api/messages/users
GET /api/messages/:id
POST /api/messages/send/:id
```


---

## Authentication Flow

1. User logs in
2. Server generates JWT token
3. Token stored in HTTP-only cookie
4. Middleware verifies token for protected routes

---

## WebSocket

Socket.IO is used for real-time communication.

Features:

- Online user tracking
- Instant message delivery
- User specific socket connections

---

## Database

MongoDB Atlas stores:

- Users
- Messages
- Profile images

---

## Deployment

Backend is deployed on Railway.

Steps:

1. Push backend code to GitHub
2. Connect repository to Railway
3. Configure environment variables
4. Deploy server

---

## Author

Chandra Sekhar Aripaka



