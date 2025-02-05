import Button from "../elements/button";
import { useEffect, useState } from "react";
import "./hero.css";

const Hero = () => {
  const [downloadLink, setDownloadLink] = useState({} as string);
  const [downloads, setDownloads] = useState(0);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    getDownloads();
    fetch("https://api.github.com/repos/cqb13/Numby-hack/releases/latest")
      .then((res) => res.json())
      .then((data) => {
        setDownloadLink(data.assets[0].browser_download_url);
      });

    fetch("https://api.github.com/repos/cqb13/Numby-hack")
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
      });
  }, []);

  const getDownloads = () => {
    fetch("https://api.github.com/repos/cqb13/Numby-hack/releases")
      .then((res) => res.json())
      .then((data) => {
        let totalDownloads = 0;
        data.forEach((release: any) => {
          release.assets.forEach((asset: any) => {
            totalDownloads += asset.download_count;
          });
        });
        setDownloads(totalDownloads);
      });
  };

  return (
    <section className="hero" id="home">
      <div className="title-container colored-container">
        <h1>Numby Hack</h1>
        <p>
          A Meteor Client addon focused on giving users more customization
          options. Made in honor of Number81.
        </p>
        <sub className="green-sub">Made by: cqb13</sub>
      </div>
      <div className="button-container">
        <Button href={downloadLink} onClick={getDownloads}>
          Download
          <sub className="button-detail">downloads:{downloads}</sub>
        </Button>
        <Button href="https://github.com/cqb13/Numby-hack/" target="_blank">
          Github
          <sub className="button-detail">stars:{stars}</sub>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
