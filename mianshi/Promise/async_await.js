// https://mp.weixin.qq.com/s/em663Ctl7UxYwPWkm-hR2g

/***
 * 实现 async/await
 */

const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve('data'), 1000))

async function test() {
  const data = await getData()
  console.log(`data; ${data}`)
  const data2 = await getData()
  console.log(`data2: ${data2}`)
  return 'success'
}

test().then((res) => console.log(res))
