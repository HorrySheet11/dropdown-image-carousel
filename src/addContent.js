export function addContent() {
	const header = document.createElement("header");
	header.innerHTML = `<button id="dropdown-button">DROPDOWN</button>
    <div class="dropdown-content">
        <button id="edit">Edit</button>
        <button id="copy">Copy</button>
        <button id="delete">Delete</button>
    </div>`;
	document.body.appendChild(header);
}
