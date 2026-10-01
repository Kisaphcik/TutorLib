// utils/Times.js

export function getCurrentTime() {
  return new Date();  
}

export function getSpecificDate() {
  const date = getCurrentTime();
  return date.toLocaleDateString('en-US', {
    weekday: 'long', 
    month: 'long',
    day: 'numeric'
  });
}

export function isMorning() {
    return new Date().getHours() >= 5 && new Date().getHours() < 12;
}

export function isAfternoon() {
    return new Date().getHours() >= 12 && new Date().getHours() < 17;
}

export function isEvening() {
    return new Date().getHours() >= 17 && new Date().getHours() < 22;
}

export function isNight() {
  const hours = new Date().getHours();
  return hours >= 22 || hours < 5;
}
