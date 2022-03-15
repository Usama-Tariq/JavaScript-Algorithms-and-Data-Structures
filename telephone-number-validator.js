function telephoneCheck(str) {
  const regex =
    /(^(1\s?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$)|(^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$)/gm;

  return regex.test(str) ? true : false;
}

telephoneCheck("555-555-5555");
