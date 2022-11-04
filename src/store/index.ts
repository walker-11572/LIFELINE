import { defineStore} from 'pinia'

export const mainStore = defineStore('main',{
  state:()=>{
    return {
      theme: 'light',
      newlineType: '',
    }
  },
  getters:{},
  actions:{}
})
