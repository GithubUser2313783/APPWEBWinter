
// EX.1

// const list1 = [-23,230,334,-90,-76,132,-77,305];

// const list2 = list1.filter(number => number >= 0)
// console.log(list2)

//EX.2

// const list1 = [-23,230,334,-90,-76,132,-77,305];

// const list2 = list1.filter(number => number%2 === 0)
// console.log(list2)

// EX.3

// const list1 = [-23,230,334,-90,-76,132,-77,305];

// const list2 = list1.filter(number => number%10 !== 0);

// console.log(list2)

//EX. 4

// const list1 = ['Alexis', 'Frank', 'Adayla', 'John'];

// const shortWords = list1.filter(word => (word.length <= 5));

// console.log(shortWords);

//EX. 5

// const list1 = [
//     {"nom":"Charity","prenom":"Selar","email":"cselar0@cloudflare.com"},
//     {"nom":"Noel","prenom":"Jermy","email":"njermy1@bbb.org"},
//     {"nom":"Killian","prenom":"Keri","email":"kkeri2@sphinn.com"},
//     {"nom":"Aleta","prenom":"Thurl","email":"athurl3@bandcamp.com"},
//     {"nom":"Edna","prenom":"Ingyon","email":"eingyon4@telus.ca"}
// ]

// const email = list1.filter(user => !user.email.endsWith('.com'));

// console.log(email);

//EX. 6

// const list1 = ['Alexis', 'Frank', 'Adayla', 'John'];

// const length = list1.map(word => word.length);

// console.log(length)

//EX. 7

// const list1 = [
//     {"nom":"Charity","prenom":"Selar","email":"cselar0@cloudflare.com"},
//     {"nom":"Noel","prenom":"Jermy","email":"njermy1@bbb.org"},
//     {"nom":"Killian","prenom":"Keri","email":"kkeri2@sphinn.com"},
//     {"nom":"Aleta","prenom":"Thurl","email":"athurl3@bandcamp.com"},
//     {"nom":"Edna","prenom":"Ingyon","email":"eingyon4@telus.ca"}
// ]

// const firstNames = list1.map()

//EX. 8

// const list1 = [-23,230,334,-90,-76,132,-77,305];

// const posSquaredSum = list1
//     .filter(number => number > 0)
//     .map(posNumber => posNumber**2)
//     .reduce((acc, squaredNumber) => acc+squaredNumber)

//     console.log(posSquaredSum)

// EX. 9

// const showList = (list) => {
//     list.forEach((element) => {
//       console.log(element);
//     });
//   };
//    const list1 = ['Alexis', 'Frank', 'Adayla', 'John'];
   
//    showList(list1);