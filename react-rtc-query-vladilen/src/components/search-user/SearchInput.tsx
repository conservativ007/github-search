import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';

export const SearchInput = () => {
  const { userName } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();
  const { setUserName } = userSlice.actions;

  return (
    <input
      type="text"
      className="border py-2 px-4 w-full h-[42px] mb-2"
      placeholder="search github username"
      value={userName}
      onChange={(e) => dispatch(setUserName(e.target.value))}
    />
  );
};
