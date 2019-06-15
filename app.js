const [, , ...args] = process.argv;

let operation;
let result;
if (args.length < 3) {
  operation = "help";
}
operation = args[0];
numbers = args.slice(1);
switch (operation) {
  case "add":
    result = numbers.reduce((acc, cur) => (acc = Number(acc) + Number(cur)));
    console.log(result);
    break;
  case "sub":
    result = numbers.reduce((acc, cur) => (acc = Number(acc) - Number(cur)));
    console.log(result);
    break;
  case "mul":
    result = numbers.reduce((acc, cur) => (acc = Number(acc) * Number(cur)));
    console.log(result);
    break;
  case "help":
    console.log(
      "you need to have 3 or more arguments, \n first argument is always operation add, sub, mul, rest of arguments are numbers "
    );
    break;

  default:
    console.log(
      "you need to have 3 or more arguments, \n first argument is always operation add, sub, mul, rest of arguments are numbers "
    );
    break;
}

function add(a, b) {
  return Number(a) + Number(b);
}

add(args[0], args[1]);
