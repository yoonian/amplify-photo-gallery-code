export const ListAlbums = `query ListAlbums {
  listAlbums(limit: 9999) {
      items {
          id
          name
      }
  }
}`;

export const SubscribeToNewAlbums = `
subscription OnCreateAlbum {
  onCreateAlbum {
    id
    name
  }
}
`;


export const GetAlbum = `query GetAlbum($id: ID!, $nextTokenForPhotos: String) {
  getAlbum(id: $id) {
    id
    name
    photos(sortDirection: DESC, nextToken: $nextTokenForPhotos) {
      nextToken
      items {
        thumbnail {
          width
          height
          key
        }
      }
    }
  }
}`;