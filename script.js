
   const copyButton = document.getElementById("copyButton");
   const saveButton = document.getElementById("saveButton");
   const lockButton = document.getElementById("lockButton");
   const unlockButton = document.getElementById("unlockButton");
   const codeTextarea = document.getElementById("codeTextarea");


   copyButton.addEventListener("click", function () {
       codeTextarea.select();
       document.execCommand("copy");
   });
   
   saveButton.addEventListener("click", function () {
       alert("Code saved!");
   });

  
   lockButton.addEventListener("click", function () {
       codeTextarea.disabled = true;
       lockButton.style.display = "none";
       unlockButton.style.display = "inline-block";
   });


   unlockButton.addEventListener("click", function () {
       codeTextarea.disabled = false;
       unlockButton.style.display = "none";
       lockButton.style.display = "inline-block";
   });
