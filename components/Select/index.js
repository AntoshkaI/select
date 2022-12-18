export default class Select extends HTMLElement {
     connectedCallback() {   

        let select = document.createElement('div');
        select.style.width = "100px";
        select.style.height = "25px";
        select.style.display = "block";
        select.style.textAlign = "center"
        select.style.padding = "5px";
        select.style.fontSize = "1.15rem"
        
        select.style.borderRadius = "4px"
        select.style.border = "1px solid black";
        select.style.display = "inline-block";
        select.style.minHeight = "16px";
        select.style.borderRadius = "3px";
        select.style.cursor = "pointer";
       
        let value = document.createElement('div');
        select.appendChild(value);
        let WeekDays = document.createElement('div');
        WeekDays.style.display = "center";
        WeekDays.style.backgroundColor = "burlywood";
        WeekDays.style.border = "1px solid black";
        WeekDays.style.margin = "10px 0 0 0"
        WeekDays.style.borderRadius = "3px";
        WeekDays.style.cursor = "pointer";
        WeekDays.style.justifyContent = "center"
        WeekDays.style.textAlign = "center"
        
        
        let values = this.attributes.values.value.split(" ");
            for (let i = 0; i < values.length; i++) {
                let ChosenValue = document.createElement('div');
                ChosenValue.innerText = values[i];
                
                ChosenValue.onclick = function (e) {
                    value.innerHTML = this.innerHTML;
                    WeekDays.style.display = 'none';
                    this.value = this.innerText;
                    e.stopPropagation();
                }
                WeekDays.appendChild(ChosenValue);
            }
    
            select.appendChild(WeekDays);
            select.onclick = function () {
                WeekDays.style.display = 'block';
        }
        this.appendChild(select);
    }
}


