//used to filter column values

import React from 'react';
//import FilterValues from './FilterValues';

export const ColumnFilter = ({ column }) => {
        const { filterValue, setFilter} = column;
    return(
        
            <input value = {filterValue || ''} onChange = {(e) => setFilter(e.target.value)} />
        
    );
}