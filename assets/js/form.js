
  {/* // Function to toggle password visibility */}
  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    
    if(passwordInput.value === ''){
      toggleIcon.classList.add('fa-eye-slash');
    }
    else if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    }
  }

  // Event listener for the toggle icon
  document.getElementById('togglePassword').addEventListener('click', togglePassword);

  function CtogglePassword() {
    const CpasswordInput = document.getElementById('confirmPassword');
    const CtoggleIcon = document.getElementById('toggleConfirmPassword');
    
    if(CpasswordInput.value === ''){
      CtoggleIcon.classList.add('fa-eye-slash');
      
    }
    else if (CpasswordInput.type === 'password') {
      CpasswordInput.type = 'text';
      CtoggleIcon.classList.remove('fa-eye-slash');
      CtoggleIcon.classList.add('fa-eye');
    } else {
      CpasswordInput.type = 'password';
      CtoggleIcon.classList.remove('fa-eye');
      CtoggleIcon.classList.add('fa-eye-slash');
    }
  }

  // Event listener for the toggle icon
  document.getElementById('toggleConfirmPassword').addEventListener('click', CtogglePassword);
