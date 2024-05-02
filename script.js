const tabs= document.querySelectorAll('.tab_btn');
    const all_content= document.querySelectorAll('.content');

    tabs.forEach((tab,index) =>{
    tab.addEventListener('click', (e)=>{
    tabs.forEach(tab=>{tab.classList.remove('active')})
    tab.classList.add('active');

    var line=document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');
    })
})
           
function formSubmit() {
    const numberInput = document.getElementById("number").value;
    const companyInput = document.getElementById("company").value;
    const descriptionInput = document.getElementById("description").value;
  
    const outputText = `Message: ${"Tel: " + numberInput + "\nCompany: " + companyInput + "\nMessage: " + descriptionInput}</p>`;
  
    document.getElementById("message").value = outputText;
    document.getElementById("info-form").submit();

} 