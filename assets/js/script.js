//JAVASCRIPT FOR ANIMATED MODAL 

  function openCertModal(title, issuer, date, imgUrl) {
    const modal = document.getElementById('certModal');
    const container = document.getElementById('certModalContainer');
    
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalSub').innerText = issuer;
    document.getElementById('modalDate').innerText = date;
    document.getElementById('modalImg').src = imgUrl;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    container.classList.remove('scale-95');
    container.classList.add('scale-100');
  }

  function closeCertModal() {
    const modal = document.getElementById('certModal');
    const container = document.getElementById('certModalContainer');
    
    modal.classList.add('opacity-0', 'pointer-events-none');
    container.classList.remove('scale-100');
    container.classList.add('scale-95');
  }

  // Close modal when clicking outside the frame container
  document.getElementById('certModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeCertModal();
    }
  });

    
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Geist', 'sans-serif'],
            mono: ['Geist Mono', 'monospace'],
          },
          colors: {
            cyber: {
              cyan: '#00f2fe',
              purple: '#7928ca',
              pink: '#ff0080',
              dark: '#0a0e17',
              surface: '#0f131c',
              card: '#161b26',
              border: '#232936'
            }
          },
          animation: {
            'glow-pulse': 'glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'gradient-x': 'gradientX 6s ease infinite',
          },
          keyframes: {
            glow: {
              '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
              '50%': { opacity: 0.7, transform: 'scale(1.05)' },
            },
            gradientX: {
              '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
              '50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
            }
          }
        }
      }
    }
  