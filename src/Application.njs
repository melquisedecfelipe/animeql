import Nullstack from 'nullstack';

import Home from './pages/Home'

import './global.scss'

class Application extends Nullstack {
  renderHead() {
    return (
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <>
        <Head />
        <Home route="/" />
      </>
    )
  }
}

export default Application;
