import FeatureDisplay from "./featureDisplay/featureDisplay";
import { useEffect, useState } from "react";
import "./features.css";

const Features = () => {
  const [mcVersion, setMcVersion] = useState({} as string);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/cqb13/Numby-hack/master/gradle.properties")
      .then((res) => res.text())
      .then((data) => {
        const props = data.split("\n");
        const prop = props.find((property) =>
          property.startsWith("minecraft_version=")
        );
        
        if (prop) {
          const version = prop.split("=")[1];
          setMcVersion(version);
        } else {
          setMcVersion("")
        }
      }
    );
  }, []);

  return (
    <section className="content-section feature" id="features">
      <section className="info-container">
        <h1 className="title">Features</h1>
        <hr />
        <span>
          Numby Hack is a Meteor Client addon for the latest version of
          Minecraft{", " + mcVersion} . It focusses on providing users with high quality
          utility modules with a focus on customization, and render options.
          While not all modules are originally written by me, all have been
          modified in a significant way, before being added.
        </span>
      </section>
      <FeatureDisplay />
    </section>
  );
};

export default Features;
