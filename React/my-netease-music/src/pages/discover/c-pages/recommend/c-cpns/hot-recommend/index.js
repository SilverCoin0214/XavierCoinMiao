import React, { memo } from 'react'


import SceThemeHeaderRCM from '@/components/theme-header-rcm'
import {HotRecommendWrapper} from './style'

export default memo(function SceHotRecommend() {
    return (
        <HotRecommendWrapper>
        <SceThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚','民谣','电子']} />
        </HotRecommendWrapper>
    )
})
