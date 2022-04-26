const iauction = ({
  countdownInMin: repsInMinutes = 2,
  startDate: initialDate = "",
  endDate = "",
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
    const end = +`${new Date(endDate).getTime()}`.slice(0, -2);
    if (now % 10 < 4) {
      const current = new Date();
      const seconds = 60 - (current.getUTCSeconds() || 60);
      status.start =
        now > end || getRepition(startAuction.getTime()) < 0 ? false : true;
      status.reps = getRepition(startAuction.getTime());
      let minutes = Math.floor(
        ((next.getTime() - current.getTime()) / 1e3 / 60) % repsInMinutes
      );

      if (status.start && seconds == 0 && minutes == 0) {
        if (minutes !== 0) {
          minutes += repsInMinutes;
        } else if (!status.reps) {
          minutes += 1;
        }
      } else if (status.start && seconds == 0) {
        minutes = status.start
          ? minutes == -repsInMinutes
            ? minutes + repsInMinutes + 1
            : status.reps
            ? minutes + repsInMinutes + 1
            : minutes + 1
          : minutes < 0
          ? minutes + repsInMinutes
          : minutes;
      } else if (!status.start) {
        if (!seconds) {
          minutes += 1;
        }
      } else if (status.start && minutes < 0) {
        minutes += repsInMinutes;
      }
      if (minutes > repsInMinutes) {
        minutes -= repsInMinutes;
      }
      if (minutes < 0) {
        minutes += 1;
      }

      status.time = `${minutes < 10 && minutes >= 0 ? "0" : ""}${minutes}:${
        seconds < 10 && seconds >= 0 ? "0" : ""
      }${seconds}`;

      if (!(next.getTime() - current.getTime())) {
        next.setMinutes(next.getMinutes() + repsInMinutes);
      }
      callback(status);
    }
    if (now > end) {
      status.start = false;
      clearInterval(auction);
    }
  }, 100);
};

module.exports = iauction;
