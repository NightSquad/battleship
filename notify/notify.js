class notify{
    success() {
        let modal = document.getElementsByClassName('modal')[0];
        let notify = document.createElement('div');
        notify.addEventListener('animationiteration', (e) => {
            notify.style.animationPlayState = 'paused'
            setTimeout(()=> notify.style.animationPlayState = 'running', 2000)
        })
        notify.addEventListener('animationend', (e) => {
            notify.remove()
        })
        notify.classList.add('notify');
        notify.style.backgroundColor = 'green'
        let msg = document.createElement('p')
        msg.textContent = 'Success'
        notify.append(msg);
        modal.prepend(notify)
    }
    fail() {
        let modal = document.getElementsByClassName('modal')[0];
        let notify = document.createElement('div');
        notify.addEventListener('animationiteration', (e) => {
            notify.style.animationPlayState = 'paused'
            setTimeout(()=> notify.style.animationPlayState = 'running', 2000)
        })
        notify.addEventListener('animationend', (e) => {
            notify.remove()
        })
        notify.classList.add('notify');
        notify.style.backgroundColor = 'brown'
        let msg = document.createElement('p')
        msg.textContent = 'Fail'
        notify.append(msg);
        modal.prepend(notify)
    }
};

export default notify