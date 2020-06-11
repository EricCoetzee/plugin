function showPreviewOne(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-ip-1-preview");
      preview.src = src;
      preview.style.display = "block";
    } 
  }
  function myImgRemoveFunctionOne() {
      document.getElementById("file-ip-1-preview").src = "img/default.png";
    }
    /* **************************************************************************************** */

    function showPreviewTwo(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("file-ip-2-preview");
        preview.src = src;
        preview.style.display = "block";
      } 
    }
    function myImgRemoveFunctionTwo() {
        document.getElementById("file-ip-2-preview").src = "img/default.png";
      }
    /* **************************************************************************************************** */
    function showPreviewThree(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("file-ip-3-preview");
        preview.src = src;
        preview.style.display = "block";
      } 
    }
    function myImgRemoveFunctionThree() {
        document.getElementById("file-ip-3-preview").src = "img/default.png";
      }
    /* **************************************************************************************************** */
    function showPreviewFour(event){
      if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("file-ip-4-preview");
        preview.src = src;
        preview.style.display = "block";
      } 
    }
    function myImgRemoveFunctionFour() {
        document.getElementById("file-ip-4-preview").src = "img/default.png";
      }
      /* **************************************************************************************** */
  
      function showPreviewFive(event){
        if(event.target.files.length > 0){
          let src = URL.createObjectURL(event.target.files[0]);
          let preview = document.getElementById("file-ip-5-preview");
          preview.src = src;
          preview.style.display = "block";
        } 
      }
      function myImgRemoveFunctionFive() {
          document.getElementById("file-ip-5-preview").src = "img/default.png";
        }
      /* **************************************************************************************************** */
      function showPreviewSix(event){
        if(event.target.files.length > 0){
          let src = URL.createObjectURL(event.target.files[0]);
          let preview = document.getElementById("file-ip-6-preview");
          preview.src = src;
          preview.style.display = "block";
        } 
      }
      function myImgRemoveFunctionSix() {
          document.getElementById("file-ip-6-preview").src = "img/default.png";
        }
      /* **************************************************************************************************** */