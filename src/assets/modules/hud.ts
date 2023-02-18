import { Setting } from "./general";

const hudElements: Setting[] = [
  {
    name: "81",
    description: "Number81 On Top!",
    settings: []
  },
  {
    name: "Combat Info",
    description: "Displays information on your current combat target.",
    note: "Original from Meteor",
    settings: [
      {
        name: "Scale",
        category: "General",
        type: "Range",
        description: "The scale of the combat element."
      },
      {
        name: "Range",
        category: "General",
        type: "Range",
        description: "The range to target player."
      },
      {
        name: "Ping",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Displays the ping of the target player."
      },
      {
        name: "Distance",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Displays the distance to the target player."
      },
      {
        name: "Enchantments",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Displays the enchantments of the target player."
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
          color: "rgb(0, 0, 0, 64)"
        },
        description: "The color of the background."
      },
      {
        name: "Enchantment Color",
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
          color: "#ffffff"
        },
        description: "The color of the enchantments."
      },
      {
        name: "Ping Stage 1",
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
          color: "#0fff0f"
        },
        description: "The color of the ping when it is below 75ms."
      },
      {
        name: "Ping Stage 2",
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
          color: "#ff960f"
        },
        description: "The color of the ping when it is between 75ms and 200ms."
      },
      {
        name: "Ping Stage 3",
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
          color: "#ff0f0f"
        },
        description: "The color of the ping when it is above 200ms."
      },
      {
        name: "Distance Stage 1",
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
          color: "#ff0f0f"
        },
        description: "The color when a player is within 10 blocks."
      },
      {
        name: "Distance Stage 2",
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
          color: "#ff960f"
        },
        description: "The color when a player is within 50 blocks."
      },
      {
        name: "Distance Stage 3",
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
          color: "#0fff0f"
        },
        description: "The color when a player is further than 50 blocks."
      },
      {
        name: "Health Stage 1",
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
          color: "#ff0f0f"
        },
        description: "The color on the left of the health gradient."
      },
      {
        name: "Ping Stage 2",
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
          color: "#ff960f"
        },
        description: "The color in the middle of the health gradient."
      },
      {
        name: "Ping Stage 3",
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
          color: "#0fff0f"
        },
        description: "The color on the right of the health gradient."
      }
    ]
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
  }
];

export default hudElements;
