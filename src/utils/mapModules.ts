const mapModules = (modules: any) => {
    const moduleMap: {[key: string]: number} = {};
    for (let i = 0; i < modules.length; i++) {
        const module = modules[i];
        const moduleName = module.name;
        const moduleLocation = i;
        moduleMap[moduleName] = moduleLocation;
    }
    return moduleMap;
}

export default mapModules