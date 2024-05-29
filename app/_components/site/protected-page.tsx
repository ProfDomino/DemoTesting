"use client";

import { ReactNode, useContext, type PropsWithChildren } from "react";

import { MongoAtlasAppContext } from "@/contexts/mongo-atlas-app";
import { UserProfileContext } from "@/contexts/user-profile";
import { LoadingBook } from "../ui/loading-book";

interface RequireLoginProps extends PropsWithChildren {
  loggedIn?: boolean;
  reader?: boolean;
  educator?: boolean;
  committee?: boolean;
  superadmin?: boolean;
  redirectPath?: string;
}

export default function ProtectedPage(
  props: RequireLoginProps
): JSX.Element | null | ReactNode {
  const {
    loggedIn = false,

    committee = false,

    redirectPath = "/",
    children,
  } = props;

  const { userLoading, isLoggedIn } = useContext(MongoAtlasAppContext);
  const { profileLoading, isCommitteeMember } = useContext(UserProfileContext);

  const validMatch =
    (!loggedIn || (isLoggedIn && loggedIn)) &&
    (!committee || (isCommitteeMember && committee));

  if (userLoading || profileLoading) {
    return <LoadingBook />;
  }

  if (validMatch) {
    return children;
  }

  return null;
}
