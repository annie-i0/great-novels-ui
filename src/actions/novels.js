import axios from "axios";

const fetchNovels = async () => {
  
  const { data } = await axios.get(`http://localhost:1337/api/novels`); // eslint-disable-line no-undef

  return data;
};

export default fetchNovels