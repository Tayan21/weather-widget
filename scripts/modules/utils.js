export const getCurrentDateTime = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Okt',
    'Nov',
    'Dec',
  ];
  
  const weekDays = [
    'Sun',
    'Mon',
    'Tue',
    'Wen',
    'Thu',
    'Fri',
    'Sat',
  ]

  const date = new Date();
  const dayOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayOfWeek = weekDays[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes(); 

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return { month, year, hours, minutes, dayOfMonth, dayOfWeek };
}