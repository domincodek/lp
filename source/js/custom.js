var styleElem = document.head.appendChild(document.createElement("style"));

if(document.querySelectorAll('.show-more')) {
	document.querySelectorAll('.show-more').forEach((button) => {
		button.onclick = () => {
			const item = button.closest('.info-box');
			document.querySelectorAll('.info-box').forEach((box) => {
				if(item !=box ) {
					box.classList.remove('active');
				}
			});
			item.classList.toggle('active');
			if(item.classList.contains('active')) {
				button.textContent = 'Show less';
				setTimeout(() => {
					styleElem.innerHTML = ".active::after {height: calc(100% + " + button.closest('.more').scrollHeight + "px - 75px);}";
				}, 300);
			} else {
				button.textContent = 'Read more';
			}
		}
	});
}