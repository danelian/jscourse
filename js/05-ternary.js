// ==================== 4. Тернарный оператор ======================

// (условие) ? (условие верно) : (условие не верно)

10 < 12 ? console.log('Условие верно') : console.log('Условие не верно');

// example
let greeting;
let liveTime = 10;

if (liveTime < 12) {
  greeting = 'Bari luys';
} else {
  greeting = 'Bari or!';
}

console.log(greeting);

// на тернарном операторе
greeting = liveTime < 12 ? 'Bari luys' : 'Bari or';
console.log(greeting);