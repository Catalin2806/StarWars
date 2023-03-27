import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
return (
    <div className='pa2'>
<input 
className="bg-light-yellow b--black ba pa3"
type="search"
 placeholder='Search people'
 onChange={searchChange}/>
</div>
)

};

export default SearchBox;