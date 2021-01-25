const panels = document.getElementsByClassName('panel');
for(let i=0;i<panels.length;i++){
    const pn = panels[i];
    pn.addEventListener('click', (event) => {
        event.preventDefault();
        this.removeActiveClasses();
        pn.classList.add('active');
    });
}

function removeActiveClasses() 
{
    for(let i=0;i<panels.length;i++) {
        const pn = panels[i];
        pn.classList.remove('active');
    }
}