const d = document,
ls= localStorage;
desplegable=d.getElementById("desplegable"),
submenu=d.getElementById("submenu"),
counter=d.getElementById("counter")


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
function getexpirydate(nodays){

    var UTCstring;
    
    Today = new Date();
    
    nomilli=Date.parse(Today);
    
    Today.setTime(nomilli+nodays*24*60*60*1000);
    
    UTCstring = Today.toUTCString();
    
    return UTCstring;
    
    }
    
    function getcookie(cookiename) {
    
    var cookiestring=""+document.cookie;
    
    var index1=cookiestring.indexOf(cookiename);
    
    if (index1==-1 || cookiename=="") return "";
    
    var index2=cookiestring.indexOf(";",index1);
    
    if (index2==-1) index2=cookiestring.length;
    
    return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
    
    }
    
    function setcookie(name,value,duration){
    
    cookiestring=name+"="+escape(value)+";EXPIRES="+getexpirydate(duration);
    
    document.cookie=cookiestring;
    
    if(!getcookie(name))return false;    
    else  return true;
   
    }
    
    count= getcookie("counter");
    
    count++;

    counter.textContent = count
    
    y=setcookie("counter",count,1);