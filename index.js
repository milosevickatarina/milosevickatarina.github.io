function onNavChange (nav) {
    if (nav == 'nav-home') {
        document.getElementById('home').style.display = 'block';
        document.getElementById('about').style.display = 'none';
        document.getElementById('contact').style.display = 'none';

        document.getElementById('nav-home').classList.add ('active');
        document.getElementById('nav-about').classList.remove ('active');
        document.getElementById('nav-contact').classList.remove ('active');

    } else if (nav == 'nav-about') {
        document.getElementById('home').style.display = 'none';
        document.getElementById('about').style.display = 'block';
        document.getElementById('contact').style.display = 'none';

        document.getElementById('nav-home').classList.remove ('active');
        document.getElementById('nav-about').classList.add ('active');
        document.getElementById('nav-contact').classList.remove ('active');

    } else if (nav == 'nav-contact') {
        document.getElementById('home').style.display = 'none';
        document.getElementById('about').style.display = 'none';
        document.getElementById('contact').style.display = 'block';

        document.getElementById('nav-home').classList.remove ('active');
        document.getElementById('nav-about').classList.remove ('active');
        document.getElementById('nav-contact').classList.add ('active');
    } 

 }