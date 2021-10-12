const d = document,
ls= localStorage;
desplegable=d.getElementById("desplegable"),
submenu=d.getElementById("submenu"),
count=d.getElementById("count")


const darkTheme = (darkBtn)=>{
    const themeBtn = d.querySelector(darkBtn),
        selectors = d.querySelectorAll("[data-dark]")
       
    let sun ="☀️", moon="🌙" ;

    const lightMode = ()=>{
        selectors.forEach(el=>el.classList.remove("dark-mode"))   
        themeBtn.textContent=moon;
        ls.setItem("theme","light")
    }

    const darkMode = ()=>{
        selectors.forEach(el=>el.classList.add("dark-mode"))
        themeBtn.textContent=sun;
        ls.setItem("theme","dark")
    }

    d.addEventListener("click",e=>{
        if(e.target.matches(darkBtn)){
            if(themeBtn.textContent===moon)darkMode()
             else lightMode()
        }
       
     })

    d.addEventListener("DOMContentLoaded",()=>{ 
        if (ls.getItem("theme")==null)ls.setItem("theme","light")
        if(ls.getItem("theme")=="light")lightMode()
        if(ls.getItem("theme")=="dark")darkMode()

    })
    
}
darkTheme(".dark-theme-btn")



desplegable.addEventListener("click",()=>{
    submenu.classList.toggle("submenu")

})

/* counter */
/* const updateCounter = ()=>{
    fetch("https://api.countapi.xyz/update/gerardojao.github.io/Blog/?amount=1")
    .then(res=>res.json())
    .then(res=>{
        count.textContent =res.value
    })
}
updateCounter() */

ls.views ? ls.views = Number(ls.views) + 670 : ls.views = 1

count.textContent = ls.views