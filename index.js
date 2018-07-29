window.onload = function (){
  var box = document.getElementsByClassName("box")[0];
  var ulPic = document.getElementsByClassName("pic")[0];
  var ulBtn = box.getElementsByTagName("ul")[1];
  var img = box.getElementsByTagName("img")[0];
  var btn = document.getElementsByTagName("button");
  var allTimer = "";
  var timer = "";
  var count = 1;
  var boolen = false;
  ulPic.style.left = -520+"px";
  box.onmouseover = function(){
    btn[0].style.display = "block";
    btn[1].style.display = "block";
  }
  box.onmouseout = function(){
    btn[0].style.display = "none";
    btn[1].style.display = "none";
  }


  for (var i = 0;i<ulPic.childElementCount;++i){
    ulPic.children[i].onmouseover = function(){
      clearInterval(allTimer);
    }
    ulPic.children[i].onmouseout = function(){
      allTimerr();
    }
  }



  for (var i = 0;i<ulBtn.childElementCount;++i){
    ulBtn.children[i].onclick = function(){
      clearInterval(allTimer);
      allTimerr();
      clearInterval(timer);
      count = this.getAttribute("name");
      lightDot();
      var target = 520*this.getAttribute("name");
      var len = -ulPic.offsetLeft - target;
      timer = setInterval(function(){
        if(len == 0){
          clearInterval(timer);
          return false;
        }
        var speed = len>0?10:-10;
        ulPic.style.left = ulPic.offsetLeft+speed+"px";
        len -= speed;
        if(Math.abs(len)<Math.abs(speed)){
          ulPic.style.left = -target+"px";
        }
      },5);


    }
  }


  btn[0].onclick = function(){
    clearInterval(timer);
    clearInterval(allTimer);
    allTimerr();

    if(count == 0){
      ulPic.style.left = -520*5+"px";
      count = 5;
    }
    count--;
    lightDot();
    target = count*520;
    var len = -ulPic.offsetLeft - target;
    timer = setInterval(function(){
      if(len == 0){
        clearInterval(timer);
        return false;
      }
      var speed = len>0?10:-10;
      ulPic.style.left = ulPic.offsetLeft+speed+"px";
      len -= speed;
      if(Math.abs(len)<Math.abs(speed)){
        ulPic.style.left = -target+"px";
      }
    },5)
  }
  btn[1].onclick = function(){

    clearInterval(timer);
    clearInterval(allTimer);
    allTimerr();

    if(count == 6){
      ulPic.style.left = -520+"px";
      count = 1;
    }
      count++;

    lightDot();
    target = count*520;
    var len = -ulPic.offsetLeft - target;
    timer = setInterval(function(){
      if(len == 0){
        clearInterval(timer);
        return false;
      }
      var speed = len>0?10:-10;
      ulPic.style.left = ulPic.offsetLeft+speed+"px";
      len -= speed;
      if(Math.abs(len)<Math.abs(speed)){
        ulPic.style.left = -target+"px";
      }
    },5)
  }

  function lightDot(){
    for (var i = 0;i<ulBtn.childElementCount;++i){
      ulBtn.children[i].firstElementChild.className = "";
      }
      if(count == 6){
        ulBtn.children[0].firstElementChild.className = "current";
      }else if (count == 0) {
        ulBtn.children[4].firstElementChild.className = "current";
      }
      else{
        ulBtn.children[count-1].firstElementChild.className = "current";
      }

    }

    function allTimerr(){
      allTimer = setInterval(function(){
        count++;
        if(count == 6){
          count = 1;
        }else if (count==0) {
          count = 5;
        }
        lightDot();

        var target = 520*count;
        var len = -ulPic.offsetLeft - target;
        timer = setInterval(function(){
          if(len == 0){
            clearInterval(timer);
            return false;
          }
          var speed = len>0?10:-10;
          ulPic.style.left = ulPic.offsetLeft+speed+"px";
          len -= speed;
        },5);
      },3000);
    };

    allTimerr();


}
