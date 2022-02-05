// import React from 'react'


import { gql } from '@apollo/client'

export const CREATE_ARTIST_MUTATION = gql`
mutation($email: String!, $password: String!, $artistName: String!, $artistInfo: String!, $spotify: String, $apple: String, $youtube: String, $soundcloud: String) {
  addArtist(email: $email, password: $password, artist_name: $artistName, artist_info: $artistInfo, spotify: $spotify, apple: $apple, Youtube: $youtube, soundcloud: $soundcloud) {
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
`;
export const CREATE_SONG_MUTATION = gql`
mutation ($email: String!, $submission: String!, $submissionInfo: String!, $votes: Int!) {
  addSong(email: $email, submission: $submission, submissionInfo: $submissionInfo, votes: $votes) {
    id
    submission
    submissionInfo
    votes
  }
}

`;

