import React from "react";
import { Grid } from "@material-ui/core";
import profilePic from "./profilepic.jpg";
import Skills from "./Skills";
import styled from "styled-components";

const ImageContainer = styled("div")`
  border: 3px solid #000;
`;

const Profile = () => (
  <Grid container direction="column" spacing={32}>
    <Grid item>
      <ImageContainer>
        <img src={profilePic} alt="Profile Pic" />
      </ImageContainer>
    </Grid>
    <Grid item>{"Name"}</Grid>
    <Grid item>{"Summary"}</Grid>
    <Grid item>{"Contact Details"}</Grid>
    <Grid item>{Skills}</Grid>
    <Grid item>{"Soft Skills Proficiency"}</Grid>
    <Grid item>{"Experience"}</Grid>
    <Grid item>{"Interests"}</Grid>
    <Grid item>{"Training"}</Grid>
  </Grid>
);

export default Profile;
