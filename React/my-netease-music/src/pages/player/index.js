import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function ScePlayer() {
  return (
    <PlayerWrapper>
      <div className="content warp-v2">
        <PlayerLeft>
          <h2>ScePlayInfo</h2>
          <h2>SceSongContent</h2>
        </PlayerLeft>

        <PlayerRight>
          <h2>SceSimiPlayerlist</h2>
          <h2>SceSimiSongs</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
