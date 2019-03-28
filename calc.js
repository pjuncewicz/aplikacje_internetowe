const pow2 = x => x * x;
const deg2rad = deg => deg * Math.PI /180;

const init = e => {
console.log('container:',document.getElementById('container'));
console.log('loaded in', e.timeStamp, 'ms');
console.log(pow2(5));
console.log(pow2(5));
console.log(deg2rad(180));
}


window.addEventListener('DOMContentLoaded', ev => {
console.warn('BooHoo');
console.error('Boo');
console.info('Hmmm');
    init(ev);
});