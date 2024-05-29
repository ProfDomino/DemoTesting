"use client";

import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { User, Credentials } from "realm-web";
import { App } from "realm-web";

export interface MongoAtlasAppContextProps {
  app: App | null;
  currentUser: User | null;
  accessToken: string;
  isLoggedIn: boolean;
  name: string;
  picture: string;
  email: string;
  userLoading: boolean;
  tokenRefreshed: number;
  setTokenRefreshed: Dispatch<SetStateAction<number>>;
  logIn: ((credentials: Credentials) => Promise<void>) | null;
  logOut: (() => Promise<void>) | null;
  refreshAccessToken: ((forceRefresh?: boolean) => Promise<string>) | null;
}

const initState = (): MongoAtlasAppContextProps => {
  const vals: MongoAtlasAppContextProps = {
    app: null,
    currentUser: null,
    accessToken: "",
    isLoggedIn: false,
    email: "",
    name: "",
    picture: "",
    userLoading: true,
    tokenRefreshed: 0,
    setTokenRefreshed: () => null,
    logIn: null,
    logOut: null,
    refreshAccessToken: null,
  };
  return vals;
};

const defaultState = initState();
export const MongoAtlasAppContext = createContext(defaultState);

function MongoAtlasApp(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  const id = process.env.NEXT_PUBLIC_APP_ID
    ? process.env.NEXT_PUBLIC_APP_ID
    : "";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "";

  const app = useMemo(() => new App({ id, baseUrl }), [baseUrl, id]);

  const [currentUser, setCurrentUser] = useState<User | null>(app.currentUser);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState<string>("");
  const [tokenRefreshed, setTokenRefreshed] = useState<number>(0);

  useEffect(() => {
    const update = async () => {
      if (app.currentUser) {
        await app.currentUser.refreshAccessToken();
        setAccessToken(
          app.currentUser.accessToken ? app.currentUser.accessToken : ""
        );
        setTokenRefreshed(new Date().getTime());
      }
      setCurrentUser(app.currentUser);
      setUserLoading(false);
    };
    update();
  }, [app.currentUser]);

  // Wrap the base logIn function to save the logged in user in state
  const logIn = useCallback(
    async (credentials: Credentials) => {
      await app.logIn(credentials);
      setCurrentUser(app.currentUser);
    },
    [app]
  );

  // Wrap the current user's logOut function to remove the logged out user from state
  const logOut = useCallback(async () => {
    try {
      const user = app.currentUser;
      await user?.logOut();
      setCurrentUser(null);
      setAccessToken("");
      setTokenRefreshed(0);
    } catch (err) {
      // eslint-disable-next-line no-console -- need to display error
      console.error(err);
    }
  }, [app]);

  const refreshAccessToken = async (
    forceRefresh?: boolean
  ): Promise<string> => {
    if (!app.currentUser) {
      // eslint-disable-next-line no-console -- debugging
      console.log("no app.currentUser, returning blank token");
      return "";
    }
    const now = new Date().getTime();
    if (!forceRefresh) {
      if (now - tokenRefreshed < 540000) {
        // eslint-disable-next-line no-console -- debugging
        console.log("token is recent, so returning it");
        return accessToken;
      }
    }
    // eslint-disable-next-line no-console -- debugging
    console.log("refreshing token");
    await app.currentUser.refreshAccessToken();
    setTokenRefreshed(now);
    setAccessToken(
      app.currentUser.accessToken ? app.currentUser.accessToken : ""
    );
    return app.currentUser.accessToken ? app.currentUser.accessToken : "";
  };

  // Override the App's currentUser & logIn properties + include the app-level logout function
  const appContext = {
    app,
    currentUser,
    accessToken,
    refreshAccessToken,

    isLoggedIn: app.currentUser?.isLoggedIn
      ? app.currentUser.isLoggedIn
      : false,

    // eslint-disable-next-line no-nested-ternary -- necessary
    email: app.currentUser?.customData.email
      ? String(app.currentUser.customData.email)
      : app.currentUser?.profile.email
        ? app.currentUser.profile.email
        : "",

    // eslint-disable-next-line no-nested-ternary -- necessary
    name: app.currentUser?.customData.name
      ? String(app.currentUser.customData.name)
      : app.currentUser?.profile.name
        ? app.currentUser.profile.name
        : "",

    // eslint-disable-next-line no-nested-ternary -- necessary
    picture: app.currentUser?.customData.picture
      ? String(app.currentUser.customData.picture)
      : app.currentUser?.profile.pictureUrl
        ? app.currentUser.profile.pictureUrl
        : "",

    userLoading,
    tokenRefreshed,
    setTokenRefreshed,
    logIn,
    logOut,
  };

  return (
    <MongoAtlasAppContext.Provider value={appContext}>
      {children}
    </MongoAtlasAppContext.Provider>
  );
}

export default MongoAtlasApp;
