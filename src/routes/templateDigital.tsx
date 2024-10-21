import { createFileRoute } from "@tanstack/react-router";
import DigitalTimer from "../pages/digitalTimer/DigitalTimer";

export const Route = createFileRoute("/templateDigital")({
  component: () => <DigitalTimer />,
});
