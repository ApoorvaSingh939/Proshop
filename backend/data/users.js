import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Vansh Maheshwari',
        email: 'vansh@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Apoorva Singh',
        email: 'apoorva@example.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users;