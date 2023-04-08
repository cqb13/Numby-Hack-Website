import Checkbox from "../../elements/checkbox";

const ModuleInfo = (props: any) => {
  const { moduleInfo, type } = props;
  const info = moduleInfo;

  if (type === "command") {
    return (
      <>
        <h1>{info.name}</h1>
        <p>{info.description}</p>
        <hr />
        <p>{`Usage: ${info.usage}`}</p>
        {info.aliases ? <p>{`Aliases: ${info.aliases.join(", ")}`}</p> : null}
      </>
    );
  }

  const noSettings = info.settings.length === 0;

  if (noSettings) {
    return (
      <>
        <h1>{info.name}</h1>
        <p>{info.description}</p>
        <hr />
        <p>No Settings Available</p>
      </>
    );
  }

  //TODO: implement the link toggle from general.ts
  //TODO: Checkboxes cant be toggled
  let currentCategory = "";
  return (
    <>
      <h1 className="module-name">{info.name}</h1>
      <p>{info.description}</p>
      {info.note ? <sub>{info.note}</sub> : null}
      <hr />
      {info.settings.map((setting: any, index: number) => {
        const isFirstInCategory = setting.category !== currentCategory;
        currentCategory = setting.category;

        return (
          <div key={index} className='module-setting'>
            {isFirstInCategory && <h3>{`${setting.category}:`}</h3>}
            {setting.type === "Boolean" ? (
              <Checkbox value={setting.name} checked={setting.booleanState}/>
            ) : (
              <p>{setting.name}</p>
            )}
            <p>{setting.description}</p>
            {setting.type === "Text" ? (
              <input type='text' placeholder={setting.placeholder} />
            ) : null}
            {setting.type === "Dropdown" ? (
              <select>
                {setting.dropdown.map((dropdown: string) => {
                  return <option value={dropdown}>{dropdown}</option>;
                })}
              </select>
            ) : null}
            {setting.type === "Range" ? (
              <input type='range' min={0} defaultValue={5} max={10} />
            ) : null}
            {setting.type === "Color" ? (
              <section>
                {setting.color.shapeMode ? (
                  <>
                    <p>Shape Mode</p>
                    <select>
                      <option value='Both'>Both</option>
                      <option value='Sides'>Sides</option>
                      <option value='Lines'>Lines</option>
                    </select>
                  </>
                ) : null}
                {setting.color.sideColor ? (
                  <>
                    <p>Side Color</p>
                    <input type='color' value={setting.color.color} />
                  </>
                ) : null}
                {setting.color.lineColor ? (
                  <>
                    <p>Line Color</p>
                    <input type='color' value={setting.color.color} />
                  </>
                ) : null}
                {setting.color.background ? (
                  <>
                    <p>Line Color</p>
                    <input type='color' value={setting.color.color} />
                  </>
                ) : null}
                {setting.color.text ? (
                  <>
                    <p>Line Color</p>
                    <input type='color' value={setting.color.color} />
                  </>
                ) : null}
                {setting.color.tracerColor ? (
                  <>
                    <p>Tracer Color</p>
                    <input type='color' value={setting.color.color} />
                  </>
                ) : null}
                {setting.color.normalColor ? (
                  <>
                    <p>Color</p>
                    <input type='color' value={setting.color.color} />
                  </>
                ) : null}
              </section>
            ) : null}
            {setting.type === "Keybind" ? (
              <input type='text' placeholder='enter key' />
            ) : null}
            {setting.type === "Module List" ? (
              <select>
                <option value='All Modules'>All Modules</option>
              </select>
            ) : null}
            {setting.type === "Block List" ? (
              <select>
                <option value='All Blocks'>All Blocks</option>
              </select>
            ) : null}
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default ModuleInfo;
