document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let gammaT = parseFloat(document.getElementById('gammaT').value);
    let gammaR = parseFloat(document.getElementById('gammaR').value);
    let ecdt = parseFloat(document.getElementById('ecdt').value);
    let ecdr = parseFloat(document.getElementById('ecdr').value);
    let lpf = parseFloat(document.getElementById('lpf').value);
    let fL = parseFloat(document.getElementById('fL').value) * 1e9; // Convert GHz to Hz
    let fH = parseFloat(document.getElementById('fH').value) * 1e9; // Convert GHz to Hz
    let R = parseFloat(document.getElementById('R').value);
    let PN = parseFloat(document.getElementById('PN').value);
    let Pt = parseFloat(document.getElementById('Pt').value);
    let Dt = Math.pow(10, parseFloat(document.getElementById('Dt').value) / 10);
    let Dr = Math.pow(10, parseFloat(document.getElementById('Dr').value) / 10);

    let centerFrequency = (fH + fL) / 2;
    let bandwidth = fH - fL;

    // Shannon Capacity Calculation
    let C = bandwidth * Math.log2(1 + Pt / PN);

    // Pr Calculation
    let Pr1 = (ecdt * ecdr * Dt * Dr * Pt * Math.pow(lpf / R, 2));
    let Pr = Pr1 + PN;

    // Display results
    document.getElementById('rbResult').textContent = C.toFixed(2);
    document.getElementById('prResult').textContent = Pr.toFixed(2);
});