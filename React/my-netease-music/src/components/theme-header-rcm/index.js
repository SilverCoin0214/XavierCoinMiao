import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {HeaderWrapper} from './style'

const SceThemeHeaderRCM = function(props) {
    const {title, keywords = [] } = props

    return (
        <HeaderWrapper className="sprite_02">
        <div className="left">
            <div className="title">{ title }</div>
            <div className="keyword" >
                {
                    keywords.map((item,index) => {
                        return (
                            <div className="item" key={item} >
                                <a href="todo" >{item}</a>
                                <span className="divider" >|</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="right">
            <a href="todo">更多</a>
            <i className="icon sprite_02"></i>
        </div>
        </HeaderWrapper>
    )
}

SceThemeHeaderRCM.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

SceThemeHeaderRCM.defaultTypes = {
    keywords: []
}


export default memo(SceThemeHeaderRCM)
