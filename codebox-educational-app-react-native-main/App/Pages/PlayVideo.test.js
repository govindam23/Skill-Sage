// PlayVideo.test.js
import { render } from "@testing-library/react-native";
import React from "react";
import PlayVideo from "./PlayVideo";

// Mocking navigation and route
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(() => ({
    params: {
      courseContent: [
        // Mock your course content data here, if needed
      ],
    },
  })),
}));

// Mocking YoutubePlayer to prevent errors during testing
jest.mock("react-native-youtube-iframe", () => ({
  __esModule: true,
  default: () => <></>,
}));

// Test case: Renders the PlayVideo component
test("Renders the PlayVideo component", () => {
  const { getByText } = render(<PlayVideo />);

});
