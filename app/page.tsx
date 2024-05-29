"use client";

import { redirect } from "next/navigation";

export default function MSBAHomePage(): JSX.Element {
  redirect("/me");
}
