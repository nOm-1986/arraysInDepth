const users = [
    { userid: 1, username: "Tom", attributes: ['Nice','Cute']},
    { userid: 2, username: "Mike", attributes: ['Lovely']},
    { userid: 3, username: "Nico", attributes: ['Nice','Cool']}
];

//const rta = users.map(item => item.attributes).flat();
const rta = users.map(item => item.attributes)
console.log(rta);

console.log('________________________')
const rta2 = users.flatMap(user => user.attributes);
console.log('rta2', rta2);


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
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

//const challenge = calendars.primaryCalendar.flatMap(item => item.startDate);
//console.log(challenge);//Nice try.


//Right answer.
//1-Get just de values from primaryCalendar and secondCalendar
const one = Object.values(calendars);
console.log(one);


const rta3 = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
console.log(rta3);