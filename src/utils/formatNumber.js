export const formatNumber = phoneNumber => {
  phoneNumber = phoneNumber.replace(/\D/g, '');
  const length = phoneNumber.length;
  if (length === 5) {
    return `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(3)}`;
  } else if (length === 6) {
    return `${phoneNumber.substring(0, 2)}-${phoneNumber.substring(
      2,
      4
    )}-${phoneNumber.substring(4)}`;
  } else if (length === 7) {
    return `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(
      3,
      5
    )}-${phoneNumber.substring(5)}`;
  } else if (length === 8) {
    return `${phoneNumber.substring(0, 2)}-${phoneNumber.substring(
      2,
      4
    )}-${phoneNumber.substring(4, 6)}-${phoneNumber.substring(6)}`;
  } else if (length === 9) {
    return `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(
      3,
      6
    )}-${phoneNumber.substring(6)}`;
  } else if (length === 10) {
    return `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(
      3,
      6
    )}-${phoneNumber.substring(6, 8)}-${phoneNumber.substring(8)}`;
  } else if (length === 11) {
    return `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(
      3,
      6
    )}-${phoneNumber.substring(6, 9)}-${phoneNumber.substring(9)}`;
  } else if (length === 12) {
    return `${phoneNumber.substring(0, 2)}-${phoneNumber.substring(
      2,
      5
    )}-${phoneNumber.substring(5, 8)}-${phoneNumber.substring(
      8,
      10
    )}-${phoneNumber.substring(10)}`;
  } else {
    return phoneNumber;
  }
};
