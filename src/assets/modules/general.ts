export type setting = {
  name: string;
  description: string;
  note?: string;
  settings: {
    name: string;
    category: string;
    type:
      | "Boolean"
      | "Text"
      | "Dropdown"
      | "Range"
      | "Color"
      | "Keybind"
      | "Module List"
      | "Block List";
    booleanState?: boolean;
    placeholder?: string;
    dropdown?: string[];
    color?: {
      shapeMode: boolean;
      sideColor: boolean;
      lineColor: boolean;
      tracerColor: boolean;
      normalColor: boolean;
      background: boolean;
      text: boolean;
      color?: string;
    };
    description: string;
  }[];
};

//TODO: add mixin modules
//TODO: add a list option for boolean settings that use names of settings to toggle their visibility
const modules: setting[] = [
  {
    name: "Auto Log +",
    description:
      "Automatically logs in to your account when you open the game.",
    settings: [
      {
        name: "Time Log",
        category: "Time Log",
        type: "Boolean",
        booleanState: false,
        description: "Toggles logout Time Log settings."
      },
      {
        name: "Time",
        category: "Time Log",
        type: "Text",
        placeholder: "HH:MM",
        description: "The time to log you out (uses 24 hour time)"
      },
      {
        name: "Location Log",
        category: "Location Log",
        type: "Boolean",
        booleanState: false,
        description: "Toggles logout Location Log settings."
      },
      {
        name: "Dimension",
        category: "Location Log",
        type: "Dropdown",
        dropdown: ["Overworld", "Nether", "End"],
        description: "Select which dimension you should be in."
      },
      {
        name: "One Axis Log",
        category: "Location Log",
        type: "Boolean",
        booleanState: false,
        description: "Weather or not to only use coordinates on one axis."
      },
      {
        name: "Select Axis",
        category: "Location Log",
        type: "Dropdown",
        dropdown: ["X", "Z"],
        description: "If One Axis Log is enabled, select which axis to use."
      },
      {
        name: "X Coordinate",
        category: "Location Log",
        type: "Range",
        description: "The X coordinate you should be at."
      },
      {
        name: "Z Coordinate",
        category: "Location Log",
        type: "Range",
        description: "The Z coordinate you should be at."
      },
      {
        name: "Radius",
        category: "Location Log",
        type: "Range",
        description: "The radius you should be in."
      },
      {
        name: "Ping Log",
        category: "Ping Log",
        type: "Boolean",
        booleanState: false,
        description: "Toggles logout Ping Log settings."
      },
      {
        name: "Ping",
        category: "Ping Log",
        type: "Range",
        description: "The maximum ping you can have."
      },
      {
        name: "Enemy",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description:
          "Disconnects you if a player not on your friends list is nearby."
      },
      {
        name: "Toggle Auto Reconnect",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description:
          "Weather or not to automatically reconnect when you get disconnected."
      },
      {
        name: "Toggle Off",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Toggles Auto Log+ off."
      }
    ]
  },
  {
    name: "Better Place",
    description: "Helps you place blocks where you normally can't.",
    settings: [
      {
        name: "Render",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Shows you where the block will be placed."
      },
      {
        name: "Render Color",
        category: "General",
        type: "Color",
        color: {
          shapeMode: true,
          sideColor: true,
          lineColor: true,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: false,
          color: "#92bc62"
        },
        description: "The color of the render."
      },
      {
        name: "Custom Range",
        category: "Range",
        type: "Boolean",
        booleanState: false,
        description: "Toggles Custom Range settings."
      },
      {
        name: "Range",
        category: "Range",
        type: "Range",
        description: "The range you can place blocks."
      }
    ]
  },
  {
    name: "Beyblade",
    description: "Rotates you server side, but not client side.",
    settings: [
      {
        name: "Anti Desync",
        category: "General",
        type: "Dropdown",
        dropdown: ["All", "Except Elytra", "None"],
        description: "Stops spinning on certain triggers."
      },
      {
        name: "Custom yaw",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Toggles Custom Yaw settings."
      },
      {
        name: "Yaw",
        category: "General",
        type: "Range",
        description: "The Yaw you want to spin at."
      },
      {
        name: "Pitch",
        category: "General",
        type: "Range",
        description: "The Pitch you want to spin at."
      },
      {
        name: "Speed",
        category: "General",
        type: "Range",
        description: "The speed at which you rotate."
      }
    ]
  },
  {
    name: "Chat Encryption",
    description: "Encrypts your chat messages.",
    settings: [
      {
        name: "Key",
        category: "General",
        type: "Text",
        placeholder: "81",
        description: "The key you want to encrypt your messages with."
      },
      {
        name: "Secret Key",
        category: "General",
        type: "Text",
        placeholder: "**********",
        description: "A second key to ensure security."
      },
      {
        name: "Encryption Prefix",
        category: "General",
        type: "Text",
        placeholder: "!enc:",
        description: "The prefix you want to use for encrypting messages."
      },
      {
        name: "Decryption Prefix",
        category: "General",
        type: "Text",
        placeholder: "!dec:",
        description: "The prefix you want to use for decrypting messages."
      },
      {
        name: "Always Encrypt",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Weather or not to always encrypt your messages."
      },
      {
        name: "Wrap Length",
        category: "General",
        type: "Range",
        description: "How many characters to fit on one line."
      },
      {
        name: "Feedback Color",
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
          color: "#92bc62"
        },
        description: "The color of the feedback messages."
      }
    ]
  },
  {
    name: "Chorus Exploit",
    description: "Tries to delay teleporting with a chorus fruit",
    note: "Modified from Meteor Rejects",
    settings: [
      {
        name: "Position Mode",
        category: "General",
        type: "Dropdown",
        dropdown: ["Particle", "Pos Look", "None"],
        description: "How your teleport position is calculated."
      },
      {
        name: "TP On Switch",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Teleports you when you switch items"
      },
      {
        name: "On Key",
        category: "General",
        type: "Keybind",
        description: "Teleports you when you press the keybind"
      },
      {
        name: "Auto TP",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Automatically teleports you after a set number of ticks"
      },
      {
        name: "Ticks To TP",
        category: "General",
        type: "Range",
        description: "The number of ticks to wait before teleporting"
      },
      {
        name: "Set Position",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Sets you client side to your actual position"
      },
      {
        name: "Render Color",
        category: "Render",
        type: "Color",
        color: {
          shapeMode: true,
          lineColor: true,
          sideColor: true,
          tracerColor: true,
          normalColor: false,
          background: false,
          text: false,
          color: "#92bc62"
        },
        description: "The color of the render"
      }
    ]
  },
  {
    name: "Condition Toggle",
    description: "Toggles modules based on conditions.",
    settings: [
      {
        name: "Toggle On Death",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Toggles modules on death."
      },
      {
        name: "Toggle On On Death",
        category: "General",
        type: "Module List",
        description: "Modules to activate on death."
      },
      {
        name: "Toggle Off On Death",
        category: "General",
        type: "Module List",
        description: "Modules to deactivate on death."
      },
      {
        name: "Toggle On Logout",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Toggles modules on death."
      },
      {
        name: "Toggle On On Logout",
        category: "General",
        type: "Module List",
        description: "Modules to activate on logout."
      },
      {
        name: "Toggle Off On Logout",
        category: "General",
        type: "Module List",
        description: "Modules to deactivate on logout."
      },
      {
        name: "Toggle On Damage",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Toggles modules on damage."
      },
      {
        name: "Toggle On On Damage",
        category: "General",
        type: "Module List",
        description: "Modules to activate on damage."
      },
      {
        name: "Toggle Off On Damage",
        category: "General",
        type: "Module List",
        description: "Modules to deactivate on damage."
      },
      {
        name: "Toggle On Player",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description:
          "Toggles modules when a player enters your render distance."
      },
      {
        name: "Ignore Friends",
        category: "General",
        type: "Boolean",
        description: "Wont logout if player enters render distance."
      },
      {
        name: "Toggle On On Player",
        category: "General",
        type: "Module List",
        description: "Modules to activate on player."
      },
      {
        name: "Toggle Off On PLayer",
        category: "General",
        type: "Module List",
        description: "Modules to deactivate on player."
      }
    ]
  },
  {
    name: "Confetti",
    description: "Changes color of totem pop particles.",
    note: "Original from Tanuki",
    settings: [
      {
        name: "Color One",
        category: "General",
        type: "Color",
        color: {
          shapeMode: false,
          lineColor: false,
          sideColor: false,
          tracerColor: false,
          normalColor: true,
          background: false,
          text: false,
          color: "#92bc62"
        },
        description: "The first color to change."
      },
      {
        name: "Color Two",
        category: "General",
        type: "Color",
        color: {
          shapeMode: false,
          lineColor: false,
          sideColor: false,
          tracerColor: false,
          normalColor: true,
          background: false,
          text: false,
          color: "#92bc62"
        },
        description: "The second color to change."
      }
    ]
  },
  {
    name: "Flo Rida",
    description: "Makes you spin right round.",
    note: "Original from Venom Hack",
    settings: [
      {
        name: "Rotation Speed",
        category: "General",
        type: "Range",
        description: "How fast you spin."
      }
    ]
  },
  {
    name: "God Bridge",
    description: "Puts you in the right position to god bridge.",
    note: "Not Finished",
    settings: []
  },
  {
    name: "Ignore Deaths",
    description: "Removes chat messages with death spammers names from chat.",
    settings: [
      {
        name: "Player Names",
        category: "General",
        type: "Text",
        placeholder: "Player1, Player2, Player3",
        description: "The names of the players to ignore."
      }
    ]
  },
  {
    name: "New Chunks",
    description: "Highlights new chunks.",
    note: "Modified from Meteor Rejects",
    settings: [
      {
        name: "Remove",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Removes cached chunks when disabling the module."
      },
      {
        name: "Render Height",
        category: "Render",
        type: "Range",
        description: "The height of the render."
      },
      {
        name: "New Chunks Color",
        category: "Render",
        type: "Color",
        color: {
          shapeMode: true,
          lineColor: true,
          sideColor: true,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: false,
          color: "#ff0000"
        },
        description: "The color of the new chunks."
      },
      {
        name: "Old Chunk Color",
        category: "Render",
        type: "Color",
        color: {
          shapeMode: true,
          lineColor: true,
          sideColor: true,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: false,
          color: "#00ff00"
        },
        description: "The color of the old chunks."
      }
    ]
  },
  {
    name: "No Strip",
    description: "Prevents you from stripping logs.",
    settings: [
      {
        name: "Swing Hand",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Renders the swing hand animation."
      },
      {
        name: "Chat Feedback",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Notifies you when you try to strip a log"
      }
    ]
  },
  {
    name: "Number 81",
    description: "Counts to 81 in chat.",
    settings: []
  },
  {
    name: "Ride Stats",
    description: "Displays information above rideable entity's heads.",
    note: "Modified from Meteor Tweaks",
    settings: [
      {
        name: "Horses",
        category: "Entities",
        type: "Boolean",
        booleanState: true,
        description: "Displays information about horses."
      },
      {
        name: "Donkeys",
        category: "Entities",
        type: "Boolean",
        booleanState: true,
        description: "Displays information about donkeys."
      },
      {
        name: "Mules",
        category: "Entities",
        type: "Boolean",
        booleanState: true,
        description: "Displays information about mules."
      },
      {
        name: "Llamas",
        category: "Entities",
        type: "Boolean",
        booleanState: true,
        description: "Displays information about llamas."
      },
      {
        name: "Max Speed",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Displays the max speed of the entity."
      },
      {
        name: "Max Jump Height",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Displays the max jump height of the entity."
      },
      {
        name: "Max Health",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Displays the max health of the entity."
      },
      {
        name: "Llama slots",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Displays the inventory slots of a llama."
      },
      {
        name: "Scale",
        category: "Render",
        type: "Range",
        description: "The scale of the nametag."
      },
      {
        name: "Height",
        category: "Render",
        type: "Range",
        description: "The height of the nametag."
      },
      {
        name: "Color",
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
        description: "The color of the nametags text."
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
          color: "#000000bf"
        },
        description: "The color of the nametags background."
      }
    ]
  },
  {
    name: "Safe Fire",
    description: "Prevents you from walking into fire",
    note: "Original from Tanuki",
    settings: []
  },
  {
    name: "Safety Net",
    description: "Places a block under you at a set Y level",
    note: "Modified from Tanuki",
    settings: [
      {
        name: "Safety Net",
        description: "Which Safety Net mode to use",
        category: "Safety Net",
        type: "Dropdown",
        dropdown: ["Safety Net", "Air Place"]
      },
      {
        name: "Y level",
        description: "The Y level to place the block at",
        category: "Safety Net",
        type: "Range"
      },
      {
        name: "Window",
        description: "The window to place the block in (+y).",
        category: "Safety Net",
        type: "Range"
      },
      {
        name: "Slow Down Multiplier",
        description: "The Y velocity slowdown multiplier",
        category: "Safety Net",
        type: "Range"
      },
      {
        name: "Auto Switch",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Automatically switches to a block before placing."
      },
      {
        name: "Rotate",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description: "Rotates to the block being placed"
      },
      {
        name: "Block",
        category: "General",
        type: "Block List",
        description: "Selected Blocks."
      },
      {
        name: "Block Filter",
        category: "General",
        type: "Dropdown",
        dropdown: ["Whitelist", "Blacklist"],
        description: "Whitelist or blacklist the selected blocks."
      },
      {
        name: "Swing Hand",
        category: "Render",
        type: "Boolean",
        booleanState: true,
        description: "Renders the swing hand animation."
      },
      {
        name: "Render Color",
        category: "Render",
        type: "Color",
        color: {
          shapeMode: true,
          lineColor: true,
          sideColor: true,
          tracerColor: false,
          normalColor: false,
          background: false,
          text: false,
          color: "#92bc62"
        },
        description: "The color of the place location"
      }
    ]
  },
  {
    name: "Tanuki Egap Finder",
    description:
      'Finds Egaps in a SP world and creates a file called "Egap-coords.txt".',
    note: "Modified from Tanuki",
    settings: [
      {
        name: "Coords",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Notifies you of coords in chat."
      },
      {
        name: "Play Sound",
        category: "General",
        type: "Boolean",
        booleanState: true,
        description: "Plays a sound when an egap is found."
      },
      {
        name: "Debug",
        category: "General",
        type: "Boolean",
        booleanState: false,
        description:
          "Prints info about every chest location in render distance."
      }
    ]
  },
  {
    name: "Tunnel ESP",
    description:
      "Shows you were tunnels are (meteor has it, this one was first).",
    note: "Currently broken",
    settings: [
      {
        name: "Range",
        category: "General",
        type: "Range",
        description: "The range to search for tunnels."
      },
      {
        name: "Delay",
        category: "General",
        type: "Range",
        description: "Delay between searches."
      },
      {
        name: "Render Color",
        category: "General",
        type: "Color",
        color: {
          shapeMode: false,
          lineColor: false,
          sideColor: false,
          tracerColor: false,
          normalColor: true,
          background: false,
          text: false,
          color: "#92bc62"
        },
        description: "Color of the render."
      }
    ]
  },
  {
    name: "Wurst Glide",
    description: "Glide from Wurst.",
    note: "Modified from Wurst",
    settings: [
      {
        name: "Fall Speed",
        category: "General",
        type: "Range",
        description: "The speed to fall at."
      },
      {
        name: "Move Speed",
        category: "General",
        type: "Range",
        description: "The speed you move at."
      },
      {
        name: "Min Height",
        category: "General",
        type: "Range",
        description: "Wont glide when you are too close to the ground."
      }
    ]
  }
];

export default modules;
