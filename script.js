const { createApp } = Vue;


createApp({
  data(){
    return{
      title: '',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      mailArray: []
    }
  },
  methods:{

    getApi(){

      for(i = 0; i < 10; i++){

        axios.get(this.apiUrl)
        .then((risposta) => {
          console.log(risposta.data);
  
          console.log('----->>> ',risposta.data.response);
  
          // Pusho dentro all'array che ho creato le 10 mail generate
          this.mailArray.push(risposta.data.response)
        })
       
      }
      console.log(this.mailArray);
    }

  },
  mounted(){
    this.getApi();
  }
}).mount('#app')