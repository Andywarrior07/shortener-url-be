export const todayToString = () => {
  const today = new Date();
  const todayString = today.toLocaleDateString('es-cl', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
  const [date, time] = todayString.split(', ');
  const [day, month, year] = date.split('-');

  return `${year}-${month}-${day}T${time}.000Z`;
};
