import moment from 'moment';

export const convertDate = (date: string): string => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;

  const now = new Date();
  const then = new Date(date);

  // @ts-ignore
  const msToNow = now - then;

  if (msToNow / week >= 1)
    return moment(date).format('DD.MM.YYYY');
  else if (msToNow / day >= 1)
    return moment(date).format('ddd');
  else if (msToNow / hour >= 1)
    return moment(date).format('HH[:]MM');
  else
    return moment(date).format('HH[:]MM');
};

export const convertMessageDate = (date: string): string => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  const now = new Date();
  const then = new Date(date);

  // @ts-ignore
  const msToNow = now - then;

  if (msToNow / year >= 1)
    return moment(date).format('yy');
  else if (msToNow / month >= 1)
    return moment(date).format('MMM yy');
  else if (msToNow / week >= 1)
    return moment(date).format('ddd DD MMM');
  else if (msToNow / day >= 1)
    return moment(date).format('ddd');
  else if (msToNow / hour >= 1)
    return moment(date).format('HH[:]MM');
  else
    return moment(date).format('HH[:]MM');
};