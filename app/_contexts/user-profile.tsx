"use client";

import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { MongoAtlasAppContext } from "./mongo-atlas-app";
import { fetchEndpoint } from "app/_lib/util";

interface UserProfile {
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  ethnicity: string;
  pronouns: string;
}

interface UserProfileResponse {
  success: boolean;
  data: UserProfile;
  error: string;
}

interface UserProfileProviderProps {
  profileLoading: boolean;
  isCommitteeMember: boolean;
  profile: UserProfile;
  setProfile: Dispatch<SetStateAction<UserProfile>>;
}

const defaultProfile = (): UserProfile => {
  return {
    displayName: "",
    firstName: "",
    lastName: "",
    email: "",
    ethnicity: "",
    pronouns: "",
  };
};

function initState(): UserProfileProviderProps {
  const vals: UserProfileProviderProps = {
    profileLoading: true,
    isCommitteeMember: false,
    profile: defaultProfile(),
    setProfile: () => null,
  };
  return vals;
}

const defaultState = initState();
export const UserProfileContext = createContext(defaultState);

export default function UserProfileProvider(
  props: PropsWithChildren
): JSX.Element {
  const { children } = props;
  const {
    userLoading,
    isLoggedIn,
    email,
    accessToken,
    refreshAccessToken,
    currentUser,
  } = useContext(MongoAtlasAppContext);
  const [profileLoading, setProfileLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<UserProfile>(defaultProfile());
  const [fetchProfile, setFetchProfile] = useState<boolean>(false);

  useEffect(() => {
    const getProfileData = async () => {
      const response = await fetchEndpoint(
        refreshAccessToken,
        "/profile",
        "GET",
        {}
      );

      if (response.status === 200) {
        const json = (await response.json()) as UserProfileResponse;
        if (json.success) {
          setProfile(Object.assign({}, json.data));
        }
      }
      setProfileLoading(false);
    };

    if (fetchProfile && !profileLoading && !userLoading && isLoggedIn) {
      setFetchProfile(false);
      setProfileLoading(true);
      getProfileData();
    }
  }, [
    fetchProfile,
    userLoading,
    isLoggedIn,
    accessToken,
    profileLoading,
    refreshAccessToken,
  ]);

  useEffect(() => {
    if (!isLoggedIn) {
      setProfile(defaultProfile());
    } else {
      setFetchProfile(true);
    }
  }, [isLoggedIn]);

  return (
    <UserProfileContext.Provider
      value={{
        profileLoading,
        isCommitteeMember: Boolean(currentUser?.customData.isCommitteeMember),
        profile,
        setProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
}
