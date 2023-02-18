import modules from "../../../assets/modules/general";
import mapModules from "../../../utils/mapModules";
import ModuleInfo from "../moduleInfo/moduleInfo";
import { useEffect, useState } from "react";

const FeatureDisplay = () => {
  const [moduleMap, setModuleMap] = useState({} as { [key: string]: number });
  const [currentModule, setCurrentModule] = useState(0);

  useEffect(() => {
    const mappedModules = mapModules(modules);
    setModuleMap(mappedModules);
  }, []);

  const updateSelectedModule = (moduleName: string) => {
    for (const key in moduleMap) {
      if (key === moduleName) {
        setCurrentModule(moduleMap[key]);
      }
    }
  };

  //TODO: to feature list, make current feature be highlighted
  return (
    <section className='feature-display-container'>
      <section className='module-list-container'>
        <p className='module-category-name'>General</p>
        {Object.keys(moduleMap).map((key) => {
          return (
            <div
              className='module-item-name'
              onClick={() => updateSelectedModule(key)}
            >
              {key}
            </div>
          );
        })}
        <p className='module-category-name'>Hud</p>
        <p className='module-category-name'>Commands</p>
        <p className='module-category-name'>Other</p>
      </section>
      <section className='module-info-container'>
        <section className='module-setting-container'>
          <ModuleInfo moduleInfo={modules[currentModule]} />
        </section>
      </section>
    </section>
  );
};

export default FeatureDisplay;
