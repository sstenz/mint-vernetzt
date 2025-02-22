import React from "react";
import { render } from "@testing-library/react";

import Index from "./index";

describe("Index", () => {
  it("should render successfully", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: any = {};
    const { getByText } = render(<Index {...props} />);
    expect(getByText("Welcome to website!")).toBeTruthy();
  });
});
