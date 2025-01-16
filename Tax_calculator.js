const calculateTax = (income) => {
    let tax = 0;
   
    if (income <= 50000) {
      tax = income * 0.1;
    } else if (income <= 100000) {
      tax = 50000 * 0.1 + (income - 50000) * 0.2;
    } else {
      tax = 50000 * 0.1 + 50000 * 0.2 + (income - 100000) * 0.3;
    }
   
    return tax;
  };
   
  const income = 75000;
  const taxAmount = calculateTax(income);
   
  console.log(`Podatek dla dochodu ${income} wynosi ${taxAmount.toFixed(2)}`);
   