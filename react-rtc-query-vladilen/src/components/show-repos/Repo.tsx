import { useState } from 'react';
import { IUserRepo } from '../../models/models';
import { githubSlice } from '../../store/github/github.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const Repo = ({ repo }: { repo: IUserRepo }) => {
  const { favourites } = useAppSelector((state) => state.githubReducer);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const { addFavourites, removeFavourites } = githubSlice.actions;
  const dispatch = useAppDispatch();

  const addFav = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(addFavourites(repo.html_url));
    setIsFav(true);
  };

  const rmFav = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(removeFavourites(repo.html_url));
    setIsFav(false);
  };

  return (
    <a key={repo.id} href={repo.html_url} target="_blank">
      <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <h2 className="text-lg fond-bold">{repo.full_name}</h2>
        <p className="text-sm font-thin">{repo?.description}</p>
        {isFav === true ? (
          <button
            onClick={rmFav}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
          >
            remove
          </button>
        ) : (
          <button
            onClick={addFav}
            className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
          >
            add
          </button>
        )}
      </div>
    </a>
  );
};
