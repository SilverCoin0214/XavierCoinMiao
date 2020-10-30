import React, { memo } from "react";
import ProTypes from "prop-types";

import { HeaderWrapper } from "./style";

const SceThemeHeaderSmall = memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/abc">{more}</a>
    </HeaderWrapper>
  );
});

SceThemeHeaderSmall.defaultProps = {};

SceThemeHeaderSmall.ProTypes = {
  title: ProTypes.string.isRequired,
  more: ProTypes.string,
};

export default SceThemeHeaderSmall;
