function insert(num) {
  $(".display").val($(".display").val() + num);
}

function result() {
  $(".display").val(eval($(".display").val()));
}

function percetual() {
  $(".display").val(eval($(".display").val()) / 100);
}

function clear() {
  $(".display").val("");
}

function backspace() {
  Value = $(".display").val();
  $(".display").val(Value.substring(0, Value.length - 1));
}
