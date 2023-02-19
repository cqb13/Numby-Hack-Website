import FeatureDisplay from "./featureDisplay/featureDisplay";
import "./features.css";

const Features = () => {
  return (
    <section className='content-section feature' id='features'>
      <section className='info-container'>
        <h1 className='title'>Features</h1>
        <hr />
        <span>
          Numby Hack is a Meteor Client addon for the latest version of
          Minecraft, 1.19.3. It focusses on providing users with high quality
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
