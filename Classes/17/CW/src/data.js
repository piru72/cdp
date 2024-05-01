const USERS = [
    {
        id: 1,
        name: 'Parvez Ahammeds',
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

const PANEL_DATA = [
    {
        session : "spring2023",
        data : [
            {
                id: 1,
                name: "Shamim Rahim",
                positionId: 7,
                balance: "10.00"
            },
            {
                id: 2,
                name: "Md. Ragib Ashhab",
                positionId: 8,
                balance: "30.00"
            },
            {
                id: 3,
                name: "Adnan Kader Mitul",
                positionId: 8,
                balance: "10.00"
            },
            {
                id: 4,
                name: "H M Ziyad",
                positionId: 8,
                balance: "10.00"
            },
            {
                id: 5,
                name: "Sourav Dey",
                positionId: 8,
                balance: "10.00"
            },
            {
                id: 6,
                name: "Tasmiah Binte Iqbal",
                positionId: 8,
                balance: "10.00"
            },
            {
                id: 7,
                name: "Shahidul Islam",
                positionId: 8,
                balance: "10.00"
            },
            {
                id: 8,
                name: "Abrar Khan Alvi",
                positionId: 8,
                balance: "15.00"
            },
            {
                id: 9,
                name: "Espa Shaheen Ohi",
                positionId: 8,
                balance: "10.00"
            },
            {
                id: 10,
                name: "Nayeema Rouf Nobonita",
                positionId: 8,
                balance: "20.00"
            },
            {
                id: 11,
                name: "Saji Pal",
                positionId: 8,
                balance: "10.00"
            },
            {
                id: 12,
                name: "Asifuzzaman Shanto",
                positionId: 8,
                balance: "5.00"
            }]

    }
    
];

const POSITIONS = [
    {
        id: 1,
        name: "President"
    },
    {
        id: 2,
        name: "Treasurer"
    },
    {
        id: 3,
        name: "Vice President"
    },
    {
        id: 4,
        name: "General Secretary"
    },
    {
        id: 5,
        name: "Joint Secretary"
    },
    {
        id: 6,
        name: "Head of Department"
    },
    {
        id: 7,
        name: "Coordinator"
    },
    {
        id: 8,
        name: "Deputy Coordinator"
    },
    {
        id: 9,
        name: "Member"
    }


];

const TRANSACTIONS = [
    {
        id: 1,
        senderId: 100,
        receiverId: 1,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 2,
        senderId: 100,
        receiverId: 2,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 15,
        senderId: 100,
        receiverId: 3,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 3,
        senderId: 100,
        receiverId: 4,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 4,
        senderId: 100,
        receiverId: 5,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 5,
        senderId: 100,
        receiverId: 6,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 6,
        senderId: 100,
        receiverId: 7,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id:7,
        senderId: 100,
        receiverId: 8,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 8,
        senderId: 100,
        receiverId: 9,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 9,
        senderId: 100,
        receiverId: 10,
        dateTime: '2023-12-26',
        amount: '10.00',
        eventId: 'Blockchain Seminar',
        details: 'For the purchase of 10 tickets',
        hash: '0x1234567890'
    },
    {
        id: 10,
        senderId: 100,
        receiverId: 2,
        dateTime: '2023-12-29',
        amount: '20.00',
        eventId: 'Logo Design Submission',
        details: 'For the best logo design award',
        hash: '0x1234567890'
    },
    {
        id: 11,
        senderId: 100,
        receiverId: 11,
        dateTime: '2023-12-29',
        amount: '10.00',
        eventId: 'Logo Design Submission',
        details: 'For the second best logo design award',
        hash: '0x1234567890'
    },
    {
        id: 12,
        senderId: 100,
        receiverId: 10,
        dateTime: '2024-01-20',
        amount: '10.00',
        eventId: 'Event Report Submission',
        details: 'For writing the best event report',
        hash: '0x1234567890'
    },
    {
        id: 13,
        senderId: 100,
        receiverId: 8,
        dateTime: '2023-12-31',
        amount: '5.00',
        eventId: 'Logo Design Submission',
        details: 'For submitting a logo design',
        hash: '0x1234567890'
    },
    {
        id: 14,
        senderId: 100,
        receiverId: 12,
        dateTime: '2023-12-29',
        amount: '5.00',
        eventId: 'Logo Design Submission',
        details: 'For submitting a logo design',
        hash: '0x1234567890'
    },


];
const EVENTS = [
    {
        id: 1,
        name: "Blockchain Seminar",
        details: "Annual conference showcasing the latest in technology trends.",
        dateTime: "2023-12-26T09:00:00"
    }
];


module.exports = {
    USERS,
    PANEL_DATA,
    POSITIONS,
    TRANSACTIONS,
    EVENTS
};