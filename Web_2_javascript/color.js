function shift_nightDay(self){
  var search = document.querySelector('body');
  var transfer = document.querySelector(self);
  if (search.style.backgroundColor === 'black'){
    transfer.value = 'day';
  }
  else{
    transfer.value = 'night';
  }
}
// 밑은 객체 생성 및 함수 지정법이 있다.
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  }, //객체는 생성시 구분용으로 ','가 필요하다
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length){
      alist[i].style.color = color;
      i += 1;
    }
  },
}

// 객체 활용과 함수 활용
function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value === 'night'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Links.setColor('yellow');
    self.value ='day';
  }
  else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Links.setColor('blue');
    self.value ='night';
  }
}
