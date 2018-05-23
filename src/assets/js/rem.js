// 基准大小
const baseSize = 32

// 设置rem函数
function setRem (number) {
    // 当页面宽度相对于750宽的缩放比例, 可根据自己需要修改
    const scale = document.documentElement.clientWidth / number
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}

// 初始化
setRem(750)

// 改变窗品大小时重新设置rem
window.onresize = function () {
    setRem(750)
}
