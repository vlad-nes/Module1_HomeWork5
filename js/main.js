// // console.log(emplyeeArr);

// 1)
function getFormatDate(date) {
     let dateSpl = date.split('-');
     return dateSpl.join('/');
}

console.log(getFormatDate('13-05-12'));

// 2)

// 3)
let getEmail = emplyeeArr.map( function(item) { 
    return `${item.name.toUpperCase()}${item.salary}-${item.surname}@example.com`
});

console.log(getEmail[1]);

// 4)




