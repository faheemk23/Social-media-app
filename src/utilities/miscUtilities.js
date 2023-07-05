import dayjs from "dayjs";

export const getTimeStamp = (createdAt) => {
  const currentTime = dayjs();
  const difference = currentTime.diff(createdAt, "hours");
  return difference >= 24
    ? dayjs(createdAt).format("D MMM")
    : dayjs(createdAt).fromNow();
};

export const getSinglePostTimeStamp = (createdAt) => {
  const hour = dayjs(createdAt).format("h");
  const minute = dayjs(createdAt).format("mm");
  const timeContext = dayjs(createdAt).format("A");
  const month = dayjs(createdAt).format("MMM");
  const day = dayjs(createdAt).format("D");
  const year = dayjs(createdAt).format("YYYY");
  return `${hour}:${minute} ${timeContext} · ${month} ${day}, ${year}`;
};
