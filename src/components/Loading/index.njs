import Nullstack from 'nullstack';

import './styles.scss';

class Loading extends Nullstack {
  render() {
    return (
      <div class="loading">
        <img src="/loader.png" alt="Loading"/>
      </div>
    )
  }
}

export default Loading;
