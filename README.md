# Wanderlust

A full-stack web application built with Node.js, Express, EJS, and CSS—powered by a MongoDB database and deployed on Vercel. Wanderlust helps travelers discover, save, and share their favorite destinations.

## Table of Contents
- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Repository Structure](#repository-structure)  
- [Installation & Setup](#installation--setup)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Contributing](#contributing)  
- [Contact](#contact)

## Overview
Wanderlust is designed to help users explore and manage travel destinations. Powered by a friendly UI and robust backend, it offers a seamless experience whether you're discovering new places or planning your next trip.

*(Optional: Add a screenshot or live demo link here)*

## Features
- **Browse Destinations**: View existing travel spots with details like name, description, and images.  
- **Add / Edit / Delete**: Authenticated users can manage their travel entries.  
- **User Authentication**: Sign up, login, and session-based access control.  
- **Cloud Media Integration**: Upload photos using a cloud storage service (e.g., Cloudinary).  
- **Search & Filter**: Find destinations by name, region, or category.  
- **Responsive Design**: Works smoothly across desktop and mobile devices.


## Tech Stack
- **Backend**: Node.js, Express  
- **Authentication & Middleware**: express-session, bcrypt (or other), custom middleware  
- **Templating & Frontend**: EJS, CSS  
- **Database**: MongoDB (via Mongoose)  
- **Cloud Services**: Image uploads (e.g., Cloudinary configuration in `cloudConfig.js`)  
- **Deployment**: Vercel (see `vercel.json`)  
- **Utilities & Helpers**: Located in `/utils` directory  

## Repository Structure
Wanderlust/
├── controllers/ # Route handlers and business logic
├── init/ # Initialization scripts (e.g., DB connection)
├── models/ # Mongoose models / schemas
├── routes/ # Express route definitions
├── utils/ # Utility/helper functions
├── views/ # EJS templates
├── public/ # Static assets: CSS, JS, images
├── app.js # Express app setup
├── cloudConfig.js # Cloud service (images) configuration
├── middleware.js # Custom middleware (e.g., auth)
├── Schema.js # Database schema or seed data
├── package.json
├── package-lock.json
└── vercel.json # Deployment configuration

## Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/Pratham-Gudadhe/Wanderlust.git
   cd Wanderlust
2. **Install Dependencies**
   ```bash
   npm install
3. **Run the app locally**
   ```bash
   npm start

## Usage
- Navigate to the homepage to view all destinations.
- To add a new destination, sign up/in and use the form provided.
- Edit or delete your entries via respective buttons.
- Use search or filters to quickly locate destinations.

## API Endpoints

| Method                                                  | Endpoint                | Description                       |
| ------------------------------------------------------- | ----------------------- | --------------------------------- |
| GET                                                     | /destinations           | List all destinations             |
| GET                                                     | /destinations/new       | Form to create a new destination  |
| POST                                                    | /destinations           | Create a new destination          |
| GET                                                     | /destinations/\:id/edit | Form to edit existing destination |
| PUT                                                     | /destinations/\:id      | Update a destination              |
| DELETE                                                  | /destinations/\:id      | Delete a destination              |


## Contributions
Contributions are welcome! To contribute:
1. Fork the repo
2. Create a new branch: git checkout -b feature/YourFeature
3. Commit changes: git commit -m 'Add some feature'
4. Push: git push origin feature/YourFeature
5. Create a Pull Request detailing your changes

## Contact
Created by Pratham Gudadhe.
Feel free to open issues or reach out via GitHub.