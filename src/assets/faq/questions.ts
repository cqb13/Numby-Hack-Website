export type FAQ = {
  question: string;
  answer: string;
};

const faq: FAQ[] = [
  {
    question: "How to install?",
    answer:
      "- Download the latest release \n- Find your .minecraft folder \n- Open the mods folder \n- Place the jar file in the mods folder \n- Make sure you have Meteor Client installed \n- Start the game"
  },
  {
    question: "How to use older versions?",
    answer:
      "Older versions of Numby Hack are not supported, but they can still be downloaded from the releases page on the GitHub.\n\nNote: Issues with older versions will not be fixed."
  },
  {
    question: "How to report issues?",
    answer:
      "There are two ways you can report issues:\n\n1: The preferred way to report an issue is to open an issue in the github repo.\n\n2: You can also join the discord server and report the issue in the #support channel."
  }
];

export default faq;
