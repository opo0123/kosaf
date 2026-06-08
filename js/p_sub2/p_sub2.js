window.addEventListener("load", ()=>{
    const tabBtns = document.querySelectorAll(".tab-menuBtn li")
    const descBoxes = document.querySelectorAll(".tab-descBox")
    const pageContents = document.querySelectorAll(".page-content-wrap")

    // 장학금 리스트 높이 통일 (active 페이지만)
    function equalHeight() {
        const lis = document.querySelectorAll(".page-content-wrap.active .price-list li")

        if (lis.length === 0) return

        // 초기화
        lis.forEach(li => li.style.height = "auto")

        let maxHeight = 0
        lis.forEach(li => {
            maxHeight = Math.max(maxHeight, li.offsetHeight)
        })

        const limitHeight = 350
        const finalHeight = Math.min(maxHeight, limitHeight)

        lis.forEach(li => {
            li.style.height = finalHeight + "px"
        })
    }

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

            // 탭 전환 후 높이 재계산
            equalHeight()
        })
    })

    equalHeight()
    window.addEventListener("resize", equalHeight)
})