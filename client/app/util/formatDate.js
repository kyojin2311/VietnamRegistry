export function formatDate(Needdate) {
  var date = new Date(Needdate);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return `${day}-${month}-${year}`;
}
export function reFormatDate(date) {
  var datearray = date.split("/");
  var newdate = datearray[1] + "/" + datearray[0] + "/" + datearray[2];
  return newdate;
}
