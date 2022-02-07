import React from 'react'


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
mutation ($submission: String!, $submissionInfo: String!, $artistId: String!) {
  addSong(submission: $submission, submissionInfo: $submissionInfo, artistId: $artistId) {
    id
    submission
    submissionInfo
    artistId
  }
}

`;
export const LOGIN_MUTATION = gql`
mutation ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    artist_info
    artist_name
    email
  }
}

`;
export const UPDATE_PROFILE = gql`

mutation ($id: ID!, $email: String, $password: String, $artist_name: String, $artist_info: String, $spotify: String, $youtube: String, $apple: String, $soundcloud: String) {
  updateProfile(id: $id, email: $email, password: $password, artist_name: $artist_name, artist_info: $artist_info, spotify: $spotify, youtube: $youtube, apple: $apple, soundcloud: $soundcloud) {
    id
    email
    password
    artist_name
    artist_info
    apple
    spotify
    youtube
    soundcloud
  }
}
`
