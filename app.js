new Vue({
    el: "#vue-app",
    data: {
        name: "Ivo",
        job: "Posao",
        website: "http://www.winsoft.me",
        websiteTag: '<a href="http://www.winsoft.me">web site iz taga</a>',
        godine: 36,
        xKoordinata: 0,
        yKoordinata: 0,
        a: 0,
        b: 0
    },
    methods: {
        greet: function(argument){
            return 'Tekst iz greet funkcije ' + argument + " ime: " + this.name;
            //Očekivano bi bilo this.data.name za pristup podacima, ali to je pogršeno jer Vue omogućava direktan pristup svemu što je u data kao da je u root-u
        },
        dodajGodinu: function(dodatak){
            this.godine+=dodatak;
        },
        oduzmiGodinu: function(dodatak){
            this.godine-=dodatak;
        },
        updateXY: function(event){
            //console.log(event);
            //this.xKoordinata = event.clientX;
            //this.yKoordinata = event.clientY;
            this.xKoordinata = event.offsetX;
            this.yKoordinata = event.offsetY;
        },
        linkklik: function(){
            alert('Poziv iz funkcije na klik linka');
        },        
        logujIme: function(){
            console.log('Unijeli ste ime');
        },        
        logujGodine: function(){
            console.log('Unijeli ste godine');
        },
        dodajA: function(){
            return this.a + this.godine;
        }
    },
    computed:{
        dodajB: function(){
            return this.b + this.godine;
        }
    }
})