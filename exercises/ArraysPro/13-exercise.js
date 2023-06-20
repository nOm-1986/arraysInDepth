const { it } = require("date-fns/locale");

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
    {
      startDate: new Date(2022, 1, 1, 15),
      endDate: new Date(2022, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2023, 1, 1, 17),
      endDate: new Date(2023, 1, 1, 18),
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
  tertiaryCalendar: [
    {
      startDate: new Date(2023, 5, 18, 11),
      endDate: new Date(2023, 5, 18, 11, 40),
      title: "Cita 1",
    },
    {
      startDate: new Date(2023, 5, 19, 11),
      endDate: new Date(2023, 5, 19, 12),
      title: "Cita 2",
    },
  ],
};

//Sacar solo los startDate:
const answer1 = Object.values(calendars).flatMap(item => item.startDate);
console.log(answer1);


const rta3 = Object.values(calendars).flatMap(item => item.map(date => date.startDate));
console.log(rta3);