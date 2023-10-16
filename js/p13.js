let fuser = document.getElementById("user");
let fStatus = document.getElementById("status");

function validateUser(user){
    let str = /^[a-zA-Z]$/;
      if(str.test(fuser.value)) {
        fStatus.innerText =`Valid input`;
        fStatus.classList.add("success");
        hideStatus("success");
    } else {
        fStatus.innerText =`Invalid input`;
        fStatus.classList.add("error");
        hideStatus("error");
  }
} 

function hideStatus(clsName) {
   setTimeout(()=> {
        fStatus.innerText = '';
        fStatus.classList.remove(clsName);
   },10000);
}