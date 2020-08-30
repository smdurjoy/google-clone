import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons = false }) => {
    const [ input, setInput ] = useState('');
    const history = useHistory();
    const [{}, dispatch] = useStateValue();

    const onSearch = e => {
        e.preventDefault();
        console.log(input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }

    return (
        <div className="search">
            <form>
                <div className="search__input">
                    <SearchIcon className="search_inputIcon"/>
                    <input value={input} onChange={e => setInput(e.target.value)}/>
                    <MicIcon/>
                </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" variant="outlined" onClick={onSearch}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ): (
                <div className="search__buttons search__buttonsHide">
                    <Button type="submit" variant="outlined" onClick={onSearch}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )}
            </form>
        </div>
    )
}

export default Search
