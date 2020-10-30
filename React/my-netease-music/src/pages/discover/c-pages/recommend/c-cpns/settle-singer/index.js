import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { SetterSongerWrapper } from "./style";
import { getArtistListAction } from "../../store/actionCreators";
import { signedSinger } from "@/services/local-data";

import SceThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function SceSettleSinger() {
  // //   redux;
  // const dispatch = useDispatch();

  // // hooks
  // useEffect(() => {
  //   dispatch(getArtistListAction);
  // }, [dispatch]);

  return (
    <SetterSongerWrapper>
      <SceThemeHeaderSmall title="入驻歌手" more="查看全部 >" />
      {signedSinger.map((item, index) => {
        return (
          <div className="singer-list" key={item.picUrl}>
            <a href="/singer" className="item">
              <img src={item.picUrl} alt="" />
              <div className="info">
                <p className="title">{item.title}</p>
                <p className="name">{item.name}</p>
              </div>
            </a>
          </div>
        );
      })}
      {" "}
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  );
});
