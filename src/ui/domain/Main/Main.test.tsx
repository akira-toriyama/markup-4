import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Main } from "./Main";

describe.concurrent("Main", () => {
  const renderFn = (props: React.ComponentProps<typeof Main>) =>
    render(<Main {...props} />);

  test.concurrent("test", () => {
    expect(renderFn({})).toBeDefined();
  });
});
