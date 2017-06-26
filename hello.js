//Let's try git branch

function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

var person1 = new Person('Steve');
person1.greeting(); // 'Hi! I'm steve'

var Daniel = new Person('Daniel');
Daniel.greeting(); // 'Hi! I'm Daniel'

//add Jesus, Daniel, Andrea
