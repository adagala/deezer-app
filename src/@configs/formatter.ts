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

export const getFans = (props: { fans: number }) => {
  return Math.abs(props.fans) > 999999
    ? Math.sign(props.fans) * +(Math.abs(props.fans) / 1000000).toFixed(1) + "M"
    : Math.abs(props.fans) > 999
    ? Math.sign(props.fans) * +(Math.abs(props.fans) / 1000).toFixed(1) + "K"
    : Math.sign(props.fans) * Math.abs(props.fans);
};
