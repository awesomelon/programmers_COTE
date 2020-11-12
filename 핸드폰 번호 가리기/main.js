function solution(phone_number) {
  const result = phone_number.replace(/\d(?=\d{4})/g, '*');
  return result;
}
