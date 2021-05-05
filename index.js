import chalk from "chalk";
import yargs from "yargs";
import { read, add } from "../../module/jsonFileStorage.mjs";

const error = chalk.bold.red;
const success = chalk.bold.green;

// Show items in the list
// node index.js show
// - wash the car
// - cook dinner
// - buy bananas

// Add item to the list
// node index.js add "send flowers"
// console.log => I have added "send flowers" to your to-do list.

yargs().command({
  command: "show",
  describe: "Show items in the list",
  handler() {
    showNotes();
  },
});

yargs().command({
  command: "add",
  describe: "Add items to the list",
  builder: {
    title: {
      describe: "New item",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addItem(argv.title);
  },
});

const showNotes = () => {
  console.log(chalk.red("yay notes"));
};

const addItem = (title) => {
  console.log("yay added");
};
