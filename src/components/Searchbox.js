import React from 'react';

const SearchBox = ({searchfield, searchChange}) => { 
    return (
        <div className='pd2'>
        <input type='search' className='pa3 ba b---green bg-lightest-blue' 
        placeholder='search robots' onChange={searchChange}></input> 

        </div>
    );
}

export default SearchBox;