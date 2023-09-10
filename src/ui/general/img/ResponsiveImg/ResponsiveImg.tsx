import styles from "./styles.module.scss";
import NextImg from "next/image";

type ResponsiveImg = {
  img: Pick<React.ComponentProps<typeof NextImg>, "src" | "alt">;
  width: {
    s: `${number}px`;
    m: `${number}px`;
    l: `${number}px`;
  };
  height: {
    s: `${number}px`;
    m: `${number}px`;
    l: `${number}px`;
  };
};

export const ResponsiveImg: React.FC<ResponsiveImg> = (props) => (
  <figure
    className={styles.root}
    style={
      {
        "--s-w": props.width.s,
        "--s-h": props.height.s,
        "--m-w": props.width.m,
        "--m-h": props.height.m,
        "--l-w": props.width.l,
        "--l-h": props.height.l,
      } as React.CSSProperties
    }
  >
    <NextImg
      {...{
        ...props.img,
        fill: true,
        // https://github.com/vercel/next.js/discussions/40643
        sizes: "100%",
        style: { objectFit: "cover" },
      }}
    />
  </figure>
);
