var noorul = document.getElementById("timer");

function ten(callback) {
  noorul.innerText = "10";
  setTimeout(callback, 1000);
}
function nine(callback) {
  noorul.innerText = "9";
  setTimeout(callback, 1000);
}
function eight(callback) {
  noorul.innerText = "8";
  setTimeout(callback, 1000);
}
function seven(callback) {
  noorul.innerText = "7";
  setTimeout(callback, 1000);
}
function six(callback) {
  noorul.innerText = "6";
  setTimeout(callback, 1000);
}
function five(callback) {
  noorul.innerText = "5";
  setTimeout(callback, 1000);
}
function four(callback) {
  noorul.innerText = "4";
  setTimeout(callback, 1000);
}
function three(callback) {
  noorul.innerText = "3";
  setTimeout(callback, 1000);
}
function two(callback) {
  noorul.innerText = "2";
  setTimeout(callback, 1000);
}
function one(callback) {
  noorul.innerText = "1";
  setTimeout(callback, 1000);
}
function wish(callback) {
  noorul.innerText = "Happy Independence Day";
  setTimeout(callback, 1000);
}

ten(() => {
  nine(() => {
    eight(() => {
      seven(() => {
        six(() => {
          four(() => {
            three(() => {
              two(() => {
                one(() => {
                  wish();
                });
              });
            });
          });
        });
      });
    });
  });
});
