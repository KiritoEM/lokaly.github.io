"use strict";(()=>{var e={};e.id=446,e.ids=[446],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,o){return o in t?t[o]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,o)):"function"==typeof t&&"default"===o?t:void 0}}})},3754:(e,t,o)=>{o.r(t),o.d(t,{config:()=>p,default:()=>d,routeModule:()=>c});var a={};o.r(a),o.d(a,{default:()=>m});var i=o(1802),n=o(7153),r=o(6249),l=o(8117),s=o(888);async function m(e,t){if("POST"===e.method){let{userEmail:o,message:a,phoneNumber:i,userName:n}=e.body,r=new Date,m=`
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
                <h1 style="font-size: 24px; line-height: 1.8em; color: #02260B; margin: 0;">Accus\xe9 de r\xe9ception</h1>
            </div>
    
            <img src="https://raw.githubusercontent.com/KiritoEM/Proxima/main/lokaly.png" alt="L\xf4kaly Logo" style="object-fit: cover;width: 170px; height: auto; margin: 0 auto; display: block;margin-bottom:38px">
    
            <p id="main" style="position: relative; margin: 0; padding: 0;">
                <span id="topLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-bottom: 38px;"></span>
                Salama e 👋, L'\xe9quipe Lokaly a bien re\xe7u votre message et on prendra compte de votre message.
                <br>
                Cependant, restez connect\xe9, suivez nous sur 
                <a href="https://www.facebook.com/profile.php?id=61559917253920" target="_blank" style="color: #00944E; text-decoration: none;" rel="noopener noreferrer">Facebook</a> et 
                <a href="http://" target="_blank" style="color: #00944E; text-decoration: none;" rel="noopener noreferrer">Whatsapp</a>
                <span id="bottomLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-top: 38px;margin-bottom:38px"></span>
            </p>
    
            <p style="color: #02260B; font-weight: 565;">
                Envoy\xe9 le ${(0,s.p)(r)}<br>
                Par ${n} <br>
                Num\xe9ro t\xe9l\xe9phone: ${i} <br>
                Message: <span style="font-size: 12px; font-weight: 500;line-height: 1.8em; color: #75757A;">${a}</span>
            </p>
        </div>
    </body>
    </html>
    
    `,d=`
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
                <h1 style="font-size: 24px; line-height: 1.8em; color: #02260B; margin: 0;">Nouveau message</h1>
            </div>
    
            <img src="https://raw.githubusercontent.com/KiritoEM/Proxima/main/lokaly.png" alt="L\xf4kaly Logo" style="object-fit: cover;width: 170px; height: auto; margin: 0 auto; display: block;margin-bottom:38px">
    
            <div id="main" style="position: relative; margin: 0; padding: 0;">
                <span id="topLine" style="display: block; width: 50%; margin: auto; border: 1px solid #00944E; margin-bottom: 38px;"></span>
            </div>
    
            <p style="color: #02260B; font-weight: 565;">
                Envoy\xe9 le ${(0,s.p)(r)}<br>
                Par ${n} <br>
                Num\xe9ro t\xe9l\xe9phone: ${i} <br>
                Email: ${o} <br>
                Message: <span style="font-size: 12px; font-weight: 500;line-height: 1.8em; color: #75757A;">${a}</span>
            </p>
        </div>
    </body>
    </html>
    
    `;try{await l.F.sendMail({from:"Lokaly<dev.lokaly@gmail.com>",to:o,subject:"Confirmation",text:a,html:m}),await l.F.sendMail({from:"Lokaly-dev<dev.lokaly@gmail.com>",to:"contact.lokaly@gmail.com",subject:"Nouveau message",text:a,html:d}),t.status(200).json({message:"Email envoy\xe9 avec succ\xe8s"})}catch(e){t.status(500).json({message:"Erreur lors de l'envoi de l'email",err:e}),console.error(e)}}else t.status(405).json({message:"M\xe9thode non autoris\xe9e"})}let d=(0,r.l)(a,"default"),p=(0,r.l)(a,"config"),c=new i.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/emailContact",pathname:"/api/emailContact",bundlePath:"",filename:""},userland:a})},8117:(e,t,o)=>{o.d(t,{F:()=>i});let a=require("nodemailer"),i=o.n(a)().createTransport({service:"gmail",auth:{user:"dev.lokaly@gmail.com",pass:"iiut fruf elzw rvbh"}})},888:(e,t,o)=>{o.d(t,{p:()=>a});let a=e=>{let t=e.getDate(),o=["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"][e.getMonth()],a=e.getFullYear();return`${t} ${o} ${a}`}},7153:(e,t)=>{var o;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return o}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(o||(o={}))},1802:(e,t,o)=>{e.exports=o(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var o=t(t.s=3754);module.exports=o})();