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
    <section className='hero' id='home'>
      <div className='title-container colored-container'>
        <h1>Numby Hack</h1>
        <p>
          A Meteor Client addon focused on giving users more customization
          options. Made in honor of Number81.
        </p>
        <sub className="green-sub">Made by: cqb13</sub>
      </div>
      <div className='button-container'>
        <Button
          href={downloadLink}
          onClick={getDownloads}
        >
          Download
          <sub className="button-detail">downloads:{downloads}</sub>
        </Button>
        <Button href='https://github.com/cqb13/Numby-hack/' target='_blank'>
          Github
          <sub className="button-detail">stars:{stars}</sub>
        </Button>
      </div>
      <div className='bounce arrow-container'>
        <a className='arrow' href='#features'>
          Learn More
        </a>
        <a href='#features'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 175 94'
            fill='#F5F7FA'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_3_2)'>
              <path d='M94.7187 82.7219C90.5795 86.3218 84.4206 86.3218 80.2814 82.7219L7.93339 19.8001C0.257103 13.1239 4.97872 0.499979 15.152 0.499979L159.848 0.499979C170.021 0.499979 174.743 13.1239 167.067 19.8L94.7187 82.7219Z' />
            </g>
            <defs>
              <filter
                id='filter0_d_3_2'
                x='0.129982'
                y='0.499979'
                width='174.74'
                height='92.9218'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <feFlood flood-opacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='2' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_3_2'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_3_2'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
