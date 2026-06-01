window.addEventListener("load", ()=>{
    const tabBtns = document.querySelectorAll(".tab-menuBtn li")
    const descBoxes = document.querySelectorAll(".tab-descBox")
    const pageContents = document.querySelectorAll(".page-content-wrap")

    tabBtns.forEach(function(btn, index){
        btn.addEventListener("click", function(e){
            e.preventDefault()

            // 모든 active 제거
            tabBtns.forEach((el)=> el.querySelector("a").classList.remove("active"))
            descBoxes.forEach((el)=>el.classList.remove("active"))
            pageContents.forEach((el)=>el.classList.remove("active"))

            // 클릭한 인덱스에 active 추가
            btn.querySelector("a").classList.add("active")
            descBoxes[index].classList.add("active")
            pageContents[index].classList.add("active")
        })
    })
})