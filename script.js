function updateSelectedLoanPurpose(e, t, r,c) {
  if (e.target.name === t) {
    let a='';
    if(e.target.name =='investExp'){
      a = e.target.value+' years';
    }
    else
      if(e.target.name =='subject_address'){
      a = 'Filled';
      }
    else{
       a = e.target.value}
      n = document.querySelector("." + r);
    n && (n.textContent = a);
    d = document.querySelector("." + c);
    const list = d.classList;
list.add("bg");
  }
}
  function initializeParagraph(e, t) {
    let r = document.querySelector(`input[name="${e}"]:checked`);
    if (r) {
    
      let a = document.querySelector("." + t);
      a && (a.textContent = r.value);
    }
  }
  const change = [
    { name: "investExp",class:'framer-vbhz6l', selector: "framer-11st81e p" },
    { name: "rentalProp",class:'framer-a7oayw', selector: "framer-6o29rb p" },
    { name: "loan_to_value",class:'framer-6yumns', selector: "framer-6yumns p" },
  ];
  
  
  change.forEach(({ name: e, class:c, selector: t }) => {
    document.addEventListener("change", function (r) {
      updateSelectedLoanPurpose(r, e, t,c);
    }),
      initializeParagraph(e, t);
  })

  const inputs = [
  { name: "estimated_liquidity",class:'framer-a13tdo', selector: "framer-a13tdo p" },
  { name: "estimated_credit_score",class:'framer-9ov7jd', selector: "framer-9ov7jd p" },
  { name: "purpose_of_loan",class:'framer-g6rd6m', selector: "framer-g6rd6m p" },
  { name: "loan_type", class:'framer-1w9w8gr',selector: "framer-1w9w8gr p" },
  { name: "term_length", class:'framer-1yx25be',selector: "framer-1yx25be p" },
  { name: "exit_strategy", class:'framer-1f08dgq',selector: "framer-1f08dgq p" },
  { name: "property_type",class:'framer-bwcnu1', selector: "framer-bwcnu1 p" },
];
inputs.forEach(({ name: e,class:c, selector: t }) => {
  document.addEventListener("click", function (r) {
    updateSelectedLoanPurpose(r, e, t,c);
  }),
    initializeParagraph(e, t);
});

document.addEventListener("keyup", function (e) {
    updateSelectedLoanPurpose(
      e,
      "subject_address",
      "framer-1jv4u0h p",
      'framer-yjpsid'
    );
  });
  window.onload = function() {
    // Select the element with the name attribute 'accept_conditions'
    var element = document.querySelector('[name="accept_conditions"]');
    if (element) {
        element.setAttribute('onchange', 'yourFunction(this)');
    }
};

function yourFunction(e) {
    // Select elements with the specified classes
    const framerElement = document.querySelector('.framer-id5oe4');
    const framerElement1 = document.querySelector('.framer-f78q6p');
    
    // Check if the elements exist before applying the filter
    if (framerElement && framerElement1) {
        if (e.checked) {
            framerElement.style.filter = 'grayscale(0)';
            framerElement1.style.filter = 'grayscale(0)';
        } else {
            framerElement.style.filter = 'grayscale(1)';
            framerElement1.style.filter = 'grayscale(1)';
        }
    }
}
  