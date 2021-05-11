import './styles.scss';

function handleTop() {
  window.scrollTo(0, 0);
};

function handleBottom() {
  window.scrollTo(0, document.body.scrollHeight);
};

export default function Scroll() {
  return (
    <>
      <button class="top" onclick={handleTop}>
        <img src="/arrow-up.png" alt="Top"/>
      </button>

      <button class="bottom" onclick={handleBottom}>
        <img src="/arrow-up.png" alt="Bottom"/>
      </button>
    </>
  )
}
