function parent() {
  console.log("I an Parent...");
  function child() {
    console.log("I am child");
    return 50;
  }
  return child();

}

parent()