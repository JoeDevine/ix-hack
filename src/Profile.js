import React from "react";
import { Grid, Typography } from "@material-ui/core";
import profilePic from "./profilepic.jpg";
import Skills from "./Skills";
import styled from "styled-components";
import "./profile.css";

const ImageContainer = styled("div")`
  padding: 5rem;
  background: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`;

const Profile = () => (
  <>
    <Grid container direction="column" spacing={32}>
      <Grid item>
        <ImageContainer>
          <img src={profilePic} alt="Profile Pic" />
        </ImageContainer>
      </Grid>
      <Grid item>{"Name"}</Grid>
      <Grid item>{"Summary"}</Grid>
      <Grid item>{"Contact Details"}</Grid>
      <Grid item>{"Hard Skills Proficiency"}</Grid>
      <Grid item>{"Soft Skills Proficiency"}</Grid>
      <Grid item>{"Experience"}</Grid>
      <Grid item>{"Interests"}</Grid>
      <Grid item>{"Training"}</Grid>
    </Grid>

    {Skills}
  </>
);

export default Profile;
