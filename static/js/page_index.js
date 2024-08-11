const targets = [
    { element: document.getElementById('penjualanSampahCount'), count: 4670, suffix: '' },
    { element: document.getElementById('mitraCount'), count: 100, suffix: '' },
    { element: document.getElementById('vounteerCount'), count: 250, suffix: '' },
    { element: document.getElementById('pohonCount'), count: 2000, suffix: '' }
];

// Find the maximum count among all targets
const maxCount = Math.max(...targets.map(target => target.count));

// Function to animate count-up effect
function animateCountUp(target, duration) {
    let currentCount = 0;
    const increment = Math.ceil(target.count / (duration / 10));

    const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
            clearInterval(interval);
            currentCount = target.count;
            target.element.textContent = currentCount + target.suffix;
        } else {
            target.element.textContent = currentCount;
        }
    }, 10);
}

// Animate count-up for each target with adjusted duration
targets.forEach(target => {
    animateCountUp(target, maxCount / 100); // Adjust duration based on max count
});
