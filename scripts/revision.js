let firstName = prompt("What is your first name?");

if (firstName.length > 0) {
  alert("Welcome, " + firstName.trimStart() + "!");
} else {
  alert("Too bad for you!");
}
