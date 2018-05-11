import {initExtend} from "./extend";

export function initGlobalApi(MVM) {

    // 设置 option 为一个对象
    MVM.options = Object.create(null)

    // 保存原始 Vue 类对象
    MVM.options._base = MVM
    MVM.options.components = {}

    // 实现子类生成方法
    initExtend(MVM)

}