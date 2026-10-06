<div align="center">

# ✅ Todo App

**A clean, full-stack task manager built with Node.js, Express, EJS and MongoDB.**

Create, organise, update and complete your tasks through a fast, server-rendered interface.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/Templating-EJS-B4CA65)
![License](https://img.shields.io/badge/License-MIT-blue)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)

[Features](#-features) · [Quick Start](#-quick-start) · [Routes](#-routes) · [Roadmap](#-roadmap) · [Contributing](#-contributing)

</div>

---

## 📖 About

Todo App is a classic **CRUD** project that demonstrates how a server-rendered Node.js application is put together using the **MVC pattern**: Mongoose models for data, controllers for logic, Express routes for URLs, and EJS views for the UI.

It is a good starting point if you want to learn Express + MongoDB, or a small base to build something bigger on.

## 📸 Screenshots

| Home Page | Edit Task |
|-----------|-----------|
| ![Home](screenshots/home.png) | ![Edit](screenshots/edit.png) |

> 💡 Add your images to a `screenshots/` folder in the repo root so the links above resolve.

## ✨ Features

- ➕ **Add** new tasks in one step
- 📋 **View** every task in a single list
- ✏️ **Edit** task titles
- ✔️ **Toggle** tasks between completed and pending
- 🗑️ **Delete** tasks you no longer need
- 💾 **Persistent storage** with MongoDB and Mongoose
- 🧩 **MVC structure**: models, controllers, routes and views kept separate
- 🎨 **Server-side rendering** with reusable EJS partials
- 🔐 **Configuration via environment variables** (`dotenv`)

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js 18+ |
| Backend | Express.js |
| Database | MongoDB with Mongoose ODM |
| Templating | EJS |
| Frontend | HTML, CSS |
| Tooling | dotenv, method-override, nodemon |

## 📁 Project Structure

```
To-do-project/
├── controllers/        # Request handling logic
├── init/               # Database initialisation / seed data
├── models/             # Mongoose schemas
├── public/
│   └── css/            # Static stylesheets
├── routes/             # Express route definitions
├── views/              # EJS templates
├── app.js              # Express app configuration
├── index.js            # Server entry point
├── .env.example        # Template for environment variables
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/try/download/community) running locally, **or** a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Niraj-Bhatta/To-do-project.git
cd To-do-project

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env     # Windows (cmd): copy .env.example .env

# 4. Start the app
npm run dev              # development, auto-restarts with nodemon
# or
npm start                # production
```

Then open **http://localhost:3000** in your browser.

### Environment Variables

Edit `.env` with your own values:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Port the server listens on | `3000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/todo-app` |

For MongoDB Atlas, use your cluster string instead:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/todo-app
```

> ⚠️ **Never commit your `.env` file.** It can contain database credentials. Keep it in `.gitignore` and share only `.env.example`.

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the server with Node |
| `npm run dev` | Run the server with nodemon (auto-reload) |

## 🔗 Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Show all todos |
| `POST` | `/todos` | Create a new todo |
| `GET` | `/todos/:id/edit` | Show the edit form |
| `PUT` | `/todos/:id` | Update a todo |
| `PATCH` | `/todos/:id/toggle` | Toggle completed status |
| `DELETE` | `/todos/:id` | Delete a todo |

> HTML forms only support `GET` and `POST`, so `PUT`, `PATCH` and `DELETE` are enabled through [`method-override`](https://github.com/expressjs/method-override).

## 🗃️ Database Schema

```js
const todoSchema = new mongoose.Schema({
  title:     { type: String,  required: true, trim: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date,    default: Date.now }
});
```

## 🧰 Troubleshooting

| Problem | Fix |
|---------|-----|
| `MongoNetworkError` / cannot connect | Make sure `mongod` is running, or check your Atlas connection string and IP allow-list |
| `Port 3000 is already in use` | Change `PORT` in `.env` |
| Edit / delete buttons do nothing | Confirm `method-override` is configured and forms use `?_method=PUT` / `?_method=DELETE` |
| `Cannot find module` | Run `npm install` again |

## 🔮 Roadmap

- [ ] User authentication (signup / login)
- [ ] Due dates and priority levels
- [ ] Categories and tags
- [ ] Search and filter
- [ ] Flash messages and form validation feedback
- [ ] REST API + React frontend
- [ ] Deployment on Render / Railway

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

Distributed under the [MIT License](LICENSE).

## 👤 Author

**Niraj Bhatta**
GitHub: [@Niraj-Bhatta](https://github.com/Niraj-Bhatta)

---

<div align="center">

⭐ If this project helped you, consider giving it a star!

</div>
