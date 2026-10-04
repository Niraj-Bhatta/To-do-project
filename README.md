# ✅ Todo App

A simple, clean, full-stack **Todo application** built with **Node.js, Express, EJS, and MongoDB**. Create, view, update, and delete tasks through a server-rendered web interface.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/Templating-EJS-B4CA65)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📸 Screenshots

> Add your screenshots to a `/screenshots` folder and update the paths below.

| Home Page | Edit Task |
|-----------|-----------|
| ![Home](screenshots/home.png) | ![Edit](screenshots/edit.png) |

---

## ✨ Features

- ➕ Add new tasks
- 📋 View all tasks
- ✏️ Edit existing tasks
- ✔️ Mark tasks as completed / pending
- 🗑️ Delete tasks
- 💾 Persistent storage with MongoDB
- 🎨 Server-side rendering with EJS templates
- 🔐 Environment variables via `dotenv`

---

## 🛠️ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Backend    | Node.js, Express.js            |
| Database   | MongoDB, Mongoose              |
| Templating | EJS                            |
| Frontend   | HTML, CSS, JavaScript          |
| Tools      | dotenv, method-override, nodemon |

---

## 📁 Project Structure

```
todo-app/
├── models/
│   └── Todo.js          # Mongoose schema
├── routes/
│   └── todoRoutes.js    # Express routes
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs        # Home page (list of todos)
│   └── edit.ejs         # Edit todo page
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── .env                 # Environment variables (not committed)
├── .gitignore
├── app.js               # Entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) **or** a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory

   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/todo-app
   ```

   > For MongoDB Atlas, use your connection string:
   > `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/todo-app`

4. **Run the app**

   ```bash
   # Development (auto-restart with nodemon)
   npm run dev

   # Production
   npm start
   ```

5. **Open in your browser**

   ```
   http://localhost:3000
   ```

---

## 📜 Available Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm start`     | Start the server with Node           |
| `npm run dev`   | Start the server with nodemon        |

Add these to your `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

---

## 🔗 API / Routes

| Method | Route                 | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/`                   | Show all todos           |
| POST   | `/todos`              | Create a new todo        |
| GET    | `/todos/:id/edit`     | Show edit form           |
| PUT    | `/todos/:id`          | Update a todo            |
| PATCH  | `/todos/:id/toggle`   | Toggle completed status  |
| DELETE | `/todos/:id`          | Delete a todo            |

> `PUT`, `PATCH`, and `DELETE` from HTML forms are handled using `method-override`.

---

## 🗃️ Database Schema

```js
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
```

---

## 🔮 Future Improvements

- [ ] User authentication (login / signup)
- [ ] Due dates and priority levels
- [ ] Categories / tags
- [ ] Search and filter tasks
- [ ] REST API + React frontend
- [ ] Deployment with Render / Railway / Vercel

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---


⭐ If you found this project helpful, consider giving it a star!
