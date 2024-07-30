function getCurrentFormattedDate() {
    const date = new Date();

    
    const pad = (num, size) => num.toString().padStart(size, '0');

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1, 2);
    const day = pad(date.getDate(), 2);

    const hours = pad(date.getHours(), 2);
    const minutes = pad(date.getMinutes(), 2);
    const seconds = pad(date.getSeconds(), 2);
    const milliseconds = pad(date.getMilliseconds(), 3);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function getCurrentRoundedDate() {
  const date = new Date();

  
  date.setSeconds(date.getSeconds() + Math.round(date.getMilliseconds() / 1000));
  date.setMilliseconds(0);

  
  const pad = (num, size) => num.toString().padStart(size, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1, 2);
  const day = pad(date.getDate(), 2);

  const hours = pad(date.getHours(), 2);
  const minutes = pad(date.getMinutes(), 2);

  return `${year}-${month}-${day} ${hours}:${minutes}:00`;
}

console.log(getCurrentRoundedDate());



console.log(getCurrentFormattedDate());

