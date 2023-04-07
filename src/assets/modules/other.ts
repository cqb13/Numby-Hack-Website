import moduleSettings from "../types/moduleSettings";

const other: moduleSettings[] = [
  {
    name: "Better Chat",
    description: "Adds a few features to meteors better chat module.",
    note: "The following only includes features added by this mixin.",
    settings: [
      {
        name: "Emotes",
        category: "Customization",
        type: "Boolean",
        booleanState: true,
        description: "Adds emotes to the chat."
      },
      {
        name: "Custom Prefix",
        category: "Customization",
        type: "Boolean",
        booleanState: false,
        description: "Lets you set a custom prefix."
      },
      {
        name: "Custom Prefix Text",
        category: "Customization",
        type: "Text",
        placeholder: "[Numby hack]",
        description: "Overrides the default prefix with this text."
      },
      {
        name: "Custom Prefix Color",
        category: "Customization",
        type: "Boolean",
        booleanState: false,
        description: "Lets you set a custom prefix color."
      },
      {
        name: "Prefix Color",
        category: "Customization",
        type: "Color",
        color: {
          shapeMode: false,
          sideColor: false,
          lineColor: false,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: true,
          color: "#92bc62"
        },
        description: "The color of the prefix."
      },
      {
        name: "Chroma Prefix",
        category: "Customization",
        type: "Boolean",
        booleanState: false,
        description: "Makes the prefix rgb."
      },
      {
        name: "Chroma Prefix Speed",
        category: "Customization",
        type: "Range",
        description: "The speed of the chroma color"
      },
      {
        name: "Apply To Brackets",
        category: "Customization",
        type: "Boolean",
        booleanState: true,
        description: "Applies the color to the brackets."
      },
      {
        name: "Custom Brackets",
        category: "Customization",
        type: "Boolean",
        booleanState: false,
        description: "Lets you set custom brackets."
      },
      {
        name: "Left Bracket",
        category: "Customization",
        type: "Text",
        placeholder: "[",
        description: "The left bracket."
      },
      {
        name: "Right Bracket",
        category: "Customization",
        type: "Text",
        placeholder: "]",
        description: "The right bracket."
      }
    ]
  },
  {
    name: "Discord Presence",
    description: "Change name and image of meteor discord RPC.",
    note: "Thx Crosby",
    settings: []
  },
  {
    name: "Player Particles",
    description: "Shows particles around specific players.",
    settings: []
  }
];

export default other;
