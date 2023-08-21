// Thanks ChatGPT :)

export function formatISODateToHumanReadable(isoString: string) {
  const date = new Date(isoString);
  const day = date.getDate();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = monthNames[date.getMonth()];

  const suffixes = ["th", "st", "nd", "rd"];
  let suffix = "th";
  if (day % 10 >= 1 && day % 10 <= 3 && (day % 100 < 11 || day % 100 > 13)) {
    suffix = suffixes[day % 10];
  }

  const formattedDate = `${day}${suffix} ${month} ${date.getFullYear()}`;
  return formattedDate;
}
