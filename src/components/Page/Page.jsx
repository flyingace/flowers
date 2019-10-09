import React, { useEffect, useRef } from 'react';
import SimpleBarReact from 'simplebar-react';
import { useLocation } from 'react-router';
import { Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import PoemContainer from '../../_containers/PoemContainer';
import TableOfContents from '../TableOfContents/TableOfContents';
import PoemFormContainer from '../../_containers/PoemFormContainer';
import { About } from '../About/About';
import 'simplebar/dist/simplebar.min.css';
import './Page.scss';

/* Page */
export const Page = () => {
  const location = useLocation();
  const pageRef = useRef(null);

  //FIXME: Is there a better way to accomplish this?
  useEffect(() => {
    const container = pageRef.current.querySelector(
      '.simplebar-content-wrapper'
    );
    container.scrollTo({ top: 0 });
  }, [location]);

  return (
    <div className="page" ref={pageRef}>
      <SimpleBarReact style={{ height: '100%' }}>
        <Route
          path={ROUTES.POEM}
          render={(match) => <PoemContainer {...match} />}
        />
        <Route path={ROUTES.TOC} render={() => <TableOfContents />} />
        <Route path={ROUTES.ABOUT} render={() => <About />} />
        {process.env.NODE_ENV !== 'production' && (
          <Route path={ROUTES.POEMFORM} render={() => <PoemFormContainer />} />
        )}
        <Route
          path={ROUTES.POEMEDIT}
          render={() => <PoemFormContainer edit />}
        />
      </SimpleBarReact>
    </div>
  );
};

Page.propTypes = {};

Page.defaultProps = {};
/* */
