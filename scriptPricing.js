
function formSubmitPricing() {
    const numberInput = document.getElementById("number").value;
    const companyInput = document.getElementById("company").value;
    const descriptionInput = document.getElementById("description").value;
  
    const outputText = `<h2>Input:</h2>
    <p>Number: ${numberInput}</p>
    <p>Compnay: ${companyInput}</p>
    <p>Message: ${"Tel: " + numberInput + "\nCompany: " + companyInput + "\nMessage: " + descriptionInput}</p>`;
  
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


    const outputText = `<h2>Input:</h2>
    <p>q11: ${q11Input}</p>
    <p>q12: ${q12Input}</p>
    <p>q13: ${q13Input}</p>
    <p>q14: ${q14Input}</p>
    <p>q15: ${q15Input}</p>

    <p>q21: ${q21Input}</p>
    <p>q22: ${q22Input}</p>
    <p>q23: ${q23Input}</p>
    <p>q24: ${q24Input}</p>
    <p>q25: ${q25Input}</p>

    <p>q31: ${q31Input}</p>
    <p>q32: ${q32Input}</p>
    <p>q33: ${q33Input}</p>
    <p>q34: ${q34Input}</p>
    <p>q35: ${q35Input}</p>


    
    <p>Message: ${"What type of software solution would you like to develop with DevLead?: " + q11Input + " Mobile, " + q12Input+" Web, " + q13Input + " Authentification, " + q14Input + " Software or Data Migration, " + q15Input + " System or Data Archiving, " +
    "\nWhat is the current stage of your software development process?: "+ q21Input+" Idea, " + q22Input + " Proof of Concept, " + q23Input + " Prototype, " + q24Input + " Specified or designed Solution, " + q25Input + " MVP, " +
    "\nDo you need a professional consultation from any of the specialists below?: "+ q31Input+" Project Manager, " + q32Input + " Business Analyst, " + q33Input + "  UI/UX Designer, " + q34Input + " Architect, " + q35Input + " DevOps, "}</p>`;



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