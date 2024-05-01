const list = document.getElementById('list');
window.addEventListener('storage', (...rest) => {
    const { newValue } = rest[0];
    const userArray = JSON.parse(newValue) || [];

    const createList = userArray.reduce((acc, value) => {
        return acc += `<li>
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${value.Brand} ${value.model}</h5>
                                    <p class="card-text">${value.descr}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </li>`
    },'')

    list.innerHTML = createList
})