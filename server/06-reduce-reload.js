const items = [1,3,2,3,2,2];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
},{});

console.log(rta);


const dataL = [
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    },
    {
        name: "Adrian",
        level: "Hight"
    },
    {
        name: "Nixon",
        level: "medium"
    },
    {
        name: "Eduin",
        level: "Hight"
    },
    {
        name: "Fredy",
        level: "Hight"
    },
    {
        name: "Guillermo",
        level: "low"
    },
]

const rta2 = dataL.map(item => item.level)
    .reduce((acu, item) => {
        if(!acu[item]){
            acu[item] = 1;
        } else {
            acu[item] = acu[item] + 1;
        }
        return acu;
    }, {});
console.log(rta2)

const reto = [1,2,3,4,5,6,7,8,9,9,8,7,4,5,6,1,2,3,3,2,1,4,5,6,9,8,7,7,5,3,1,5,9,8,4,6,1,2,3,6,5,4,9,8,7];

const solu = reto.reduce((acu, item) => {
    if(!acu['1-5']) {
        acu['1-5'] = 0; acu['6-8'] = 0; acu['9-10'] = 0;
    }
    if(item < 6) acu['1-5'] += 1;
    if(item >= 6 && item <= 8) acu['6-8'] += 1;
    if(item > 8 && item <= 10) acu['9-10'] += 1;
    return acu;
},{});

console.log(solu);


const reto2 = [1,2,3,4,5,6,7,8,9,9,8,7,4,5,6,1,2,3,3,2,1,4,5,6,9,8,7,7,5,3,1,5,9,8,4,6,1,2,3,6,5,4,9,8,7];
const solu2 = reto2.reduce((acu, item) => {
    if(item < 6) acu['1-5'] += 1;
    else if(item >= 6 && item <= 8) acu['6-8'] += 1;
    else acu['9-10'] += 1;
    return acu;
},{
    '1-5': 0,
    '6-8':0,
    '9-10': 0
});

console.log(solu2);