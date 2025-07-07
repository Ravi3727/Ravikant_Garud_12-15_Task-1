function loginController(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username or password is missing" });
    }
    // Here we can add database logic and verifivation logic using bcrypt and jwt, or use middleware in login route. 
    if(username === "admin") {
        return res.status(200).json({
            message: "You are successfully logged in",
            user : "admin"
        });
    }
    if(username === "master") {
        return res.status(200).json({
            message: "You are successfully logged in",
            user : "master"
        });
    }
}

module.exports = {
    loginController
};
