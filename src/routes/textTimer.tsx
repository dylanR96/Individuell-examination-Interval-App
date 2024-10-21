import { createFileRoute } from "@tanstack/react-router";
import TextTimer from "../pages/TextTimer";

export const Route = createFileRoute("/textTimer")({
  component: () => <TextTimer />,
});
