import React, {Fragment} from 'react';

import Article from '../articles/Articles';
import Search from '../articles/Search';


const Home = () => (
    <Fragment>
        <Search/>
        <Article/>
    </Fragment>
);

export default Home;
