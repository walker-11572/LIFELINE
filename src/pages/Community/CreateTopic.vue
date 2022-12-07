<template>
  <a-row
    style="height: 60px; color: var(--color-neutral-8); font-size: 20px"
    align="end"
    justify="space-between"
    class="px-3"
    >发布一个新话题</a-row
  >
  <!-- #region 分隔线 -->
  <a-row justify="center">
    <a-col :span="24" class="px-3"><a-divider /></a-col>
  </a-row>
  <!-- #endregion -->
  <a-form :model="newTopic">
    <!--#region 帖子标题 -->
    <a-row
      style="height: 30px; color: var(--color-neutral-8); font-size: 16px"
      align="end"
      justify="space-between"
      class="px-3 fw-bold"
      >标题</a-row
    >
    <a-row align="end" justify="space-between" class="px-3 fw-bold mt-2 mb-1">
      <a-input
        v-model="newTopic.title"
        placeholder="Subject of your topic"
        size="large"
        :max-length="{ length: 99, errorOnly: true }"
        style="background-color: var(--color-neutral-3)"
        allow-clear
        show-word-limit
      />
    </a-row>
    <a-typography-paragraph
      class="px-3"
      style="color: var(--color-neutral-5); font-size: 14px"
    >
      Describe your topic well, while keeping the subject as short as possible.
    </a-typography-paragraph>
    <!-- #endregion -->
    <!--#region 帖子类型 -->
    <a-row
      style="height: 30px; color: var(--color-neutral-8); font-size: 16px"
      align="end"
      justify="space-between"
      class="px-3 fw-bold"
      >类型</a-row
    >
    <a-row class="px-3 mt-2" :gutter="20">
      <!-- Discussion -->
      <a-col :span="4">
        <a-card
          class="type-cards"
          @click="toggleType(0)"
          :class="{ active: isActive[0] }"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 111 111"
              id="icon-discussion"
            >
              <path
                d="M5.5 2C3.3 2 1 3.3 1 5.5v82C1 89.7 3.3 92 5.5 92H70c2.2 0 4.81 1.36 5.81 3.32l5.38 10.49c.99 1.96 2.62 1.9 3.62-.06l5.38-10.4C91.19 93.39 93.8 92 96 92h9.5c2.2 0 3.5-2.3 3.5-4.5v-82c0-2.2-1.3-3.5-3.5-3.5H5.5z"
                fill="#fff"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M83 108.65c-1.26 0-2.41-.84-3.15-2.29l-5.38-10.61C73.73 94.28 71.64 93 70 93H5.5A5.51 5.51 0 0 1 0 87.5v-82C0 2.47 2.47 0 5.5 0h100c3.03 0 5.5 2.47 5.5 5.5v82c0 3.03-2.47 5.5-5.5 5.5H96c-1.64 0-3.73 1.28-4.47 2.75l-5.38 10.62c-.74 1.45-1.89 2.28-3.15 2.28zM5.5 3A2.5 2.5 0 0 0 3 5.5v82A2.5 2.5 0 0 0 5.5 90H70c2.76 0 5.9 1.93 7.15 4.39L82.53 105c.24.47.46.63.51.66-.03-.02.19-.19.43-.66l5.38-10.62C90.1 91.93 93.24 90 96 90h9.5a2.5 2.5 0 0 0 2.5-2.5v-82a2.5 2.5 0 0 0-2.5-2.5H5.5z"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M101 111H56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h45c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-54 0H29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h18c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm36-81H20c-.83 0-1.5-.67-1.5-1.5S19.17 27 20 27h63c.83 0 1.5.67 1.5 1.5S83.83 30 83 30zM65 48H20c-.83 0-1.5-.67-1.5-1.5S19.17 45 20 45h45c.83 0 1.5.67 1.5 1.5S65.83 48 65 48zm18 18H20c-.83 0-1.5-.67-1.5-1.5S19.17 63 20 63h63c.83 0 1.5.67 1.5 1.5S83.83 66 83 66z"
              ></path>
            </svg>
            <p>帖子</p>
          </div>
        </a-card>
      </a-col>
      <!-- Question -->
      <a-col :span="4">
        <a-card
          class="type-cards"
          @click="toggleType(1)"
          :class="{ active: isActive[1] }"
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111">
              <path
                d="M5.5 1.5c-2.2 0-4 1.8-4 4v82c0 2.2 1.8 4 4 4H70c2.2 0 4.81 1.61 5.81 3.57l5.38 10.61c.99 1.96 2.62 1.96 3.62 0l5.38-10.61c.99-1.96 3.61-3.57 5.81-3.57h9.5c2.2 0 4-1.8 4-4v-82c0-2.2-1.8-4-4-4H5.5z"
                fill="#fff"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M83 108.65c-1.26 0-2.41-.84-3.15-2.29l-5.38-10.61C73.73 94.28 71.64 93 70 93H5.5A5.51 5.51 0 0 1 0 87.5v-82C0 2.47 2.47 0 5.5 0h100c3.03 0 5.5 2.47 5.5 5.5v82c0 3.03-2.47 5.5-5.5 5.5H96c-1.64 0-3.73 1.28-4.47 2.75l-5.38 10.62c-.74 1.45-1.89 2.28-3.15 2.28zM5.5 3A2.5 2.5 0 0 0 3 5.5v82A2.5 2.5 0 0 0 5.5 90H70c2.76 0 5.9 1.93 7.15 4.39L82.53 105c.24.47.46.63.51.66-.03-.02.19-.19.43-.66l5.38-10.62C90.1 91.93 93.24 90 96 90h9.5a2.5 2.5 0 0 0 2.5-2.5v-82a2.5 2.5 0 0 0-2.5-2.5H5.5z"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M101 111H66c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h35c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-44 0H29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h28c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
              ></path>
              <path
                d="M52.36 54.22c0-1.36.25-2.59.74-3.69s1.09-2.04 1.79-2.84c.7-.79 1.64-1.74 2.81-2.84 1.44-1.32 2.5-2.47 3.21-3.43.7-.96 1.05-2.09 1.05-3.38 0-3.52-1.83-5.28-5.5-5.28-1.82 0-3.18.53-4.09 1.59-.91 1.06-1.53 2.5-1.87 4.31l-6.01-1.65c.3-2.72 1.56-4.95 3.77-6.69 2.21-1.74 5.04-2.61 8.48-2.61 3.52 0 6.4.91 8.65 2.72s3.38 4.31 3.38 7.49c0 1.66-.27 3.08-.79 4.25-.53 1.17-1.16 2.14-1.9 2.89-.74.76-1.73 1.63-2.98 2.61-1.59 1.21-2.77 2.33-3.55 3.35-.78 1.02-1.16 2.35-1.16 3.97v1.08h-6.01v-1.85zm-1.02 10.16v-.74c0-2.53 1.27-3.8 3.8-3.8h.68c2.53 0 3.8 1.27 3.8 3.8v.74c0 2.53-1.27 3.8-3.8 3.8h-.68c-2.54 0-3.8-1.27-3.8-3.8z"
                fill="var(--color-neutral-5)"
              ></path>
            </svg>
            <p>问答</p>
          </div>
        </a-card>
      </a-col>
      <!-- Blog -->
      <a-col :span="4">
        <a-card
          class="type-cards"
          @click="toggleType(2)"
          :class="{ active: isActive[2] }"
        >
          <div>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <g id="图层_2">
                <path
                  fill="#fff"
                  d="M25.4,9.2c-10.1,0-20.8,6-20.8,16.1v378.2c0,10.1,10.6,20.8,20.8,20.8h297.5c10.1,0,22.2,6.3,26.8,15.3
		l24.8,48.4c4.6,9,12.1,8.8,16.7-0.3l24.8-48c4.6-9,16.7-15.5,26.8-15.5h43.8c10.1,0,16.1-10.6,16.1-20.8V25.4
		c0-10.1-6-16.1-16.1-16.1H25.4z"
                />
                <g>
                  <path
                    fill="var(--color-neutral-7)"
                    d="M382.8,501.2c-5.8,0-11.1-3.9-14.5-10.6l-24.8-48.9c-3.4-6.8-13.1-12.7-20.6-12.7H25.4
			c-14,0-25.3-11.4-25.4-25.4V25.4C0,11.4,11.4,0,25.4,0h461.3c14,0,25.4,11.4,25.4,25.4v378.2c0,14-11.4,25.4-25.4,25.4h-43.8
			c-7.6,0-17.2,5.9-20.6,12.7l-24.8,49C394,497.3,388.7,501.2,382.8,501.2z M25.4,13.8c-6.4,0-11.5,5.2-11.5,11.5v378.2
			c0,6.4,5.2,11.5,11.5,11.5h297.5c12.7,0,27.2,8.9,33,20.2l24.8,48.9c1.1,2.2,2.1,2.9,2.4,3c-0.1-0.1,0.9-0.9,2-3l24.8-49
			c5.8-11.3,20.2-20.2,33-20.2h43.8c6.4,0,11.5-5.2,11.5-11.5V25.4c0-6.4-5.2-11.5-11.5-11.5H25.4z"
                  />
                  <path
                    fill="var(--color-neutral-7)"
                    d="M465.9,512H258.3c-3.8,0-6.9-3.1-6.9-6.9c0-3.8,3.1-6.9,6.9-6.9h207.6c3.8,0,6.9,3.1,6.9,6.9
			C472.8,508.9,469.7,512,465.9,512z M216.8,512h-83c-3.8,0-6.9-3.1-6.9-6.9c0-3.8,3.1-6.9,6.9-6.9h83c3.8,0,6.9,3.1,6.9,6.9
			C223.7,508.9,220.6,512,216.8,512z"
                  />
                </g>
              </g>
              <g id="Layer_1">
                <g>
                  <path
                    fill="var(--color-neutral-6)"
                    d="M81.8,256.7h181.6c2.9,0,5.2-2.3,5.2-5.2V69.9c0-2.9-2.3-5.2-5.2-5.2H81.8c-2.9,0-5.2,2.3-5.2,5.2v181.6
			C76.6,254.4,78.3,256.7,81.8,256.7z M258.2,75.1v101.4l-33.7-50.1c-2.5-3.8-6.8-6-11.3-6s-8.8,2.2-11.3,6l-30.3,45.1l-9.9-14.7
			c-2.5-3.8-6.8-6-11.3-6s-8.8,2.3-11.3,6c0,0,0,0,0,0L87,234.5V75.1L258.2,75.1z"
                  />
                  <path
                    fill="var(--color-neutral-6)"
                    d="M122.5,132.5c11.7,0,21.1-9.5,21.1-21.1c0-11.7-9.5-21.1-21.1-21.1s-21.1,9.5-21.1,21.1
			C101.3,123.1,110.8,132.5,122.5,132.5z"
                  />
                </g>
                <path
                  fill="var(--color-neutral-6)"
                  d="M425.6,186.9H292.2c-2.9,0-5.2,2.3-5.2,5.2v59.5c0,2.9,2.3,5.2,5.2,5.2h133.4c2.9,0,5.2-2.3,5.2-5.2V192
		C430.8,189.2,428.5,186.9,425.6,186.9z M420.4,246.3h-123v-49.1h123V246.3z"
                />
                <g fill="var(--color-neutral-6)">
                  <path
                    d="M292.2,75.2h133.4c6.7,0,6.7-10.4,0-10.4H292.2C285.5,64.9,285.5,75.2,292.2,75.2z"
                  />
                  <path
                    d="M292.2,104.8H403c6.7,0,6.7-10.4,0-10.4H292.2C285.5,94.4,285.5,104.8,292.2,104.8z"
                  />
                  <path
                    d="M425.6,123.9H292.2c-6.7,0-6.7,10.4,0,10.4h133.4C432.3,134.3,432.3,123.9,425.6,123.9z"
                  />
                  <path
                    d="M292.2,163.8h70.7c6.7,0,6.7-10.4,0-10.4h-70.7C285.5,153.4,285.5,163.8,292.2,163.8z"
                  />
                </g>
                <g fill="var(--color-neutral-6)">
                  <path
                    d="M425.6,278.5H81.8c-6.7,0-6.7,10.4,0,10.4h343.8C432.3,288.9,432.3,278.5,425.6,278.5z"
                  />
                  <path
                    d="M425.6,311H81.8c-6.7,0-6.7,10.4,0,10.4h343.8C432.3,321.4,432.3,311,425.6,311z"
                  />
                  <path
                    d="M81.8,353.9h271.3c6.7,0,6.7-10.4,0-10.4H81.8C75.1,343.5,75.1,353.9,81.8,353.9z"
                  />
                </g>
              </g>
            </svg>
            <p>博文</p>
          </div>
        </a-card>
      </a-col>
      <!-- Video -->
      <a-col :span="4">
        <a-card
          class="type-cards"
          @click="toggleType(3)"
          :class="{ active: isActive[3] }"
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111">
              <path
                d="M5.5 1.5c-2.2 0-4 1.8-4 4v82c0 2.2 1.8 4 4 4H70c2.2 0 4.81 1.61 5.81 3.57l5.38 10.61c.99 1.96 2.62 1.96 3.62 0l5.38-10.61c.99-1.96 3.61-3.57 5.81-3.57h9.5c2.2 0 4-1.8 4-4v-82c0-2.2-1.8-4-4-4H5.5z"
                fill="#fff"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M83 108.65c-1.26 0-2.41-.84-3.15-2.29l-5.38-10.61C73.73 94.28 71.64 93 70 93H5.5A5.51 5.51 0 0 1 0 87.5v-82C0 2.47 2.47 0 5.5 0h100c3.03 0 5.5 2.47 5.5 5.5v82c0 3.03-2.47 5.5-5.5 5.5H96c-1.64 0-3.73 1.28-4.47 2.75l-5.38 10.62c-.74 1.45-1.89 2.28-3.15 2.28zM5.5 3A2.5 2.5 0 0 0 3 5.5v82A2.5 2.5 0 0 0 5.5 90H70c2.76 0 5.9 1.93 7.15 4.39L82.53 105c.24.47.46.63.51.66-.03-.02.19-.19.43-.66l5.38-10.62C90.1 91.93 93.24 90 96 90h9.5a2.5 2.5 0 0 0 2.5-2.5v-82a2.5 2.5 0 0 0-2.5-2.5H5.5z"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M101 111H56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h45c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-54 0H29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h18c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
              ></path>
              <path
                d="M56 24.33c-11.97 0-21.67 9.7-21.67 21.67S44.03 67.67 56 67.67c11.97 0 21.67-9.7 21.67-21.67S67.97 24.33 56 24.33zm-2.13 28.8c-1.94 1.03-3.54.07-3.54-2.13V41c0-2.2 1.59-3.16 3.54-2.13l9.93 5.26c1.94 1.03 1.94 2.71 0 3.74l-9.93 5.26z"
                fill="#b9c2c6"
              ></path>
            </svg>
            <p>视频</p>
          </div>
        </a-card>
      </a-col>
      <!-- Gallery -->
      <a-col :span="4">
        <a-card
          class="type-cards"
          @click="toggleType(4)"
          :class="{ active: isActive[4] }"
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111">
              <path
                d="M5.5 2C3.3 2 1 3.3 1 5.5v82C1 89.7 3.3 92 5.5 92H70c2.2 0 4.81 1.36 5.81 3.32l5.38 10.49c.99 1.96 2.62 1.9 3.62-.06l5.38-10.4C91.19 93.39 93.8 92 96 92h9.5c2.2 0 3.5-2.3 3.5-4.5v-82c0-2.2-1.3-3.5-3.5-3.5H5.5z"
                fill="#fff"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M83 108.65c-1.26 0-2.41-.84-3.15-2.29l-5.38-10.61C73.73 94.28 71.64 93 70 93H5.5A5.51 5.51 0 0 1 0 87.5v-82C0 2.47 2.47 0 5.5 0h100c3.03 0 5.5 2.47 5.5 5.5v82c0 3.03-2.47 5.5-5.5 5.5H96c-1.64 0-3.73 1.28-4.47 2.75l-5.38 10.62c-.74 1.45-1.89 2.28-3.15 2.28zM5.5 3A2.5 2.5 0 0 0 3 5.5v82A2.5 2.5 0 0 0 5.5 90H70c2.76 0 5.9 1.93 7.15 4.39L82.53 105c.24.47.46.63.51.66-.03-.02.19-.19.43-.66l5.38-10.62C90.1 91.93 93.24 90 96 90h9.5a2.5 2.5 0 0 0 2.5-2.5v-82a2.5 2.5 0 0 0-2.5-2.5H5.5z"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M101 111H56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h45c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-54 0H29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h18c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM11 18h24.55v24.55H11zm32.73 0h24.55v24.55H43.73zm32.73 0H101v24.55H76.46zM11 50.46h24.55V75H11zm32.73 0h24.55V75H43.73z"
              ></path>
            </svg>
            <p>画廊</p>
          </div>
        </a-card>
      </a-col>
      <!-- Poll -->
      <a-col :span="4">
        <a-card
          class="type-cards"
          @click="toggleType(5)"
          :class="{ active: isActive[5] }"
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111">
              <path
                d="M5.5 2C3.3 2 1 3.3 1 5.5v82C1 89.7 3.3 92 5.5 92H70c2.2 0 4.81 1.36 5.81 3.32l5.38 10.49c.99 1.96 2.62 1.9 3.62-.06l5.38-10.4C91.19 93.39 93.8 92 96 92h9.5c2.2 0 3.5-2.3 3.5-4.5v-82c0-2.2-1.3-3.5-3.5-3.5H5.5z"
                fill="#fff"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M83 108.65c-1.26 0-2.41-.84-3.15-2.29l-5.38-10.61C73.73 94.28 71.64 93 70 93H5.5A5.51 5.51 0 0 1 0 87.5v-82C0 2.47 2.47 0 5.5 0h100c3.03 0 5.5 2.47 5.5 5.5v82c0 3.03-2.47 5.5-5.5 5.5H96c-1.64 0-3.73 1.28-4.47 2.75l-5.38 10.62c-.74 1.45-1.89 2.28-3.15 2.28zM5.5 3A2.5 2.5 0 0 0 3 5.5v82A2.5 2.5 0 0 0 5.5 90H70c2.76 0 5.9 1.93 7.15 4.39L82.53 105c.24.47.46.63.51.66-.03-.02.19-.19.43-.66l5.38-10.62C90.1 91.93 93.24 90 96 90h9.5a2.5 2.5 0 0 0 2.5-2.5v-82a2.5 2.5 0 0 0-2.5-2.5H5.5z"
              ></path>
              <path
                fill="var(--color-neutral-7)"
                d="M101 111H56c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h45c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-54 0H29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h18c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm21-59H20c-2.76 0-5-2.24-5-5s2.24-5 5-5h48"
              ></path>
              <path
                d="M68 42h27c2.76 0 5 2.24 5 5s-2.24 5-5 5H68"
                fill="#b9c2c6"
              ></path>
            </svg>
            <p>投票</p>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <!-- #endregion -->
    <!-- {{newTopic}} -->
    <!--#region 帖子正文 -->
    <a-row
      style="height: 30px; color: var(--color-neutral-8); font-size: 16px"
      align="end"
      justify="space-between"
      class="px-3 fw-bold pt-4"
      >正文</a-row
    >
    <a-row class="px-3 mt-4">
      <Editor v-model="newTopic.body" type="newBlog"/>
    </a-row>
    <!-- #endregion -->
    <!--#region 所属类别 -->
    <a-row
      style="height: 30px; color: var(--color-neutral-8); font-size: 16px"
      align="end"
      class="px-3 fw-bold pt-4 mb-1"
    >
      <a-col :span="8">类别</a-col>
      <a-col :offset="1" :span="15">标签</a-col>
    </a-row>
    <a-row class="px-3 pt-4">
      <a-col :span="8">
        <a-select
          v-model="newTopic.category"
          placeholder="Please select ..."
          allow-search
          style="background-color: var(--color-neutral-3)"
        >
          <a-option>politics</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
          <a-option disabled>Disabled</a-option>
        </a-select>
      </a-col>
      <a-col :offset="1" :span="15"
        ><a-input-tag
          v-model="newTopic.tags"
          placeholder="Please Enter"
          allow-clear
          style="background-color: var(--color-neutral-3)"
      /></a-col>
    </a-row>
    <!-- #endregion -->
    <a-row justify="end" class="px-3 pt-4">
      <a-col :span="3">
        <a-button size="large" type="primary" long>Create Post</a-button>
      </a-col>
    </a-row>
  </a-form>
  <!--#region 推荐帖子 -->
  <a-row
    style="height: 60px; color: var(--color-neutral-8); font-size: 16px"
    align="end"
    justify="space-between"
    class="px-3"
  >
    <a-col :span="4">Suggested Topics</a-col>
    <a-col :span="6"
      ><a-input-search
        placeholder="Search topics"
        size="large"
        style="background-color: var(--color-neutral-3)"
    /></a-col>
  </a-row>
  <a-row justify="center">
    <a-col :span="24" class="px-3"><a-divider /></a-col>
  </a-row>
  <!-- 帖子列表头 -->
  <a-row
    style="color: var(--color-neutral-8); font-size: 14px"
    align="center"
    class="px-5 mb-4"
  >
    <a-col :span="12">Topic</a-col>
    <a-col :span="4">Category</a-col>
    <a-col :span="2">Likes</a-col>
    <a-col :span="2">Replies</a-col>
    <a-col :span="2">Views</a-col>
    <a-col :span="2">Activity</a-col>
  </a-row>
  <!-- 帖子 -->
  <PostCard
    Topic="Halloween Costume Contest 2018"
    Category="politics"
    :ExtraInfos="ExtraInfos"
  />
  <!-- #endregion -->
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import Editor from "@/components/TinymceEditor.vue";
import PostCard from "@/components/Community/PostCard.vue";
const ExtraInfos = reactive({
  Likes: 985,
  Replies: 502,
  Views: 15,
  Activity: "1h",
});
const isActive = reactive([true, false, false, false, false, false]);
const topicTypes = reactive([
  "Discussion",
  "Question",
  "Blog",
  "Video",
  "Gallery",
  "Poll",
]);
const newTopic = reactive({
  title: "",
  type: "Discussion",
  body: "",
  category: "",
  tags: [],
});
function toggleType(type: number) {
  isActive.fill(false);
  isActive[type] = true;
  newTopic.type = topicTypes[type];
}
</script>
<style lang="scss" scoped>
.type-cards {
  padding-top: 15px;
  background-color: var(--color-neutral-3);
  cursor: pointer;
  transition: border 0.2s linear;
  border: 2px solid var(--color-neutral-3);
  &:hover {
    border-color: rgb(var(--arcoblue-6));
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  svg {
    width: 5vw;
    height: 5vw;
  }
  p {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    color: var(--color-neutral-8);
  }
}
.active {
  border-color: rgb(var(--arcoblue-6));
}
</style>
