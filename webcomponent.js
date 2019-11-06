	(function()  {
	let tmpl = document.createElement('template');
	var url = "https://www.ynet.co.il/home/0,7340,L-8,00.html";
	var temp = `
	<iframe id="frameid" src="`+ url  
	+
	`" integrity="" style="position: absolute; width:100%;  height:100%;"></iframe>
	`

	/* CSS within the project */
	tmpl.innerHTML = temp;
	
	class IFrame extends HTMLElement {
	
		constructor() {
			/*specify that we have a ShadowRoot and the cloned template needs to be appended to the Shadow DOM instead of directly to the DOM */
			super();
			/* Shadow DOM */
			this._shadowRoot = this.attachShadow({mode: 'open'});
			this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
			this.addEventListener("click", function() {
				window.open(url,"_blank");
				console.log("window opened " + url);
			}, false);			

	}

		get urlLink() {
			console.log("url Get " + url);
				return url;
		}
		set urlLink(value) {
			url = value;
			console.log("url Set " + url);
			 temp = `
			<iframe id="frameid" src="`+ url  
			+
			`" integrity="" style="position: absolute; width:100%;  height:100%;"></iframe>
			`
			tmpl.innerHTML = temp;
			this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}		
	
	}
	  /* Define web component - input: tag and class */
	  customElements.define('com-iprosis-sample-gauge', IFrame);
	})();
