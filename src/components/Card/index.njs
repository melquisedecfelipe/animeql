import './styles.scss';

export default function Card({ anime }) {
  return (
    <div class="card">
      <aside>
        <img src={anime.coverImage.large} alt={anime.title.english}/>
      </aside>

      <section>
        <small>
          Publicado em: {anime.startDate.year}
        </small>

        <h3 title={anime.title.english}>{anime.title.english}</h3>
        <p title={anime.description}>{anime.description}</p>

        <span class="card__genres">
          {anime.genres.map(genre => <p>{genre}</p>)}
        </span>
      </section>
    </div>
  )
}