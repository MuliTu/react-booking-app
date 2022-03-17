const generateUTCDate = (stringDate) => {
  return stringDate.split("-").reverse().join("-");
};

const generateEmployeeStates = (empList) => (e) => {
  const employe = empList.find(
    (item) => item.id.toString() === e[0].toString()
  );
  const deals = e[1]
    .map(({ checkInDate, checkOutDate, roomType }) => ({
      vicationLength:
        convertMStoHours(Date.parse(generateUTCDate(checkOutDate))) -
        convertMStoHours(Date.parse(generateUTCDate(checkInDate))),
      roomType,
    }))
    .groupBy((item) => item.roomType);

  const claculateTime = Object.entries(deals).map((s) => ({
    [s[0]]: s[1].reduce((sum, c) => {
      sum = sum + c.vicationLength;
      return sum;
    }, 0),
  }));

  const totalTime = claculateTime.reduce((init, cur) => {
    init = init + Object.values(cur)[0];
    return init;
  }, 0);

  return {
    ...employe,
    fullname: `${employe.firstName} ${employe.lastName}`,
    _meta: deals,
    deals: claculateTime.sort((a, b) => {
      return Object.values(b)[0] - Object.values(a)[0];
    }),
    totalVicationTime: totalTime,
  };
};

const convertMStoHours = (duration) => {
  return Math.floor(duration / (1000 * 60 * 60));
};

export const extractEmployees = (rawData) => {
  if (rawData.length <= 0) return [];
  const data = rawData.filter((x) => x.employee);
  const distinctEmployeeList = data.map((item) => item.employee).distinct();
  const grouped = data.groupBy((item) => item.employee.id);
  const res = Object.entries(grouped).map(
    generateEmployeeStates(distinctEmployeeList)
  );
  return res
    .sort((a, b) => b.totalVicationTime - a.totalVicationTime)
    .map((item, index) => ({ ...item, place: index + 1 }));
};
