window.onload = function () {
  const btnSym = [
    ["CE", "C", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [3, 2, 1, "+"],
    [".", 0, "="],
  ];

  btnSym.forEach((btns) => {
    const row = $("<div>").addClass("row gap-2 my-2");
    btns.forEach((btn) => {
      const button = $("<input>");
      button.attr({ type: "button", value: btn });

      const buttonActions = {
        "=": { func: result, class: "btn btn-success col" },
        CE: { func: clear, class: "btn btn-danger col" },
        C: { func: backspace, class: "btn btn-danger col" },
        "%": { func: percetual, class: "btn btn-info col" },
      };

      if (buttonActions[btn]) {
        button.on("click", () => buttonActions[btn].func());
        button.addClass(buttonActions[btn].class);
      } else {
        button.on("click", () => insert(btn));
        if (["+", "-", "*", "/", "."].includes(btn)) {
          button.addClass("btn btn-info col");
        } else {
          button.addClass("btn btn-secondary col");
        }
      }

      row.append(button);
    });
    $("#btn-cal").append(row);
  });
};
