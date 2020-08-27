import React from 'react'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)   
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                {term}
            </div>

            <div className="searchPage__result">

            </div>
        </div>
    )
}

export default SearchPage;