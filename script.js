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
          console.log('DATI ARRIVATI');
          console.log(risposta.data);
          // data è il contenuto della risposta che DOBBIAMO SEMPRE studiare perché non sappiamo prima come è fatto
          console.log('----->>> ',risposta.data.response);
  
          // this.title diventa 'OK' se risposta.data.response === true
          this.title = risposta.data.response ? 'OK' : 'NOOOO!!!'
        })
        .catch(errore => {
          console.log('MESSAGGIO DI ERRORE');
          console.log(errore.message);
  
        })
      }
    }

  },
  mounted(){

    this.getApi();
    console.log('QUI SONO PRIMA DELL\'ARRIVO DEI DATI');


  }
}).mount('#app')