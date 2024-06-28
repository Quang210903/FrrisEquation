document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    let gammaT = parseFloat(document.getElementById('gammaT').value);
    let gammaR = parseFloat(document.getElementById('gammaR').value);
    let ecdt = parseFloat(document.getElementById('ecdt').value);
    let ecdr = parseFloat(document.getElementById('ecdr').value);
    let lpf = parseFloat(document.getElementById('lpf').value);
    let fc = parseFloat(document.getElementById('fc').value) * 1e9; // Convert GHz to Hz
    let R_b = parseFloat(document.getElementById('R_b').value) * 1e6; // Convert Mbps to bps
    let R = parseFloat(document.getElementById('R').value);
    let PN = parseFloat(document.getElementById('PN').value);
    let Pt = parseFloat(document.getElementById('Pt').value);
    let Dt = Math.pow(10, parseFloat(document.getElementById('Dt').value) / 10); // Convert dB to linear
    let Dr = Math.pow(10, parseFloat(document.getElementById('Dr').value) / 10); // Convert dB to linear

    // Constants
    let c = 3e8; // Speed of light in m/s
    let pi = Math.PI;

    // Calculate wavelength
    let lambda = c / fc;

    // Calculate received power (Pr)
let Pr1 = ecdt * ecdr * Dt * Dr * Pt * Math.pow(lambda / (4 * pi * R), 2) * lpf * (1 - gammaR * gammaR) * (1 - gammaT * gammaT);
let Pr = Pr1 + PN;

// Shannon Capacity Calculation
let Bmin = (R_b / Math.log2(1 + Pr / PN))/(1e6);

// Display results
document.getElementById('Bminresult').textContent = Bmin.toFixed(10); // Round Bmin to 10 decimal places
document.getElementById('prResult').textContent = Pr.toPrecision(20); // Display Pr with higher precision, e.g., 20 significant figures
});
