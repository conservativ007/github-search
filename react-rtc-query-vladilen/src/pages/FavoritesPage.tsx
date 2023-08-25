import { useAppSelector } from '../hooks/redux';

export const FavoritesPage = () => {
  const { favourites } = useAppSelector((state) => state.githubReducer);

  if (favourites.length === 0) {
    return (
      <h2 className="text-center font-bold text-2xl mt-5">
        favourites not found
      </h2>
    );
  }

  return (
    <div className="mx-auto max-w-[560px] p-5">
      {favourites.map((fav) => (
        <a key={fav} href={fav} target="_blank">
          <p className="w-full border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            {fav}
          </p>
        </a>
      ))}
    </div>
  );
};
