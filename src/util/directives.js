import Vue from 'vue'

//屏蔽快速重复点击
export const btnClick = Vue.directive('btnClick', el => {
    el.onclick = () => {
        el.disabled = true;
        el.style.opacity = 0.5;
        setTimeout(() => {
            el.disabled = false;
            el.style.opacity = 1;
        }, 500)
    }
})

//屏蔽快速重复点击
export const debounceBtn = Vue.directive('debounceBtn', (el,value) => {
    let delay = 0;
    value.value ? delay = value.value : delay = 500;
    el.onclick = () => {
        el.disabled = true;
        // el.style.opacity = 0.5;
        setTimeout(() => {
            el.disabled = false;
            // el.style.opacity = 1;
        }, delay)
    }
})
