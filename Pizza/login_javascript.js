function validateForm() {
        var name = form["email"].value;
        if (name === "") {
          alert("Enter your email");
          return false;
        }
        var name = form["password"].value;
        if (name === "") {
          alert("Enter the password");
          return false;
        }
      }

       var form = document.getElementById("frm");
       form.onsubmit = validateForm;
