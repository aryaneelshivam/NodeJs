import express from "express";

const app = express();

/* ---------------- USERS ---------------- */
const users = {
    navneet: { role: "admin" },
    aman: { role: "teacher" },
    simran: { role: "student" }
};

/* ---------------- PERMISSIONS ---------------- */
const permissions = {
    admin: ["dashboard", "users", "profile"],
    teacher: ["dashboard"],
    student: ["profile"]
};

/* ---------------- USER MIDDLEWARE ---------------- */
const getUser = (req, res, next) => {
    const username = req.query.user; // example: ?user=navneet

    if (!username || !users[username]) {
        return res.status(404).send("User not found");
    }

    req.user = users[username];
    next();
};

app.use(getUser);

/* ---------------- RBAC MIDDLEWARE ---------------- */
const checkAccess = (page) => (req, res, next) => {
    const role = req.user?.role;

    if (permissions[role]?.includes(page)) {
        next();
    } else {
        res.status(403).send("Access Denied");
    }
};

/* ---------------- ROUTES ---------------- */
app.get("/dashboard", checkAccess("dashboard"), (req, res) => {
    res.send("Welcome to Dashboard");
});

app.get("/users", checkAccess("users"), (req, res) => {
    res.send("User Management Page");
});

app.get("/profile", checkAccess("profile"), (req, res) => {
    res.send("Student Profile Page");
});

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

/* ---------------- ERROR HANDLING ---------------- */
server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log(`❌ Port ${PORT} is already in use. Try another port.`);
    } else {
        console.error("Server error:", err);
    }
});