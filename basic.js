var a = {}
var b = function () {}
var c = []
console.log("vipin Here,", a)

var person = {
    fName : "Vipin",
    lName : "Goyal",
    fullName () {
        console.log(">>>>>>>>>>>Vipin Here  var", this.fName + " " + this.lName)
    }
}

var vipin = {
    fName : "Vipin",
    lName : "Goyal"
}

vipin.__proto__ = person

vipin.fullName()