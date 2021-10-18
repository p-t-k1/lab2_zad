const _ = require('lodash')

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5, 4, 3, 5, 2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}
const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

const fun1 = (user) => {
    let licznik = 0
    let mianownik = 0
    let srednia = 0

    _.map(user.allGrades, function (o) {
        //console.log("waga " + o.weight)
        _.map(o.grades, function (p) {
            //console.log("ocena " + p)
            licznik += (o.weight * p)
            mianownik += o.weight
        })
        //console.log("----------")
    })
    srednia = _.round((licznik / mianownik), 2)
    console.log("Srednia wazona osoby: " + user.name + " " + user.surname + " to " + srednia)
    console.log("Przedmiot z wagą 1: " + _.find(user.allGrades, {weight: 1}).subjectName)
}
const getMails = () =>{
    let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let emails = []
    _.map(collections, function (o){
        if(reg.test(o)){
            emails.push(o)
        }
    })
    console.log("Wyłuskane i posortowane adresy email: " + emails.sort())
}

fun1(user)
getMails(collections)