//Create a street fighter constructor that makes fighting game characters with 4 properties and 2 methods

function StreetFighter(name,specialMove,op,infinite) {
    this.name = name
    this.specialMove = specialMove
    this.op = op
    this.infinite = infinite

    this.throw = function() {
        console.log(`YEEEET`)
    }
    this.taunt = function() {
        console.log(`You can't handle my ${this.specialMove}!`)
    }
}

let Ryu = new StreetFighter(`Ryu`,`Hadouken`,true,false)