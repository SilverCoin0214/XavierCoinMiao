import React, { memo } from "react";

import SceHotAlbum from "./c-cpns/hot-album";
import SceTopAlbum from "./c-cpns/top-album";
import { AblumWrapper } from "./style";

export default memo(function SceAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <SceHotAlbum />
      <SceTopAlbum />
    </AblumWrapper>
  );
});
