let moneySpentArr = [0,0,0,0,0];
length = moneySpentArr.length;


//impFunction()
function updateMoneySpent() {

    var sum = document.querySelectorAll(".sum");

    for(var i=0;i<length;i++)
    {
        sum[i].innerHTML = " "+moneySpentArr[i]+" Rs. spent";        
    }
}



function submitExpense() {
    
    //parent >>
    var expenseTable = document.getElementsByClassName("expenses_table")[0];
    //inputs >>
    var inputAmount = document.getElementsByClassName("inputF1")[0].value;
    var inputCategory = document.getElementsByClassName("inputF1")[1].value;
    var inputDate = document.getElementsByClassName("inputF1")[2].value;
    var inputNote = document.getElementsByClassName("inputF1")[3].value;

    var inputCategoryIndex = document.getElementsByClassName("inputF1")[1].selectedIndex;

    if(inputAmount && inputDate && inputNote)
    {
        newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td style="border-bottom:2px solid white;">${inputAmount}</td>
            <td style="border-bottom:2px solid white;">${inputCategory}</td>
            <td style="border-bottom:2px solid white;">${inputDate}</td>
            <td style="border-bottom:2px solid white;">${inputNote}</td>`; 
        expenseTable.appendChild(newRow);
        moneySpentArr[inputCategoryIndex] = parseInt(moneySpentArr[inputCategoryIndex]) + parseInt(inputAmount);
        updateMoneySpent();
    }
    else{
        alert("Please enter all details correctly")
    }
}



function submitCategory() {
    //parent >>
    var categoriesPanel = document.getElementsByClassName("categories_panel")[0];
    //inputs >>
    var categoryValue = document.getElementsByClassName("inputF")[0].value;

    if(categoryValue){
        var options = document.getElementsByClassName("inputF1")[1];
        options.innerHTML = options.innerHTML + `<option value="${categoryValue}">${categoryValue}</option>`;
    }

    newCategory = document.createElement("p");
    newCategory.innerHTML = `
        ${categoryValue}: <span class="sum"></span>`;
    newCategory.classList.add("category");
    categoriesPanel.appendChild(newCategory);
    moneySpentArr.push(0);
    length++;
    updateMoneySpent();
    addCategoryP();
}



function addExpenseP(){
    var addExpensePanel = document.getElementsByClassName("add_expense_panel")[0];

    if(addExpensePanel.style.display == "block")
    {
        addExpensePanel.style.display = "none";
    }
    else{
        addExpensePanel.style.display = "block";
    }
}



function addCategoryP(){
    var addCategoryPanel = document.getElementsByClassName("add_category_panel")[0];

    if(addCategoryPanel.style.display == "block")
    {
        addCategoryPanel.style.display = "none";
    }
    else{
        addCategoryPanel.style.display = "block";
    }
}