import { useRef } from "react";
import styles from "./Gallery.module.css";
import { Button, SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsArrowRightShort,
  BsArrowLeftShort,
  BsInstagram,
} from "react-icons/bs";

const Gallery = () => {
  const scrollRef = useRef(null);
  const imageGallery = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery05,
  ];
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction == "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className={` ${styles.app__gallery}`}>
      <div className={styles.app__gallery_instagram}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className={`p__opensans ${styles.p__open}`}
          style={{ marginBottom: "2rem", color: "#545454" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <Button text="View More" />
      </div>
      <div className={styles.app__gallery_instagram_gallery}>
        <div
          className={` ${styles.app__gallery_instagram_photos_container}`}
          ref={scrollRef}
        >
          {imageGallery.map((image, index) => (
            <div
              className={`${styles.app__gallery_instagram_images_card}`}
              key={`${image}-card`}
              id={index + 1}
            >
              <img src={image} alt="gallery" />
              <div className={styles.overlay}>
                <BsInstagram
                  className={styles.gallery__image}
                  // color="grey"
                  size="50px"
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.app__gallery_instagram_photos_btn}>
          <BsArrowLeftShort
            className={styles.gallery__arrow_icons}
            onClick={() => scroll("left")}
            // color="grey"
            size="100px"
          />
          <BsArrowRightShort
            // color="red"
            size="100px"
            className={styles.gallery__arrow_icons}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
