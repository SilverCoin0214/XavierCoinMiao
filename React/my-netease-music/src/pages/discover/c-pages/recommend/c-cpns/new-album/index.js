import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getNewAlbumsAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import SceThemeHeaderRCM from "@/components/theme-header-rcm";
import { AlbumWrapper } from "./style";
import SceAlbumCover from "@/components/album-cover";

export default memo(function SceNewAlbum(props) {
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  const pageRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <SceThemeHeaderRCM title="新碟上架"> </SceThemeHeaderRCM>

      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <SceAlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp={"-570px"}
                      ></SceAlbumCover>
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});
