// 用来整合组件的 最终实现导出组件

import _Icon from "./src/icon.vue";
import { withInstall } from "@ksw/utils/with-install";

const Icon = withInstall(_Icon);

export default Icon; // 可以通过app.use来使用 也可以通过 import方式单独使用

export * from "./src/icon";


// 这里添加的类型 可以再模版中被解析
declare module 'vue'{
    export interface GlobalComponents { // 我们的接口可以自动合并
        ZIcon:typeof Icon
    }
}