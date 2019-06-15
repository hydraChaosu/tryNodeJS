const [, , ...args] = process.argv;

let operation;
if (args.length < 3) {
  operation = "help";
}

switch (operation) {
  case "add":
    console.log("add");
    break;
  case "sub":
    console.log("sub");
    break;
  case "mul":
    console.log("mul");
    break;
  case "help":
    console.log(
      "you need to have 3 or more arguments, \n first argument is always operation add, sub, mul, rest of arguments are numbers "
    );
    break;

  default:
    break;
}

function add(a, b) {
  return Number(a) + Number(b);
}

add(args[0], args[1]);
