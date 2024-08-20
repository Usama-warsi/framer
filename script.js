const formValues = {};
function updateFormValues(e) {
  let t = e.target.name,
    r = e.target.value;
  (formValues[t] = r), console.log(formValues);
}
function updateSelectedLoanPurpose(e, t, r) {
  if (e.target.name === t) {
    let a = e.target.value,
      n = document.querySelector("." + r);
    n && (n.textContent = a);
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
  { name: "estimated_liquidity", selector: "framer-qv1jmm p" },
  { name: "estimated_credit_score", selector: "framer-hog4uv p" },
  { name: "purpose_of_loan", selector: "framer-5bqcnr p" },
  { name: "loan_type", selector: "framer-1p00p3l p" },
  { name: "term_length", selector: "framer-1ce4153 p" },
  { name: "exit_strategy", selector: "framer-1ls0vz0 p" },
  { name: "property_type", selector: "framer-iulnln p" },
];
inputs.forEach(({ name: e, selector: t }) => {
  document.addEventListener("click", function (r) {
    updateSelectedLoanPurpose(r, e, t);
  }),
    initializeParagraph(e, t);
});
const change = [
  { name: "investExp", selector: "framer-j84x7g p" },
  { name: "rentalProp", selector: "framer-1faotx7 p" },
];
function checkFields() {
  let e = ["first_name", "last_name", "email", "phone_number"].every(
      (e) =>
        "" === document.querySelector(`input[name="${e}"]`).value.trim()
    )
//     t = document.querySelector(".framer-168t776");
//   t.style.display = e ? "block" : "none";
}
change.forEach(({ name: e, selector: t }) => {
  document.addEventListener("change", function (r) {
    updateSelectedLoanPurpose(r, e, t);
  }),
    initializeParagraph(e, t);
}),
  document.addEventListener("keyup", function (e) {
    updateSelectedLoanPurpose(
      e,
      "Subject_property_address",
      "framer-126eccj p"
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
                                
                                document.querySelector('input[name="accept_conditions"]').addEventListener('change', function() {
                                    const framerElement = document.querySelector('.framer-y5opg');
                                    
                                    if (this.checked) {
                                        framerElement.style.display = 'none';
                                    } else {
                                        framerElement.style.display = 'block';
                                    }
                                });
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


    
   
    