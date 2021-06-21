import fetchNovels from "../actions/novels";

export const filterNovels = (list, term) => {
  return list.filter((novels) =>
    novels.title.toLowerCase().includes(term.toLowerCase())
  );
};

export const allNovels = async () => {

  const novels = await fetchNovels();

  return novels;
};

