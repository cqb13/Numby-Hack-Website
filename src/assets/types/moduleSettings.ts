type moduleSettings = {
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

export default moduleSettings;
