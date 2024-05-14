function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
   const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
}
function formSubmitPricing() {
    const numberInput = document.getElementById("number").value;
    const companyInput = document.getElementById("company").value;
    const descriptionInput = document.getElementById("description").value;
  
    const outputText = `${"Tel: " + numberInput + "\nCompany: " + companyInput + "\nMessage: " + descriptionInput}`;
  
    document.getElementById("message2").value = outputText;
    document.getElementById("info-form").submit();
  
  }
  function getPricing() {
  
    const q11Checked = document.getElementById("checkbox1-1").checked;
    const q12Checked = document.getElementById("checkbox1-2").checked;
    const q13Checked = document.getElementById("checkbox1-3").checked;
    const q14Checked = document.getElementById("checkbox1-4").checked;
    const q15Checked = document.getElementById("checkbox1-5").checked;

    const q21Checked = document.getElementById("checkbox2-1").checked;
    const q22Checked = document.getElementById("checkbox2-2").checked;
    const q23Checked = document.getElementById("checkbox2-3").checked;
    const q24Checked = document.getElementById("checkbox2-4").checked;
    const q25Checked = document.getElementById("checkbox2-5").checked;

    const q31Checked = document.getElementById("checkbox3-1").checked;
    const q32Checked = document.getElementById("checkbox3-2").checked;
    const q33Checked = document.getElementById("checkbox3-3").checked;
    const q34Checked = document.getElementById("checkbox3-4").checked;
    const q35Checked = document.getElementById("checkbox3-5").checked;


    let outputText = `
    What type of software solution would you like to develop with DevLead?:
    ${q11Checked ? ": Mobile" : ""}
    ${q12Checked ? ": Web" : ""}
    ${q13Checked ? ": Authentification" : ""}
    ${q14Checked ? ": Software or Data Migration" : ""}
    ${q15Checked ? ": System or Data Archiving" : ""}

    What is the current stage of your software development process?:
    ${q21Checked ? ": Idea" : ""}
    ${q22Checked ? ": Proof of Concept" : ""}
    ${q23Checked ? ": Prototype" : ""}
    ${q24Checked ? ": Specified or designed Solution" : ""}
    ${q25Checked ? ": MVP" : ""}

    Do you need a professional consultation from any of the specialists below?:
    ${q31Checked ? ": Project Manager" : ""}
    ${q32Checked ? ": Business Analyst" : ""}
    ${q33Checked ? ": UI/UX Designer" : ""}
    ${q34Checked ? ": Architect" : ""}
    ${q35Checked ? ": DevOps" : ""}`

    document.getElementById("message").value = outputText;

    document.getElementById("info-form2").submit();

  }

  
  const dialog = document.getElementById("pricing-dialog")
  const wrapper = document.querySelector(".wrapper")
  function showPricingDialog(){
      dialog.showModal()
  }

  dialog.addEventListener("click", (e) => {
      if(!wrapper.contains(e.target)){
          dialog.close()
      }
  })