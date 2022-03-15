function rot13(str) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shift = 13;

  return str.split("").map((i)=> alphabets.includes(i) ? alphabets[(alphabets.indexOf((i.toUpperCase()))+shift)%26] : i ).join("");
}

rot13("SERR PBQR PNZC");