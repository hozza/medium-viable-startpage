// @format

const WELCOME_MESSAGE_TEMPLATE = ["night", "morning", "afternoon", "evening"];

// MASTER_MAP, and other settings will be loaded separately

let $container = document.getElementById("content");
let getUrl = {};

let $shortcutDisplayList = document.getElementsByClassName("shortcut");
let listeningForShortcut = false;
let listenerTimeout;

function setupWelcomeMessage() {
	let NAME = storage.settings.name;

	let curHours = new Date().getHours();
	curHours = Math.floor(curHours / 6); // Simply dividing current hours by 6 proves to be a good enough aproximation.
	if (curHours == 4) curHours = 3;
	let welcome = "Good " + WELCOME_MESSAGE_TEMPLATE[curHours] + ", " + NAME;
	document.getElementById("welcome-string").innerHTML = welcome;
}

function setupGroups() {
	let MASTER_MAP = storage.bookmarks;

	$container.innerHTML = "";

	for (let i = 0; i < MASTER_MAP.length; i++) {
		let curGroupData = MASTER_MAP[i];

		let group = document.createElement("div");
		group.className = "group";
		$container.appendChild(group);

		let header = document.createElement("h1");
		header.innerHTML = curGroupData.groupName;
		group.appendChild(header);

		for (let j = 0; j < curGroupData.items.length; j++) {
			let curItemData = curGroupData.items[j];

			let pContainer = document.createElement("p");
			group.appendChild(pContainer);

			let link = document.createElement("a");
			link.innerHTML = curItemData.name;
			link.setAttribute("href", curItemData.url);
			pContainer.appendChild(link);

			let shortcutDisplay = document.createElement("span");
			shortcutDisplay.innerHTML = curItemData.shortcutKey;
			shortcutDisplay.className = "shortcut";
			shortcutDisplay.style.animation = "none";
			pContainer.appendChild(shortcutDisplay);

			getUrl[curItemData.shortcutKey] = curItemData.url;
		}
	}
}

function shortcutListener(e) {
	let SHORTCUT_STARTER = storage.settings.shortcut_starter;
	let SHORTCUT_TIMEOUT = storage.settings.shortcut_timeout;

	let key = e.key.toLowerCase();

	if (listeningForShortcut && getUrl.hasOwnProperty(key)) {
		window.location = getUrl[key];
	}

	if (key === SHORTCUT_STARTER) {
		clearTimeout(listenerTimeout);
		listeningForShortcut = true;

		// Animation reset
		for (let i = 0; i < $shortcutDisplayList.length; i++) {
			$shortcutDisplayList[i].style.animation = "none";
			setTimeout(function () {
				$shortcutDisplayList[i].style.animation = "";
			}, 10);
		}

		listenerTimeout = setTimeout(function () {
			listeningForShortcut = false;
		}, SHORTCUT_TIMEOUT);
	}
}

function handle_local_storage(key) {
	// init local storage
	if (localStorage.getItem(key) === null) {
		window.localStorage.setItem(key, JSON.stringify(storage[key]));
	}
	// retrieve existing storage
	else {
		storage[key] = JSON.parse(window.localStorage.getItem(key));
	}
}

function main() {
	handle_local_storage("settings");
	handle_local_storage("bookmarks");

	document.body.style.backgroundImage =
		"url('" + storage.settings.background_url + "')";

	setupWelcomeMessage();
	setupGroups();
	document.addEventListener("keyup", shortcutListener, false);
}

main();
