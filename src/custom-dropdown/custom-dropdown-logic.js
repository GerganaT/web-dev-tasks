const cssStyleLink = document.getElementById("custom-dropdown-style-link");

const cssCustomDropdownFlexStyleFilePath = "custom-dropdown-flex-style.css";
const cssCustomDropdownBlockStyleFilePath = "custom-dropdown-block-style.css";
const cssCustomDropdownInlineBlockStyleFilePath = "custom-dropdown-inline-block-style.css";

const selectLayout =  document.getElementById("select-layout");

const selectOptionDropdownMenu = document.getElementById("system-dropdown");

const divCurrentSelectionContainer = document.getElementById("div-current-selection-container");
const divDropdownOptionsContainer = document.getElementById("div-dropdown-options-container");
const divDropdownOptions = document.querySelectorAll(".div-option");

const currentSelectionText = document.getElementById("current-selection-text");

let isDivCurrentSelectionClicked = false;

selectLayout.addEventListener("change", () => {
    switch(selectLayout.value){
       case "flex-layout": cssStyleLink.setAttribute("href", cssCustomDropdownFlexStyleFilePath ); break
       case "block-layout": cssStyleLink.setAttribute("href", cssCustomDropdownBlockStyleFilePath ); break
       case "inline-block-layout": cssStyleLink.setAttribute("href", cssCustomDropdownInlineBlockStyleFilePath );
    }
} )

selectOptionDropdownMenu.addEventListener("change", ()=> {
        alert(selectOptionDropdownMenu.value);  
})

divCurrentSelectionContainer.addEventListener("click", ()=> {
    isDivCurrentSelectionClicked = !isDivCurrentSelectionClicked;
    divDropdownOptionsContainer.style.visibility = !isDivCurrentSelectionClicked ? "hidden" : "visible";
    divDropdownOptions.forEach((dropdownOption)=>{
        if (dropdownOptionHadBeenAlreadySelected(dropdownOption)){
            markDropdownOptionUnselected(dropdownOption);
        }
        if(dropdownOption.textContent === currentSelectionText.textContent){
            markDropdownOptionSelected(dropdownOption);
        }
    })
})

document.body.addEventListener("click",(event)=>{
    if(!divCurrentSelectionContainer.contains(event.target)){
         divDropdownOptionsContainer.style.visibility = "hidden";
         isDivCurrentSelectionClicked = false;
    }
})

divDropdownOptions.forEach( (dropdownOption) => {
        dropdownOption.addEventListener("click",()=> {
            if(currentSelectionText.textContent !== dropdownOption.textContent){
                currentSelectionText.textContent = dropdownOption.textContent;
            alert(dropdownOption.textContent);
            }
         })
});

    divDropdownOptions.forEach((selectedDropdownOption) => {
        selectedDropdownOption.addEventListener("mouseover", () => {
            divDropdownOptions.forEach((dropdownOption) => {
                if (dropdownOptionHadBeenAlreadySelected(dropdownOption)) {
                    markDropdownOptionUnselected(dropdownOption);
                }
            });
            markDropdownOptionSelected(selectedDropdownOption);
        });
    });

    function markDropdownOptionSelected(selectedDropdownOption){
        selectedDropdownOption.style["color"] = "white";
        selectedDropdownOption.style["background-color"] = "rgb(2, 93, 167)";
    }

    function markDropdownOptionUnselected(unselectedDropdownOption){
        unselectedDropdownOption.style["color"] = "#444";
        unselectedDropdownOption.style["background-color"] = "gray";
    }

    function dropdownOptionHadBeenAlreadySelected(alreadySelectedDropdownOption){
        return alreadySelectedDropdownOption.style["color"] === "white" && alreadySelectedDropdownOption.style["background-color"] === "rgb(2, 93, 167)"
    }