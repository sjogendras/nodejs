var Person = function () {
    var name = '';
   
    this.setName = function(name){
        this.name = name;
    },

    this.sayHello = function()  {
        console.log('Hello : ' + this.name || ' Name not set yet!');
    }
};

exports.Person = Person;