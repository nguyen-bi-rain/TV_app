import s from './style.module.css'
import { TVShowAPI } from './api/tv-show'
import { useState, useEffect } from 'react'
import { BACKDROP_BASE_URL } from './config'
import TVShowDetail from './components/TVShowDetail/TVShowDetail'
import { Logo } from './components/Logo/Logo'
import logoIMG from './assets/images/logo.png'
import { TVShowList } from './components/TVShowList/TVShowList'
import { SearchBar } from './components/Searchbar/SearchBar'
TVShowAPI.fetchPopulars();

export function App() {
    const [recommendationsList,setRecommendationsList] = useState([]);
    const [currentTVShow, setCurrentTVShow] = useState();
    async function fetchPopulars() {
        const popularTVShowList = await TVShowAPI.fetchPopulars();
        if (popularTVShowList.length > 0) {
            setCurrentTVShow(popularTVShowList[0])
        }
    }
    async function fetchRecommendations(tvShowId) {
        const recommendationListResp = await TVShowAPI.fetchRecommendations(tvShowId);
        if (recommendationListResp.length > 0) {
            setRecommendationsList(recommendationListResp.slice(0,10));
        }
    }
    async function fetchByTitle(title) {
        const searchRespone = await TVShowAPI.fetchByTitle(title);
        if (searchRespone.length > 0) {
            setCurrentTVShow(searchRespone[0]);
        }
    }
    useEffect(() => {
        fetchPopulars();
    }, []);

    useEffect(() => {
        if(currentTVShow){
            fetchRecommendations(currentTVShow.id);
        }
    }, [currentTVShow]);

    function updateCurrentTVShow(tvShow) {
        setCurrentTVShow(tvShow);
    }

    return <div className={s.main_container} style={{
        background: currentTVShow
            ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : "black",
    }}>
        <div className={s.header}>
            <div className="row">
                <div className='col-4'>
                    <Logo img={logoIMG} title="Watowatch" subtitle="Find a show you may like" />
                </div>

                <div className="col-md-12 col-lg-4">
                    <SearchBar onSubmit={fetchByTitle}/>
                </div>
            </div>
        </div>


        <div className={s.tv_show_detail}>
            {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className={s.recommended_tv_shows}>
            {currentTVShow && <TVShowList onClickItem={updateCurrentTVShow} tvShowList= {recommendationsList}/>}
        </div>
    </div>
}