import React, { memo } from "react";
import { HotRadioWrapper } from "./style";

import { hotRadios } from "@/services/local-data";

import SceThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function SceHotRadio() {
  return (
    <HotRadioWrapper>
      <SceThemeHeaderSmall title="热门主播" />
      {hotRadios.map((item, index) => {
        return (
          <div className="radio-list" key={item.picUrl}>
            <div className="item">
              <a href="/abc" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          </div>
        );
      })}
    </HotRadioWrapper>
  );
});
