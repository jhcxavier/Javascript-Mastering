function User(firstName, lastName, age, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
    
}
let user1 = new User("John", "Smith", 26, "male")
let user200 = new User("Jill", "Smith", 29, "female")


// add a property
User.prototype.emailDomain = "@facebook.com"

// add a method
User.prototype.getEmailAddress = function(){
  return this.firstName + this.lastName + this.emailDomain
}

// console.log(user1)
// console.log(user200.emailDomain)
// console.log(user1.getEmailAddress().toLowerCase())