# MediBook Online System

![MediBook Online System](./screenshot.png)

Welcome to MediBook Online Appointment Booking System! This project provides a comprehensive platform for patients to book appointments with doctors. The system streamlines the booking process, allowing users to easily schedule and manage their appointments.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [License](#license)

## Introduction

Welcome to MediBook Online Appointment Booking System! This platform is designed to make the process of scheduling medical appointments as simple and efficient as possible. Patients can browse available doctors, select appointment slots, and manage their bookings with ease. The system also offers features for doctors to manage their schedules and appointments effectively.

## Features

1. **Appointment Scheduling**
   - **Browse Doctors:** Search for doctors by specialty, availability, or location.
   - **Book Appointments:** Select a date and time slot to schedule an appointment.
   - **Manage Appointments:** View, reschedule, or cancel existing appointments.

2. **Patient and Doctor Profiles**
   - **Patient Profiles:** Update personal information, view appointment history.
   - **Doctor Profiles:** Manage availability, view scheduled appointments.

3. **Notifications**
   - **Email and SMS Alerts:** Receive notifications for upcoming appointments, cancellations, or changes.

4. **Admin Dashboard**
   - **Manage Users:** Admins can manage both patient and doctor profiles.
   - **Analytics:** View statistics on appointment trends and user activity.

5. **Responsive Design**
   - **Mobile-Friendly:** The platform is optimized for use on smartphones, tablets, and desktops.

## Technologies Used

### Frontend Side
- **HTML**: Standard markup language for creating web pages
- **CSS**: Style sheet language for styling HTML elements
- **JavaScript**: Functionality and interactiveness of the website

### Backend Side
- **Node.js:** Server-side JavaScript runtime
- **Express.js:** Web application framework for Node.js
- **MySQL:** Relational database management system
- **Sequelize:** Promise-based Node.js ORM for MySQL
- **bcrypt:** Library for hashing passwords
- **jsonwebtoken:** Library for generating JSON Web Tokens (JWTs)


## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MySQL installed locally or access to a MySQL server
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone <github-repo-url>
   cd <repository-folder>

2. **Install dependancies**
    ``` 
    cd api   
    npm install  

3. **Database Configuration**
    ```
    Create a MySQL database for the project.
    Configure your database credentials:
    DB_HOST=localhost
    DB_USER=(your_username)
    DB_PASSWORD=(your_password)
    DB_DATABASE=(Database name)


4. **Run Migrations**
    ```
    npx sequelize-cli db:migrate

5. **Start Backend Server**
    ```
    node server.js
    The backend server should now be running on http://localhost:3800.

## License

Specify the license under which your project is distributed. For example:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.