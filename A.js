// 1
let event = {
    title: "Koncert zespołu X",
    date: "2024-06-15",
    location: "Warszawa"
};
console.log(event);

//2
let participant ={};
participant.name = "Dawid";
participant.email ="uT_4006@zsp3zamosc.pl";

console.log(participant.name)
console.log(participant.email);
//3
let events = [
    {
        name : "Koncert zespolu y",
        date : "2024-07-05",
        location : "krakow"
    },
    {
        name : "festiwal filmowy",
        date : "2024-08-05",
        location : "gdansk"
    },
    {
        name : "Wystawa Sztuki",
        date : "2024-09-10",
        location : "wrocław"
    }
];
//4
let event4 ={
    name : "Seminarium o JavaScript",
    date : "2024-10-15",
    location : "łodz"
}
events.push(event4);
console.log(events)

//5
let  newEvents = events.slice(2,4);

console.log(newEvents);

//6
events.shift()
console.log("długosc tablicy po usunieciu pierwszego elementu : "+ events.length)
events.forEach(name => console.log("Data wydarzen : " + name.name));

//7
events.forEach(date => console.log( "Data wydarzen : " + date.date));
