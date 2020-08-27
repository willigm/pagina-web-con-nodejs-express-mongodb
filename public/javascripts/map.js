var map=L.map('main_map').setView([-34.6012424,-58.3861497],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'&copy:<a href="https://www.openstreetmap.org/copyright">openStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.6012424,-58.3061487]).addTo(map);
L.marker([-34.5069221,-58.2914534]).addTo(map);
L.marker([-34.4941254,-58.3125452]).addTo(map);