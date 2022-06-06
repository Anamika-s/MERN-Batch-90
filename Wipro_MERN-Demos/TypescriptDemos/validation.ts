function check(str) {
  //console.log(str.length);
  if (str.length == 0||str==null) {
      console.log("enter a proper string");
      return (-1);
  }
  else {
      validate(str);
  }
}






function validate(str) {
  var re = /-/gi;
  //var str = "784-93683-98";
  var newstr = str.replace(re, "");
  var regex = /[0-9]/ig;
  var p = newstr.replace(regex, '');
  if (p === "") {
      console.log('contains only nums and -');
      if (newstr.length == 10) {
          console.log("length is 10");
          return (1);
      }
      else {
          console.log("enter valid 10 digit number");
          return (0);
      }
  }
  else {
      console.log('contains bad chars enter again');
  }
}
check("");
