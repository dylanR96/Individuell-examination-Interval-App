import { createFileRoute } from "@tanstack/react-router";
import SetTimer from "../pages/SetTimer";

export const Route = createFileRoute("/setTimer")({
  component: () => <SetTimer />,
});
