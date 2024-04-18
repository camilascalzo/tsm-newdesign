const userConsent = localStorage.getItem('cookieConsent');
const cookieContainers = document.querySelectorAll(".cookie-banner");
const iframeWrappers = document.querySelectorAll('.iframe-wrapper');
const nextBtnModal = document.querySelectorAll(".btn-next");
const loaders = document.querySelectorAll('.loader');

function loadVimeoVideos() {
	iframeWrappers.forEach(wrapper => {
			const iframe = wrapper.querySelector('iframe');
			iframe.src = iframe.dataset.src; 
	});
}

function showLoader() {
	loaders.forEach(loader => {
			loader.style.display = 'block';
	});
	loadVimeoVideos();
	hideLoader();
}

function hideLoader() {
	setTimeout(function() {
		const loaders = document.querySelectorAll('.loader');
		loaders.forEach(loader => {
			loader.style.display = 'none';
		});
	}, 2000);
}

 function handleAcceptButtonClick() {
	localStorage.setItem('cookieConsent', 'accepted');
	cookieContainers.forEach(cookieBanner => {
			cookieBanner.style.display = 'none';
	});
	nextBtnModal.forEach(item => { 
		item.style.opacity = '1';
	});

	showLoader();
}

window.addEventListener('beforeunload', () => {
	localStorage.removeItem('cookieConsent');
});

function createCookieBanner() {
	cookieContainers.forEach(container => {
		const cookieBanner = document.createElement('div');
		cookieBanner.className = 'cookie-banner';

		const cookiePolicy = document.createElement('p');
		cookiePolicy.className = 'cookie-policy';
		
		const privacyPolicyLink = document.createElement('a');
		privacyPolicyLink.href = "https://vimeo.com/cookie_policy";
		privacyPolicyLink.target = "_blank";
		privacyPolicyLink.textContent = "Vimeo's privacy policy.";
		cookiePolicy.textContent = "This site uses Vimeo videos to offer you multimedia content. ";
		cookiePolicy.appendChild(document.createTextNode("By clicking \"Accept\", you consent to load Vimeo videos and to use cookies according to "));
		cookiePolicy.appendChild(privacyPolicyLink);
		cookiePolicy.appendChild(document.createElement('br'));
		cookiePolicy.appendChild(document.createTextNode("Your consent is temporary and will be reset once the browser refreshes."));

		const acceptButtonContainer = document.createElement('div');
		acceptButtonContainer.className = 'accept-cookies-btn-container';
		const acceptButton = document.createElement('button');
		acceptButton.className = 'accept-cookies-btn';
		acceptButton.textContent = 'Accept';

		acceptButtonContainer.appendChild(acceptButton);
		cookieBanner.appendChild(cookiePolicy);
		cookieBanner.appendChild(acceptButtonContainer);
		container.appendChild(cookieBanner);

		if (!userConsent) {
			cookieBanner.style.display = 'block';
			nextBtnModal.forEach(item => { 
				item.style.opacity = '0.1';
			});
		}

    acceptButton.addEventListener('click', handleAcceptButtonClick);
	});
}

createCookieBanner();
