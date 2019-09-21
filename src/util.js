const { validateInput } = require('./validations');


exports.constants = {
  lowThreshold: 18200,
  firstTier: 37000,
  firstTierBase: 3572,
  secondTier: 80000,
  secondTierBase: 17547,
  thirdTier: 180000,
  thirdTierBase: 54547,
};



exports.actualIncome = (income, age, medicareLevy, TBRLevy, LILevy) => {
  result = income - this.returnTax(income, age, medicareLevy, TBRLevy, LILevy);
  return result;
};


exports.returnTax = (income, age, medicareLevy, TBRLevy, LILevy) => {
  const stage1 = 0.19;
  const stage2 = 0.325;
  const stage3 = 0.37;
  const stage4 = 0.45;
  const medicareLevyCharge = 0.02;
  const TBRLevyCharge = 0.02;
  if (income <= this.constants.lowThreshold) {
    return 0.0;
  } else if (income <= this.constants.firstTier) {
    if (LILevy) {
      if (income > 20543) {
        return this.medicareTax(medicareLevy, income, 20543, stage1, medicareLevyCharge);
      } else {
        return 0;
      }
    } else {
      return this.medicareTax(medicareLevy, income, this.constants.lowThreshold, stage1, medicareLevyCharge);
    }
  } else if (income <= this.constants.secondTier) {
    return this.constants.firstTierBase + this.medicareTax(medicareLevy, income, this.constants.firstTier, stage2, medicareLevyCharge);
  } else if (income <= this.constants.thirdTier) {
    return this.constants.secondTierBase + this.medicareTax(medicareLevy, income, this.constants.secondTier, stage3, medicareLevyCharge);
  } else {
    if (TBRLevy) {
      return this.constants.thirdTierBase + this.medicareTax(medicareLevy, income, this.constants.thirdTier, stage4, medicareLevyCharge) +
        (income - this.constants.thirdTierBase) * TBRLevyCharge;
    }
    return this.constants.thirdTierBase + this.medicareTax(medicareLevy, income, this.constants.thirdTier, stage4, medicareLevyCharge);

  }
};


exports.medicareTax = (levy, income, threshold, taxRate, additionalTax) => {
  if (levy) {
    return (income - threshold) * taxRate + income * additionalTax;
  } else {
    return (income - threshold) * taxRate;
  }
};


exports.createParagraph = (text, id) => {

  const data = document.createTextNode(text);
  const p = document.createElement("p");
  p.appendChild(data);
  p.id = id;
  return p;

};

exports.conversion = (bool) => {
  if (bool) {
    return "Yes";
  }
  return "No";
};


exports.calculateIncome = () => {

  event.preventDefault();

  console.log("before validate");


  const name = document.querySelector('input#name').value;
  const age = document.querySelector('input#age').value;
  const income = document.querySelector('input#income').value;
  const ml = document.querySelector('input#medicareLevy').checked;
  const tl = document.querySelector('input#TBRLevy').checked;
  const ll = document.querySelector('input#LILevy').checked;
  const id = Date.now();

  if (validateInput(name, age, income)) {

    const div = document.createElement("div");
    div.setAttribute("class", "col-sm-12 mb-2");
    div.setAttribute("id", id);
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");



    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    var text = document.createTextNode(`Tax Calculation for ${name} ( Age : ${age} )`);
    h5.appendChild(text);

    const row = document.createElement("div");
    row.setAttribute("class", "row mb-3");

    const col1 = document.createElement("div");
    col1.setAttribute("class", "col-6");

    const col2 = document.createElement("div");
    col2.setAttribute("class", "col-6");

    col1.appendChild(this.createParagraph(`Income : ${income}`, 'income-p'));
    col1.appendChild(this.createParagraph(`Tax payable : ${this.returnTax(income, age, ml, tl, ll)}`, 'tax'));
    col1.appendChild(this.createParagraph(`Income after Tax : ${this.actualIncome(income, age, ml, tl, ll)}`, 'income-after-tax'));
    col2.appendChild(this.createParagraph(`Medicare Levy : ${this.conversion(ml)}`, 'ml'));
    col2.appendChild(this.createParagraph(`TBR Levy : ${this.conversion(tl)}`, 'tl'));
    col2.appendChild(this.createParagraph(`LILevy : ${this.conversion(ll)}`, 'll'));



    row.appendChild(col1);
    row.appendChild(col2);
    cardBody.appendChild(h5);
    cardBody.appendChild(row);
    card.appendChild(cardBody);
    div.appendChild(card);

    document.getElementById("calculated").insertBefore(div, document.getElementById("calculated").firstChild);
  } else {
    alert("please fill all the inputs properly");
  }

};




