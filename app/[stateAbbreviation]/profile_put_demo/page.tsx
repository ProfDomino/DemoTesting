"use client";

import React, { useContext, useState } from 'react';
import { Box, Button, Typography, Grid } from "@mui/joy";
import { UserProfileContext } from 'app/_contexts/user-profile';

export default function UpdateProfilePage(): JSX.Element {
  const { profile, updateProfile } = useContext(UserProfileContext);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  const handleSaveClick = () => {
    updateProfile(updatedProfile);
  };

  return (
    <Box>
      <Typography level="h1">Profile - PUT Demo</Typography>
      <Typography level="body-md">Insert form to view and edit your profile</Typography>

      <Typography level="h3">
        Preferred Name: <input type="text" name="displayName" value={updatedProfile.displayName} onChange={handleInputChange} />
      </Typography>
      <Typography level="h3">
        Pronouns: <input type="text" name="pronouns" value={updatedProfile.pronouns} onChange={handleInputChange} />
      </Typography>
      <Typography level="h3">
        First Name: <input type="text" name="firstName" value={updatedProfile.firstName} onChange={handleInputChange} /> 
      </Typography>
      <Typography level="h3">
        Last Name: <input type="text" name="lastName" value={updatedProfile.lastName} onChange={handleInputChange} /> 
      </Typography>
      {/* Add other fields similarly */}
      
      <Grid container>
        <Grid xs={6} sm={6} md={6} lg={6} style={{ textAlign: 'center' }}>
          <Button
            component="a"
            size="md"
            sx={{
              mt: 5,
              mb: 5,
              backgroundColor: "#f05a22",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#c997d2",
              },
            }}
            onClick={handleSaveClick}
          >
            <Typography level="h2">Save</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};