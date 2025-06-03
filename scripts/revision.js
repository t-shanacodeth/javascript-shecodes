let firstName = prompt("What is your first name?");
firstName = firstName.trim();

if (firstName.length > 0) {
  alert("Welcome, " + firstName + "!");
} else {
  alert("Too bad for you!");
}
