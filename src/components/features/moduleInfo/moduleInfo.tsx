const ModuleInfo = (moduleInfo: any) => {
  const info = moduleInfo.moduleInfo;
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


  //TODO: add all numby hack modules to module list
  let currentCategory = "";
  return (
    <>
      <h1>{info.name}</h1>
      <p>{info.description}</p>
      <hr />
      {info.settings.map((setting: any, index: number) => {
        const isFirstInCategory = setting.category !== currentCategory;
        currentCategory = setting.category;

        return (
          <div key={index} className='module-setting'>
            {isFirstInCategory && <h3>{setting.category}</h3>}
            <p>{setting.name}</p>
            <p>{setting.description}</p>
            {setting.type === "Boolean" ? (
              <input type='checkbox' checked={setting.booleanState} />
            ) : null}
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
              <input type='range' min={0} max={10} />
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
                    <input type='color' />
                  </>
                ) : null}
                {setting.color.lineColor ? (
                  <>
                    <p>Side Color</p>
                    <input type='color' />
                  </>
                ) : null}
                {setting.color.tracerColor ? (
                  <>
                    <p>Tracer Color</p>
                    <input type='color' />
                  </>
                ) : null}
                {setting.color.normalColor ? (
                  <>
                    <p>Color</p>
                    <input type='color' />
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
