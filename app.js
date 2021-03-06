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
        b: 0,
        available: false,
        nearby: false,
        error: true,
        success: true,
        niz : ['Prvi član', 'Drugi član', 'Treći član', 'Četvrti član'],
        nizObjekata: [
            {ime: 'aaa', prezime: 'bbbb'},
            {ime: 'ccc', prezime: 'dddd'},
            {ime: 'eee', prezime: 'ffff'},
            {ime: 'ggg', prezime: 'hhhh'}
        ],
        imePoljaOutput: "Defaultna izlazna vrijednost"
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
        },
        citajRef: function(){
            console.log(this.$refs);  //this.$refs  - lista svih ref-ova na stranici
            console.log(this.$refs.ime_polja.value); //vrijednost iz konkrenog ref-a (kontrole)
            this.imePoljaOutput = this.$refs.ime_polja.value;
        }
    },
    computed:{
        dodajB: function(){
            return this.b + this.godine;
        },
        compClasses: function(){
            return{
                //available: this.available,
                nearby: this.nearby
            };
        }
    }
})