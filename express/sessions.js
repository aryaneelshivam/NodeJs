import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.send(`
        <h2>Cookie & Session Demo </h2>
        <a href="/set-cookie">Set Cookie</a><br>
        <a href="/get-cookie">Get Cookie</a><br><br>
        <a href="/set-session">Set Session</a><br>
        <a href="/get-session">Get Session</a>
    `);
});

// COOKIE
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "Rohit");
  res.send("Cookie set!");
});

app.get("/get-cookie", (req, res) => {
  const user = req.cookies.username;

  if (user) {
    res.send(`Cookie found: ${user}`);
  } else {
    res.send("No cookie found.");
  }
});

// SESSION
app.get("/set-session", (req, res) => {
  req.session.user = "Rohit";
  res.send("Session set!");
});

app.get("/get-session", (req, res) => {
  if (req.session.user) {
    res.send(`Session found: ${req.session.user}`);
  } else {
    res.send("No session found.");
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});


//question
//1. what will happen to the cookie after 10 sec
//2. if the user refreshes the /set-session route multiple timesm how will the output change ahd why?
