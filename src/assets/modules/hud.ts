import moduleSettings from "../types/moduleSettings";

const hudElements: moduleSettings[] = [
  {
    name: "81",
    description: "Number81 On Top!",
    settings: []
  },
  {
    name: "Crystals/s",
    description: "Displays the amount of crystals you have placed per second.",
    settings: []
  },
  {
    name: "High Score",
    description:
      "Displays the greatest amount of kills you have gotten before dying.",
    settings: []
  },
  {
    name: "Item Counter",
    description: "Displays the amount of selected items in your inventory.",
    settings: [
      {
        name: "Sort Mode",
        category: "General",
        type: "Dropdown",
        dropdown: ["Longest", "Shortest"],
        description: "How to sort the item list."
      },
      {
        name: "Items",
        category: "General",
        type: "Block List",
        description: "The items to display."
      },
      {
        name: "Shadow",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Whether to display a shadow behind the text."
      },
      {
        name: "Alignment",
        category: "Render",
        type: "Dropdown",
        dropdown: ["Auto", "Left", "Center", "Right"],
        description: "How to align the text horizontally."
      },
      {
        name: "Custom Scale",
        category: "Render",
        type: "Boolean",
        booleanState: false,
        description:
          "Whether to use a custom scale rather than the global scale."
      },
      {
        name: "Scale",
        category: "Render",
        type: "Range",
        description: "The custom scale of the element."
      }
    ]
  },
  {
    name: "KDR",
    description: "Displays your kill/death ratio.",
    settings: []
  },
  {
    name: "Keys",
    description: "Draws current movement keys.",
    settings: [
      {
        name: "Scale",
        category: "General",
        type: "Range",
        description: "The scale of the element."
      },
      {
        name: "Text Color",
        category: "General",
        type: "Color",
        color: {
          shapeMode: false,
          lineColor: false,
          sideColor: false,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: true,
          color: "#92bc62cc"
        },
        description: "The color of the text."
      },
      {
        name: "Draw Mode",
        category: "General",
        type: "Dropdown",
        dropdown: ["Horizontal", "Vertical", "Basic"],
        description: "How to draw the keys."
      }
    ]
  },
  {
    name: "Kills",
    description: "Displays the amount of kills you have.",
    settings: []
  },
  {
    name: "Kill Streak",
    description: "Displays your current kill streak.",
    settings: []
  },
  {
    name: "Logo",
    description: "Draws the Numby Hack logo.",
    settings: [
      {
        name: "Scale",
        category: "General",
        type: "Range",
        description: "The scale of the element."
      }
    ]
  },
  {
    name: "Server Brand",
    description: "Displays the brand of the server you are playing on.",
    settings: []
  },
  {
    name: "Text Radar",
    description: "Displays players and their stats in your visual range.",
    settings: [
      {
        name: "Limit",
        category: "General",
        type: "Range",
        description: "The maximum amount of players to display."
      },
      {
        name: "Health",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Shows the health to the player next to their name."
      },
      {
        name: "Ping",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Shows the ping to the player next to their name."
      },
      {
        name: "Distance",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Shows the distance to the player next to their name."
      },
      {
        name: "Friends",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Shows your friends in the list."
      },
      {
        name: "Primary Color",
        category: "Render",
        type: "Color",
        color: {
          shapeMode: false,
          lineColor: false,
          sideColor: false,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: true,
          color: "#92bc62cc"
        },
        description: "The color of the text."
      },
      {
        name: "Secondary Color",
        category: "Render",
        type: "Color",
        color: {
          shapeMode: false,
          lineColor: false,
          sideColor: false,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: true,
          color: "#AFAFAF"
        },
        description: "The color of the text."
      },
      {
        name: "Shadow",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Whether to display a shadow behind the text."
      },
      {
        name: "Alignment",
        category: "Render",
        type: "Dropdown",
        dropdown: ["Auto", "Left", "Center", "Right"],
        description: "How to align the text horizontally."
      },
      {
        name: "Custom Scale",
        category: "Render",
        type: "Boolean",
        booleanState: false,
        description: "Whether to use a custom scale rather than the global scale."
      },
      {
        name: "Scale",
        category: "Render",
        type: "Range",
        description: "The custom scale of the element."
      },
      {
        name: "Background",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Whether to display a background behind the element."
      },
      {
        name: "Background Color",
        category: "Render",
        type: "Color",
        color: {
          shapeMode: false,
          lineColor: false,
          sideColor: false,
          tracerColor: false, 
          normalColor: false,
          background: true,
          text: false,
          color: "#00000000"
        },
        description: "The color of the background."
      }
    ]
  }
];

export default hudElements;
