	(function()  {
	let tmpl = document.createElement('template');
	
	/* CSS within the project */
	tmpl.innerHTML = `
		   <html>
		   <head>
		   <script type="text/javascript">
		   </script>
		   </head>
		   <body>
		   <iframe id="frameid" src="https://www.walla.co.il/" integrity="106ff17f82322b5e6e24ad6d3292d854922ad74ebfb72a81a7a0ef5a4b8381d1" style="position: absolute; width:100%;  height:100%;"></iframe>
		   </body></html>	 
	`;
	
	class IFrame extends HTMLElement {
	
		constructor() {
			/*specify that we have a ShadowRoot and the cloned template needs to be appended to the Shadow DOM instead of directly to the DOM */
			super();
			/* Shadow DOM */
			this._shadowRoot = this.attachShadow({mode: 'open'});
			this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
			
			this._urlLink = "https://www.sap.com/index.html";	
			console.log("url link is: " + this._urlLink);
			
			this.addEventListener("click", function() {
				window.open(this._urlLink,"_blank");
				console.log("window opened " + this._urlLink);
			}, false);


			// window.onload=function() {
			// 	console.log("what happens?");
			// 	document.getElementById("iframeDiv").click=function() {
			// 		console.log("want to know");
			// 	    document.getElementById("frameid").innerHTML='<iframe src="'+this.this._urlLink+'"></iframe>';
			// 	  console.log("now"+ document.getElementById("frameid").getAttribute("src"));
			// 	}
			// };
					

	}

		get urlLink() {
			console.log("url Get " + this._urlLink);
				return this._urlLink;
		}
		set urlLink(value) {
			this._urlLink = value;
			console.log("url Set " + this._urlLink);
		}
	
	}
	  /* Define web component - input: tag and class */
	  customElements.define('com-iprosis-sample-gauge', IFrame);
	})();
