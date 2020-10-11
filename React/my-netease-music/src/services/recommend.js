import request from "./request";

export function getTopbanners() {
  return request({
    url: "/banner",
  });
}
