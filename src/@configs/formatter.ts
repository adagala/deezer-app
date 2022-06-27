export const getYear = (props: { date: string }) => {
  return new Date(props.date).getFullYear().toString();
};

export const getDuration = (props: { seconds: number }) => {
  const minutes = Math.floor(props.seconds / 60);
  const secondRemaining = props.seconds - minutes * 60;
  const seconds =
    secondRemaining < 10 ? `0${secondRemaining}` : secondRemaining;
  return `${minutes}:${seconds}`;
};
