import { useEffect } from 'react';
import { useLazyGetUserReposQuery } from '../store/github/gitHubApi';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';

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
        {data.map((repo) => {
          return (
            <a key={repo.id} href={repo.html_url} target="_blank">
              <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
                <h2 className="text-lg fond-bold">{repo.full_name}</h2>
                <p className="text-sm font-thin">{repo?.description}</p>
              </div>
            </a>
          );
        })}
      </>
    );
  }

  return <></>;
};
