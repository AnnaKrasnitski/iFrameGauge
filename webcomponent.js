	/* CSS within the project */
	tmpl.innerHTML = `

		
<a href="https://www.walla.co.il" target="theFrame"> </a><br /><br />
<iframe width="500" height="500" src="https://www.walla.co.il" name="theFrame"></iframe>
	 
	`;
	
	class IFrame extends HTMLElement {
	
		constructor() {
			/*specify that we have a ShadowRoot and the cloned template needs to be appended to the Shadow DOM instead of directly to the DOM */
			super();
			/* Shadow DOM */
			this._shadowRoot = this.attachShadow({mode: 'open'});
			this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
			this.style.height = "100%";
			//this._shadowRoot.getElementById("frameid").contentWindow.location.href;
		
		
			 this.addEventListener("click", function() {
				window.open(this._urlLink,"_blank");
				console.log("window opened");
			}, false);

			document.getElementById("frameid").addEventListener("click", function() {
				window.open(this._urlLink,"_blank");
				console.log("window opened from frame");
			}, false);
			
			//this._urlLink = "https://www.sap.com/index.html";	
			console.log("Sap link passed: " + this._urlLink);
		}
	
		get urlLink() {
			console.log("url Get");
				return this._urlLink;
		}
		set urlLink(value) {
			console.log("url Set");
			this._urlLink = value;
		}
	
	}
	  /* Define web component - input: tag and class */
	  customElements.define('com-iprosis-sample-gauge', IFrame);
	})();
