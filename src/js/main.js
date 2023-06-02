function toggleMenu() {
    const burger = document.querySelector('#burger')
    const menu = document.querySelector('#menu')
    const body = document.querySelector('body')
    const navbtns = document.querySelector('#btns')
        burger.addEventListener('click',()=>{
            burger.classList.toggle('active')
            menu.classList.toggle('hidden')
            menu.classList.toggle('flex')
            body.classList.toggle('overflow-hidden')
            btns.classList.toggle('hidden')
            btns.classList.toggle('flex')
        })
        window.addEventListener('resize',()=>{
            if(window.innerWidth > 767.99) {
                menu.classList.add('hidden')
                menu.classList.remove('flex')
                burger.classList.remove('active')
                body.classList.remove('overflow-hidden')
                btns.classList.add('hidden')
                btns.classList.remove('flex')
            }
        })
}
toggleMenu()

// Tabs
function toggleTabs(tabsTriggerClass, tabsContentClass){
 const tabsTriggers = document.querySelectorAll(tabsTriggerClass)
 const tabsContents = document.querySelectorAll(tabsContentClass)
 tabsContents.forEach((content) => {
    content.classList.add('hidden')
    tabsContents[0].classList.remove('hidden')
})
    tabsTriggers.forEach((trigger, idx) => {
        trigger.addEventListener('click', () => {
            tabsTriggers.forEach((t) => t.classList.remove('active'))

            trigger.classList.add('active')

            tabsContents.forEach((content) => {
                content.classList.add('hidden')
            })
            
            tabsContents[idx].classList.remove('hidden')
        })
    })
}
toggleTabs('.tab-trigger', '.tab-content')