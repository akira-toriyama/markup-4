import styles from "./styles.module.scss";
import NextImg from "next/image";
import { clsx } from "clsx";

type Px = `${number}px`;
type ResponsiveImg = {
  img: {
    className?: string;
  } & Pick<React.ComponentProps<typeof NextImg>, "src" | "alt">;
  wrapper?: {
    className: string;
  };
  width: {
    s: Px;
    m: Px;
    l: Px;
  };
  height: {
    s: Px;
    m: Px;
    l: Px;
  };
};

export const ResponsiveImg: React.FC<ResponsiveImg> = (props) => (
  <figure
    className={clsx(styles.root, props.wrapper?.className)}
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
        className: props.img.className,
      }}
    />
  </figure>
);
