const users = []

const addUser = ({id, username, room}) => {
    // clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate the data
    if (!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    // Check for exixting user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    // Store User
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const user = users.find((user) => user.id === id)
    if(!user){
        return undefined
    }
    return user
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    const usersInRoom = users.find((user)=> user.room === room)
    return users
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


