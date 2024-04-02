const USERS = [
    {
        id: 1,
        name: 'Parvez Ahammed',
        email: 'piru72@gmail.com',
        password: '123456',
        role: 'System Admin',
        userCreated: '2021-09-01',
        lastSignIn: '2021-09-01',        
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'abcdef',
        role: 'STS Manager',
        userCreated: '2021-10-15',
        lastSignIn: '2021-11-01',
    },
    {
        id: 3,
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        password: 'zyxwvu',
        role: ' Landfill Manager',
        userCreated: '2022-03-05',
        lastSignIn: '2022-04-15',
    },
    {
        id: 4,
        name: ' Unassigned',
        email: 'james.wilson@example.com',
        password: '123abc',
        role: 'Unassigned',
        userCreated: '2022-07-30',
        lastSignIn: '2022-08-12',
    }
];

const URL_ADMIN = ['/users'];

module.exports = { USERS };