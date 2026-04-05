function addItem() {
    const input = document.getElementById("itemInput");
    const list = document.getElementById("itemList");

    const value = input.value.trim();
    if (value === "") {
        alert("Please enter a valid item.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);

    input.value = ""; // Clear input
}
