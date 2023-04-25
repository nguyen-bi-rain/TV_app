import React from 'react'
import s from './style.module.css'
import { TVShowListItem } from '../TVShowListItem/TVShowListItem'
export const TVShowList = ({ tvShowList,onClickItem }) => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                You'll probably like:
            </div>
            <div className={s.list}>
                {
                    tvShowList.map((tvshow) => {
                        return (
                            <span key={tvshow.id} className={s.tv_show_item}>
                                <TVShowListItem
                                    tvShow={tvshow}
                                    onClick={onClickItem}
                                />
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}
