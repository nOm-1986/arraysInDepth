const orders = [
    {
        customerName: 'Fabian',
        total: 50,
        delivered: true,
    },
    {
        customerName: 'Liseth',
        total: 60,
        delivered: false,
    },
    {
        customerName: 'María',
        total: 100,
        delivered: true,
    },
    {
        customerName: 'Leidy',
        total: 80,
        delivered: false,
    },
    {
        customerName: 'Adrian',
        total: 180,
        delivered: true,
    },
];

//Get the totals.
const rta = orders.map(item => item.total);
console.log(rta)


const calendars = {
    primaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
        },
        {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 3",
        },
        {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
        },
    ],
};

const endDate = Object.values(calendars).flatMap(item => item.map(el => el.endDate));
const endDate2 = Object.values(calendars).map(item => item.map(el => el.endDate)).flat();
console.log(endDate);
console.log(endDate2);


