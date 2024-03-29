<template>
  <div>
    <Particles />
    <a-row>
      <a-col :span="8" :offset="8">
        <a-card style="margin-top: 50px">
          <h2 class="fw-bold text-center my-3">注册</h2>
          <div class="fw-bold text-center my-3">
            已有账号了？<a-link href="/login">立即登录</a-link>
          </div>
          <a-form
            :model="form"
            :label-col-props="{ span: 2 }"
            :wrapper-col-props="{ span: 20 }"
            @submit="handleSubmit"
          >
            <!-- 用户名 -->
            <a-form-item
              field="username"
              help="用户名 2-20 位，可包含文字、数字、下划线"
              :rules="rules.username"
              hide-asterisk
              feedback
            >
              <a-input
                size="large"
                v-model="form.username"
                placeholder="请输入用户名"
                allow-clear
              >
                <template #prefix>
                  <icon-user />
                </template>
              </a-input>
            </a-form-item>
            <!-- 手机及其验证码 -->
            <a-row style="padding: 0 8.3% 0 8.3%">
              <!-- isoCode -->
              <a-col :span="7" v-if="accountType === 'phone'">
                <a-form-item field="isoCode" hide-asterisk hide-label>
                  <a-select size="large" v-model="form.isoCode" allow-search>
                    <template #prefix>
                      <icon-mobile />
                    </template>
                    <a-option v-for="(country, index) of codes" :key="index">
                      <span
                        :class="`fi me-2 fi-${country.isoCode2.toLowerCase()}`"
                      ></span>
                      <span>+{{ country.countryCodes[0] }}</span>
                    </a-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <!-- 手机注册 -->
              <a-col :span="10" v-if="accountType === 'phone'">
                <a-form-item
                  field="phone"
                  hide-asterisk
                  hide-label
                  :rules="rules.phone"
                >
                  <a-input
                    size="large"
                    v-model="form.phone"
                    placeholder="请输入手机号"
                    allow-clear
                  />
                </a-form-item>
              </a-col>
              <!-- 邮箱注册 -->
              <a-col :span="17" v-if="accountType === 'email'">
                <a-form-item
                  field="email"
                  hide-asterisk
                  hide-label
                  :rules="rules.email"
                >
                  <a-input
                    size="large"
                    v-model="form.email"
                    placeholder="请输入邮箱"
                    allow-clear
                    ><template #prefix>
                      <icon-email />
                    </template>
                  </a-input>
                </a-form-item>
              </a-col>
              <!-- 验证码 -->
              <a-col :span="7">
                <a-form-item
                  field="captcha"
                  hide-asterisk
                  hide-label
                  :rules="rules.captcha"
                >
                  <a-input
                    size="large"
                    v-model="captcha"
                    placeholder="验证码"
                    class="pe-0"
                  >
                    <template #suffix>
                      <a-tooltip position="right" mini>
                        <a-button style="height: 100%" @click="sendCaptcha()">
                          <template #icon>
                            <icon-shake
                              style="font-size: 18px"
                              v-show="!sendedCaptcha"
                              v-if="accountType === 'phone'"
                            />
                            <icon-at
                              style="font-size: 18px"
                              v-show="!sendedCaptcha"
                              v-if="accountType === 'email'"
                            />
                            <icon-loading
                              style="font-size: 18px"
                              v-show="sendedCaptcha"
                            />
                          </template>
                        </a-button>
                        <template #content>
                          <span v-if="sendedCaptcha">
                            {{ timeCount }} 秒后可重新获取
                          </span>
                          <span v-else>获取验证码</span>
                        </template>
                      </a-tooltip>
                    </template>
                  </a-input>
                </a-form-item>
              </a-col>
            </a-row>
            <!-- 密码 -->
            <a-form-item
              field="password"
              help="密码不少于 6 位，必须包含字母、数字、符号"
              :rules="rules.password"
              hide-asterisk
            >
              <a-input-password
                size="large"
                v-model="form.password"
                placeholder="请输入密码"
                allow-clear
              >
                <template #prefix>
                  <icon-lock />
                </template>
              </a-input-password>
            </a-form-item>
            <!-- 确认密码 -->
            <a-form-item
              field="confirmPassword"
              :rules="rules.confirmPassword"
              hide-asterisk
              feedback
            >
              <a-input-password
                size="large"
                placeholder="确认密码"
                v-model="confirmPassword"
                allow-clear
                :invisible-button="false"
              >
                <template #prefix>
                  <icon-lock />
                </template>
              </a-input-password>
            </a-form-item>
            <!-- 同意协议及条款 -->
            <a-form-item field="agreement" :rules="rules.agreement">
              <a-checkbox v-model="checked">
                &nbsp;同意<a-link href="#">《用户协议》</a-link>
                和<a-link href="#">《隐私政策》</a-link>
              </a-checkbox>
            </a-form-item>
            <!-- 注册按钮 -->
            <a-form-item :wrapper-col-props="{ span: 20 }">
              <a-button type="primary" html-type="submit" long size="large">
                sign up
              </a-button>
            </a-form-item>
          </a-form>
          <!-- 其他注册方式 -->
          <a-row justify="center">
            <a-col :span="20">
              <a-divider>
                <span style="color: var(--color-neutral-6)">其他注册方式</span>
              </a-divider>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-space :size="12">
              <a-tooltip
                content="邮箱"
                position="top"
                mini
                v-if="accountType === 'phone'"
              >
                <a-button size="large" shape="round" @click="accountType = 'email'">
                  <template #icon>
                    <icon-email style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip
                content="手机"
                position="top"
                mini
                v-if="accountType === 'email'"
              >
                <a-button size="large" shape="round" @click="accountType = 'phone'">
                  <template #icon>
                    <icon-mobile style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip content="微信" position="top" mini>
                <a-button size="large" shape="round">
                  <template #icon>
                    <icon-wechat style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip content="QQ" position="top" mini>
                <a-button size="large" shape="round">
                  <template #icon>
                    <icon-qq style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
              <a-tooltip content="微博" position="top" mini>
                <a-button size="large" shape="round">
                  <template #icon>
                    <icon-weibo style="font-size: 20px" />
                  </template>
                </a-button>
              </a-tooltip>
            </a-space>
          </a-row>
          <!-- 版权声明 -->
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
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import Particles from "@/components/Particles/index.vue";
import { Message } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import codes from "country-calling-code";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import axios from "axios";
const router = useRouter();
const accountType = ref("phone");
const timeCount = ref(60);
const checked = ref(false);
const captcha = ref("");
const sendedCaptcha = ref("");
const confirmPassword = ref("");
// 表单数据
let form = reactive({
  username: "",
  email: "",
  isoCode: "+86",
  phone: "",
  password: "",
});
// 发送表单数据
const handleSubmit = async ({ values, errors }) => {
  console.log(values, errors);
  if (!errors) {
    try {
      const response = await axios.post("/api/user/register", { ...values });
      if (response.data.success) {
        Message.success("注册成功");
        // 跳转到登录页面
        setTimeout(() => {
          router.push("/login");
        }, 1500);
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
};
// TODO 发送验证码
function sendCaptcha() {
  if (sendedCaptcha.value) return;
  sendedCaptcha.value = "123456";
  console.log(" captcha sended");
  countDown();
}
// 60s倒计时
function countDown() {
  if (timeCount.value > 0) {
    --timeCount.value;
    setTimeout(() => {
      countDown();
    }, 1000);
  } else if (timeCount.value === 0) {
    timeCount.value = 60;
    sendedCaptcha.value = "";
  }
}
// 表单验证规则
const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名",
    },
    {
      validator: (username: string, callback: any) => {
        if (username === "") {
          callback("请输入用户名");
        } else if (!/^[a-zA-Z0-9_]{2,20}$/.test(username)) {
          callback("用户名 2-20 位，可包含文字、数字、下划线");
        } else {
          callback();
        }
      },
    },
  ],
  email: [
    {
      required: true,
      message: "请输入邮箱",
    },
    {
      type: "email",
      message: "请输入正确的邮箱",
    },
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号",
    },
    {
      validator: (phone: string, callback: any) => {
        if (!/^[0-9]{11}$/.test(phone)) {
          callback("请输入正确的手机号");
        } else {
          callback();
        }
      },
    },
  ],
  captcha: [
    {
      validator: (Captcha: string, callback: any) => {
        if (form.phone !== "" || form.email !== "") {
          if (sendedCaptcha.value) {
            if (!captcha.value) {
              callback("请输入验证码");
            } else if (captcha.value !== sendedCaptcha.value) {
              callback("请输入正确的验证码");
            }
          } else {
            callback("请获取验证码");
          }
        } else {
          callback();
        }
      },
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
  confirmPassword: [
    {
      validator: (ConfirmPassword: string, callback: any) => {
        if (!confirmPassword.value) {
          callback("请再次输入密码");
        } else if (confirmPassword.value !== form.password) {
          callback("两次输入的密码不一致");
        } else {
          callback();
        }
      },
    },
  ],
  agreement: [
    {
      validator: (Checked: boolean, callback: any) => {
        if (checked.value) {
          callback();
        } else {
          callback("请阅读并同意协议");
        }
      },
    },
  ],
});
</script>
