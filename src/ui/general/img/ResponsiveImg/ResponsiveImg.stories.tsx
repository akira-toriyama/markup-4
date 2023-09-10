import * as responsiveImg from "./ResponsiveImg";

export const ResponsiveImg: React.FC = () => (
  <responsiveImg.ResponsiveImg
    {...{
      img: {
        src: "/akira-toriyama.jpg",
        alt: "profile",
      },
      width: {
        s: "200px",
        m: "300px",
        l: "400px",
      },
      height: {
        s: "200px",
        m: "300px",
        l: "400px",
      },
    }}
  />
);

export const Snapshot: React.FC = () => <ResponsiveImg />;
