import { redirect } from "next/navigation";

export default function Redirect(): JSX.Element {
  redirect("/me");
}
