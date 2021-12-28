import React from 'react';

import MainLanding from '../../components/MainLanding';
import Genres from '../../components/Genres';
import SearchMain from '../../components/SearchMain';

export default function Home() {
    return (
        <div>
            <MainLanding />
            <SearchMain />
            <Genres />
        </div>
    );
}
