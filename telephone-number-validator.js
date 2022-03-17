function telephoneCheck(str) {
  const regex =
    /(^(1\s?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$)|(^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$)/gm;

  // Generic Regex for all types of phone numbers internationally
  // const regex =
  //   /(^(\+?\d{1,3}[-\s]?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$)|(^(\+?\d{1,3}[-\s]?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$)/gm;
  //  /^(\+?\d{1,3}[-\s]?)?(\d{3}[-\s]?\d{3}[-\s]?\d{4}$|\(\d{3}\)\s?\d{3}[-\s]?\d{4}$)/gm //shorter version
  //  /^(\+?\d{1,3}[-\s]?)?(\d{3}[-\s]?|\(\d{3}\)\s?)\d{3}[-\s]?\d{4}$/gm //optimized one

  // plz visit this for testing https://regex101.com/r/o4UXbZ/2 // https://regex101.com/r/LynPk4/1
  return regex.test(str) ? true : false;
}

telephoneCheck("555-555-5555");
