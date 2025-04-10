const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const table=document.querySelector("table");

        let priceElements=table.querySelectorAll(".prices");

        let total=0;
        priceElements.forEach(price=>{
            const value=parseFloat(price.textContent);
            if(!isNaN(value)){
                total+=value;
            }
        })
        const totalRow=document.createElement("tr");

        const totalCell=document.createElement("td");
        totalCell.colSpan=2;
        totalCell.textContent=`Total Price : $${total.toFixed(2)}`;

        totalRow.appendChild(totalCell);

        table.appendChild(totalRow)

};

getSumBtn.addEventListener("click", getSum);

