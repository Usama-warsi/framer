const formValues = {};
function updateFormValues(e) {
  let t = e.target.name,
    r = e.target.value;
  (formValues[t] = r), console.log(formValues);
}
function updateSelectedLoanPurpose(e, t, r,c) {
  if (e.target.name === t) {
    let a='';
    if(e.target.name =='investExp'){
      a = e.target.value+' years';
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
const inputs = [
  { name: "estimated_liquidity",class:"framer-2dhu1x", selector: "framer-qv1jmm p" },
  { name: "estimated_credit_score",class:"framer-1ao7k1y", selector: "framer-hog4uv p" },
  { name: "purpose_of_loan",class:"framer-43sdov", selector: "framer-5bqcnr p" },
  { name: "loan_type",class:"framer-1qcpykd", selector: "framer-1p00p3l p" },
  { name: "term_length",class:"framer-txy3p5", selector: "framer-1ce4153 p" },
  { name: "exit_strategy", class:"framer-15ep3f3",selector: "framer-1ls0vz0 p" },
  { name: "property_type",class:"framer-1xq5a03", selector: "framer-iulnln p" },
];
inputs.forEach(({ name: e,class:c, selector: t }) => {
  document.addEventListener("click", function (r) {
    updateSelectedLoanPurpose(r, e, t,c);
  }),
    initializeParagraph(e, t);
});
const change = [
  { name: "investExp",class:"framer-4kpw1q", selector: "framer-j84x7g p" },
  { name: "rentalProp",class:"framer-6t3of9", selector: "framer-1faotx7 p" },
];
function checkFields() {
  let e = ["first_name", "last_name", "email", "phone_number"].every(
      (e) =>
        "" === document.querySelector(`input[name="${e}"]`).value.trim()
    )
//     t = document.querySelector(".framer-168t776");
//   t.style.display = e ? "block" : "none";
}
change.forEach(({ name: e,class:c, selector: t }) => {
  document.addEventListener("change", function (r) {
   
    updateSelectedLoanPurpose(r, e, t,c);
  }),
    initializeParagraph(e, t);
}),
  document.addEventListener("keyup", function (e) {
    updateSelectedLoanPurpose(
      e,
      "Subject_property_address",
      "framer-126eccj p",
      "framer-1n9nvqp"
    );
  }),
  initializeParagraph("Subject_property_address", "framer-126eccj p"),
  ["first_name", "last_name", "email", "phone_number"].forEach((e) => {
    document
      .querySelector(`input[name="${e}"]`)
      .addEventListener("input", checkFields),
      document
        .querySelector(`input[name="${e}"]`)
        .addEventListener("input", updateFormValues);
  }),
  checkFields(),
  document
    .querySelector(".framer-nb3rxv")
    .addEventListener("click", function (e) {
      setTimeout(function () {
        ["investExp", "rentalProp"].forEach((e) => {
          document
            .querySelector(`input[name="${e}"]`)
            .addEventListener("change", updateFormValues);
        }),
          ["estimated_liquidity", "estimated_credit_score"].forEach(
            (e) => {
              document
                .querySelector(`input[name="${e}"]`)
                .addEventListener("click", updateFormValues),
                document
                  .querySelectorAll(`input[name="${e}"]`)
                  .forEach((e) => {
                    e.addEventListener("change", updateFormValues);
                  });
            }
          ),
          document
            .querySelector(".framer-9ms1vn")
            .addEventListener("click", function (e) {
              setTimeout(function () {
                ["Subject_property_address"].forEach((e) => {
                  document
                    .querySelector(`input[name="${e}"]`)
                    .addEventListener("input", updateFormValues);
                }),
                  ["property_type"].forEach((e) => {
                    document
                      .querySelector(`input[name="${e}"]`)
                      .addEventListener("click", updateFormValues),
                      document
                        .querySelectorAll(`input[name="${e}"]`)
                        .forEach((e) => {
                          e.addEventListener("change", updateFormValues);
                        });
                  }),
                  document
                    .querySelector(".framer-k0yb2u")
                    .addEventListener("click", function (e) {
                      setTimeout(function () {
                        !(function e() {
                            document.querySelector('.framer-17nbhel').addEventListener('click', function() {
                           console.log(formValues);   
                              setTimeout(function(){
                                  
                                document.querySelector('.framer-1bwog5g').addEventListener('change', function() {
                                  const framerElement = document.querySelector('.framer-k5wwgf');
                                  const framerElement1 = document.querySelector('.framer-16j2cpu');
                                  
                                  if (this.checked) {
                                      framerElement.style.filter = 'grayscale(0)';
                                      framerElement1.style.filter = 'grayscale(0)';
                                  } else {
                                      framerElement.style.filter = 'grayscale(1)';
                                      framerElement1.style.filter = 'grayscale(1)';
                                  }
                              });
                              },200);

                            });
                          let t = document.querySelector("form");
                          for (let r in formValues)
                            if (formValues.hasOwnProperty(r)) {
                              let a = document.createElement("input");
                              (a.type = "hidden"),
                                (a.name = r),
                                (a.id = r),
                                (a.value = formValues[r]),
                                t.appendChild(a);
                            }
                        })();
                      }, 500);
                    });
              }, 500);
            });
      }, 500);
    });


    
   

    