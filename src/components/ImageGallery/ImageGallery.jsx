import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery_container}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard
            small={image.urls.small}
            description={image.description}
            regular={image.urls.regular}
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}
