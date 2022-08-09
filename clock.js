function startTime(){
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let mn = time.getMonth()+1;
    let y = time.getFullYear();
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    d=checkTime(d);
    mn=checkTime(mn);
    var hour=document.getElementById("hh");
    hour.innerText=h+":";
    // console.log(hour);
    var minute=document.getElementById("mm");
    minute.innerText=m+":";
    // console.log(minute);
    var second=document.getElementById("ss");
    second.innerText=s;
    // console.log(second);
    var day=document.getElementById("dd");
    day.innerText=d+":";
    // console.log(day);
    var month=document.getElementById("mnth");
    month.innerText=mn+":";
    // console.log(month);
    var year=document.getElementById("yy");
    year.innerText=y;
    // console.log(year);
    var session=document.getElementById("sesn");
    if(h==0){
    session.innerText="AM";
    }
    if(h>12){
    session.innerText="PM";}
   setTimeout(startTime, 1000);
   }
   function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  
    return i;
  }
  checkTime()
   startTime()