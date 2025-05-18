import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.buttonContainer}>
      <button type="button" className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
} 