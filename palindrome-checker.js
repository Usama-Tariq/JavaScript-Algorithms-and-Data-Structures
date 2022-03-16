function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  let isPalindrome = false;

  for (let i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] === str[len - i]) {
      isPalindrome = true;
    } else {
      return false;
    }
  }

  return isPalindrome;
}

palindrome("eye");
