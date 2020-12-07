const accountTable = document.getElementById('account-table');
accountTable.addEventListener('submit',(event) =>{
  event.preventDefault();
  event.stopPropagation();
  if(accountTable.checkValidity()){
    sendForm();
  }
})
