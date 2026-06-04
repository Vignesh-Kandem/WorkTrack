# 🚀 Employee Management System

A full-stack **Employee Management System** built using **Spring Boot**, **React**, and **MySQL** to efficiently manage employee records with complete CRUD operations.

---

# 🖥️ Project Preview

✨ Features a modern React frontend connected to a powerful Spring Boot REST API backend.

---

# 📌 Backend - Spring Boot REST API

## 🛠️ Tech Stack

| Technology | Version |
|------------|----------|
| ☕ Java | 17+ |
| 🌱 Spring Boot | 3.5.14 |
| 🗄️ Spring Data JPA | Latest |
| 🐬 MySQL | Latest |
| 📦 Maven | Latest |
| 🔥 Lombok | Latest |

---

## ✨ Backend Features

✅ Get all employees  
✅ Add new employee  
✅ Update employee details  
✅ Delete employee records  
✅ RESTful API architecture  
✅ MySQL database integration  

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/employees` | Get all employees |
| POST | `/api/employees` | Add new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

---

## ⚙️ Backend Setup & Run

### 1️⃣ Create MySQL Database

```sql
CREATE DATABASE employeedb;
```

### 2️⃣ Configure Database

Update your `application.properties` file with your MySQL credentials:

```properties
spring.datasource.username=root
spring.datasource.password=your_password
```

### 3️⃣ Run the Backend Server

```bash
./mvnw spring-boot:run
```

### 4️⃣ Backend Runs On

```bash
http://localhost:8000/api/employees
```

---

# 🎨 Frontend - React Application

## 🛠️ Tech Stack

| Technology | Version |
|------------|----------|
| ⚛️ React | 18 |
| 🧭 React Router DOM | Latest |
| 📡 Axios | Latest |
| 🎨 Bootstrap | 5 |

---

## ✨ Frontend Features

✅ View all employees in a responsive table  
✅ Add employees with form validation  
✅ Edit employee details  
✅ Delete employees with confirmation  
✅ Clean and responsive UI  
✅ API integration with Axios  

---

## ⚙️ Frontend Setup & Run

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start React Application

```bash
npm start
```

### 3️⃣ Frontend Runs On

```bash
http://localhost:3000
```
