//Apis
import React, { useContext } from 'react';

//Components
import { UserItem } from './UserItem';
import Spinner from '../layout/Spinner';

//Context
import GithubContext from '../../Context/Github/GithubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
