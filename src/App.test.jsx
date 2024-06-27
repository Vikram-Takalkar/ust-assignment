import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import ButtonComponent from "./components/ButtonComponent";

afterAll(() => {
  jest.clearAllMocks();
});

jest.mock(".", () => {
  return jest.fn(function () {
    (this.cancel = () => {}),
      (this.get = () =>
        Promise.resolve([
          {
            machineName: "Line 3 Extruder",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "Danger",
            id: "6e2b",
          },
          {
            machineName: "Line 3 Auxiliary Extruder",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "Acceptable",
            id: "1e03",
          },
          {
            machineName: "Extruder 4",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "Monitor",
            id: "c475",
          },
          {
            machineName: "Line 5 Extruder",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "Danger",
            id: "9912",
          },
          {
            machineNam: "Line 6 Extruder",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "Danger",
            id: "54f2",
          },
          {
            machineName: "Line 99 Extruder",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "Alarm",
            id: "13e2",
          },
          {
            machineName: "Line 22 Extruder",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "",
            id: "62f0",
          },
          {
            machineName: "Line 32 Extruder",
            machineType: "Misaignment Motor",
            type: "Facility",
            build: "Building",
            status: "Alarm",
            id: "d2a3",
          },
        ]));
  });
});

test("renders react component", async () => {
  const { container } = render(<App />, {
    body: document.body,
  });
  await waitFor(() => {
    const linkElement = screen.getByText("UST Assignment Demo");
    expect(linkElement).toBeInTheDocument();
    // screen.debug();
  });
});

test("renders react button component", async () => {
  const count = {
    acceptable: 2,
    monitor: 1,
    danger: 3,
    alarm: 4,
    noStatus: 1,
  };
  const { container } = render(
    <App count={count}>
      <ButtonComponent />
    </App>,
    {
      body: document.body,
    }
  );
  await waitFor(() => {
    const linkElement = screen.getByTestId("button-acceptable");
    fireEvent.click(linkElement);
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = screen.getByTestId("button-Monitor");
    fireEvent.click(linkElement2);
    expect(linkElement2).toBeInTheDocument();
    const linkElement3 = screen.getByTestId("button-Danger");
    fireEvent.click(linkElement3);
    expect(linkElement3).toBeInTheDocument();
    // screen.debug();
  });
});
