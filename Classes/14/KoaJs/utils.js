const { USERS } = require('./data.js');

const getCurrentTimeWithSeconds = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
};

const isAdmin = (body) => {

    // check if the role is System Admin
    // check if the user is in the list of users

    for (let i = 0; i < USERS.length; i++) {
        if (USERS[i].email === body.email && USERS[i].password === body.password) {
            return USERS[i].role === 'System Admin';
        }
    }
    return false;
};

const getFullUserList = () => {
    return USERS;
};

const createUsers = (body) => {
    USERS.push({
        id: USERS.length + 1,
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role,
        userCreated: getCurrentTimeWithSeconds(),
        lastSignIn: getCurrentTimeWithSeconds(),
    });
  return USERS;
};

module.exports = { getCurrentTimeWithSeconds, isAdmin, getFullUserList , createUsers};