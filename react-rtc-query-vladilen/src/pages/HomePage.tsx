import { useEffect } from 'react';
import { useSearchUsersQuery } from '../store/github/gitHubApi';
import { useDebounce } from '../hooks/debounce';
import { UserRepo } from '../components/UserRepo';
import { Users } from '../components/Users';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { userSlice } from '../store/reducers/UserSlice';
import { SearchInput } from '../components/SearchInput';
import { CustomError } from '../components/CustomError';

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
    <div className="flex justify-center pt-10 h-screen w-screen">
      {isError && <CustomError />}
      <div className="relative w-[560px] pl-5 pr-5 overflow-y-auto">
        <SearchInput />
        {dropdownUsers && <Users searchData={searchData} />}
        {targetUserName && <UserRepo />}
      </div>
    </div>
  );
};
