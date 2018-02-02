function validateForm() {
        var name = form["name"].value;
        if (name === "") {
          alert("First name cannot be left blank.");
          return false;
        }
        var name = form["comment"].value;
        if (name === "") {
          alert("Comment something");
          return false;
        }
      }

       var form = document.getElementById("frm");
       form.onsubmit = validateForm;
