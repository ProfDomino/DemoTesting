"use client";

import { useEffect } from "react";
import * as Realm from "realm-web";

export default function GoogleAuthRedirect(): JSX.Element {
  useEffect(() => {
    Realm.handleAuthRedirect();
  }, []);
  return <div />;
}
