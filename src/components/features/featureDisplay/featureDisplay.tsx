import { command } from "../../../assets/modules/commands";
import { setting } from "../../../assets/modules/general";
import commands from "../../../assets/modules/commands";
import hudElements from "../../../assets/modules/hud";
import modules from "../../../assets/modules/general";
import mapModules from "../../../utils/mapModules";
import ModuleInfo from "../moduleInfo/moduleInfo";
import { useEffect, useState } from "react";
import other from "../../../assets/modules/other";

const FeatureDisplay = () => {
  const [commandMap, setCommandMap] = useState({} as { [key: string]: number });
  const [moduleMap, setModuleMap] = useState({} as { [key: string]: number });
  const [otherMap, setOtherMap] = useState({} as { [key: string]: number });
  const [hudMap, setHudMap] = useState({} as { [key: string]: number });
  const [data, setData] = useState(modules[0] as command | setting);
  const [type, setType] = useState("module");

  useEffect(() => {
    const mappedCommands = mapModules(commands);
    const mappedModules = mapModules(modules);
    const mappedHud = mapModules(hudElements);
    const mappedOther = mapModules(other);
    setCommandMap(mappedCommands);
    setModuleMap(mappedModules);
    setOtherMap(mappedOther);
    setHudMap(mappedHud);
  }, []);

  const updateSelectedModule = (moduleName: string, type: string) => {
    if (type === "module") {
      setData(modules[moduleMap[moduleName]]);
      setType("module");
    } else if (type === "command") {
      setData(commands[commandMap[moduleName]]);
      setType("command");
    } else if (type === "hud") {
      setData(hudElements[hudMap[moduleName]]);
      setType("hud");
    } else if (type === "other") {
      setData(other[otherMap[moduleName]]);
      setType("other");
    }
  };

  return (
    <section className='feature-display-container'>
      <section className='module-list-container'>
        <p className='module-category-name'>General</p>
        {Object.keys(moduleMap).map((key) => {
          return (
            <div
              className='module-item-name'
              onClick={() => updateSelectedModule(key, "module")}
            >
              {key}
            </div>
          );
        })}
        <p className='module-category-name'>Hud</p>
        {Object.keys(hudMap).map((key) => {
          return (
            <div
              className='module-item-name'
              onClick={() => updateSelectedModule(key, "hud")}
            >
              {key}
            </div>
          );
        })}
        <p className='module-category-name'>Commands</p>
        {Object.keys(commandMap).map((key) => {
          return (
            <div
              className='module-item-name'
              onClick={() => updateSelectedModule(key, "command")}
            >
              {key}
            </div>
          );
        })}
        <p className='module-category-name'>Other</p>
        {Object.keys(otherMap).map((key) => {
          return (
            <div
              className='module-item-name'
              onClick={() => updateSelectedModule(key, "other")}
            >
              {key}
            </div>
          );
        })}
      </section>
      <section className='module-info-container'>
        <section className='module-setting-container'>
          <ModuleInfo moduleInfo={data} type={type} />
        </section>
      </section>
    </section>
  );
};

export default FeatureDisplay;
