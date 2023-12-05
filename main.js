"use strict"
const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
            quantita : 10
        }
    },
    created() {
        this.emailList1()
    },
    methods:{
      emailList1(){
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((email) => {
                    this.emailList.push(email.data.response)
                });
        }
      }
    }
}).mount('#app')