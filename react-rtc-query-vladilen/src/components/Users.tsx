import { useAppDispatch } from '../hooks/redux';
import { IGithubUser } from '../models/models';
import { userSlice } from '../store/reducers/UserSlice';

interface ISearchData {
  isLoading: boolean;
  isError: boolean;
  data?: IGithubUser[];
}

export const Users = ({ searchData }: { searchData: ISearchData }) => {
  const dispatch = useAppDispatch();
  const { setTargetUserName } = userSlice.actions;

  const clickHandler = (userName: string) => {
    dispatch(setTargetUserName(userName));
  };

  return (
    <ul className="list-none absolute top-[42px] left-5 right-5 max-h-[200px] shadow-md bg-white overflow-y-scroll">
      {searchData.isLoading && <p className="text-center">Loading...</p>}
      {searchData.data?.map((user) => {
        return (
          <li
            key={user.id}
            onClick={() => clickHandler(user.login)}
            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            {user.login}
          </li>
        );
      })}
    </ul>
  );
};
