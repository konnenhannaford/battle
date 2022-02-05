import React from "react";

import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
  query AllData {
  users {
    songs {
      id
      submission
      submissionInfo
      votes
    }
    artists {
      artist_name
      artist_info
      spotify
      apple
      youtube
      soundcloud
    }
  }
}

`;
export const DEL_USERS = gql`
  query ($email: String!) {
  user(email: $email) {
    artist {
      id
      email
      password
      artist_name
      artist_info
      spotify
      apple
      youtube
      soundcloud
    }
  }
}

`;
