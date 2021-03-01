import React, { Fragment } from 'react';

//Components
import Users from '../users/Users';
import Search from '../users/Search';

export const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);
