import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_ARTIST = gql`
mutation addArtist($email: String!, $password: String!, $artistName: String!, $artistInfo: String!, $soundcloud: String, $youtube: String, $apple: String, $spotify: String) {
    addArtist(email: $email, password: $password, artist_name: $artistName, artist_info: $artistInfo, soundcloud: $soundcloud, Youtube: $youtube, apple: $apple, spotify: $spotify) {
      soundcloud
      youtube
      apple
      spotify
      artist_info
      artist_name
      email
      id
    }
  }
`;

export const ADD_SONG = gql`
    mutation addSong($bookData: BookInput!) {
        saveBook(bookData: $bookData) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;