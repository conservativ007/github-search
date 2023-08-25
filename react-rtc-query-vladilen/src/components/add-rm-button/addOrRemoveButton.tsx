import { localFavorites } from '../helpers/localFavorites';

export const addOrRemoveButton = (bool: boolean) => {
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    repoFullName: string,
    repoId: number
  ) => {
    event.preventDefault();
    // console.log(repoFullName);
    // console.log(repoId);

    localFavorites.add(repoFullName, repoId);
  };

  // if (bool === true) {
  //   return (
  //     <button
  //       onClick={(e) => handleClick(e, repo.full_name, repo.id)}
  //       className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
  //     >
  //       add
  //     </button>
  //   );
  // }

  // return (
  //   <button
  //     onClick={(e) => handleClick(e, repo.full_name, repo.id)}
  //     className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 border-blue-700 hover:border-blue-500 rounded"
  //   >
  //     remove
  //   </button>
  // );

  return <div></div>;
};
