import PropTypes from "prop-types";
import classNames from "classnames";
import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(
  (
    { src, alt, clasName, fallback: customFallback = images.noImage, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, clasName)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  clasName: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
