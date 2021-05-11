import './styles.scss';

function handleTop() {
  window.scrollTo(0, 0);
};

export default function Top() {
  return (
    <button class="top" onclick={handleTop}>
      <img src="/arrow-up.png" alt="Top"/>
    </button>
  )
}