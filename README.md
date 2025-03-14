# 🏡 BasaFinder - Smart Rental & Housing Solution

![BasaFinder](https://your-image-url.com/banner.png)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-%23007bff.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://bashafinder-n7tg90lpf-jsenses-projects.vercel.app/)
[![Backend API](https://img.shields.io/badge/Backend%20API-%2300d09c.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/J-sense/tasks_api)

BasaFinder is a full-stack web application designed to streamline the rental process by connecting **Landlords, Tenants, and Admins** in a seamless ecosystem.

---

## 🚀 Features

✅ **Role-Based System:** Admin, Landlord, and Tenant roles with dedicated dashboards.
✅ **Custom Authentication:** Secure JWT authentication with bcrypt password hashing.
✅ **Rental Listings:** Landlords can post, update, and delete rental properties.
✅ **Search & Filter:** Tenants can search by location, price range, and number of bedrooms.
✅ **Rental Requests:** Tenants can submit requests, which landlords can approve or reject.
✅ **Integrated Payments:** Stripe/ShurjoPay payment gateways for seamless transactions.
✅ **Email Notifications:** Automated updates for rental requests and approvals.
✅ **Mobile-Friendly UI:** Fully responsive and user-friendly design.

---

## 🏗️ Tech Stack

### **Frontend**

- ⚛ **Next.js** (Server-Side Rendering & Static Site Generation)
- 🔷 **TypeScript** (Type Safety)
- 🎨 **Tailwind CSS** (Modern Styling)
- 🔄 **Redux Toolkit** (State Management)

### **Backend**

- 🟢 **Node.js** with **Express.js** (REST APIs)
- 🍃 **MongoDB** (NoSQL Database)
- 🔒 **JWT & bcrypt** (Authentication & Security)

### **Deployment**

- 🌐 **Frontend:** Vercel
- 🛠 **Backend:** Vercel

---

## 📌 User Roles & Functionalities

### **🔹 Admin**

- Manage users (Landlords, Tenants)
- Oversee all rental listings
- Edit/remove any listing or user

### **🔹 Landlord**

- Post & manage rental house listings
- Approve/reject rental requests
- Initiate payment process

### **🔹 Tenant**

- Search & filter rental listings
- Submit rental requests
- Make secure payments upon approval

---

<!-- ## 📸 Screenshots

![Home Page](https://your-image-url.com/homepage.png)
![Dashboard](https://your-image-url.com/dashboard.png)

--- -->

## 🎯 API Endpoints

### **🔹 Tenant Routes**

```http
POST /tenants/requests       # Create a rental request
GET  /tenants/requests       # Retrieve submitted rental requests
PUT  /tenants/profile        # Update tenant profile
```

### **🔹 Landlord Routes**

```http
POST   /landlords/listings   # Add a rental listing
GET    /landlords/listings   # Get all listings by landlord
PUT    /landlords/listings/:id   # Update a listing
DELETE /landlords/listings/:id   # Delete a listing
GET    /landlords/requests   # View rental requests
PUT    /landlords/requests/:id  # Approve/reject rental request
```

### **🔹 Admin Routes**

```http
GET    /admin/users          # Get all users
PUT    /admin/users/:id      # Update user roles
DELETE /admin/user/:id       # Remove a user
GET    /admin/listings       # Get all rental listings
PUT    /admin/listings/:id   # Moderate a listing
DELETE /admin/listings/:id   # Remove a listing
```

---

## 🚀 Getting Started

### **🌐 Run Frontend**

```bash
npm run dev  # Starts frontend on localhost:3000
```



---

## 📜 License

This project is licensed under the **MIT License**.

---

## 📞 Contact & Support

For issues or suggestions, feel free to **open an issue** or contact us:
📧 **Email:** [jishan1873@gmail.com](jishan1873@gmail.com)

<!-- 🌍 **Website:** [basafinder.com](https://your-live-demo-link.com)
📢 **Twitter:** [@basafinder](https://twitter.com/basafinder) -->

Happy Coding! 🚀
