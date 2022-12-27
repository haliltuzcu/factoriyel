let n = +prompt(`Lutfen Pozitif Bir Sayi Gririniz`);
const fac = (n) => {
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return prompt(`lutfen negatif sayi girmeyiniz`);
  } else n >= 1;
  {
    return (n = n * fac(n - 1));
  }
};
console.log(`factorial ${n} = ${fac(n)} `);
