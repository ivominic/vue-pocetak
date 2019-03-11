data={
    ime: "Mijenjalo bi se u svim instancama."
}

//Kreiranje komponenti
Vue.component('imekomponente',{
    template: '<p>Reusabilna komponenta {{ime}} <button v-on:click="promijeniIme()">Izmijeni ime</button></p>',
    data: function(){//Data mora biti funkcija koja vraća objekat
        return {
            ime: "Neko Ime"

        }
    },
    methods:{
        promijeniIme: function(){
            this.ime = "Izmijenjeno ime";
        }
    }
})

var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "Vue App Jedan"

    },
    methods: {

    },
    computed: {
        pozdrav: function(){
            return "Tekst iz prve instance"
        }
    }    
});


var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "Vue App Dva"

    },
    methods: {
        izmjenaNaslova1: function(){
            one.title = "Izmijena vrijednost prvog naslova iz druge instance"
        }
    },
    computed: {
        pozdrav: function(){
            return "Tekst iz druge instance"
        }
    }    
});


two.title = "Automatski pregazi vrijednost naslova iz druge instance Vue-a"