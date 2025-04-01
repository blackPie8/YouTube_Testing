import React from "react";
import { render, screen } from "@testing-library/react-native";
import VideoPlayer from "../src/components/VideoPlayer";

jest.mock("react-native-video", () => "Video");

describe("VideoPlayer Component", () => {
  const mockVideoDetails = {
    title: "Porsche 992 GT3 RS // 306km/h REVIEW",
    subtitle: "on Autobahn",
    profile: require("../src/assets/profile-1.png"),
    metadata: "AutoTopNL · 37 lakh views · 1 year ago",
  };

  beforeEach(() => {
    render(<VideoPlayer videoDetails={mockVideoDetails} />);
  });

  it("renders the title correctly", () => {
    const titleElement = screen.getByTestId("video-title");
    expect(titleElement).toHaveTextContent(mockVideoDetails.title);
  });

  it("renders the subtitle correctly", () => {
    const subtitleElement = screen.getByTestId("video-subtitle");
    expect(subtitleElement).toHaveTextContent(mockVideoDetails.subtitle);
  });

  it("renders the metadata correctly", () => {
    const metadataElement = screen.getByTestId("video-metadata");
    expect(metadataElement).toHaveTextContent(mockVideoDetails.metadata);
  });

  it("renders the profile image correctly", () => {
    const profileImage = screen.getByTestId("profile-image");
    expect(profileImage.props.source).toEqual(mockVideoDetails.profile);
  });

  it("renders the Video component", () => {
    const videoComponent = screen.getByTestId("video");
    expect(videoComponent).toBeTruthy();
  });
});
