import React from 'react';
import {Link} from "gatsby";

const SmoothScrollLink = ({ targetId, children }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return <Link to={`#${targetId}`} onClick={handleScroll}>{children}</Link>;
};

export default SmoothScrollLink;