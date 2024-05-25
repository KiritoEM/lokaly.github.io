"use strict";(()=>{var e={};e.id=898,e.ids=[898],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,i){return i in t?t[i]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,i)):"function"==typeof t&&"default"===i?t:void 0}}})},3617:(e,t,i)=>{i.r(t),i.d(t,{config:()=>u,default:()=>m,routeModule:()=>c});var a={};i.r(a),i.d(a,{default:()=>d});var o=i(1802),n=i(7153),r=i(6249),l=i(8117),s=i(888);async function d(e,t){if("POST"===e.method){let{userEmail:i}=e.body,a=new Date,o=`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>L\xf4kaly</title>
        <style>
            @import url('https://fonts.cdnfonts.com/css/general-sans');
        </style>
    </head>
    
    <body style="font-family: 'General Sans', sans-serif; color: #75757A; margin: 0; padding: 0; width: 100%; background-color: #ffffff;">
        <div style="max-width: 600px; margin: auto; padding: 40px;">
            <div style="text-align: center;margin-bottom:38px">
                <p style="font-size: 12px; line-height: 1.8em; color: #75757A;">Notification</p>
                <h1 style="font-size: 24px; line-height: 1.8em; color: #02260B; margin: 0;">Nouveau email ajout\xe9 depuis le NewLetter</h1>
            </div>
    
            <img src="https://raw.githubusercontent.com/KiritoEM/Proxima/main/lokaly.png" alt="L\xf4kaly Logo" style="object-fit: cover;width: 170px; height: auto; margin: 0 auto; display: block;margin-bottom:38px">
    
            <div id="main" style="position: relative; margin: 0; padding: 0;">
                <span id="topLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-bottom: 38px;"></span>
            </div>
    
            <p style="color: #02260B; font-weight: 565;">
                Envoy\xe9 le ${(0,s.p)(a)}<br>
                Email envoy\xe9: ${i} <br>
            </p>
        </div>
    </body>
    </html>
    
    `;try{await l.F.sendMail({from:"Lokaly-dev<dev.lokaly@gmail.com>",to:"contact.lokaly@gmail.com",subject:"Nouveau email venant du newsLetter",html:o}),t.status(200).json({message:"Email envoy\xe9 avec succ\xe8s"})}catch(e){t.status(500).json({message:"Erreur lors de l'envoi de l'email",err:e}),console.error(e)}}else t.status(405).json({message:"M\xe9thode non autoris\xe9e"})}let m=(0,r.l)(a,"default"),u=(0,r.l)(a,"config"),c=new o.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/emailVerification",pathname:"/api/emailVerification",bundlePath:"",filename:""},userland:a})},8117:(e,t,i)=>{i.d(t,{F:()=>o});let a=require("nodemailer"),o=i.n(a)().createTransport({service:"gmail",auth:{user:"dev.lokaly@gmail.com",pass:"iiut fruf elzw rvbh"}})},888:(e,t,i)=>{i.d(t,{p:()=>a});let a=e=>{let t=e.getDate(),i=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][e.getMonth()],a=e.getFullYear();return`${t} ${i} ${a}`}},7153:(e,t)=>{var i;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return i}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(i||(i={}))},1802:(e,t,i)=>{e.exports=i(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var i=t(t.s=3617);module.exports=i})();