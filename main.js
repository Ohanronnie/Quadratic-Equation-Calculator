function myfunc() {
  a = document.getElementById('num1').value;
  b = document.getElementById('num2').value;
  c = document.getElementById('num3').value;
  ans0 = -b;

  ans00 = b * b;

  ans01 = ans00 - 4 * a * c;

  ans10 = -b + Math.sqrt(ans01);

  ans1 = ans10 / 2 * a;

  ans20 = -b - Math.sqrt(ans01);

  ans2 = ans20 / 2 * a;

  document.getElementById('ans').innerHTML = 'x' + ' ' + '=' + '  ' + ans1 + ' ' + 'or' + ' ' + 'y' + ' ' + '=' + ' ' + ans2;
  if (isNaN(ans2) == true) {
    alert('The combination of those numbers you dropped does not form a quadratic equation'+'Try another combination of numbers')
    document.getElementById('ans').innerHTML = 'x' + ' ' + '=' + '  ' + 0 + ' ' + 'or' + ' ' + 'y' + ' ' + '=' + ' ' + 0;

  }
}
