const CreateTranslate = () => {
	const canelaToPortuguese = {
		'ah.cakà.re':	'(de: cakà.re) A.8.5. n. arbusto. bush.',
		'ah.cakrã': '(de: cakrã) VAR: am.krãh.ti. A.4.3. vd. nublado. cloudy.',
		'ah.cakũm':	'(de: cakũm) VAR: ah.carom [raro]. A.4.3. vd. nevoado, nevoeiro, nebuloso, neblina.',
		'ah.cunĩ':	'(de: cunĩ) A.8.5. n. floresta virgem.',
		'ah.kêt':	'(de: kêt) A.8.4. n. arbusto, mato, varredora ou lixo do chão.',
		'ah.kêt':	'(de: kêt) D.5.2. vt. sujar [como um porco faz sujeira numa poça de água], confundir, misturar.',
		'ah.kô':	'(de: ahkô) n. bicho que parece como um galho.',
		'ah.kra':	'(de: kra) n. criança (nome geral).',
		'ah.kra(re':	'(de: kra) D.1.7. n. criança.'
	};

	const TranslateObj = {
		translate: (wordInCanela)	=> {
			return canelaToPortuguese[wordInCanela] || '';
		},
		init: () => {
			const form = document.getElementsByTagName('form')[0];
			form.addEventListener('submit', (ev) => {
				ev.preventDefault();
				const word = document.getElementById('traduzir').value || '';
				if(word) {
					const translateWord = TranslateObj.translate(word) || '';
					if(translateWord) {
						const traducao = document.getElementById('traducao');
						traducao.innerHTML = `${word} = ${translateWord}`;
						traducao.style = 'font-weight: bold;';
					} else {
						alert('Palavra não encontrada no dicionário!');
					}
				} else {
					alert('Digite uma palavra em Canela!');
				}
			});
		}		
	}

	return TranslateObj;
}

const tl = CreateTranslate();
tl.init();