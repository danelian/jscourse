// =========== Callback. Callback hell =============

// function checkRooms() {
//   setTimeout(function() {
//     console.log('Проверяем номера в отеле...');
//     const availableRooms = true;
//     if (availableRooms) {
//       console.log('Номера есть!');
//       console.log('Едем в отпуск!');
//     } else {
//       console.log('Номеров нет.');
//       console.log('Отпуск отменяется :(');
//     }
//   }, 1000)
// }
// checkRooms();

// ----------------------------------------------------

function checkRooms(success, failed) {
  setTimeout(function() {
    console.log('Проверяем номера в отеле...');
    const availableRooms = true;

    if (availableRooms) {
      let message = 'Номера есть';
      success(message);
    } else {
      let message = 'Номеров нет';
      failed(message);
    }

  }, 1000)
}

function checkTickets(message, success, failed) {
  setTimeout(function(){
    console.log('---- function checkTickets ----');
    console.log('Ответ на предыдущем шаге', message);

    console.log('Проверяем авиабилеты...');
    const avialableTickets = true;

    if (avialableTickets) {
      let message = 'Билеты есть';
      success(message);
    } else {
      let message = 'Билетов нет';
      failed(message);
    }

  }, 500)
}

function cancelVacation(message) {
  console.log('----- cancelVacation -----');
  console.log('Ответ на предыдущем шагу', message);
  console.log('Отпуск отменяется :(');
}

function submitVacation(message) {
  console.log('----- submitVacation -----');
  console.log('Ответ на предыдущем шагу', message);
  console.log('Едем в отпуск!');
}

checkRooms(function(messageFromCheckRooms){
  checkTickets(
    messageFromCheckRooms,
    function(messageFromCheckTickets){
      submitVacation(messageFromCheckTickets)
    },
    function() {
      cancelVacation(messageFromCheckTickets)
    }
  );
}, function(messageFromCheckRooms){
  cancelVacation(messageFromCheckRooms);
});