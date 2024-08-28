const launchHome = (page) => {
  const launchButton = document.getElementById('launch-btn');
  const launchBox = document.getElementById('launch-box');
  const launchText = document.getElementById('launch-text');
  const stageBox = document.getElementById('stage-box');
  const stageFrame = document.getElementById('stage-frame');
  // const seats = document.getElementById('seats');
  const leftCurtain = document.getElementById('left-curtain');
  const rightCurtain = document.getElementById('right-curtain');
  const announcementBox = document.getElementById('announcement-box');
  const home = document.getElementById('home');
  const backstage = document.getElementById('backstage');
  const backstageOverlay = document.getElementById('backstage-overlay');
  const frontstageOverlay = document.getElementById('frontstage-overlay');
  const iText = document.getElementById('i-text');
  const amText = document.getElementById('am-text');
  const kendrellText = document.getElementById('kendrell-text');
  const announcementPortrait = document.getElementById('announcement-portrait');
  const homeLink = document.getElementById('home-link');
  const bioLink = document.getElementById('bio-link');
  const showsLink = document.getElementById('shows-link');
  const galleryLink = document.getElementById('gallery-link');
  const contactLink = document.getElementById('contact-link');
  const homeSpot = document.getElementById('home-spot');
  const bioSpot = document.getElementById('bio-spot');
  const showsSpot = document.getElementById('shows-spot');
  const gallerySpot = document.getElementById('gallery-spot');
  const contactSpot = document.getElementById('contact-spot');
  const shimmer = document.getElementById('shimmer');

  home.onload = () => {
    console.log('Home page loaded');

    setTimeout(() => {
      frontstageOverlay.style.opacity = '0';
    }, 900);

    setTimeout(() => {
      launchText.style.animationPlayState = 'running';
    }, 3500);
  };

  launchButton.addEventListener('click', () => {
    launchButton.style.opacity = '0';
    launchButton.style.transform = 'scale(125%)';
    launchButton.style.color = 'rgb(244, 211, 111)';
    launchButton.style.textShadow =
      '0 0 5px rgb(236, 214, 20), 0 0 20px rgb(232, 192, 35)';
    // frontstageOverlay.style.opacity = '0.75';

    setTimeout(() => {
      leftCurtain.style.transform = 'translateX(-105%)';
    }, 1000);

    setTimeout(() => {
      rightCurtain.style.transform = 'translateX(200%)';
    }, 1000);

    setTimeout(() => {
      backstageOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    }, 1500);

    setTimeout(() => {
      stageFrame.style.transform = 'scale(260%)';
      // seats.style.transform = 'scale(260%)';
    }, 2200);

    setTimeout(() => {
      backstage.style.transform = 'scale(130%)';
      // backstage.style.transform = 'scale(130%)';
    }, 2200);

    setTimeout(() => {
      stageFrame.style.display = 'none';
      launchButton.style.display = 'none';
      leftCurtain.style.display = 'none';
      rightCurtain.style.display = 'none';
      launchBox.style.display = 'none';
      // seats.style.display = 'none';
      frontstageOverlay.style.display = 'none';
    }, 3200);

    setTimeout(() => {
      announcementBox.style.visibility = 'visible';
      announcementPortrait.style.opacity = '1';
    }, 4000);

    setTimeout(() => {
      iText.style.opacity = '1';
    }, 4000);

    setTimeout(() => {
      amText.style.opacity = '1';
    }, 5000);
    setTimeout(() => {
      kendrellText.style.opacity = '1';
    }, 6000);

    // setTimeout(() => {
    //   home.classList.add('flash');
    // }, 2200);
  });

  //Menu listeners

  launchButton.addEventListener('mouseover', (event) => {
    launchText.style.animationPlayState = 'paused';
    launchButton.style.transform = 'scale(125%)';
    launchButton.style.color = 'rgb(234, 224, 200)';
    launchButton.style.textShadow =
      ' 0 0 5px rgb(236, 214, 20), 0 0 20px rgb(232, 192, 35)';
  });
  launchButton.addEventListener('mouseout', (event) => {
    launchText.style.animationPlayState = 'running';
    launchButton.style.transform = 'scale(100%)';
    launchButton.style.color = 'goldenrod';
    launchButton.style.textShadow = 'none';
  });

  homeLink.addEventListener('mouseover', (event) => {
    homeSpot.style.opacity = '1';
  });
  homeLink.addEventListener('mouseout', (event) => {
    homeSpot.style.opacity = '0';
  });
  bioLink.addEventListener('mouseover', (event) => {
    bioSpot.style.opacity = '1';
  });
  bioLink.addEventListener('mouseout', (event) => {
    bioSpot.style.opacity = '0';
  });
  showsLink.addEventListener('mouseover', (event) => {
    showsSpot.style.opacity = '1';
  });
  showsLink.addEventListener('mouseout', (event) => {
    showsSpot.style.opacity = '0';
  });
  galleryLink.addEventListener('mouseover', (event) => {
    gallerySpot.style.opacity = '1';
  });
  galleryLink.addEventListener('mouseout', (event) => {
    gallerySpot.style.opacity = '0';
  });
  contactLink.addEventListener('mouseover', (event) => {
    contactSpot.style.opacity = '1';
  });
  contactLink.addEventListener('mouseout', (event) => {
    contactSpot.style.opacity = '0';
  });
};

const pageManager = {
  init: () => {
    let page = document.body.id;
    switch (page) {
      case 'home':
        launchHome(page);
        break;
      case 'about':
        launchAbout(page);
        break;
      case 'pact-page':
        launchPact(page);
        break;

      default:
    }
  },
};

pageManager.init();
