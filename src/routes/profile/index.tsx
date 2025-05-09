import { createFileRoute } from "@tanstack/react-router";
import ProfileCard from "../../components/Profile/Profile";

export const Route = createFileRoute("/profile/")({
  component: Profile,
});

function Profile() {
  return <ProfileCard />;
}
