onload = ()=>{

    document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      )
      console.log(localStorage.theme)


    if (!localStorage.theme) {
        localStorage.setItem("theme","light")
    }
}