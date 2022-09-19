export default function randomProductCode() {
  let words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomCode = "";

  for (let i = 0; i < 12; i++) {
    randomCode += words.charAt(Math.floor(Math.random() * words.length));
  }

  return randomCode;
}
