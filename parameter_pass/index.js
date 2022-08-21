function str(value) {
  value();
}
function value() {
  console.log("this is a parameter of value");
}
str(value);
