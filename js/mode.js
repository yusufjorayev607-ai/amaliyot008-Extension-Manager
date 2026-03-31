setTimeout(() => {
	const body = document.querySelector('body')
	const lightBtn = document.getElementById('btn-light')
	const darcBtn = document.getElementById('btn-dark')
	const li = document.querySelectorAll('.card1')
	const header = document.querySelector('.header')

	const modeLocal = localStorage.getItem('mode')

	if (modeLocal) {
		body.classList.add('darkbody')
		darcBtn.classList.toggle('hidden')
		lightBtn.classList.toggle('hidden')
		li.forEach(item => item.classList.toggle('card-dark'))
		header.classList.toggle('header-dark')
	}

	const toggoleModeBtn = () => {
		darcBtn.classList.toggle('hidden')
		lightBtn.classList.toggle('hidden')
		body.classList.toggle('darkbody')
		li.forEach(item => item.classList.toggle('card-dark'))
		header.classList.toggle('header-dark')
	}

	lightBtn.addEventListener('click', () => {
		toggoleModeBtn()
		localStorage.setItem('mode', '')
	})

	darcBtn.addEventListener('click', () => {
		toggoleModeBtn()
		localStorage.setItem('mode', 'darkbody')
	})
	console.log(li)
}, 500)
