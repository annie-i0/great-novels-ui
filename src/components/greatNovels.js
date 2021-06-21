import React, { useEffect, useState } from "react";
import GreatNovel from './GreatNovel'
import {
  filterNovels,
  allNovels,
} from "../utils/novels";


const GreatNovels = () => {
   const [searchTerm, setSearchTerm] = useState('')
   const [allNovelsList, setAllNovelsList] = useState([]);
    const [filteredNovelsList, setFilteredNovelsList] = useState([]);

    useEffect(() => {
        async function pullData() {
          const novels = await allNovels();
          setAllNovelsList(novels);
          setFilteredNovelsList(novels);
        }
        pullData();
      }, []); 
    
      useEffect(() => {
        const filtered = filterNovels(allNovelsList, searchTerm);
        console.log(filtered)
        setFilteredNovelsList(filtered);
      }, [searchTerm]); 
    return(
        <div className='title'>
            <h2 className= 'title-name'> Great Novels</h2>
            <input type="text" value={searchTerm} name="search" onChange= {(event) => setSearchTerm(event.target.value)}/>
            {filteredNovelsList.map((novels) => (
          <GreatNovel
            key={novels.id}
            title={novels.title}
            author={ `${novels.author.nameFirst} ${novels.author.nameLast}`}
          />
        ))}
            
        </div>
    )
}

export default GreatNovels;
