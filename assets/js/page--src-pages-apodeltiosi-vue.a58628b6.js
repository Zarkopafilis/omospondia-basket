(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(t,e,a){},223:function(t,e,a){"use strict";var i={name:"SocialShareDialog",props:["title","url","trigger"],data:function(){return{showDialog:!1,showSnackbar:!1}},watch:{trigger:function(t,e){this.showDialog=!1,this.showDialog=!0}},methods:{copySharingUrl:function(){this.copyToClipboard(this.url),this.showSnackbar=!0},copyToClipboard:function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style={position:"absolute",left:"-9999px"},document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}}},o=(a(225),a(42)),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e},"update:md-active":function(e){t.showDialog=e}}},[a("social-sharing",{staticStyle:{display:"flex","justify-content":"space-between"},attrs:{url:t.url,title:t.title,description:t.title,quote:t.title,hashtags:"basket12","twitter-user":"v_ntakouris"},inlineTemplate:{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("network",{attrs:{network:"facebook"}},[e("img",{staticClass:"social",attrs:{src:"/facebook.png"}})]),e("network",{attrs:{network:"linkedin"}},[e("img",{staticClass:"social",attrs:{src:"/linkedin.png"}})]),e("network",{attrs:{network:"twitter"}},[e("img",{staticClass:"social",attrs:{src:"/twitter.png"}})])],1)},staticRenderFns:[]}}),a("md-dialog-actions",[a("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.copySharingUrl()}}},[t._v("Αντιγραφη συνδεσμου")]),a("md-button",{on:{click:function(e){t.showDialog=!1}}},[t._v("OK")])],1),a("md-snackbar",{attrs:{"md-duration":1e4,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e},"update:md-active":function(e){t.showSnackbar=e}}},[a("span",[t._v("Μπορείτε να κάνετε επικόλληση τον σύνδεσμο για να τον χρησιμοποιήσετε.")]),a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showSnackbar=!1}}},[t._v("Ok")])],1)],1)],1)},[],!1,null,null,null);e.a=s.exports},224:function(t){t.exports=JSON.parse('{"baseUrl":"https://basket12.gr"}')},225:function(t,e,a){"use strict";var i=a(222);a.n(i).a},226:function(t,e,a){},239:function(t){t.exports=JSON.parse('[{"display":"Να ελεγχθούν οι προμήθειες","content":"Είναι αίτημα όλων των φιλάθλων και (λογικά) και της ηγετικής ομάδας της ΕΟΚ, ο έλεγχος να είναι ενδελεχής. Να ψάξουν τα πάντα κι εμείς θα βοηθήσουμε προς αυτή την κατεύθυνση, ώστε να μην υπάρχει καμία σκιά.","author":"Γιώργος Κογκαλίδης","date":"04/10/2019","href":"https://www.to10.gr/basket/739416/na-elegchthoun-promithies","slug":"elegxos-promithies"},{"display":"Οικονομικός έλεγχος στην ΕΟΚ","author":"Γιώργος Κογκαλίδης","date":"03/10/2019","href":"https://ebasket.gr/2019/10/oikonomikos-elegchos-stin-eok","slug":"oikonomikos-eok"},{"display":"Ομοσπονδιακοί προπονητές: Πρωταγωνιστές συνεχόμενου δράματος","author":"Γιάννης Ψαράκης","date":"17/09/2019","href":"https://basketballguru.gr/featured/item/1224-i-pikri-istoria-ton-proponiton-tis-ethnikis","slug":"protagonistes-dramatos"},{"display":"Μπάσκετ στην Ελλάδα: Παραμάγαζα γύρω από τους μικρούς","author":"Νίκος Μπουρλάκης","date":"07/08/2019","href":"https://www.sportime.gr/bloggers/nikos-mpourlakis/basket-stin-ellada-paramagaza-giro-apo-tous-mikrous","slug":"paramagaza-mikroi"},{"display":"Γκόντας ο Αμερικανός","author":"Γιάννης Φιλέρης","content":"Μια συζήτηση για τη διαιτησία σε ΝΒΑ, Euroleague και βέβαια στην Ελλαδίτσα μας.","date":"25/08/2019","href":"https://www.contra.gr/basket/spyros-gkontas-nva-euroleague-basket-league-diaitisia.7488766.html","slug":"gkontas-amerikanos"},{"display":"Εκλογές φαντασμα(γορικές)","author":"Γιάννης Ψαράκης","date":"27/09/2018","href":"https://basketballguru.gr/articles/item/883-ekloges-eok","slug":"ekloges-fantasma"},{"display":"΄Ενστασις, κύριε πρόεδρε!","author":"Βασίλης Σκουντής","date":"03/10/2017","href":"http://www.gazzetta.gr/basketball/article/1144707/enstasis-kyrie-proedre","slug":"enstasis"},{"display":"Παλιάτσος ή ληστής","author":"Μίλτος Λαζαρίδης","content":"Αστέρια που διαμόρφωσαν την πρόσφατη ιστορία του αθλήματος, ηγούνται των Ομοσπονδιών στις χώρες τους.","date":"20/03/2017","href":"https://ebasket.gr/2017/03/paliatsos-i-listis","slug":"paliatsos-i-listis"}]')},240:function(t,e,a){"use strict";var i=a(226);a.n(i).a},259:function(t,e,a){"use strict";a.r(e);var i=a(239),o=a(224),s={name:"ApodeltiosiCard",components:{SocialShareDialog:a(223).a},props:["apodeltiosi"],data:function(){return{triggerDialog:!1}},methods:{getSharingUrl:function(){var t=o.baseUrl;return"".concat(t,"/apodeltiosi#").concat(this.apodeltiosi.slug)},openSharingDialog:function(){this.triggerDialog=!this.triggerDialog}}},n=(a(240),a(42)),r={name:"Apodeltiosi",components:{ApodeltiosiCard:Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("md-card",{staticClass:"diadikasia-card",staticStyle:{"margin-left":"0"},attrs:{"md-elevation":1,"md-with-hover":""}},[a("md-ripple",[a("md-card-header",[a("a",{attrs:{href:t.apodeltiosi.href,target:"_blank",id:t.apodeltiosi.slug}},[a("div",{staticClass:"md-title"},[t._v(t._s(t.apodeltiosi.display))])]),a("div",{staticClass:"md-subhead"},[t._v(t._s(t.apodeltiosi.author)+" - "+t._s(t.apodeltiosi.date))])])],1),t.apodeltiosi.content?a("md-card-content",[t._v("\n      "+t._s(t.apodeltiosi.content)+"\n    ")]):t._e(),a("md-card-actions",[a("md-button",{on:{click:function(e){return t.openSharingDialog()}}},[t._v("Μοιρασου")]),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.openSharingDialog()}}},[a("md-icon",[t._v("share")])],1)],1)],1),a("SocialShareDialog",{attrs:{title:t.apodeltiosi.display,url:t.getSharingUrl(),trigger:t.triggerDialog}})],1)},[],!1,null,"f8d49ef2",null).exports},data:function(){return{apodeltiosi:i,title:"Αποδελτίωση Τύπου"}},metaInfo:function(){return{title:this.title,meta:[{property:"og:type",content:"website"},{property:"og:title",content:this.title},{property:"og:image",content:"/diafaneia.jpg"},{name:"twitter:image",content:"https://basket12.gr/diafaneia.jpg"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:this.title},{name:"twitter:site",content:"@v_ntakouris"},{name:"twitter:creator",content:"@v_ntakouris"}]}}},l=Object(n.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{title:this.title}},[e("section",this._l(this.apodeltiosi,function(t){return e("ApodeltiosiCard",{key:t.href,attrs:{apodeltiosi:t}})}),1)])},[],!1,null,null,null);e.default=l.exports}}]);