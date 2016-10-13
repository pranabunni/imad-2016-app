console.log('Loaded!');
var img=document.getElementById('maddi');
var marginleft=0;
function mright()
{
    marginleft=marginleft+10;
  img.style.margiLeft=marginleft+'px';  
}
img.onClick=function()
{
  var interval=setInterval(mright,100);
};
