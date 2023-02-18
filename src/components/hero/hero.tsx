import "./hero.css";

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='title-container'>
        <h1>Numby Hack</h1>
        <p>
          A Meteor Client addon focused on giving users more customization
          options. Made in honor of Number81.
        </p>
        <sub>Made by: cqb13</sub>
      </div>
    </section>
  );
};

export default Hero;
