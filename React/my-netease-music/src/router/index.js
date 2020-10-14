import React from "react";
import { Redirect } from "react-router-dom";

import SceDiscover from "@/pages/discover";
import SceMine from "@/pages/mine";
import SceFriend from "@/pages/friend";

import SceRecommend from "@/pages/discover/c-pages/recommend";
import SceRanking from "@/pages/discover/c-pages/ranking";
import SceSongs from "@/pages/discover/c-pages/songs";
import SceDjradio from "@/pages/discover/c-pages/djradio";
import SceArtist from "@/pages/discover/c-pages/artist";
import SceAlbum from "@/pages/discover/c-pages/album";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: "/discover",
    component: SceDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        component: SceRecommend,
      },
      {
        path: "/discover/toplist",
        component: SceRanking,
      },
      {
        path: "/discover/playlist",
        component: SceSongs,
      },
      {
        path: "/discover/djradio",
        component: SceDjradio,
      },
      {
        path: "/discover/artist",
        component: SceArtist,
      },
      {
        path: "/discover/album",
        component: SceAlbum,
      },
    ],
  },
  {
    path: "/mine",
    component: SceMine,
  },
  {
    path: "/friend",
    component: SceFriend,
  },
];

export default routes;
