console.log('scripts loaded');


var burger = document.getElementById('burger');
var mobileNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('closed-button');
var content = document.getElementById('content');
var moreInfoText = document.getElementById('more-info');
burger.addEventListener('click', function(){
  console.log('button clicked');
  mobileNav.style.width = '50%';
  mobileNav.style.transition = '.5s ease';
  content.style.opacity = '0.1';
});


closeBtn.addEventListener('click', function(){
  mobileNav.style.width = '0%';
  content.style.opacity = '1';
});
moreInfoText.addEventListener('mouseenter', function(){
  tooltip.style.opacity = '1';
  var x = event.screenX;
  var y = event.screenY;
  console.log(x);
  tooltip.style.top = y = 'px';
  tooltip.style.right = x = 'px';

});
moreInfoText.addEventListener('mouseleave', function(){
  tooltip.style.opacity = '0';
  cursor.style.shape = 'triangle';
});
