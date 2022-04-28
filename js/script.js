const boolzapp = new Vue (
    {
        el: '#boolzap',
        data: {
            randomMessages: [
                {message: 'Ok!'},
                {message: 'Perché?'},
                {message: 'Ma anche no'},
                {message: 'Che?'},
                {message: 'Come?'},
                {message: '42'},
                {message: 'Mio cugino lo avrebbe fatto meglio'},
                {message: 'So che non hai pushato'},
                {message: 'Io sono tuo padre'},
                {message: 'Lo conosci Ted?'},
                {message: 'Hai il mio arco'},
                {message: 'Io sono il grande Pdor, figlio di Kmer della tribù di Instar! Della terra desolata del Sknir! Uno degli ultimi sette saggi! Purvurur, Garen, Pastararin, Giugiar, Taram, Fusciusc e Tarin He!'},
                {message: 'Io sono Daenerys Targaryen, "Nata dalla tempesta", la prima del suo nome, regina degli Andali, dei Rhoynar e dei Primi Uomini, signora dei Sette Regni, protettrice del Regno, principessa di Roccia del Drago, khaleesi del Grande Mare d Erba, "la Non-bruciata", "Madre dei Draghi", regina di Meereen, "Distruttrice di catene".'},
                {message: 'Mi dispiace! La principessa è in un altro castello'},
                {message: 'è pericoloso andare da soli'},
                {message: 'Sei un ragazzo o una ragazza?'},
                {message: 'C è un luogo e un momento per ogni cosa, ma non ora'},
            ],
            contacts: [
                {   
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeIndex: 0,
            activeId: 1,
            newMessage: '',
            filterText: '',
            isWriting: '',

        },
        methods: {
            changeActive(id){
                const index = this.contacts.findIndex((contact)=>{
                    return contact.id === id
                })
                this.activeIndex = index
                this.activeId = id
            },
            send(){
                if(this.newMessage === '')return
                const newMsg = {
                    date: dayjs().format('DD/MM/YYYY h:m:s'),
                    message: this.newMessage,
                    status: 'sent',
                }
                this.contacts[this.activeIndex].messages.push(newMsg)
                this.newMessage = ''
                setTimeout(() => {
                    this.isWriting = true;
                  }, 1000);
                setTimeout(this.risposta, 3000)
            },
            risposta(){
                const reply = {
                    date: dayjs().format('DD/MM/YYYY h:m:s'),
                    message: this.randomMessages[Math.floor(Math.random() * this.randomMessages.length)].message,
                    status: 'received',
                }
                this.contacts[this.activeIndex].messages.push(reply)
                this.isWriting = false
                setTimeout(() => {
                    this.isWriting = null;
                }, 3000);
            },
            removeMsg(index){
                this.contacts[this.activeIndex].messages.splice(index, 1);
            },
            deleteMsg(){
                this.contacts[this.activeIndex].messages=[];
            },
            deleteChat(){
                /* if(this.contacts.length == 1) {
                    const fillContact = {
                        id:'9',
                        name:'Aggiungi un contatto',
                        avatar:'_0',
                        visible: true,
                        messages: 
                            {
                                date: '',
                                message: '',
                                status: '',
                            }
                    }
                    this.contacts.push(fillContact)
                    this.contacts.splice(0, 1);
                    console.log(this.contacts.length)
                    console.log(this.contacts)
                }
                else {
                    this.contacts.splice(this.activeIndex, 1);
                } */
                console.log(this.activeIndex, this.contacts);
                this.contacts.splice(this.activeIndex, 1);
                
            }
        },
        computed: {
            filteredContacts(){
                return this.contacts.filter((contact)=>contact.name.toLowerCase().includes(this.filterText.toLowerCase())
                )
            }
        }
    }
)