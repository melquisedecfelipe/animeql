const graphQuery = `
query ($season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int, $genre: String, $format: MediaFormat) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      currentPage
      hasNextPage
    }
    media(season: $season, seasonYear: $seasonYear, type: ANIME, sort: POPULARITY_DESC, isAdult: false, genre: $genre, format: $format) {
      startDate {
        year
      }
      id
      genres
      title {
        english
      }
      description
      coverImage {
        large
      }
    }
  }
}
`;

export default graphQuery;
