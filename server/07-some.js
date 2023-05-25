/**
 * Some: just return true or false incase that it finds a result.
 */
const numbers = [1,3,3,5,5];

const result = numbers.some(item => item % 2 === 0);
console.log('resultado: ', result);

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
        delivered: false,
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
    {
        customerName: 'Majo',
        total: 230,
        delivered: true,
    },
];

const res2 = orders.some(item => item.delivered);
console.log(res2)

// Sometime more complex.
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 15, 30),
        title: "Cita con el jefe",
    }, 
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 15, 21),
        title: "Cena",
    },
    {
        startDate: new Date(2021, 1, 1, ),
        endDate: new Date(2021, 1, 15, 30),
        title: "Hacer ejercicio",
    }
];

const newAppointment = {
    startDate: new Date(2021, 1,2,19),
    endDate: new Date(2021, 1, 2, 20, 30)
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (appointment) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: appointment.startDate, end: appointment.endDate}
        );
    });
}

console.log('Overlap: ', isOverlap(newAppointment));

