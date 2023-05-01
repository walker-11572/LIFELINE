<template>
  <div>
    <Particles />
    <a-row>
      <a-col :span="6" :offset="9">
        <a-card style="margin-top: 100px">
          <h2 class="fw-bold text-center my-3">登录</h2>
          <div class="fw-bold text-center my-3">
            还没有账号？<a-link href="/register">立即注册</a-link>
          </div>
          <!-- 账号密码登录 -->
          <a-form
            :model="form"
            :label-col-props="{ span: 2 }"
            :wrapper-col-props="{ span: 20 }"
            @submit="handleSubmit"
            v-show="loginType === 'userInfo'"
          >
            <!-- 用户信息 -->
            <a-form-item field="userInfo" :rules="rules.userInfo" hide-asterisk>
              <a-input
                size="large"
                v-model="form.userInfo"
                placeholder="手机号/邮箱"
                allow-clear
              >
                <template #prefix>
                  <icon-user />
                </template>
              </a-input>
            </a-form-item>
            <!-- 用户密码 -->
            <a-form-item field="password" :rules="rules.password" hide-asterisk>
              <a-input-password
                size="large"
                v-model="form.password"
                placeholder="密码"
                allow-clear
              >
                <template #prefix>
                  <icon-lock />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item
              :wrapper-col-props="{ span: 20 }"
              content-class=" justify-content-between"
            >
              <a-checkbox v-model:checked="form.remember">记住密码</a-checkbox>
              <a-link href="/forgotPassword">忘记密码</a-link>
            </a-form-item>
            <a-form-item :wrapper-col-props="{ span: 20 }">
              <a-button type="primary" html-type="submit" long size="large">
                login
              </a-button>
            </a-form-item>
          </a-form>
          <!-- 验证码登录 -->
          <a-form
            :model="formCaptcha"
            :label-col-props="{ span: 2 }"
            :wrapper-col-props="{ span: 20 }"
            @submit="handleSubmit"
            v-show="loginType === 'captcha'"
          >
            <a-form-item field="phone" :rules="rules.account" hide-asterisk>
              <a-input
                size="large"
                v-model="formCaptcha.account"
                placeholder="手机号或邮箱"
                allow-clear
              >
                <template #prefix>
                  <icon-phone />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item field="captcha" :rules="rules.captcha" hide-asterisk>
              <a-input
                size="large"
                v-model="formCaptcha.captcha"
                placeholder="验证码"
                allow-clear
                class="pe-0"
              >
                <template #prefix>
                  <svg
                    t="1666008356592"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4842"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M88 193.6h848c12.8 0 24-11.2 24-24s-11.2-24-24-24h-848c-12.8 0-24 11.2-24 24s11.2 24 24 24zM936 830.4h-848c-12.8 0-24 11.2-24 24s11.2 24 24 24h848c12.8 0 24-11.2 24-24s-11.2-24-24-24zM160 388.8h54.4v256H160zM400 550.4c3.2-4.8 8-6.4 14.4-8 6.4-1.6 16-1.6 28.8-1.6H480c27.2 0 46.4-3.2 59.2-11.2 9.6-4.8 16-14.4 20.8-25.6 4.8-11.2 8-24 8-40 0-12.8-1.6-24-6.4-33.6-4.8-9.6-9.6-19.2-17.6-24-12.8-11.2-35.2-16-68.8-16h-132.8v46.4H464c14.4 0 24 1.6 30.4 6.4 8 4.8 12.8 14.4 12.8 25.6 0 11.2-4.8 19.2-14.4 24-6.4 3.2-16 4.8-30.4 4.8h-41.6c-17.6 0-30.4 1.6-38.4 3.2s-16 6.4-22.4 12.8c-14.4 14.4-22.4 36.8-20.8 65.6v67.2H560v-44.8H393.6V576c0-12.8 1.6-22.4 6.4-25.6zM886.4 459.2c0-14.4-3.2-27.2-11.2-38.4-8-12.8-17.6-22.4-32-27.2-6.4-1.6-11.2-3.2-16-3.2-4.8 0-16-1.6-32-1.6h-120v46.4h110.4c9.6 0 16 0 19.2 1.6 3.2 0 6.4 1.6 9.6 4.8 8 4.8 11.2 12.8 11.2 24 0 9.6-3.2 17.6-9.6 22.4-4.8 4.8-16 6.4-32 6.4h-86.4v44.8H784c12.8 0 22.4 1.6 28.8 4.8 8 4.8 12.8 14.4 12.8 27.2 0 11.2-3.2 19.2-9.6 24-4.8 4.8-16 6.4-30.4 6.4h-110.4v44.8h113.6c19.2 0 33.6-1.6 43.2-3.2 9.6-1.6 19.2-4.8 27.2-11.2 19.2-11.2 27.2-30.4 27.2-54.4 0-25.6-11.2-46.4-33.6-62.4 22.4-14.4 33.6-32 33.6-56z"
                      fill="var(--color-neutral-8)"
                      p-id="4843"
                    ></path>
                  </svg>
                </template>
                <template #suffix>
                  <a-button @click="sendCaptcha()" style="height: 100%"
                    >{{ formCaptcha.captchaText }}
                  </a-button>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item :wrapper-col-props="{ span: 20 }">
              <a-button type="primary" html-type="submit" long size="large">
                login
              </a-button>
            </a-form-item>
          </a-form>
          <!-- 扫码登录 -->
          <a-row v-if="loginType === 'qrcode'">
            <a-empty />
          </a-row>
          <!-- 微信登录 -->
          <a-row v-if="loginType === 'wechat'">
            <a-empty />
          </a-row>
          <!--#region 其他登录方式 -->
          <a-row justify="center">
            <a-col :span="20">
              <a-divider>
                <span style="color: var(--color-neutral-6)">其他登录方式</span>
              </a-divider>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-space :size="12">
              <span v-if="loginType != 'captcha'">
                <a-tooltip content="验证码登录" position="top" mini>
                  <a-button
                    size="large"
                    shape="round"
                    @click="toggleLoginType('captcha')"
                  >
                    <template #icon>
                      <icon-mobile style="font-size: 20px" />
                    </template>
                  </a-button>
                </a-tooltip>
              </span>
              <span v-if="loginType === 'captcha'">
                <a-tooltip content="账号密码登录" position="top" mini>
                  <a-button
                    size="large"
                    shape="round"
                    @click="toggleLoginType('userInfo')"
                  >
                    <template #icon>
                      <icon-user style="font-size: 20px" />
                    </template>
                  </a-button>
                </a-tooltip>
              </span>
              <a-tooltip content="扫码登录" position="top" mini>
                <a-button
                  size="large"
                  shape="round"
                  @click="toggleLoginType('qrcode')"
                >
                  <template #icon>
                    <icon-qrcode style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip content="微信登录" position="top" mini>
                <a-button
                  size="large"
                  shape="round"
                  @click="toggleLoginType('wechat')"
                >
                  <template #icon>
                    <icon-wechat style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip content="QQ登录" position="top" mini>
                <a-button size="large" shape="round">
                  <template #icon>
                    <icon-qq style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip content="微博登录" position="top" mini>
                <a-button size="large" shape="round">
                  <template #icon>
                    <icon-weibo style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
            </a-space>
          </a-row>
          <!--#endregion 其他登录方式 -->
          <!--#region 版权声明 -->
          <a-row
            justify="center"
            style="
              font-size: 8px;
              margin-top: 20px;
              color: var(--color-neutral-4);
            "
          >
            ©2020-2022 LIFELINE All rights reserved
          </a-row>
          <!--#endregion 版权声明 -->
        </a-card>
        <!-- {{ loginType }} -->
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import Particles from "@/components/Particles/index.vue";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import axios from "axios";
import { Message } from "@arco-design/web-vue";
import { userStore } from "@/store/user";
const store = userStore();
const router = useRouter();
const loginType = ref("userInfo");
const form = reactive({
  userInfo: "",
  password: "",
  remember: false,
});
const formCaptcha = reactive({
  account: "",
  captcha: "",
  sendedCaptcha: "",
  remember: false,
  captchaText: "获取验证码",
});
// 发送验证码
function sendCaptcha() {
  if (formCaptcha.captchaText === "获取验证码") {
    formCaptcha.sendedCaptcha = "123456";
    formCaptcha.captchaText = "60s 后重新获取";
    let time = 60;
    const timer = setInterval(() => {
      time--;
      formCaptcha.captchaText = `${time}s 后重新获取`;
      if (time === 0) {
        clearInterval(timer);
        formCaptcha.captchaText = "获取验证码";
      }
    }, 1000);
  }
}
// 切换登录方式
function toggleLoginType(type: string) {
  loginType.value = type;
}
// 表单校验
const rules = reactive({
  userInfo: [
    {
      required: true,
      message: "请输入手机号或邮箱",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
    {
      validator: (password: string, callback: any) => {
        if (password.length < 6) {
          callback("密码不少于 6 位");
        } else if (!/[a-zA-Z]/.test(password)) {
          callback("密码至少包含一个字母");
        } else if (!/[0-9]/.test(password)) {
          callback("密码至少包含一个数字");
        } else if (!/[^a-zA-Z0-9]/.test(password)) {
          callback("密码至少包含一个符号");
        } else {
          callback();
        }
      },
    },
  ],
  account: [
    {
      required: true,
      message: "请输入手机号/邮箱",
    },
  ],
  captcha: [
    {
      required: true,
      message: "请输入验证码",
    },
    {
      validator: (captcha: any, callback: any) => {
        if (formCaptcha.sendedCaptcha) {
          if (captcha === "") {
            callback("请输入验证码");
          } else if (captcha !== formCaptcha.sendedCaptcha) {
            callback("请输入正确的验证码");
          } else {
            callback();
          }
        } else {
          callback("请先获取验证码");
        }
      },
    },
  ],
});
// 表单提交
async function handleSubmit() {
  try {
    const response = await axios.post("/api/login", { ...form } );
    if (response.data.success) {
      Message.success("登录成功");
      store.userId = response.data.id.toString();
      // 跳转到主页面
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } else {
      Message.error("账号或密码错误");
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        Message.error("账号不存在");
      } else if (error.response.status === 401) {
        Message.error("密码错误");
      } else {
        Message.error("服务器错误");
      }
    } else if (error.request) {
      Message.error("网络错误");
    } else {
      Message.error("未知错误");
    }
  }
}
</script>
