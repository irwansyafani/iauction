const iauction = ({
  countdownInMin: repsInMinutes = 2,
  startDate: initialDate,
  endDate,
  callback = () => {},
}) => {
  const getRepition = (startAuction) => {
    const current = Date.now();
    const calculation = Math.floor(
      (current - startAuction) / 1e3 / 60 / repsInMinutes
    );
    return calculation;
  };

  const startAuction = new Date(initialDate);
  let next = new Date(initialDate);
  next.setMinutes(next.getMinutes() + repsInMinutes);

  const auction = setInterval(() => {
    let status = { start: null, time: "", reps: 0 };
    const now = +`${Date.now()}`.slice(0, -2);
    if (now > new Date(endDate).getTime()) {
      status.start = false;
      clearInterval(auction);
    }
    if (now % 10 < 4) {
      const current = new Date();
      const seconds = 60 - (current.getUTCSeconds() || 60);
      if (next.getTime() < current.getTime()) {
        next = new Date(next.setHours(current.getHours()));
        next.setMinutes(status.reps * repsInMinutes + repsInMinutes);
      }
      // console.log(next.getTime(), current.getTime(), startAuction.getTime()) // debug
      status.start = getRepition(startAuction.getTime()) >= 0 ? true : false;
      status.reps = getRepition(startAuction.getTime());
      let minutes =
        Math.ceil(
          ((next.getTime() - current.getTime()) / 1e3 / 60) % repsInMinutes
        ) +
        (status.start && seconds
          ? repsInMinutes - 1
          : status.start
          ? repsInMinutes
          : seconds
          ? -1
          : 0);

      status.time = `${minutes < 10 && minutes >= 0 ? "0" : ""}${minutes}:${
        seconds < 10 && seconds >= 0 ? "0" : ""
      }${seconds}`;

      if (!(next.getTime() - current.getTime())) {
        next.setMinutes(next.getMinutes() + repsInMinutes);
      }
      callback(status);
    }
  }, 100);
};

module.exports = iauction;
