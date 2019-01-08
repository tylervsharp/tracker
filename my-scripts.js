// Create database count

if (localStorage.getItem("count") == null) {
	localStorage.setItem("count",0)
}

// Update HTML to match count

function update() {
	document.getElementById("count").innerHTML = Number(localStorage.getItem("count"))
}

update()

// Add one to count

function plusOne() {
	localStorage.setItem("count",(Number(localStorage.getItem("count"))+1))
	update()
}

// Reset count

function reset() {
	if (window.confirm("Are you sure you want to reset?")) {
		localStorage.setItem("count",0)
		update()
	}
}

