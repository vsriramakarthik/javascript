//constructor function

function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack","true");
  
  alert(user.name); // Jack
  alert(user.isAdmin); // false