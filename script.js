let m = 15;
let n = 5;
// if !isNaN(n)
if (n === 0) {
  /* todo*/
} else if (m === 0) {
  /* todo*/
} else {
  let m1 = m;
  let n1 = n;
  while (m1 !== n1) {
    if (m1 > n1) {
      m1 -= n1;
    } else {
      n1 -= m1;
    }
  }
  m = m / m1;
  n = n / n1;

  console.log(m1, n1);
  alert(m + "/" + n);
}
/*
todo
Якщо n == 1 - його не виводити
Якщо дріб неправильний:
~~(m/n) - ціла частина числа
m % n - залишок від ділення, чисельник
n - знаменник 
*/
