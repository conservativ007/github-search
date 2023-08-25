export const localFavorites = {
  /**
   * Добавляет элемент в избранное.
   * @param favName - Имя избранного элемента.
   * @param favId - Идентификатор избранного элемента.
   */

  add: (favName: string, favId: number): void => {
    localStorage.setItem(String(favId), favName);
  },

  /**
   * Удаляет элемент из избранного.
   * @param favId - Идентификатор избранного элемента.
   */
  remove: (favId: number): void => {
    console.log(favId);
    localStorage.removeItem(String(favId));
  },

  /**
   * Проверяет наличие элемента.
   * @param favId - Идентификатор избранного элемента.
   */
  isHasElement: (favId: number): boolean => {
    let elem = localStorage.getItem(String(favId));
    if (elem === null) return false;
    return true;
  },
};
