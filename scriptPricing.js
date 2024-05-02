
function formSubmitPricing() {
    const numberInput = document.getElementById("number").value;
    const companyInput = document.getElementById("company").value;
    const descriptionInput = document.getElementById("description").value;
  
    const outputText = `Message: ${"Tel: " + numberInput + "\nCompany: " + companyInput + "\nMessage: " + descriptionInput}</p>`;
  
    document.getElementById("message2").value = outputText;
    document.getElementById("info-form").submit();
  
  }
  function getPricing() {

    const q11Input = document.getElementById("checkbox1-1").value;
    const q12Input = document.getElementById("checkbox1-2").value;
    const q13Input = document.getElementById("checkbox1-3").value;
    const q14Input = document.getElementById("checkbox1-4").value;
    const q15Input = document.getElementById("checkbox1-5").value;

    const q21Input = document.getElementById("checkbox2-1").value;
    const q22Input = document.getElementById("checkbox2-2").value;
    const q23Input = document.getElementById("checkbox2-3").value;
    const q24Input = document.getElementById("checkbox2-4").value;
    const q25Input = document.getElementById("checkbox2-5").value;

    const q31Input = document.getElementById("checkbox3-1").value;
    const q32Input = document.getElementById("checkbox3-2").value;
    const q33Input = document.getElementById("checkbox3-3").value;
    const q34Input = document.getElementById("checkbox3-4").value;
    const q35Input = document.getElementById("checkbox3-5").value;


    const outputText = `
    What type of software solution would you like to develop with DevLead?:
    ${q11Input} :Mobile
    ${q12Input} :Web
    ${q13Input} :Authentification
    ${q14Input} :Software or Data Migration
    ${q15Input} :System or Data Archiving

    What is the current stage of your software development process?:
    ${q21Input} :Idea
    ${q22Input} :Proof of Concept
    ${q23Input} :Prototype
    ${q24Input} :Specified or designed Solution
    ${q25Input} :MVP

    Do you need a professional consultation from any of the specialists below?:
    ${q31Input} :Project Manager
    ${q32Input} :Business Analyst
    ${q33Input} :UI/UX Designer
    ${q34Input} :Architect
    ${q35Input} :DevOps`

    document.getElementById("message").value = outputText;
    console.log("test");

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