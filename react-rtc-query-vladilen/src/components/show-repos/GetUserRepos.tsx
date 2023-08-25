import { useEffect } from 'react';
import { useLazyGetUserReposQuery } from '../../store/github/gitHubApi';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import { IUserRepo } from '../../models/models';
import { Repo } from './Repo';

export const UserRepo = () => {
  const { targetUserName } = useAppSelector((state) => state.userReducer);

  const [fetchRepos, { isLoading, data, status }] = useLazyGetUserReposQuery();

  const dispatch = useAppDispatch();
  const { setDropdownUsers, setUserName } = userSlice.actions;

  useEffect(() => {
    if (targetUserName.length > 2) {
      fetchRepos(targetUserName);
      dispatch(setDropdownUsers(false));
      dispatch(setUserName(''));
    }
  }, [targetUserName]);

  if (data && data.length > 0) {
    return (
      <>
        {data.map((repo: IUserRepo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </>
    );
  }

  return <div></div>;
};
