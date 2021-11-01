import React, {useState, useContext} from 'react';
import NytimesContext from '../../context/nytimes/nytimesContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const nytimesContext = useContext(NytimesContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Make a period selection', 'dark');
        } else {
            nytimesContext.searchArticles(text);
            setText('');
        }
    };

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">

                <label>Period Selection </label>
                <select name="text" onChange={onChange}>
                    <option value="">Select Period</option>
                    <option value="1">1</option>
                    <option value="7">7</option>
                    <option value="30">30</option>

                </select>

                <input
                    type="submit"
                    value="Show Articles"
                    className="btn btn-dark btn-block"
                />
            </form>
            {nytimesContext.articles.length > 0 && (
                <button
                    className="btn btn-primary btn-block"
                    onClick={nytimesContext.clearArticles}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
