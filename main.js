const person = new Object({
    name: "Anon",
    age: 0,
})

// Добавляет обьекту person
person.sayHello = function () {
    console.log("Hello user")
}

// Добавляет ко всем обьектам по prototype
Object.prototype.sayHello = function () {
    console.log("Hello anon user")
}

// Копия обьекта на подобие person
const said = Object.create(person)
said.name = "Said"
said.age = 16

// Все состоит из обьектов, так сказать в обьект обёртке
const string = String("I'm Said")