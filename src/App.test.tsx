import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("<Dogenerator />", () => {
  beforeEach(() => {
    // mock all breeds api request
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: { doge: [], coolerDoge: [], coolestDoge: [] },
      })
    );
  });

  test("renders with fetched data", async () => {
    render(<App />);

    const buttons = await screen.findAllByTestId("breedName-button");
    const buttonLabels = buttons.map((button) => button.textContent);

    expect(buttonLabels).toStrictEqual(["doge", "coolerDoge", "coolestDoge"]);
  });

  test("displays modal after clicking on a button", async () => {
    const { getFirstBreedButton, getModalDogPictureSrc } = testUtils();

    render(<App />);

    //mock dog picture request
    fetchMock.mockResponseOnce(
      JSON.stringify({
        message: "fakeLink.jpg",
        status: "success",
      })
    );

    fireEvent.click(await getFirstBreedButton());

    expect(screen.getByTestId("dog-modal")).toBeVisible();
    await waitFor(() => {
      expect(getModalDogPictureSrc()).toBe("fakeLink.jpg");
    });
  });

  test("displays random dog image after clicking on the button inside the modal", async () => {
    const {
      getFirstBreedButton,
      getModalDogPictureSrc,
      clickFetchRandomDogButton,
    } = testUtils();
    render(<App />);

    //mock multiple random dog pictures requests
    fetchMock.mockResponses(
      JSON.stringify({
        message: "fakeLink.jpg",
        status: "success",
      }),
      JSON.stringify({
        message: "fakeLink2.jpg",
        status: "success",
      }),
      JSON.stringify({
        message: "fakeLink3.jpg",
        status: "success",
      })
    );

    fireEvent.click(await getFirstBreedButton());

    await clickFetchRandomDogButton();
    await waitFor(() => {
      expect(getModalDogPictureSrc()).toBe("fakeLink2.jpg");
    });

    await clickFetchRandomDogButton();
    await waitFor(() => {
      expect(getModalDogPictureSrc()).toBe("fakeLink3.jpg");
    });
  });
});

function testUtils() {
  const getFirstBreedButton = async () => {
    const buttons = await screen.findAllByTestId("breedName-button");
    return buttons[0];
  };
  const getModalDogPictureSrc = () =>
    screen.getByTestId("dog-picture").getAttribute("src");
  const getFetchRandomDogButton = async () =>
    screen.findByTestId("modal-random-button");
  const clickFetchRandomDogButton = async () =>
    fireEvent.click(await getFetchRandomDogButton());

  return {
    getFirstBreedButton,
    getModalDogPictureSrc,
    getFetchRandomDogButton,
    clickFetchRandomDogButton,
  };
}
