import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import { useLocation } from 'react-router';
import 'simplebar/dist/simplebar.min.css';
import './Page.scss';

/* Page */
const Page = (props) => {
  const { children } = props;
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const pageRef = useRef(null);

  //FIXME: Is there a better way to accomplish this?
  useEffect(() => {
    const container = pageRef.current.querySelector(
      '.simplebar-content-wrapper'
    );
    container.scrollTo({ top: 0 });
  }, [location]);

  useEffect(() => {
    setActiveSection(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <div className={`page ${activeSection}`} ref={pageRef}>
      <SimpleBarReact style={{ height: '100%' }}>{children}</SimpleBarReact>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
};

Page.defaultProps = {
  children: [],
};

export default Page;
/* */
