import React, { memo } from "react";

import { SongsCoverWrapper } from "./style";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import { getCount, getSizeImage } from "@/utils/format-utils";

export default memo(function SceSongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="erji sprite_icon"></i>
              {getCount(info.playCount)}
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>

      <div className="cover-bottom">{info.name}</div>
      {HOT_RECOMMEND_LIMIT !== 8 && (
        <div className="cover-source text-nowrap">by {info.copywriter}</div>
      )}
    </SongsCoverWrapper>
  );
});
