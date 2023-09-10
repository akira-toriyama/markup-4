import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { ResponsiveImg } from "./ResponsiveImg";

describe.concurrent("ResponsiveImg", () => {
  const renderFn = (props: React.ComponentProps<typeof ResponsiveImg>) =>
    render(<ResponsiveImg {...props} />);

  test.concurrent("required", () => {
    expect(
      renderFn({
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
      }),
    ).toBeDefined();
  });
});
