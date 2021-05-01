import Nullstack from 'nullstack';

import './styles.scss';

class Top extends Nullstack {
  handleTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <button class="top" onclick={() => this.handleTop()}>
        <img src="/arrow-up.png" alt="Top"/>
      </button>
    )
  }
}

export default Top;
