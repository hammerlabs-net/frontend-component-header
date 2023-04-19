import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Logo = ({ src, alt, ...attributes }) => (
  <img src={src} alt={alt} {...attributes} />
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const LinkedLogo = ({
  href,
  src,
  alt,
  type,
  ...attributes
}) => {
  if (type === 'link') {
    return (
      <Link to={href} {...attributes}>
        <img className="d-block" src={src} alt={alt} />
      </Link>
    );
  }

  return (
    <a href={href} {...attributes}>
      <img className="d-block" src={src} alt={alt} />
    </a>
  );
};

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export { LinkedLogo, Logo };
export default Logo;
