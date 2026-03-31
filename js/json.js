const overlay = document.getElementById('overlay')

function timeout(ms) {
	return new Promise((_, reject) => setTimeout(() => reject('Timeout'), ms))
}

async function getData() {
	overlay.style.display = 'flex'

	const delay = new Promise(res => setTimeout(res, 500))

	try {
		const res = await Promise.race([
			fetch('./data.json'),
			timeout(8000), // 🔥 8 sekunddan oshsa to‘xtaydi
		])

		const data = await res.json()

		let html = ''

		data.forEach((item, index) => {
			// 🔥 checkbox holatini olish
			const saved = localStorage.getItem(`toggle-${index}`)

			html += `
    <li class="card1 " id="card1">
      <div class="card-title">
        <img src="${item.logo}" alt="">
        <div class="card-info">
          <h2>${item.name}</h2>
          <p class="info">${item.description}</p>
        </div>
      </div>

      <div class="card-btn">
        <button class="nav delete__btn">Remove</button>

        <label class="switch">
          <input 
            type="checkbox" 
            class="toggle" 
            data-id="${index}"
            
            // 🔥 ENG MUHIM QISM
            ${saved === 'true' ? 'checked' : ''}
          >
          <span class="slider"></span>
        </label>
      </div>

    </li>
  `
		})

		card.innerHTML = html

		await delay
	} catch (err) {
		console.log(err)
		card.innerHTML = '<p>Data yuklanmadi ❌</p>'
	} finally {
		overlay.style.display = 'none'
	}
}

getData()
