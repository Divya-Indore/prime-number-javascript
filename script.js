function cPrime() {
    const num = parseInt(document.getElementById('input').value);
    const res = document.getElementById('result');
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
      if (isPrime) {
        res.textContent = `${num} is a Prime Number.`;
        res.style.color = "green";
      } else {
        res.textContent = `${num} is a Non-Prime Number.`;
        res.style.color = "black";
      }
    }










