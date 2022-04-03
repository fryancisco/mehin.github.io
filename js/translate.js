const CreateTranslate = () => {
	return {
		init: () => {
			const form = document.getElementsByTagName('form')[0];
			form.addEventListener('submit', (ev) => {
				ev.preventDefault();
				alert('Módulo de tradução em desenvolvimento...')
			});
		}
	}
}

const tl = CreateTranslate();
tl.init();