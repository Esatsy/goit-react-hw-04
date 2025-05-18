import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || 'Image'}
          className={css.image}
        />
        <div className={css.imageInfo}>
          <p className={css.author}>Author: {image.user.name}</p>
          <p className={css.likes}>Likes: {image.likes}</p>
          {image.description && (
            <p className={css.description}>{image.description}</p>
          )}
        </div>
        <button className={css.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
} 