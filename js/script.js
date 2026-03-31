// ================== BUTTONLAR ==================
// filter tugmalari (active / inactive / all)
const activeBtn = document.getElementById('active')
const inactiveBtn = document.getElementById('inactive')
const allBtn = document.getElementById('all')

// ================== HOZIRGI FILTER ==================
// qaysi filter aktivligini saqlab turadi
let currentFilter = 'all'

// ================== FILTER FUNKSIYA ==================
// type ga qarab cardlarni filter qiladi
function filterCards(type) {
	currentFilter = type // 🔥 MUHIM: hozirgi filterni saqlaymiz

	document.querySelectorAll('.card1').forEach(card => {
		const checkbox = card.querySelector('.toggle')

		if (!checkbox) return // safety check

		// ACTIVE: faqat true
		if (type === 'active') {
			card.style.display = checkbox.checked ? 'block' : 'none'

			// INACTIVE: faqat false
		} else if (type === 'inactive') {
			card.style.display = !checkbox.checked ? 'block' : 'none'

			// ALL: hammasi
		} else {
			card.style.display = 'block'
		}
	})
}

// ================== FILTER BUTTON CLICK ==================
activeBtn.addEventListener('click', () => filterCards('active'))
inactiveBtn.addEventListener('click', () => filterCards('inactive'))
allBtn.addEventListener('click', () => filterCards('all'))

// ================== DELETE CARD ==================
card.addEventListener('click', function (e) {
	if (e.target.classList.contains('delete__btn')) {
		e.target.closest('.card1').remove()
	}
})

// ================== TOGGLE CHANGE + LOCALSTORAGE ==================
card.addEventListener('change', function (e) {
	if (e.target.classList.contains('toggle')) {
		const id = e.target.dataset.id

		// state saqlash
		localStorage.setItem(`toggle-${id}`, e.target.checked)

		// 🔥 REAL-TIME UPDATE:
		// hozir qaysi filter turgan bo‘lsa, o‘sha qayta ishlaydi
		filterCards(currentFilter)
	}
})

// ================== PAGE LOAD (LOCALSTORAGE RESTORE) ==================
setTimeout(() => {
	document.querySelectorAll('.toggle').forEach(input => {
		const id = input.dataset.id

		const saved = localStorage.getItem(`toggle-${id}`)

		if (saved === 'true') {
			input.checked = true
		}
	})

	// initial render (hammasi ko‘rinsin)
	filterCards('all')
}, 0)
