function insert (num) {
	document.form.display.value += num
}

function backspace () {
	var display = document.form.display.value
	document.form.display.value = display.substring(0, display.length - 1)
}

function clean () {
	document.form.display.value = ""
}

function equal () {
	var expression = document.form.display.value
	if (expression) {
		document.form.display.value = eval (expression)
	}
}