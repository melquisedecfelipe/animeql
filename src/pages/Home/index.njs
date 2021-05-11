import Nullstack from 'nullstack';

import axios from 'axios';

import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Scroll from '../../components/Scroll';

import query from '../../utils/graphQuery'

import './styles.scss';

class Home extends Nullstack {
  currentPage = 1;
  hasNextPage = false;
  list = [];
  loading = false;

  prepare({ page }) {
    page.title = 'AnimeQL';
  }

  async initiate() {
    this.loading = true;

    const { data } = await axios.post('https://graphql.anilist.co/', {
      query,
      variables: {
        page: this.currentPage
      }
    });

    const { pageInfo, media } = data.data.Page;

    this.currentPage = pageInfo.currentPage + 1;
    this.hasNextPage = pageInfo.hasNextPage;
    this.list.push(...media);
    this.loading = false;
  }

  renderCardList() {
    if(!this.hasNextPage) return;
    return (
      <>
        <section class="home__content">
          {this.list.map(anime => (
            <Card anime={anime} />
          ))}
        </section>

        {!this.loading ? (
          <section class="home__action">
            <button onclick={this.initiate}>Mostrar mais</button>
          </section>
        ) : (
          <Loading />
        )}
      </>
    )
  }

  render() {
    return (
      <main>
        <section class="home__header">
          <h2><span>Anime</span>QL</h2>
          <p>This APP use <a href="https://nullstack.app/" target="_blank" rel="noopener noreferrer">nullstack </a> to request <a href="https://anilist.co/" target="_blank" rel="noopener noreferrer">anilist</a>.</p>
        </section>

        <Scroll />

        <CardList />
      </main>
    )
  }

}

export default Home;
