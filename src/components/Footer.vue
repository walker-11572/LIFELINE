<template>
    <div class="Footer">
        <a-row>
            <a-col :offset="1" :span="4">
                <img src="../assets/LOGO.png" style="width: 100%" v-show="theme === 'light'" />
                <img src="../assets/LOGO-dark.png" style="width: 100%" v-show="theme === 'dark'" />
            </a-col>
            <a-col :offset="1" :span="3" class=" mt-4 d-flex flex-column">
                <div class=" fw-bold mb-1 fs-5 arco-text-white">产品</div>
                <a class=" mt-3">时间轴</a>
                <a class=" mt-3">思维导图</a>
                <a class=" mt-3">TODO</a>
                <a class=" mt-3">职业发展规划</a>
            </a-col>
            <a-col :offset="1" :span="3" class=" mt-4 d-flex flex-column">
                <div class=" fw-bold mb-1 fs-5 arco-text-white">关于</div>
                <a class=" mt-3">关于我们</a>
                <a class=" mt-3">用户协议</a>
                <a class=" mt-3">服务条款</a>
                <a class=" mt-3">隐私政策</a>
            </a-col>
            <a-col :offset="1" :span="3" class=" mt-4 d-flex flex-column">
                <div class=" fw-bold mb-1 fs-5 arco-text-white">支持</div>
                <a class=" mt-3">爱发电</a>
                <div class=" mt-3 arco-text-white">我有一个想法！</div>
            </a-col>
            <a-col :offset="1" :span="3" class=" mt-4 d-flex flex-column">
                <div class=" fw-bold mb-4 fs-5 arco-text-white">联系</div>
                <a-space :size="12" direction="vertical">
                    <a-row>
                        <a-space :size="12">
                            <a-col :span="8" class="">
                                <a-popover position="lt">
                                    <a-button class="nav-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"
                                            viewBox="0 0 24 24" fill="none">
                                            <g opacity="1" transform="translate(0 0)  rotate(0 12 12)">
                                                <path fill-rule="evenodd" style="fill:var(--color-neutral-8)"
                                                    transform="translate(1 3.200000000000001)  rotate(0 10.9 8.947601674617564)"
                                                    opacity="1"
                                                    d="M15.39994,16.82792c-2.69405,0 -4.99787,-1.40799 -5.9429,-3.40098c-0.90971,0.15623 -1.83774,0.17484 -2.75312,0.05512c-0.15151,-0.02058 -0.30281,-0.04295 -0.45388,-0.06711c-0.37387,-0.05816 -0.75602,0.01682 -1.07997,0.21206l-1.90401,1.14798c-0.14671,0.09037 -0.31849,0.13135 -0.49006,0.11703c-0.20971,-0.01592 -0.40439,-0.11452 -0.54129,-0.27415c-0.13669,-0.15962 -0.20427,-0.36721 -0.1877,-0.57694l0.14998,-1.78093c0.03772,-0.45203 -0.1223,-0.89816 -0.43905,-1.22296c-0.08306,-0.08483 -0.1635,-0.17216 -0.24089,-0.26199c-0.95397,-1.12006 -1.51706,-2.50211 -1.51706,-3.996c0,-3.74403 3.53705,-6.77906 7.9001,-6.77906c4.05981,0 7.40284,2.62702 7.84996,6.00796c3.37203,0.153 6.04994,2.51499 6.04994,5.40596c0,1.19307 -0.45605,2.29613 -1.22908,3.19c-0.05101,0.06013 -0.11597,0.1301 -0.19489,0.21009c-0.25593,0.25751 -0.38586,0.61416 -0.35599,0.976l0.12099,1.42303c0.01243,0.16839 -0.04295,0.335 -0.15369,0.46259c-0.11075,0.1276 -0.26771,0.2058 -0.43644,0.21743c-0.13887,0.01127 -0.27773,-0.02165 -0.39698,-0.09413l-1.543,-0.91695c-0.26291,-0.15569 -0.57181,-0.21546 -0.87396,-0.16893c-0.14693,0.02291 -0.26988,0.03991 -0.36798,0.05297c-0.31588,0.03991 -0.64005,0.06192 -0.96901,0.06192z M16.434,14.73698c0.56434,-0.08687 1.14154,-0.02695 1.67596,0.17402c0.14027,-0.56719 0.43076,-1.08599 0.84102,-1.50197c0.04998,-0.05004 0.08703,-0.09005 0.10604,-0.11203c0.48902,-0.56497 0.74298,-1.21302 0.74298,-1.88297c0,-1.80405 -1.903,-3.41403 -4.4,-3.41403c-2.497,0 -4.4,1.60999 -4.4,3.41403c0,1.80398 1.903,3.41396 4.4,3.41396c0.24103,0 0.48004,-0.01596 0.71403,-0.04603c0.07999,-0.00995 0.18797,-0.02495 0.31997,-0.04596z M4.19405,11.881c0.71399,-0.41283 1.54787,-0.56875 2.36294,-0.44198c0.16595,0.02599 0.30205,0.04595 0.40501,0.05998c0.67709,0.08794 1.36323,0.07984 2.03797,-0.02401v-0.06096c0,-2.508 2.01599,-4.61798 4.75303,-5.23298c-0.36399,-2.30208 -2.79404,-4.18105 -5.85299,-4.18105c-3.31999,0 -5.90001,2.21305 -5.90001,4.78003c0,0.96893 0.35999,1.89992 1.04002,2.69801c0.03197,0.03794 0.08298,0.09397 0.15197,0.16491c0.58789,0.60422 0.94294,1.39707 1.00206,2.23805z " />
                                            </g>
                                        </svg>
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                            <a-col :span="8" class="">
                                <a-popover position="top">
                                    <a-button class="nav-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"
                                            viewBox="0 0 24 24" fill="none">
                                            <g opacity="1" transform="translate(0 0)  rotate(0 12 12)">
                                                <path fill-rule="evenodd" style="fill:var(--color-neutral-8)"
                                                    transform="translate(3.4986742288516 2)  rotate(0 8.50157875409427 10.000455343003965)"
                                                    opacity="1"
                                                    d="M16.57434,16.17694c0.14895,-0.22801 0.244,-0.46202 0.30997,-0.70803c0.08808,-0.33182 0.12497,-0.70083 0.118,-1.10785c-0.01292,-0.78704 -0.18703,-1.76608 -0.53492,-2.91613c-0.143,-0.47282 -0.33105,-1.01985 -0.556,-1.62587l-0.01003,-0.026l-0.55294,-1.43007l0,-0.00001l0,0l0.00085,-0.203l0,-0.00001c0,-4.55501 -2.43485,-8.15996 -6.84785,-8.15996c-4.41215,0 -6.84802,3.60495 -6.84802,8.15996c0,0 0,0.00001 0,0.00001c0.00017,0.0676 0.00085,0.1354 0.00187,0.203l-0.55294,1.43007c-0.24093,0.64703 -0.42797,1.18885 -0.56791,1.65488c-0.34516,1.15005 -0.51911,2.1271 -0.53203,2.91213c-0.01275,0.37222 0.02635,0.74443 0.11596,1.10585c0.06444,0.25181 0.16867,0.49142 0.30895,0.71003c0.278,0.42802 0.6871,0.77904 1.27898,0.91104c0,0 0,0.00001 0,0.00001c0,0 0,0 0,0c-0.13262,0.56103 -0.0471,1.15165 0.23906,1.65208c0.37492,0.65403 0.83503,0.89504 1.44,1.05885c0.26015,0.0676 0.5254,0.11381 0.79303,0.13801c0.53662,0.0484 1.07528,0.0698 1.61394,0.064c0.92497,-0.002 2.0181,-0.051 2.70996,-0.11601c0.90151,0.0756 1.80557,0.11441 2.71013,0.11601c0.62691,0.001 1.17288,-0.019 1.61292,-0.064c0.29602,-0.03 0.55396,-0.073 0.79405,-0.13801c0.60497,-0.16481 1.06491,-0.40482 1.43796,-1.05685c0.295,-0.51402 0.36999,-1.10005 0.24008,-1.65408l-0.00001,-0.00001c0,0 0,0 0,0c0.5929,-0.13401 1.00098,-0.48302 1.27694,-0.91004z M14.03634,10.51403c0.19099,0.51504 0.376,1.04591 0.51602,1.50895c0.66099,2.18798 0.44504,3.09598 0.28304,3.11598c-0.34805,0.04304 -1.355,-1.64799 -1.355,-1.64799c0,0.97903 -0.48703,2.25806 -1.54209,3.18094c0.39498,0.12608 0.87902,0.31904 1.19001,0.556c0.27901,0.21408 0.24404,0.43104 0.19398,0.51904c-0.22102,0.38608 -3.79002,0.24608 -4.81998,0.12608c-1.02996,0.12 -4.6,0.26 -4.81998,-0.12496c-0.05096,-0.08912 -0.08594,-0.30608 0.19398,-0.52016c0.31008,-0.23696 0.79399,-0.42992 1.18806,-0.55696c-1.05402,-0.92191 -1.54209,-2.19999 -1.54209,-3.17998c0,0 -1.00591,1.69103 -1.35396,1.64799c-0.162,-0.02 -0.37496,-0.92591 0.282,-3.11502c0.13703,-0.46 0.32698,-0.99487 0.51706,-1.50991l0.69596,-1.79599c-0.00104,-0.02112 -0.01001,-0.37504 -0.01001,-0.55808c0,-3.07199 1.40193,-6.15997 4.84793,-6.15997c3.446,0 4.84806,3.08799 4.8491,6.15997c0,0.18304 -0.01001,0.53696 -0.01001,0.55808z " />
                                            </g>
                                        </svg>
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                            <a-col :span="8" class="">
                                <a-popover position="tr">
                                    <a-button class="nav-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"
                                            viewBox="0 0 24 24" fill="none">
                                            <g opacity="1" transform="translate(0 0)  rotate(0 12 12)">
                                                <path fill-rule="evenodd" style="fill:var(--color-neutral-8)"
                                                    transform="translate(1 2.998566402352633)  rotate(0 11.000785932324264 8.811216798823684)"
                                                    opacity="1"
                                                    d="M20.3452,1.86104c1.43261,1.50344 1.98586,3.64073 1.46283,5.65039c-0.13866,0.53463 -0.68444,0.85564 -1.21904,0.71703c-0.53461,-0.1387 -0.85564,-0.6844 -0.71699,-1.21903c0.34957,-1.34046 -0.01921,-2.76634 -0.975,-3.76919c-0.95571,-1.00276 -2.36227,-1.43967 -3.71795,-1.15484c-0.35174,0.07757 -0.71795,-0.03998 -0.95885,-0.30771c-0.2409,-0.26773 -0.31919,-0.64433 -0.20497,-0.98591c0.11422,-0.34157 0.40326,-0.59534 0.75677,-0.66432c2.03255,-0.42559 4.14067,0.23023 5.57319,1.73359z M16.62603,7.81646c1.51095,0.61004 2.56796,1.76995 2.56796,3.38202c0,3.36196 -4.52998,6.42395 -9.92599,6.42395c-4.94994,-0.00107 -9.26801,-2.43204 -9.26801,-6.08692c0,-1.94711 1.18005,-4.08715 3.23995,-6.08815c2.83207,-2.74595 6.22903,-4.03294 7.85802,-2.44797c0.49809,0.48203 0.72304,1.12208 0.71901,1.85799c1.97506,-0.5759 3.64993,-0.40394 4.48295,0.75198c0.44914,0.62306 0.53206,1.3801 0.32611,2.2071z M11.48197,7.08947c-0.16288,0.06845 -0.33396,0.11551 -0.509,0.13995c-0.34399,0.04605 -0.67097,0.00102 -0.9829,-0.26496c-0.41905,-0.35898 -0.47405,-0.85507 -0.32211,-1.31598c0.215,-0.66998 0.18005,-1.07602 0.03707,-1.21507c-0.18597,-0.18 -0.77702,-0.19097 -1.65903,0.143c-1.06905,0.40502 -2.29794,1.224 -3.41394,2.30603c-1.70705,1.65901 -2.63206,3.33702 -2.63206,4.65301c0,2.24199 3.27598,4.08699 7.26805,4.08699c4.41993,0 7.92595,-2.36995 7.92595,-4.42402c0,-0.73798 -0.63693,-1.33895 -1.67301,-1.65199c-0.39398,-0.11302 -0.53604,-0.17095 -0.76699,-0.41701v-0.00102c-0.38593,-0.41 -0.40006,-0.9199 -0.19798,-1.41c0.20801,-0.50798 0.21302,-0.81197 0.12003,-0.93992c-0.26407,-0.36803 -1.53307,-0.36305 -3.19408,0.31101z " />
                                            </g>
                                        </svg>
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                        </a-space>
                    </a-row>
                    <a-row>
                        <a-space :size="12">
                            <a-col :span="8" class="">
                                <a-popover position="left">
                                    <a-button class="nav-btn">
                                        <svg t="1665539958024" class="icon" viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg" p-id="1546" width="32" height="32">
                                            <path transform="translate()"
                                                d="M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7z m247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-0.1-8.1c0-0.6-0.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-0.7c-0.8 0-19.6-0.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-0.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 0.6-0.3 1.3-0.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c0.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-0.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c0.8-1.9 19-46.3 5.1-95.9l-0.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"
                                                p-id="1547" fill="var(--color-neutral-8)"></path>
                                        </svg>
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                            <a-col :span="8" class="">
                                <a-button class="nav-btn">
                                    <div></div>
                                </a-button>
                            </a-col>
                            <a-col :span="8" class="">
                                <a-popover position="right">
                                    <a-button class="nav-btn">
                                        <icon-email class="icon" />
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                        </a-space>
                    </a-row>
                    <a-row>
                        <a-space :size="12">
                            <a-col :span="8" class="">
                                <a-popover position="bl">
                                    <a-button class="nav-btn">
                                        <svg t="1665540691756" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="5000" width="28" height="28">
                                            <path
                                                d="M415.808 755.2L512 851.392 608.192 755.2H883.2V204.8H704V128h256v704h-320l-128 128-128-128H64V128h256v76.8H140.8v550.4h275.008zM473.6 64h76.8v448H473.6V64z m0 512h76.8v76.8H473.6V576z"
                                                p-id="5001" fill="var(--color-neutral-8)"></path>
                                        </svg>
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                            <a-col :span="8" class="">
                                <a-popover position="bottom">
                                    <a-button class="nav-btn">
                                        <icon-customer-service class="icon" />
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                            <a-col :span="8" class="">
                                <a-popover position="rb">
                                    <a-button class="nav-btn">
                                        <icon-phone class="icon" />
                                    </a-button>
                                    <template #content>
                                        <a-empty />
                                    </template>
                                </a-popover>
                            </a-col>
                        </a-space>
                    </a-row>
                </a-space>
            </a-col>
        </a-row>
        <a-row class=" mx-4 mt-1">
            <a-divider />
            <div class="brand">©2020-2022 LIFELINE All rights reserved</div>
        </a-row>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { mainStore } from "../store/index";
const store = mainStore();
const theme = ref(store.theme);
watch(() => store.theme, (val) => {
    if (val === 'dark') {
        theme.value = 'dark';
    } else if( val === 'light') {
        theme.value = 'light';
    } else if (val === 'FollowSystem') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme.value = 'dark';
        } else {
            theme.value = 'light';
        }
    }
});

</script>
<style scoped>
.Footer {
    padding-top: 50px;
    width: 100%;
    height: 400px;
    background-color: var(--color-bg-1);
    border: 1px solid var(--color-neutral-3);
    position: fixed;
    bottom: 0;
}

.icon {
    font-size: 30px;
}

.nav-btn {
    width: 50px;
    height: 50px;
    font-size: 32px;
    padding: 0;
}

.brand {
    font-size: 13px;
    color: var(--color-neutral-6);
    padding: 0;
    margin: auto;
    margin-top: -5px;
}

a {
    color: var(--color-neutral-8);
    cursor: pointer;
    text-decoration: none;
}

a:hover {
    color: rgb(var(--arcoblue-7));

}

.arco-text-white {
    color: var(--color-neutral-10);
}
</style>