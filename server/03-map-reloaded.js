

/*console.log('original', orders);
const rta = orders.map( it => it.rta);
console.log('rta', rta);


/**
 * Aunque se sabe que map es un metodo no modificador(inmutable), se debe tener cuidado con los
 * objetos ya que de estos se pasa la referencia en memori y si se modifica, tambien modificará por ende el original.
 */
const rta2 = orders.map( item => {
    item.tax = 19;
    return item;
});
console.log('original', orders);
console.log('rta2', rta2);
/**
 * original [
  { customerName: 'Fabian', total: 50, delivered: true, tax: 19 },
  { customerName: 'Liseth', total: 60, delivered: false, tax: 19 },
  { customerName: 'María', total: 100, delivered: true, tax: 19 },
  { customerName: 'Leidy', total: 80, delivered: false, tax: 19 },
  { customerName: 'Adrian', total: 180, delivered: true, tax: 19 }
]
rta2 [
  { customerName: 'Fabian', total: 50, delivered: true, tax: 19 },
  { customerName: 'Liseth', total: 60, delivered: false, tax: 19 },
  { customerName: 'María', total: 100, delivered: true, tax: 19 },
  { customerName: 'Leidy', total: 80, delivered: false, tax: 19 },
  { customerName: 'Adrian', total: 180, delivered: true, tax: 19 }
]
*/

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

//CÓMO PODEMOS EVITARLO???? => No copio la referencia en memoria sino que devuelvo un nuevo objeto.
const rta3 = orders.map( item => {
    return {
        ...item,
        tax: .19
    };
});
console.log('original', orders);
console.log('rta3', rta3);