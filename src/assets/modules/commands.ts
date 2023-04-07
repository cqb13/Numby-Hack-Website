import command from "../types/command";

const commands: command[] = [
  {
    name: "Clear Chat",
    description: "Clears your chat.",
    usage: "clear-chat",
    aliases: ["clear", "cls"]
  },
  {
    name: "Head Item",
    description: "Allows you to put any item in your head slot.",
    usage: "head-item",
    aliases: ["head"]
  },
  {
    name: "Trash Can",
    description: "Allows your to silently destroy any item in your hand.",
    usage: "trash-can",
    aliases: ["trash"]
  }
];

export default commands;
