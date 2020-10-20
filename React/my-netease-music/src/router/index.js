import React from "react";
import { Redirect } from "react-router-dom";

const SceDiscover = React.lazy(() => import("@/pages/discover"));
const SceMine = React.lazy(() => import("@/pages/mine"));
const SceFriend = React.lazy(() => import("@/pages/friend"));
const SceRecommend = React.lazy(() =>
  import("@/pages/discover/c-pages/recommend")
);
const SceRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));
const SceSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const SceDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const SceArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const SceAlbum = React.lazy(() => import("@/pages/discover/c-pages/album"));
const ScePlayer = React.lazy(() => import("@/pages/player"));

// import SceDiscover from "@/pages/discover";
// import SceMine from "@/pages/mine";
// import SceFriend from "@/pages/friend";
// import SceRecommend from "@/pages/discover/c-pages/recommend";
// import SceRanking from "@/pages/discover/c-pages/ranking";
// import SceSongs from "@/pages/discover/c-pages/songs";
// import SceDjradio from "@/pages/discover/c-pages/djradio";
// import SceArtist from "@/pages/discover/c-pages/artist";
// import SceAlbum from "@/pages/discover/c-pages/album";
// import ScePlayer from "@/pages/player";

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
      {
        path: "/discover/player",
        component: ScePlayer,
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
