const ModuleInfo = (moduleInfo: any) => {
  const info = moduleInfo.moduleInfo;

  return (
    <>
      <h1>{info.name}</h1>
      <p>{info.description}</p>
      <hr />
      {info.settings.map((setting: any) => {
        return (
          <>
            <div className='module-setting'>
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
                <input
                  type='button'
                  onClick={() => console.log(setting.color.shapeMode)}
                />
              ) : null}
            </div>
            <hr />
          </>
        );
      })}
    </>
  );
};

export default ModuleInfo;
