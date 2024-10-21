import { createFileRoute } from "@tanstack/react-router";
import SetTimer from "../pages/setTimer/SetTimer";

export const Route = createFileRoute("/setTimer")({
  component: () => <SetTimer />,
});
