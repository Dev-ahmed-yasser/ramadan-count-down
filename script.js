(function(){

  const desiredDate = "feb 28 2025"
  const ramadanDate = new Date(desiredDate)
  const currentDate = new Date();
  const totalSeconds = (ramadanDate - currentDate) / 1000;
  
  const days  = Math.floor(totalSeconds / (60 * 60) / 24);
  const hours = Math.floor(totalSeconds / (60 * 60) % 24);
  const minutes = Math.floor(totalSeconds / 60 % 60)
  const secs = Math.floor(totalSeconds % 3600 % 60)

  const setDays = document.getElementById("days");
  const setHours = document.getElementById("hours");
  const setMins = document.getElementById("minutes");
  const setSecs = document.getElementById("seconds");
  setDays.innerText = formateDate(days)
  setHours.innerText = formateDate(hours)
  setMins.innerText = formateDate(minutes)
  setSecs.innerText =formateDate(secs)

  
  function setDate(){
    const currentDate = new Date();
    const totalSeconds = (ramadanDate - currentDate) / 1000;
    const days  = Math.floor(totalSeconds / (60 * 60) / 24);
    const hours = Math.floor(totalSeconds / (60 * 60) % 24);
    const minutes = Math.floor(totalSeconds / 60 % 60)
    const secs = Math.floor(totalSeconds % 3600 % 60)

    const arr = [setDays,setHours,setMins,setSecs]
    const times = [days,hours,minutes,secs]

    for(let i=0; i < arr.length; i++){
      if(!Object.is(Number(arr[i].innerText),times[i])){
        arr[i].innerText = formateDate(times[i])
        arr[i].style.cssText = "  animation: 1s 3s ease-in-out infinite pulse reverse;"
      }else{
        arr[i].style.cssText = "animation:none"
      }
    }
  }
  setDate()
  setInterval(setDate,1000)

  function formateDate(time){
    return time < 10 ? `0${time}` : time;
  }


})()
