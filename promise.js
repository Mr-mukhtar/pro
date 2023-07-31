console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 1000);
});

const getPopcorn = promiseWifeBringTicket.then((t) => {
    console.log('husband: we should go out');
    console.log('wife: I\'m hungry');
    return new Promise((resolve, reject) => {
        
            resolve(`${t} popcorn`);
     
    });
});

 const getButter = getPopcorn.then((t) => {
    console.log('husband: we should go in');
    console.log('wife: I need butter');
    return new Promise((resolve, reject) => {
        
            resolve(`${t} butter`);
        
    });
});
getButter.then((t) =>console.log(t));

console.log('person5: shows ticket');
