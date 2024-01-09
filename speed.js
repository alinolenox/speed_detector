function checkSpeed() {
    var speed = document.getElementById('speedInput').value;
    var demeritPoints = 0;

    if (speed < 70) {
        document.getElementById('result').innerText = 'Ok';
    } else {
        demeritPoints = Math.floor((speed - 70) / 5);
        document.getElementById('result').innerText = 'Points: ' + demeritPoints;

        if (demeritPoints > 12) {
            document.getElementById('result').innerText = 'License suspended';
        }
    }
}