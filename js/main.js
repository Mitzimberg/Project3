function disableScroll() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', disableScroll);
window.addEventListener('wheel', disableScroll, { passive: false });
window.addEventListener('touchmove', disableScroll, { passive: false });

//ngl javascript is byfar my weakest trait, all of this is just ripped lol

const surfboard = document.getElementById('Surfboard');
const crab = document.getElementById('wholeCrab');
let moved = false;

surfboard.addEventListener('click', () => {
    if (!moved) {
        crab.style.transform = 'translateX(-150px)';
    } else {
        crab.style.transform = 'translateX(0px)';
    }
    moved = !moved;
});

const paradiseElement = document.getElementById('Paradise');
const cloudsElement = document.getElementById('Cloud1');
const cloudsElement2 = document.getElementById('Cloud_2')
paradiseElement.style.pointerEvents = 'none';

setTimeout(() => {
    paradiseElement.style.pointerEvents = 'auto';
    
    const handleClick = () => {
        paradiseElement.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100vh)' }
        ], {
            duration: 1000,
            fill: 'forwards'
        }).onfinish = () => {
            startCloudMovement();
            startCloudMovement2();
        };

        paradiseElement.style.pointerEvents = 'none';
        paradiseElement.removeEventListener('click', handleClick);
    };
    paradiseElement.addEventListener('click', handleClick);
}, 5000);

function startCloudMovement() {
    cloudsElement.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(200vw)' }
    ], {
        duration: 35000,
    }); 
}
function startCloudMovement2() {
    cloudsElement2.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-200vw)' }
    ], {
        duration: 60000,
    });
}

const lifePreserver = document.getElementById('LifePreserver');

lifePreserver.addEventListener('click', () => {
    lifePreserver.style.transform = 'scale(1.02)';

    setTimeout(() => {
        lifePreserver.style.transform = 'scale(1)';
    }, 300);
});

const coconuts = ['LCoconut1', 'LCoconut2', 'LCoconut3', 'RCoconut1', 'RCocounut2'];
const coconutStates = {};

coconuts.forEach(coconutId => {
    const coconut = document.getElementById(coconutId);
    coconutStates[coconutId] = { clickCount: 0 };

    coconut.addEventListener('click', () => {
        coconutStates[coconutId].clickCount++;

        coconut.classList.add('shake');

        setTimeout(() => {
            coconut.classList.remove('shake');
        }, 150);

        if (coconutStates[coconutId].clickCount >= 3) {
            coconut.classList.add('fall');
            coconut.removeEventListener('click', arguments.callee);
        }
    });
});

const closedBrella = document.getElementById('ClosedBrella');
const openBrella = document.getElementById('OpenBrella');

closedBrella.addEventListener('click', () => {
    closedBrella.classList.add('hidden');

    openBrella.style.display = 'block';
    openBrella.classList.remove('hidden');

    // Optionally, fade in the open umbrella
    setTimeout(() => {
        openBrella.style.opacity = '1';
    }, 10);
});