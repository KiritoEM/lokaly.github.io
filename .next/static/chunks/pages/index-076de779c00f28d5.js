(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(2307)}])},2307:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return J}});var a=s(5893),l=s(7294),n=s(2708),r=()=>{let e=[3,0,0,0],[t,s]=(0,l.useState)([0,0,0,0]),[r,i]=(0,l.useState)(!0),{ref:c,inView:o}=(0,n.YD)({threshold:.5});return(0,l.useEffect)(()=>{if(o&&r){let t=setInterval(()=>{s(t=>t.map((t,s)=>t<e[s]?t+1:t))},60);return()=>clearInterval(t)}},[o,r]),(0,l.useEffect)(()=>{o&&!r&&i(!0)},[o]),(0,a.jsx)("section",{className:"brand px-10 md:px-20 lg:px-32 py-10 bg-green02 ",ref:c,children:(0,a.jsxs)("div",{className:"container mx-auto w-full flex flex-wrap gap-10 md:gap-12 lg:gap-0 items-center justify-center lg:justify-between",children:[(0,a.jsxs)("div",{className:"partenary flex  gap-5 md:gap-4 items-center",children:[(0,a.jsx)("h4",{className:"text-5xl lg:text-6xl text-white calSans pt-2",children:t[0]}),(0,a.jsxs)("p",{className:"text-white01",children:["Partenaires ",(0,a.jsx)("br",{}),"locaux"]})]}),(0,a.jsxs)("div",{className:"job flex gap-5 md:gap-4 items-center",children:[(0,a.jsxs)("h4",{className:"text-5xl lg:text-6xl text-white calSans pt-2",children:["+",t[1]]}),(0,a.jsxs)("p",{className:"text-white01",children:["Emplois ",(0,a.jsx)("br",{}),"cr\xe9es"]})]}),(0,a.jsxs)("div",{className:"food flex gap-5 md:gap-4 items-center",children:[(0,a.jsx)("h4",{className:"text-5xl lg:text-6xl text-white calSans pt-2",children:t[2]}),(0,a.jsxs)("p",{className:"text-white01",children:["Kilos de ",(0,a.jsx)("br",{}),"nourriture sauv\xe9"]})]}),(0,a.jsxs)("div",{className:"selling flex gap-5 md:gap-4 items-center",children:[(0,a.jsxs)("h4",{className:"text-5xl lg:text-6xl text-white calSans pt-2",children:[t[3]," "]}),(0,a.jsxs)("p",{className:"text-white01",children:["ventes",(0,a.jsx)("br",{}),"r\xe9alis\xe9s"]})]})]})})},i=s(794);s(3879);var c=e=>{let{text:t}=e;return(0,a.jsxs)("section",{className:"fixed top-0 z-50 w-full h-screen bg-white02 flex flex-col gap-4 items-center justify-center",style:{backgroundColor:"#ffffffba"},children:[(0,a.jsx)(i.y1,{autoplay:!0,loop:!0,src:"/Animation - 1716523850965.json",style:{width:"4.4em",height:"4.4em",objectFit:"cover"}}),(0,a.jsx)("h3",{className:"text-green02 generalSans-Medium",children:t})]})},o=e=>{let{placeholder:t,type:s,name:l}=e;return(0,a.jsx)("input",{type:s,placeholder:t,name:l,className:"input-component01 w-full border border-blue01 border-opacity-30 focus:border-green01 placeholder:opacity-30 text-blue01 placeholder:text-blue01 py-3 md:py-4 px-3 md:px-4 rounded-md text-sm"})},d=s(9317),x=s(5121);function m(){let{emailState:e,loadingState:t}=(0,d.d)();return{sendEmail:async s=>{s.preventDefault();let a=s.currentTarget,l=a.name.value,n={userName:l,userEmail:a.email.value,message:a.message.value,phoneNumber:a.phoneNumber.value};console.log(n);try{let s=await x.Z.post("/api/emailContact",n,{headers:{"Content-Type":"application/json"}});200===s.status&&(t(!1),e(!0))}catch(e){console.error(e)}},verifyEmail:async s=>{try{let a=await x.Z.post("/api/emailVerification",{userEmail:s},{headers:{"Content-Type":"application/json"}});if(200===a.status)return t(!1),e(!0),!0}catch(e){console.error(e)}}}}var p=s(5675),u=s(3579),h=s(3454),g=()=>{let e=(0,p._)(),{ref:t,inView:s}=(0,n.YD)({threshold:.3}),{verifyEmail:r}=m(),{emailSent:i,emailState:c,loadingState:x}=(0,d.d)(),g="".concat(h.env.NEXT_PUBLIC_BASE_PATH,"/contact-bg.svg");return(0,l.useEffect)(()=>{s&&e.start("visible")},[e,s]),(0,a.jsx)("section",{className:"landing__contact bg-cover bg-no-repeat bg-center w-full overflow-hidden",style:{backgroundImage:"url(".concat(g,")")},id:"contact",ref:t,children:(0,a.jsx)("section",{className:"container mx-auto  pb-24 px-8 md:pl-12 md:pr-10 lg:pl-36 lg:pr-40 mt-24",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row  items-end gap-12 md:gap-10 relative z-30",children:[(0,a.jsxs)(u.E.div,{variants:{hidden:{opacity:0,x:-55},visible:{opacity:1,x:0,transition:{delay:.4,duration:.7,type:"spring"}}},initial:"hidden",animate:e,className:"contact-header md:w-1/2 lg:w-3/5 flex flex-col gap-3 md:mb-20",children:[(0,a.jsx)("h2",{className:"text-3xl md:text-text-3xl lg:text-4xl text-blue01 calSans",children:"Prenez contact avec nous"}),(0,a.jsx)("p",{className:"text-blue02 md:text-lg",children:"Vous avez quelque chose \xe0 ajouter? Un partenariat \xe0 discuter? ou quelque chose \xe0 faire passer? Remplissez le formulaire suivant"})]}),i?(0,a.jsxs)("div",{className:"w-full md:w-1/2 lg:w-3/5",children:[(0,a.jsx)("div",{className:"cat relative z-40 top-8 flex justify-end",children:(0,a.jsx)("img",{src:"".concat(h.env.NEXT_BASE_PATH,"/cat.svg"),alt:""})}),(0,a.jsxs)("div",{className:"contact-form  h-max bg-white rounded-xl p-9 flex flex-col gap-3",children:[(0,a.jsx)("h3",{className:"text-xl md:text-2xl general-sans-semibold text-blue01",children:"Message bien envoy\xe9!"}),(0,a.jsx)("p",{className:"text-blue02",children:"Notre \xe9quipe a bien re\xe7u votre message, nous vous contacterons dans les moindres d\xe9lai."}),(0,a.jsx)("div",{className:"w-full flex md:justify-end",children:(0,a.jsx)("button",{type:"submit",className:"text-sm bg-green01 w-max px-5 py-3 rounded-xl text-white mt-6",onClick:()=>c(!1),children:"Envoyer un autre"})})]})]}):(0,a.jsxs)("form",{className:"w-full md:w-1/2 lg:w-3/5",onSubmit:e=>{r(e),x(!0)},children:[(0,a.jsx)("div",{className:"cat relative z-40 top-8 flex justify-end",children:(0,a.jsx)("img",{src:"".concat(h.env.NEXT_BASE_PATH,"/cat.svg"),alt:""})}),(0,a.jsxs)("div",{className:"contact-form h-max bg-white rounded-xl p-7 md:p-9 flex flex-col gap-6",children:[(0,a.jsx)(o,{type:"text",placeholder:"Votre nom",name:"name"}),(0,a.jsx)(o,{type:"email",placeholder:"Adresse mail",name:"email"}),(0,a.jsx)(o,{type:"number",placeholder:"Num\xe9ro de t\xe9l\xe9phone",name:"phoneNumber"}),(0,a.jsx)("textarea",{placeholder:"Votre message",name:"message",className:"w-full h-40 border  border-blue01 border-opacity-30 focus:border-green01 placeholder:opacity-70 text-blue01 placeholder:text-blue011 py-4 px-4 rounded-md text-sm"}),(0,a.jsx)("button",{type:"submit",className:"text-sm bg-green01 w-max px-12 py-3 rounded-xl text-white mt-6",children:"Envoyer"})]})]})]})})})},f=s(3454),v=e=>{let{text:t,title:s,isActive:n,handleToggle:r}=e,[i,c]=(0,l.useState)(!1),o=()=>{c(!0),setTimeout(()=>{c(!1),console.log("rotation termin\xe9e")},100)};return(0,a.jsxs)("article",{className:"FAQ-card flex w-full rounded-xl cursor-pointer ".concat(n?"sticky-open":"sticky-close"," ").concat(n?"border-2 border-green01 items-start gap-12 p-10":"items-center justify-between py-5 md:py-6 px-8 md:px-10"),onClick:()=>{r&&r(),o()},children:[(0,a.jsxs)("div",{className:"header w-11/12 md:w-full ".concat(n&&"flex flex-col gap-5"),children:[(0,a.jsx)("h3",{className:"text-lg md:text-2xl text-blue01 calSans",children:s}),(0,a.jsx)("p",{className:"text-blue02 ".concat(n?"flex":"hidden"),children:t})]}),(0,a.jsx)("img",{src:"".concat(f.env.NEXT_PUBLIC_BASE_PATH,"/icons/").concat(n?"chevron-circle-down.svg":"chevron-circle-right.svg"),className:"w-12 md:w-auto cursor-pointer absolute right-0 md:relative hidden md:flex ".concat(i?"rotate":""),alt:"Chevron Icon"}),(0,a.jsx)("img",{src:"".concat(f.env.NEXT_PUBLIC_BASE_PATH,"/icons/chevron-circle-right.svg"),className:"w-12 md:w-auto cursor-pointer absolute right-0 mr-8 md:relative md:hidden ".concat(n&&"md:hidden"," ").concat(i?"rotate-respons":""),alt:"Chevron Icon"})]})};let j=[{label:"Accueil",scrollSectionId:"hero"},{label:"A propos",scrollSectionId:"features"},{label:"Nos partenaires",scrollSectionId:"partners"},{label:"FAQ",scrollSectionId:"FAQ"}],w=[{img:"partner1.png",link:"https://www.facebook.com/recyclanay"},{img:"partner2.png",link:"https://www.facebook.com/profile.php?id=100071985974415"},{img:"partner3.png",link:"https://www.facebook.com/NectartServiceTraiteur",colspan:3}],N=[{title:"Comment fonctionne Lokaly ?",text:"Lokaly connecte les producteurs, commer\xe7ants et consommateurs via une plateforme digitale. Les producteurs inscrivent leurs produits, les commer\xe7ants peuvent g\xe9rer leurs stocks et les consommateurs peuvent acheter des produits locaux frais, r\xe9duisant ainsi le gaspillage alimentaire et soutenant l'\xe9conomie locale."},{title:"Comment puis-je m'inscrire en tant que producteur ou commer\xe7ant ?",text:"Pour rejoindre Lokaly en tant que vendeur, vous devez nous contacter pour obtenir un compte vendeur. Envoyez-nous un message via notre formulaire de contact ou par email, et nous vous guiderons dans le processus de cr\xe9ation de votre compte."},{title:"Quels types de produits puis-je trouver sur Lokaly ?",text:"Sur Lokaly, vous pouvez trouver une vari\xe9t\xe9 de produits locaux, notamment des produits agricoles frais tels que des fruits et l\xe9gumes, des produits issus des food businesses pour le programme NoWaste, et des alternatives durables comme les charbons \xe9co et le biogaz."},{title:"Comment Lokaly contribue-t-elle \xe0 la r\xe9duction du gaspillage alimentaire ?",text:"Lokaly aide \xe0 r\xe9duire le gaspillage alimentaire en permettant aux producteurs et commer\xe7ants de vendre leurs produits invendus ou en surplus \xe0 des consommateurs \xe0 la recherche de produits frais et locaux. Cela valorise les exc\xe9dents et \xe9vite que des produits parfaitement bons ne soient jet\xe9s, contribuant ainsi \xe0 une \xe9conomie circulaire et durable."}];var b=s(3454),y=()=>{let[e,t]=(0,l.useState)(null),s=e=>{t(t=>t===e?null:e)},r=(0,p._)(),{ref:i,inView:c}=(0,n.YD)({threshold:.3});(0,l.useEffect)(()=>{c&&r.start("visible")},[r,c]);let o={hidden:{opacity:0,y:-55},visible:e=>({opacity:1,y:0,transition:{delay:(e+1)*.3,duration:.5,type:"spring"}})},d={hidden:{opacity:0,x:-55},visible:{opacity:1,x:0,transition:{delay:.4,duration:.7,type:"spring"}}};return(0,a.jsxs)("div",{className:"container mx-auto overflow-hidden pt-24",ref:i,children:[(0,a.jsxs)("div",{className:"illustration flex  justify-end md:justify-between",children:[(0,a.jsx)(u.E.img,{initial:"hidden",animate:r,variants:d,src:"".concat(b.env.NEXT_BASE_PATH,"/cloud1.svg"),className:"relative top-48 hidden md:flex w-36 lg:w-auto"}),(0,a.jsx)(u.E.img,{initial:"hidden",animate:r,variants:d,src:"".concat(b.env.NEXT_BASE_PATH,"/cloud2.svg"),className:"w-48 md:w-60 lg:w-80"})]}),(0,a.jsxs)("section",{className:"landing__FAQ  lg:pt-30 pb-4 px-7 md:px-16 lg:px-56 bg-white",id:"FAQ",children:[(0,a.jsxs)("div",{className:"FAQ-header flex flex-col items-center gap-2 mt-10 md:mt-13",children:[(0,a.jsx)("h4",{className:"text-3xl md:text-4xl text-green01 calSans text-center",children:"Foire aux questions"}),(0,a.jsx)("p",{className:"text-white01 text-center lg:text-lg",children:"Pour vous aider \xe0 comprendre notre essence"})]}),(0,a.jsx)("div",{className:"FAQ-content flex flex-col gap-10 mt-14",children:N.map((t,l)=>(0,a.jsx)(u.E.div,{custom:l,initial:"hidden",animate:r,variants:o,children:(0,a.jsx)(v,{...t,isActive:e===l,handleToggle:()=>s(l)})},l))})]})]})},E=s(3977),_=s(3454);let A={apiKey:"AIzaSyAUT2wah5gf0hw27AkYpzpP2THoge_0huU",authDomain:"ntf-app-d45a3.firebaseapp.com",projectId:"ntf-app-d45a3",storageBucket:_.env.NEXT_PUBLIC_NEXT_PUBLIC_STORAGE_BUCKET,messagingSenderId:_.env.MESSAGING_SENDER_ID,appId:"1:124789879568:web:b099dda9e9c97a25f8eb95",measurementId:"G-4JFJ56P1CN"};var S=s(9828);let T=(0,E.ZF)(A),k=(0,S.ad)(T);var P=s(3454),C=()=>{let e=(0,p._)(),{loadingState:t}=(0,d.d)(),{ref:s,inView:r}=(0,n.YD)({threshold:.3}),{verifyEmail:i}=m(),{addEmail:c}=function(){let e=(0,S.hJ)(k,"emailRef");return{addEmail:async t=>{console.log("fonction appel\xe9");let s=await (0,S.ET)(e,{email:t});console.log(s),s?console.log("Email ajout\xe9 avec succ\xe9s"):console.log("Email non ajout\xe9")}}}(),[o,x]=(0,l.useState)(""),[h,g]=(0,l.useState)(!1),f=async()=>{try{t(!0),await i(o)&&(await c(o),alert("Email ajout\xe9 avec succ\xe9s!"))}catch(e){console.error("An error occurred during email processing:",e),alert("An error occurred. Please try again.")}};(0,l.useEffect)(()=>{r&&e.start("visible")},[e,r]);let v={hidden:{opacity:0,y:-55},visible:{opacity:1,y:0,transition:{delay:.4,duration:.7,type:"spring"}}};return(0,a.jsx)("div",{className:"container mx-auto",children:(0,a.jsxs)("section",{className:"landing__features pt-24 lg:pt-30 px-8 md:px-16 lg:px-20 bg-white",ref:s,id:"features",children:[(0,a.jsxs)("div",{className:"features-header flex flex-col items-center gap-2",children:[(0,a.jsx)("h4",{className:"text-3xl lg:text-5xl text-green01 calSans text-center",children:"Connecter, Promouvoir, Agir"}),(0,a.jsx)("p",{className:"text-white01 w-full lg:w-96 text-center lg:text-lg",children:"pour une Alimentation Locale et Durable \xe0 Madagascar"})]}),(0,a.jsxs)("div",{className:"features-content flex flex-col lg:flex-row gap-12 md:gap-20 mt-14",children:[(0,a.jsxs)(u.E.div,{variants:v,initial:"hidden",animate:e,className:"header w-full lg:w-1/3 flex flex-col gap-12",children:[(0,a.jsxs)("div",{className:"text-container flex flex-col gap-5",children:[(0,a.jsxs)("h3",{className:"text-2xl md:text-3xl calSans text-gray02",children:["Moins de gaspillage, Plus de soutien aux producteurs, ",(0,a.jsx)("br",{})," Une diff\xe9rence d\xe9licieuse"]}),(0,a.jsxs)("p",{className:"text-gray01",children:["Soyez notifi\xe9s de nos superbes offres et ne ratez rien"," "]})]}),(0,a.jsxs)("div",{className:"relative mb-4 flex items-stretch bg-white02 rounded-3xl py-2 pr-2 pl-7","data-twe-input-wrapper-init":!0,"data-twe-input-group-ref":!0,children:[(0,a.jsx)("span",{className:"flex items-center whitespace-nowrap",id:"basic-addon1","data-twe-input-group-text-ref":!0,children:(0,a.jsx)("img",{src:"".concat(P.env.NEXT_BASE_PATH,"/icons/email-icon.svg"),className:"w-9"})}),(0,a.jsx)("input",{type:"text",className:"min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-gray03 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray03 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-gray03 [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-1 text-gray03",id:"exampleFormControlInput",placeholder:"votre adresse email",onChange:e=>{x(e.target.value)}}),(0,a.jsx)("span",{className:"flex items-center whitespace-nowrap",id:"basic-addon1","data-twe-input-group-text-ref":!0,children:(0,a.jsx)("button",{onClick:f,children:(0,a.jsx)("img",{src:"".concat(P.env.NEXT_BASE_PATH,"/icons/send-icon.svg"),className:"w-20"})})})]})]}),(0,a.jsxs)(u.E.div,{variants:v,initial:"hidden",animate:e,className:"features flex flex-col md:flex-row gap-7 lg:w-2/3 overflow-hidden",children:[(0,a.jsxs)("div",{className:"features-card md:w-1/2 lg:w-2/4 bg-green03 rounded-lg flex flex-col items-center p-8 gap-10 overflow-hidden cursor-pointer",children:[(0,a.jsxs)("div",{className:"header flex flex-col items-center gap-2",children:[(0,a.jsx)("h3",{className:"calSans text-gray02 text-2xl lg:text-3xl text-center",children:"Facile \xe0 installer"}),(0,a.jsx)("p",{className:"text-gray02 text-center",children:"T\xe9l\xe9chargez, installez l’application et ....c’est pr\xeat"})]}),(0,a.jsx)("img",{src:"".concat(P.env.NEXT_BASE_PATH,"/mockup1.svg"),className:"width-full"})]}),(0,a.jsxs)(u.E.div,{variants:v,initial:"hidden",animate:e,className:"features-card md:w-1/2 lg:w-2/4 bg-green03 lg:bg-opacity-40 hover:bg-green03 rounded-lg flex flex-col items-center p-8 gap-10 overflow-hidden text-gray02 lg:text-opacity-40 hover:text-opacity-100 cursor-pointer",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[(0,a.jsxs)("div",{className:"header flex flex-col items-center gap-2",children:[(0,a.jsx)("h3",{className:"calSans text-2xl lg:text-3xl text-center",children:"Acces direct"}),(0,a.jsx)("p",{className:"text-center",children:"Acc\xe9dez et Explorez nos superbes offres avec ou sans compte"})]}),(0,a.jsx)("img",{src:"".concat(P.env.NEXT_BASE_PATH,"/mockup2.png"),className:"lg:opacity-".concat(h?"100":"40")})]})]})]})]})})},B=s(3454),I=()=>{let e=(0,p._)(),{ref:t,inView:s}=(0,n.YD)({threshold:.3});return(0,l.useEffect)(()=>{s&&e.start("visible")},[e,s]),(0,a.jsx)(u.E.div,{variants:{hidden:{opacity:0,y:55},visible:{opacity:1,y:0,transition:{delay:.3,duration:.7,type:"spring"}}},initial:"hidden",animate:e,className:"container mx-auto w-full",ref:t,children:(0,a.jsxs)("footer",{className:"landing__footer flex flex-col md:flex-row md:justify-between items-center pt-10 md:pt-5 pb-10 md:pb-16 px-8 md:px-16 lg:px-44 bg-white gap-6",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("img",{src:"".concat(B.env.NEXT_BASE_PATH,"/logo.svg"),alt:""})}),(0,a.jsx)("div",{className:"copyright",children:(0,a.jsx)("p",{className:"text-green05 text-center",children:"\xa9 2024 Lokaly. Tout droits r\xe9serv\xe9s. "})}),(0,a.jsxs)("div",{className:"social-icons flex gap-1",children:[(0,a.jsx)("a",{href:"https://www.facebook.com/profile.php?id=61559917253920",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("img",{src:"".concat(B.env.NEXT_BASE_PATH,"/icons/fb-icon.svg"),alt:"Facebook",className:"cursor-pointer"})}),(0,a.jsx)("a",{href:"https://api.whatsapp.com/send?phone=0345503761",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("img",{src:"".concat(B.env.NEXT_BASE_PATH,"/icons/whatsapp-icon.svg"),alt:"WhatsApp",className:"cursor-pointer"})})]})]})})},z=e=>{let{children:t}=e;return(0,a.jsx)("div",{style:{overflow:"hidden",width:"fit-content",position:"relative"},children:(0,a.jsx)(u.E.div,{initial:{opacity:0,y:80},animate:{opacity:1,y:0},transition:{delay:.54,duration:.7},children:t})})},X=s(3454),H=()=>(0,a.jsx)("div",{className:"container mx-auto overflow-hidden",children:(0,a.jsxs)("section",{className:"landing__hero px-8 md:px-20 lg:pl-40 lg:pr-52 pt-10 mt-24 lg:mt-0 items-center flex flex-col gap-20 md:flex-row w-full relative overflow-hidden pb-20 justify-between pb-20 md:pb-32",id:"hero",children:[(0,a.jsx)("div",{className:"hero-header flex md:justify-center relative z-30",children:(0,a.jsxs)("div",{className:"hero-header__container md:w-72 lg:w-96 flex flex-col gap-3",children:[(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)(z,{children:(0,a.jsx)("h2",{className:"hero-title calSans text-green02 leading-tight flex flex-col w-full",children:"Pour une consommation"})}),(0,a.jsx)(z,{children:(0,a.jsx)("span",{className:"hero-title calSans text-green01 leading-tight flex flex-row",children:"reponsable"})})]}),(0,a.jsx)(z,{children:(0,a.jsx)("p",{className:"text-gray01 lg:text-lg w-full",children:"Valorisez les produits locaux et contribuez \xe0 un mode de vie plus durable."})}),(0,a.jsx)(z,{children:(0,a.jsxs)("button",{className:"text-white bg-gray03 rounded-3xl px-6 py-3 flex items-center gap-2 w-max mt-8",children:["T\xe9l\xe9chargeable bient\xf4t"," ",(0,a.jsx)("img",{src:"".concat(X.env.NEXT_BASE_PATH,"/icons/download-icon.svg"),className:" w-5",alt:""})]})})]})}),(0,a.jsx)("div",{className:"hero-img w-full flex justify-center md:w-5/12",children:(0,a.jsx)(u.E.div,{initial:{opacity:0,y:17,x:30,scale:0},animate:{opacity:1,y:0,x:0,scale:1},transition:{delay:1,duration:.9},className:"hero-img flex justify-center w-full relative",children:(0,a.jsx)("img",{src:"".concat(X.env.NEXT_BASE_PATH,"/home-img.svg"),className:"object-contain md:max-w-full md:h-auto"})})})]})}),L=s(1163),F=s(3454),q=()=>{(0,L.useRouter)();let e=(0,p._)(),{ref:t,inView:s}=(0,n.YD)({threshold:.3});return(0,l.useEffect)(()=>{s&&e.start("visible")},[e,s]),(0,a.jsxs)("section",{className:"landing__partners pt-24 lg:pt-30 px-8 md:px-16 lg:px-40 bg-white",ref:t,id:"partners",children:[(0,a.jsxs)("div",{className:"partners-header flex flex-col items-center gap-2",children:[(0,a.jsx)("h4",{className:"text-3xl md:text-4xl text-green01 calSans text-center",children:"Ils nous font confiance"}),(0,a.jsx)("p",{className:"text-white01  text-center  lg:text-lg",children:"Gr\xe2ce \xe0 des partenariats solides, nous sommes en mesure de vous offrir une s\xe9lection diversifi\xe9e de produits locaux de qualit\xe9, tout en soutenant les producteurs locaux et en -luttant contre le gaspillage alimentaire"})]}),(0,a.jsx)("div",{className:"container2 w-full flex justify-center",children:(0,a.jsx)(u.E.div,{variants:{hidden:{opacity:0,y:-65,scale:0},visible:{opacity:1,y:0,scale:1,transition:{delay:.4,duration:.7,type:"spring"},stiffness:100}},initial:"hidden",animate:e,className:"partners-content grid grid-cols-2 md:grid-cols-3 mt-14 w-max flex justify-center gap-12 md:gap-20",children:w.map((e,t)=>(0,a.jsx)("div",{className:"logo-container flex items-center w-full cursor-pointer ".concat(e.colspan?"col-span-".concat(e.colspan):""," ").concat(t===w.length-1&&w.length%2!=0?"col-span-2 md:col-span-0 justify-center":""," md:col-span-1"),children:(0,a.jsx)("a",{href:e.link,target:"_blank",children:(0,a.jsx)("img",{src:"".concat(F.env.NEXT_BASE_PATH,"/icons/").concat(e.img),className:"w-20 md:w-24 object-contain"})})},t))})})]})},D=e=>{let t=document.querySelector("#".concat(e));if(t){let s=t.getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:s,behavior:"smooth"}),console.log(e)}},U=s(2111),Y=()=>{let{openMenu:e,changeNav:t}=(0,U.Y)();return(0,a.jsx)("div",{className:"nav-responsive-container fixed top-24  z-50 px-5 overflow-hidden lg:hidden md:flex md:justify-end  w-screen",children:(0,a.jsx)("div",{className:"menu-items items-center relative bg-green02 w-full md:w-max px-0 md:px-24 py-12 rounded-xl shadow-gray-500 ".concat(e?"open-menu":"close-menu"),children:(0,a.jsxs)("ul",{className:"flex-col flex gap-8 items-center",children:[j.map((e,s)=>(0,a.jsx)("li",{className:"general-sans-medium text-white text-lg cursor-pointer",onClick:()=>{D(e.scrollSectionId?e.scrollSectionId:""),t(!1)},children:e.label},s)),(0,a.jsx)("div",{className:"contact-btn",children:(0,a.jsx)("button",{className:"bg-white hover:bg-green01 rounded-3xl py-3 text-green02 px-6 general-sans-medium mt-2",onClick:()=>{D("contact"),t(!1)},children:"Nous contacter"})})]})})})},Q=s(3454),M=()=>{let{menuToogle:e,changeNav:t}=(0,U.Y)();return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)("div",{className:"container lg:mx-auto",children:(0,a.jsx)(u.E.nav,{initial:{opacity:0,y:-37},animate:{opacity:1,y:0},transition:{delay:.7},className:"landing-nav fixed lg:relative w-full top-0 z-50  bg-white lg:bg-transparent overflow-hidden",children:(0,a.jsxs)("div",{className:"nav-responsive-container flex justify-between px-10 lg:px-20 bg-transparent py-6 md:py-8 bg-transparent",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("img",{src:"".concat(Q.env.NEXT_BASE_PATH,"/logo.svg"),alt:"logo",className:"w-24 md:w-auto"})}),(0,a.jsxs)("div",{className:"menu-items  gap-10 items-center hidden lg:flex",children:[(0,a.jsx)("ul",{className:"flex gap-10",children:j.map((e,t)=>(0,a.jsx)("li",{className:"general-sans-medium  text-green02 cursor-pointer hover:text-green01",onClick:()=>D(e.scrollSectionId?e.scrollSectionId:""),children:e.label},t))}),(0,a.jsx)("div",{className:"contact-btn",children:(0,a.jsx)("button",{className:"bg-green02 hover:bg-green01 rounded-3xl py-3 text-white px-6 general-sans-medium",onClick:()=>{D("contact"),t(!1)},children:"Nous contacter"})})]}),(0,a.jsx)("img",{src:"".concat(Q.env.NEXT_BASE_PATH,"/icons/menu-icon.svg"),alt:"",className:"lg:hidden w-7 h-7 relative top-1 object-contain",onClick:()=>e()})]})})}),(0,a.jsx)(Y,{})]})},R=e=>{let{children:t}=e;return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(M,{}),t]})},G=s(9008),V=s.n(G),J=()=>{let{loading:e}=(0,d.d)();return(0,a.jsxs)("section",{className:"landing w-screen overflow-hidden",children:[(0,a.jsx)(V(),{children:(0,a.jsx)("title",{children:"Bienvenue sur Lokaly"})}),(0,a.jsxs)(R,{children:[(0,a.jsx)(H,{}),(0,a.jsx)(r,{}),(0,a.jsx)(C,{}),(0,a.jsx)(q,{}),(0,a.jsx)(y,{}),(0,a.jsx)(g,{}),(0,a.jsx)(I,{})]}),e&&(0,a.jsx)(c,{text:"Envoi de l' email en cours"})]})}}},function(e){e.O(0,[16,185,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);