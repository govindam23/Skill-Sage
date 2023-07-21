import { render } from "@testing-library/react-native";
import React from "react";

import Community from "./Community";

describe("<Community />", () => {
  it("renders the component", () => {
    const { getByText } = render(<Community />);
    const communityText = getByText("Community");
    expect(communityText).toBeDefined();
  });
});
