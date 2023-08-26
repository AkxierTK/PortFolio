  let prevScrollPos = window.pageYOffset;
  const navbar = document.querySelector('nav');
  const mobileMenu = document.querySelector('.movile-menu');
  const menuCheckbox = document.getElementById('menu_checkbox');

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
      navbar.classList.remove('navbar-hidden');
      mobileMenu.classList.remove('navbar-hidden');
    } else {
     
      navbar.classList.add('navbar-hidden');
      mobileMenu.classList.add('navbar-hidden');

      setTimeout(() => {
        if (menuCheckbox.checked) {
          menuCheckbox.checked = false;
        }
      }, 1000);
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleScroll);
