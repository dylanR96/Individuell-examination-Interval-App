import { createFileRoute } from "@tanstack/react-router";
import AnalogTimer from "../pages/AnalogTimer";

export const Route = createFileRoute("/templateAnalog")({
  component: () => <AnalogTimer />,
});