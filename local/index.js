function store(){
    const Brand = document.getElementById('Brand').value;
    const model = document.getElementById('model').value;
    const descr = document.getElementById('descr').value
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push({
        Brand,model,descr
    })


    localStorage.setItem('users', JSON.stringify(users));

}