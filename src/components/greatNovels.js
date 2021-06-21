import React, { useEffect, useState } from "react";
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
          <greatNovel
            key={novels.id}
            title={novels.title}
            authorId={novels.id}
          />
        ))}
            
        </div>
    )
}

export default GreatNovels;
