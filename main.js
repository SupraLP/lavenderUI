
//Exposed functions for the game to call to change things
function ChangeState(newState) {
	//newState is a state enum with the values:
	//0 Login
	//1 Login in progress
	//2 Main
	//3 Social
	//4 Content
	//5 Galaxy
	//6 Testing
	//7 Settings
	//8 Connecting to a server

	console.log("[JS] Switching to " + newState);

	//Grab the various elements we care about
	var menuButtons = document.getElementById("menuButtons");

	var login = document.getElementById("login");
	var loginInProgress = document.getElementById("loginInProgress");
	var main = document.getElementById("main");
	var social = document.getElementById("social");
	var content = document.getElementById("content");
	var galaxy = document.getElementById("galaxy");
	var testing = document.getElementById("testing");
	var settings = document.getElementById("settings");
	var connecting = document.getElementById("connecting");

	//buttons
	var mainButton = document.getElementById("mainButton");
	var socialButton = document.getElementById("socialButton");
	var contentButton = document.getElementById("contentButton");
	var galaxyButton = document.getElementById("galaxyButton");
	var testingButton = document.getElementById("testingButton");
	var settingsButton = document.getElementById("settingsButton");

	//Hide all of them
	menuButtons.style.display = "none";
	login.style.display = "none";
	loginInProgress.style.display = "none";
	main.style.display = "none";
	social.style.display = "none";
	content.style.display = "none";
	galaxy.style.display = "none";
	testing.style.display = "none";
	settings.style.display = "none";
	connecting.style.display = "none";

	mainButton.classList.remove("active");
	socialButton.classList.remove("active");
	contentButton.classList.remove("active");
	galaxyButton.classList.remove("active");
	testingButton.classList.remove("active");
	settingsButton.classList.remove("active");

	//Show the ones for the state we just entered
	switch (parseInt(newState)) {
		case 0:
			{
				login.style.display = "";
			}
			break;
		case 1:
			{
				loginInProgress.style.display = "";
			}
			break;
		case 2:
			{
				mainButton.classList.add("active");
				main.style.display = "";
				menuButtons.style.display = "";
			}
			break;
		case 3:
			{
				social.style.display = "";
				menuButtons.style.display = "";
				socialButton.classList.add("active");
			}
			break;
		case 4:
			{
				content.style.display = "";
				menuButtons.style.display = "";
				contentButton.classList.add("active");
			}
			break;
		case 5:
			{
				galaxy.style.display = "";
				menuButtons.style.display = "";
				galaxyButton.classList.add("active");
			}
			break;
		case 6:
			{
				testing.style.display = "";
				menuButtons.style.display = "";
				testingButton.classList.add("active");
			}
			break;
		case 7:
			{
				settings.style.display = "";
				menuButtons.style.display = "";
				settingsButton.classList.add("active");
				LoadSettings();
			}
			break;
		case 8:
			{
				connecting.style.display = "";
			}
			break;
	}
}

function FailToLogin(reason) {
	var fail = document.getElementById("loginFail");
	fail.innerText = reason;
	fail.style.display = "block";
}

function TogglePassword() {
    var pass = document.getElementById("password");
    var type = pass.getAttribute("type");

    if (type == "password") {
        pass.setAttribute("type", "text");
        console.log(type + " -> text");
    }
    else
    {
        pass.setAttribute("type", "password");
        console.log(type + " -> password");
    }
}

//Avatar cards are created and added to the first element with the id avatarlist

function FailToGetAvatars(reason) {

}

function TogglePassword() {
	var pass = document.getElementById("password");
	var type = pass.getAttribute("type");
	var value = pass.getAttribute("value");

	if (type == "password") {
		pass.setAttribute("type", "text");
		value += "-";
		value = value.substring(0, value.length - 1);
		console.log(type + " -> text");
	}
	else
	{
		pass.setAttribute("type", "password");
		value += "-";
		value = value.substring(0, value.length - 1);
		console.log(type + " -> password");
	}
}

function Login() {
	//clear the error text before starting to login
	var fail = document.getElementById("loginFail");
	fail.innerText = "";
	fail.style.display = "none";

	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	game.Login(user, pass);
}

function Connect() {
	//clear the error text before starting to connect
	var fail = document.getElementById("connectFail");
	fail.innerText = "";
	fail.style.display = "none";

	var ip = document.getElementById("ip").value;
	var port = document.getElementById("port").value;
	game.Connect(ip, port);
}

function FailToConnect(reason) {
	var fail = document.getElementById("connectFail");
	fail.innerText = reason;
	fail.style.display = "block";
}

function ClickDiscord() {
	game.OpenLink("https://discord.gg/fWHjNfg");
}

function LoadSettings() {
	settingsPage(0);
}

function LoadThemes() {
	var registeredThemes = ["lavender", "dark", "light"]
	var themePicturePaths = ["/themes/supra/pictures/screenshot 2019-08-03 162046.png", "/themes/supra/pictures/screenshot 2019-08-03 165131.png", "/themes/supra/pictures/screenshot 2019-08-03 165205.png"];
	var themeContainer = document.getElementById("themeList");

	themeContainer.innerHTML = "";

	for(var i = 0; i < registeredThemes.length; i++) {
		themeContainer.innerHTML += '<button class="themeCard" onclick="ChangeTheme("' + registeredThemes[i] + '")"><img class="themeImage" src="' + themePicturePaths[i] + '" ></img><div>' + registeredThemes[i] + '</div></button>';
	}
}

function LoadIcons() {
	var registeredIcons = ["dark", "light"]
	var iconsDark = ["/themes/supra/icons/dark/settings.png", "/themes/supra/icons/dark/content.png", "/themes/supra/icons/dark/galaxy.png"];
	var iconsLight = ["/themes/supra/icons/light/settings.png", "/themes/supra/icons/light/content.png", "/themes/supra/icons/light/galaxy.png"];
	var icons = [iconsDark, iconsLight];
	var iconContainer = document.getElementById("iconList")

	iconContainer.innerHTML = "";

	for(var i = 0; i < registeredIcons.length; i++) {
		iconContainer.innerHTML += '<button class="themeCard" onclick="ChangeTheme("' + registeredIcons[i] + '")"><div class="themeImage" style="margin-left: -10px;"><img style="width: 90px; height: 90px;" src="' + icons[i][0] + '"></img><img style="width: 90px; height: 90px;" src="' + icons[i][1] + '"></img><img style="width: 90px; height: 90px;" src="' + icons[i][2] + '"></img></div><div>' + registeredIcons[i] + '</div></button>';
	}
}

function ChangeTheme(name) {
	/*console.log("trying to load " + name);
    var fileref=document.createElement("link");
    fileref.setAttribute("id", "colorHolder");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("href", "/themes/supra/colors/colors-" + name + ".css");
	console.log("trying to add " + fileref + " to head");

	document.getElementsByTagName("head")[0].removeChild(document.getElementById("colorHolder"));
    document.getElementsByTagName("head")[0].appendChild(fileref)*/
	document.getElementById("colorHolder").innerHTML = '<link rel="stylesheet" type="text/css" href="/themes/supra/colors/colors-' + name + '.css">';
}

/*document.addEventListener('keyup', (e) => {
	switch(e.key) {
		case "a":
			alert("a");
			break;
		default:

	}
});
*/

function settingsPage(newState) {
	//newState is a state enum with the values:
	//0 UI
	//1 Graphics
	//2 Gameplay
	//3 Audio

	console.log("[JS] Switching settings page to " + newState);

	//Grab the various elements we care about

	var ui = document.getElementById("uiSettings");
	var graphics = document.getElementById("graphicsSettings");
	var gameplay = document.getElementById("gameplaySettings");
	var audio = document.getElementById("audioSettings");

	//buttons
	var uiButton = document.getElementById("uiButton");
	var graphicsButton = document.getElementById("graphicsButton");
	var gameplayButton = document.getElementById("gameplayButton");
	var audioButton = document.getElementById("audioButton");

	//Hide all of them
	ui.style.display = "none";
	graphics.style.display = "none";
	gameplay.style.display = "none";
	audio.style.display = "none";

	uiButton.classList.remove("active");
	graphicsButton.classList.remove("active");
	gameplayButton.classList.remove("active");
	audioButton.classList.remove("active");

	//Show the ones for the state we just entered
	switch (parseInt(newState)) {
		case 0:
			{
				LoadThemes();
				LoadIcons();
				ui.style.display = "";
				uiButton.classList.add("active");
			}
			break;
		case 1:
			{
				graphics.style.display = "";
				graphicsButton.classList.add("active");
			}
			break;
		case 2:
			{
				gameplay.style.display = "";
				gameplayButton.classList.add("active");
			}
			break;
		case 3:
			{
				audio.style.display = "";
				audioButton.classList.add("active");
			}
			break;
	}
}
