import React from "react";

import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
  query AllData {
  users {
    artists {
      artist_name
      artist_info
      spotify
      apple
      youtube
      soundcloud
    }
    songs {
      id
      submission
      submissionInfo
      artistId
    }
  }
}


`;
export const GET_USER = gql`
  query ($id: ID!) {
  user(id: $id) {
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
export const USER_SONGS = gql`

query($artistId: String!) {
  songs(artistId: $artistId) {
    id
    submission
    submissionInfo
    artistId
  }
}
`;
export const DEL_SONG = gql`

query($deleteSongId: ID!) {
  deleteSong(id: $deleteSongId) {
    submission
    submissionInfo
    artistId
    id
  }
}

`;