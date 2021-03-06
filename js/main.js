function App(id, name, displayName, appHTML) {
	this.id = id;
	this.name = name;
	this.displayName = displayName;
	this.imagePath = "/themes/supra/app-icons/" + name + ".png";
	this.appHTML = appHTML;
	this.htmlAsElement = document.createElement("div");
	this.htmlAsElement.style = "width: 100%; height: 100%; position: fixed; background-color: rgba(38,38,38,1)";
	this.htmlAsElement.innerHTML = appHTML + '<ons-button id="backButton" onclick="home(' + this.id + ')" style="z-index: 10; position: absolute; width: 100px; height: 35px; top: 3px; left: 3px;" modifier="material" >HOME</ons-button>';;
}

var apps = [new App(0, "chromium", "Browser", `
											<div id="browser">
												<iframe src="" width="100%" height="100%" X-Frame-Op></iframe>
											</div>`),
			new App(1, "youtube", "Youtube", `
											<div id="youtube">
												<iframe  width="100%" height="100%" src="https://www.youtube.com/embed/Ur_tXqaNXOI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											</div>`),
			new App(2, "calculator", "Calculator", `
											<div id="calculator">
												<form name="calculator">
													 <table>
													    <tr>
													       <td colspan="4">
													          <input type="text" name="display" id="display" disabled>
													       </td>
													    </tr>
													    <tr>
													       <td><input type="button" name="seven" value="7" onclick="calculator.display.value += '7'"></td>
													       <td><input type="button" name="eight" value="8" onclick="calculator.display.value += '8'"></td>
													       <td><input type="button" name="nine" value="9" onclick="calculator.display.value += '9'"></td>
													       <td><input type="button" class="operator" name="plus" value="+" onclick="calculator.display.value += '+'"></td>
													    </tr>
													    <tr>
													       <td><input type="button" name="four" value="4" onclick="calculator.display.value += '4'"></td>
													       <td><input type="button" name="five" value="5" onclick="calculator.display.value += '5'"></td>
													       <td><input type="button" name="six" value="6" onclick="calculator.display.value += '6'"></td>
													       <td><input type="button" class="operator" name="minus" value="-" onclick="calculator.display.value += '-'"></td>
													    </tr>
													    <tr>
													       <td><input type="button" name="one" value="1" onclick="calculator.display.value += '1'"></td>
													       <td><input type="button" name="two" value="2" onclick="calculator.display.value += '2'"></td>
													       <td><input type="button" name="three" value="3" onclick="calculator.display.value += '3'"></td>
													       <td><input type="button" class="operator" name="times" value="x" onclick="calculator.display.value += '*'"></td>
													    </tr>
													    <tr>
													       <td><input type="button" class="clear" name="clear" value="C" onclick="calculator.display.value = ''"></td>
													       <td><input type="button" name="zero" value="0" onclick="calculator.display.value += '0'"></td>
													       <td><input type="button" name="doit" value="=" onclick="calculator.display.value = eval(calculator.display.value)"></td>
													       <td><input type="button" class="operator" name="div" value="/" onclick="calculator.display.value += '/'"></td>
													    </tr>
													 </table>
												 </form>
											</div>`),
			new App(3, "camera", "Camera", "")];

function placeApps() {
	var appsContainer = document.getElementsByClassName("home-center")[0].appendChild(document.createElement("ons-row"));
	appsContainer.style.float = "left";
	apps.forEach((app, i) => {
		var appElement = document.createElement("div");
		var appText = document.createElement("div");
		appText.innerText = app.displayName;
		appElement.classList = "app";
		appElement.style.backgroundImage = "url(" + app.imagePath + ")";
		appElement.onclick = function() {document.getElementById("pages/home.html").appendChild(app.htmlAsElement)}
		appElement.appendChild(appText);
		appsContainer.appendChild(appElement);
	});
}

function home(appIndex) {
	document.getElementById("pages/home.html").removeChild(apps[appIndex].htmlAsElement); //childNodes[1].innerHTML -= apps[appIndex].htmlAsElement;
}
