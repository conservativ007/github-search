import { useEffect } from 'react';
import { useSearchUsersQuery } from '../store/github/gitHubApi';
import { useDebounce } from '../hooks/debounce';
import { UserRepo } from '../components/show-repos/GetUserRepos';
import { Users } from '../components/show-users/Users';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';
import { SearchInput } from '../components/search-user/SearchInput';
import { CustomError } from '../components/custom-error/CustomError';

export const HomePage = () => {
  const { userName, targetUserName, dropdownUsers } = useAppSelector(
    (state) => state.userReducer
  );

  const dispatch = useAppDispatch();
  const { setDropdownUsers } = userSlice.actions;

  const debounce = useDebounce(userName);

  const { isLoading, isError, data } = useSearchUsersQuery(debounce, {
    skip: debounce.length < 3,
    refetchOnFocus: true,
  });
  const searchData = { isLoading, isError, data };

  useEffect(() => {
    if (debounce.length < 3) {
      dispatch(setDropdownUsers(false));
      return;
    }
    dispatch(setDropdownUsers(true));
  }, [debounce]);

  return (
    <div className="max-w-[560px] mx-auto flex justify-center p-5">
      {isError && <CustomError />}
      <div className="w-full">
        <SearchInput />
        {dropdownUsers && <Users searchData={searchData} />}
        {targetUserName && <UserRepo />}
      </div>
    </div>
  );
};
