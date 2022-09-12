/* ------------------------------------------
 * IT书包
 * 网址：www.itshubao.com
 * 整理：yinq<3331653644@qq.com> 
 -------------------------------------------- */
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  animationData: JSON.parse(animationData)
});
