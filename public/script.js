// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('menu-toggle');
//     const navLinks = document.getElementById('nav-links');
//     const navContainer = document.querySelector('.nav__container');

//     menuToggle.addEventListener('click', function() {
//       navLinks.classList.toggle('active');
//     });

//     window.addEventListener('scroll', function() {
//       if (window.scrollY > 0) {
//         navContainer.classList.add('sticky');
//       } else {
//         navContainer.classList.remove('sticky');
//       }
//     });
//   });

//   function myFunction() {
//     var x = document.getElementById("myTopnav");
//     var y = document.querySelector(".menu-items");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//       y.className += " responsive";
//     } else {
//       x.className = "topnav";
//       y.className = "menu-items";
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const contactForm = document.getElementById('contactForm');

//   if (contactForm) {
//       console.log('Contact form found');
      
//       contactForm.addEventListener('submit', function(event) {
//           event.preventDefault();

//           const formData = {
//               firstName: document.getElementById('firstName').value,
//               lastName: document.getElementById('lastName').value,
//               gender: document.getElementById('gender').value,
//               email: document.getElementById('email').value,
//               phone: document.getElementById('phone').value,
//               applicationDate: document.getElementById('applicationDate').value,
//               bloodGroup: document.getElementById('bloodGroup').value,
//               concerns: document.getElementById('concerns').value
//           };

//           console.log('Form Data:', formData);

//           fetch('/submit', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/x-www-form-urlencoded',
//               },
//               body: new URLSearchParams(formData)
//           })
//           .then(response => response.text())
//           .then(data => {
//               alert(data);
//               console.log(data);
//           })
//           .catch(error => {
//               console.error('Error:', error);
//               alert('Error submitting form');
//           });
//       });
//   } else {
//       console.error('Contact form not found');
//   }
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const messageForm = document.getElementById('messageForm');

//   if (messageForm) {
//       console.log('Message form found');
//   } else {
//       console.error('Message form not found');
//   }

//   messageForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       console.log('Form submitted');
//       const formData = {
//           firstName: document.getElementById('firstName').value,
//           lastName: document.getElementById('lastName').value,
//           email: document.getElementById('email').value,
//           phone: document.getElementById('phone').value,
//           message: document.getElementById('message').value
//       };
//       console.log('Form Data:', formData);

//       fetch('/submitMessage', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           body: new URLSearchParams(formData)
//       })
//       .then(response => response.text())
//       .then(data => {
//           alert(data);
//           console.log(data);
//       })
//       .catch(error => {
//           console.error('Error:', error);
//           alert('Error submitting form');
//       });
//   });
// });



document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.topnav .icon');
  const navLinks = document.getElementById('nav-links');
  const navContainer = document.querySelector('.nav__container');
  const contactForm = document.getElementById('contactForm');
  const messageForm = document.getElementById('messageForm');
  const topnav = document.getElementById('myTopnav');
  const menuItems = document.querySelector('.menu-items');

  if (menuToggle && menuItems) {
      menuToggle.addEventListener('click', function() {
          myFunction();
      });
  }

  if (navContainer) {
      window.addEventListener('scroll', function() {
          if (window.scrollY > 0) {
              navContainer.classList.add('sticky');
          } else {
              navContainer.classList.remove('sticky');
          }
      });
  }

  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();

          const formData = {
              firstName: document.getElementById('firstName').value,
              lastName: document.getElementById('lastName').value,
              gender: document.getElementById('gender').value,
              email: document.getElementById('email').value,
              phone: document.getElementById('phone').value,
              applicationDate: document.getElementById('applicationDate').value,
              bloodGroup: document.getElementById('bloodGroup').value,
              concerns: document.getElementById('concerns').value
          };

          fetch('/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams(formData)
          })
          .then(response => response.text())
          .then(data => {
              alert(data);
          })
          .catch(error => {
              console.error('Error:', error);
              alert('Error submitting form');
          });
      });
  } else {
      console.error('Contact form not found');
  }

  if (messageForm) {
      messageForm.addEventListener('submit', function(event) {
          event.preventDefault();

          const formData = {
              firstName: document.getElementById('firstName').value,
              lastName: document.getElementById('lastName').value,
              email: document.getElementById('email').value,
              phone: document.getElementById('phone').value,
              message: document.getElementById('message').value
          };

          // Log form data to verify it's being collected correctly
          console.log('Form Data:', formData);

          fetch('/submitMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData)
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            messageForm.reset(); // Reset form
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting message');
        });
      });
  } else {
      console.error('Message form not found');
  }

  function myFunction() {
      if (topnav && menuItems) {
          if (topnav.className === "topnav") {
              topnav.className += " responsive";
              menuItems.className += " responsive";
          } else {
              topnav.className = "topnav";
              menuItems.className = "menu-items";
          }
      } else {
          console.error('Topnav or menu items not found');
      }
  }
});