(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{1205:(e,a,t)=>{"use strict";t.d(a,{U:()=>s,W:()=>o});var l=t(5155);t(2115);let s=e=>{let{onClick:a,className:t}=e;return(0,l.jsx)("button",{onClick:a,className:"absolute cursor-pointer top-1/2 left-1 md:left-4 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transform -translate-y-1/2 ".concat(t),"aria-label":"Anterior",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})})},o=e=>{let{onClick:a,className:t}=e;return(0,l.jsx)("button",{onClick:a,className:"absolute cursor-pointer top-1/2 right-1 md:right-4 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transform -translate-y-1/2 ".concat(t),"aria-label":"Siguiente",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-800",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})}},3551:(e,a,t)=>{"use strict";t.d(a,{default:()=>c});var l=t(5155),s=t(5005);let o={penal:[{name:"Juan P\xe9rez",location:"Ciudad de M\xe9xico",text:"El equipo de L\xf3pez Ziga me ayud\xf3 en un caso muy complicado. Su profesionalismo y dedicaci\xf3n fueron clave para resolver mi situaci\xf3n favorablemente.",rating:5,photo:"/images/avatar1.jpg"},{name:"Mar\xeda Gonz\xe1lez",location:"Guadalajara",text:"Excelente servicio. Me asesoraron en cada paso y lograron reducir significativamente los cargos en mi caso.",rating:4,photo:"/images/avatar2.jpg"},{name:"Carlos Rodr\xedguez",location:"Monterrey",text:"Definitivamente los recomiendo. Su conocimiento del sistema legal mexicano es impresionante.",rating:5,photo:"/images/avatar3.jpg"},{name:"Ana Mart\xednez",location:"Puebla",text:"Fueron muy claros en explicarme mis opciones y los posibles resultados. Me sent\xed en buenas manos durante todo el proceso.",rating:5,photo:"/images/avatar4.jpg"}],inmobiliario:[{name:"Roberto S\xe1nchez",location:"Quer\xe9taro",text:"Gracias a su asesor\xeda pude completar mi compra de propiedad sin problemas. Resolvieron todos los detalles legales eficientemente.",rating:5,photo:"/images/avatar1.jpg"}]};var r=t(6766),n=t(2115),i=t(1205);function c(e){let{service:a}=e,[t,c]=(0,s.A)({loop:!0,align:"center",skipSnaps:!0}),[d,m]=(0,n.useState)(0),x=o[a]||[],u=(0,n.useCallback)(()=>{c&&c.scrollPrev()},[c]),h=(0,n.useCallback)(()=>{c&&c.scrollNext()},[c]),p=(0,n.useCallback)(()=>{c&&m(c.selectedScrollSnap())},[c]);return(0,n.useEffect)(()=>{if(!c)return;p(),c.on("select",p);let e=setInterval(()=>{c.scrollNext()},7500);return()=>{c.off("select",p),clearInterval(e)}},[c,p]),(0,l.jsx)("section",{className:"bg-white py-12",children:(0,l.jsxs)("div",{className:"container mx-auto px-4",children:[(0,l.jsx)("h2",{className:"text-3xl font-bold text-center mb-8 text-[#70ac60]",children:"Testimonios de nuestros clientes"}),(0,l.jsxs)("div",{className:"relative max-w-3xl mx-auto",children:[(0,l.jsx)("div",{className:"embla overflow-hidden",ref:t,children:(0,l.jsx)("div",{className:"embla__container flex",children:x.map((e,a)=>(0,l.jsx)("div",{className:"embla__slide flex-[0_0_100%] px-4",children:(0,l.jsxs)("div",{className:"bg-[#ececec] p-6 rounded-lg shadow-md h-full mx-auto max-w-lg",children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[(0,l.jsx)("div",{className:"w-16 h-16 rounded-full overflow-hidden border-2 border-[#90c67b]",children:(0,l.jsx)(r.default,{src:e.photo,alt:e.name,width:64,height:64,className:"w-full h-full object-cover"})}),(0,l.jsxs)("div",{className:"ml-4",children:[(0,l.jsx)("h4",{className:"font-bold",children:e.name}),(0,l.jsx)("p",{className:"text-sm text-[#757575]",children:e.location})]})]}),(0,l.jsxs)("p",{className:"text-gray-700 italic",children:['"',e.text,'"']}),(0,l.jsx)("div",{className:"mt-4 flex",children:[void 0,void 0,void 0,void 0,void 0].map((a,t)=>(0,l.jsx)("svg",{className:"w-5 h-5 ".concat(t<e.rating?"text-yellow-400":"text-gray-300"),fill:"currentColor",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})},t))})]})},a))})}),(0,l.jsx)("div",{className:"flex justify-center mt-6 space-x-2",children:x.map((e,a)=>(0,l.jsx)("button",{onClick:()=>null==c?void 0:c.scrollTo(a),className:"w-3 h-3 rounded-full ".concat(a===d?"bg-[#70ac60]":"bg-gray-300"),"aria-label":"Ir al testimonio ".concat(a+1)},a))}),(0,l.jsx)(i.U,{onClick:u,className:"absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 md:-translate-x-12 hover:bg-[#90c67b] transition"}),(0,l.jsx)(i.W,{onClick:h,className:"absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 md:translate-x-12 hover:bg-[#90c67b] transition"})]})]})})}},6890:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,3063,23)),Promise.resolve().then(t.bind(t,8041)),Promise.resolve().then(t.bind(t,3551))},8041:(e,a,t)=>{"use strict";t.d(a,{default:()=>p});var l=t(5155),s=t(2115),o=t(5005),r=t(6766),n=t(1205),i=t(2177),c=t(3554);function d(e){let{paymentData:a,onSuccess:t,onError:o}=e;return(0,s.useEffect)(()=>{if(!window.MercadoPago){console.error("MercadoPago SDK no est\xe1 disponible");return}(async()=>{try{let e=new window.MercadoPago("TEST-12345678-1234-1234-1234-123456789012",{locale:"es-MX"}),a="mock_preference_id_"+Math.random().toString(36).substring(2);e.checkout({preference:{id:a},render:{container:"#mercadoPagoButtonContainer",label:"Pagar con Mercado Pago"},autoOpen:!0,theme:{elementsColor:"#70ac60",headerColor:"#70ac60"}})}catch(e){o("Error al cargar Mercado Pago"),console.error(e)}})()},[a,t,o]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.default,{src:"https://sdk.mercadopago.com/js/v2",strategy:"lazyOnload",onLoad:()=>console.log("MercadoPago SDK loaded")}),(0,l.jsx)("div",{id:"mercadoPagoButtonContainer",className:"w-full"})]})}var m=t(9936);let x=()=>"TU_CLIENT_ID_PAYPAL_AQUI";function u(e){let{paymentData:a,onSuccess:t,onError:s}=e;return(0,l.jsx)(m.ag,{options:{clientId:x(),currency:"MXN",locale:"es_MX",intent:"capture"},children:(0,l.jsx)(m.JV,{style:{layout:"vertical",color:"gold",shape:"rect",label:"paypal",height:48},createOrder:(e,t)=>t.order.create({intent:"CAPTURE",purchase_units:[{amount:{value:a.amount.toString(),currency_code:"MXN",breakdown:{item_total:{value:a.amount.toString(),currency_code:"MXN"}}},items:[{name:a.service,unit_amount:{value:a.amount.toString(),currency_code:"MXN"},quantity:"1",category:"DIGITAL_GOODS"}],description:"Servicio legal: ".concat(a.service)}],application_context:{shipping_preference:"NO_SHIPPING"}}),onApprove:(e,a)=>a.order.capture().then(e=>{console.log("Payment completed:",e),t()}),onError:e=>{console.error("PayPal error:",e),s("Error al procesar el pago con PayPal")}})})}function h(e){let{isOpen:a,onClose:t,serviceName:o,servicePrice:r}=e,{register:n,handleSubmit:c,watch:m,reset:x,formState:{errors:h}}=(0,i.mN)({defaultValues:{service:o,paymentMethod:"mercadoPago"}}),[p,b]=(0,s.useState)("form"),[g,v]=(0,s.useState)("mercadoPago"),[f,j]=(0,s.useState)(!1),[N,y]=(0,s.useState)(null),w=()=>{j(!1),x(),t(),alert("\xa1Pago completado con \xe9xito! Nos pondremos en contacto contigo.")},k=e=>{j(!1),x(),y(e),setTimeout(()=>y(null),5e3)},P=()=>{x(),t(),b("form")},_={name:m("name"),email:m("email"),phone:m("phone"),service:m("service"),details:m("details"),amount:r};return a?(0,l.jsx)("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",children:(0,l.jsx)("div",{className:"bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto",children:(0,l.jsxs)("div",{className:"p-6",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,l.jsx)("h3",{className:"text-xl font-bold text-[#70ac60]",children:"form"===p?"Datos de contacto":"Completa tu pago"}),(0,l.jsx)("button",{onClick:P,className:"text-gray-500 hover:text-gray-700",disabled:f,children:"✕"})]}),N&&(0,l.jsx)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",children:N}),"form"===p?(0,l.jsxs)("form",{onSubmit:c(e=>{P()}),className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Nombre completo*"}),(0,l.jsx)("input",{...n("name",{required:"Este campo es obligatorio"}),className:"w-full px-3 py-2 border border-gray-300 rounded-md",disabled:f}),h.name&&(0,l.jsx)("p",{className:"text-red-500 text-sm mt-1",children:h.name.message})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Correo electr\xf3nico*"}),(0,l.jsx)("input",{type:"email",...n("email",{required:"Este campo es obligatorio",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Correo electr\xf3nico inv\xe1lido"}}),className:"w-full px-3 py-2 border border-gray-300 rounded-md",disabled:f}),h.email&&(0,l.jsx)("p",{className:"text-red-500 text-sm mt-1",children:h.email.message})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tel\xe9fono*"}),(0,l.jsx)("input",{type:"tel",...n("phone",{required:"Este campo es obligatorio"}),className:"w-full px-3 py-2 border border-gray-300 rounded-md",disabled:f}),h.phone&&(0,l.jsx)("p",{className:"text-red-500 text-sm mt-1",children:h.phone.message})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"M\xe9todo de pago*"}),(0,l.jsxs)("select",{...n("paymentMethod",{required:!0}),className:"w-full px-3 py-2 border border-gray-300 rounded-md",disabled:f,children:[(0,l.jsx)("option",{value:"mercadoPago",children:"Mercado Pago"}),(0,l.jsx)("option",{value:"paypal",children:"PayPal"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Detalles adicionales (opcional)"}),(0,l.jsx)("textarea",{...n("details"),rows:3,className:"w-full px-3 py-2 border border-gray-300 rounded-md",disabled:f})]}),(0,l.jsx)("div",{className:"pt-4",children:(0,l.jsx)("button",{type:"submit",disabled:f,className:"w-full bg-[#70ac60] hover:bg-[#90c67b] text-white font-bold py-3 px-4 rounded-md transition disabled:opacity-50",children:f?"Procesando...":"Continuar al pago"})})]}):(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"bg-gray-50 p-4 rounded-md",children:[(0,l.jsx)("h4",{className:"font-medium text-gray-700",children:"Resumen del servicio"}),(0,l.jsx)("p",{className:"text-gray-600",children:o}),(0,l.jsxs)("p",{className:"text-lg font-bold text-[#70ac60] mt-2",children:["$",r.toLocaleString("es-MX",{minimumFractionDigits:2})]})]}),(0,l.jsx)("div",{children:"mercadoPago"===g?(0,l.jsx)(d,{paymentData:_,onSuccess:w,onError:k}):(0,l.jsx)(u,{paymentData:_,onSuccess:w,onError:k})}),(0,l.jsx)("button",{onClick:()=>b("form"),disabled:f,className:"w-full text-[#70ac60] hover:text-[#90c67b] font-medium py-2 px-4 rounded-md border border-[#70ac60] transition disabled:opacity-50",children:"Regresar"})]})]})})}):null}function p(e){var a,t;let{slides:i}=e,[c,d]=(0,o.A)({loop:!0}),[m,x]=(0,s.useState)(0),[u,p]=(0,s.useState)(!1),[b,g]=(0,s.useState)(!1),v=(0,s.useCallback)(()=>{d&&d.scrollPrev()},[d]),f=(0,s.useCallback)(()=>{d&&d.scrollNext()},[d]),j=(0,s.useCallback)(()=>{d&&x(d.selectedScrollSnap())},[d]);return(0,s.useEffect)(()=>{if(!d)return;j(),d.on("select",j);let e=i[m],a=setInterval(()=>{b||f()},(null==e?void 0:e.type)==="video"?15e3:8e3);return()=>{d.off("select",j),clearInterval(a)}},[d,j,f,m,b]),(0,l.jsxs)("div",{className:"relative h-[600px] md:h-[700px] overflow-hidden",children:[(0,l.jsx)("div",{className:"embla h-full",ref:c,children:(0,l.jsx)("div",{className:"embla__container h-full flex",children:i.map((e,a)=>(0,l.jsxs)("div",{className:"embla__slide flex-[0_0_100%] relative",children:["video"===e.type?(0,l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:"w-full h-full object-cover",onPlay:()=>g(!0),onPause:()=>g(!1),children:(0,l.jsx)("source",{src:e.videoUrl,type:"video/mp4"})}):(0,l.jsx)(r.default,{src:e.bgImage,alt:"",fill:!0,className:"object-cover z-0 bg-black/50",priority:0===a}),(0,l.jsx)("div",{className:"absolute inset-0 bg-black/50 z-0"}),(0,l.jsx)("div",{className:"relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white",children:(0,l.jsxs)("div",{className:"max-w-4xl space-y-6 px-4",children:[(0,l.jsx)("h1",{className:"text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl",children:e.title}),(0,l.jsx)("p",{className:"text-xl md:text-2xl mb-8 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md",children:e.description}),(0,l.jsx)("button",{onClick:()=>p(!0),className:"bg-[#70ac60] hover:bg-[#90c67b] text-white font-bold py-4 px-12 text-xl cursor-pointer rounded-lg  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",children:e.ctaText})]})})]},a))})}),(0,l.jsx)("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10",children:i.map((e,a)=>(0,l.jsx)("button",{onClick:()=>null==d?void 0:d.scrollTo(a),className:"w-3 h-3 rounded-full transition-all ".concat(a===m?"bg-white scale-125":"bg-white/50"),"aria-label":"Ir a slide ".concat(a+1)},a))}),(0,l.jsx)(n.U,{onClick:v}),(0,l.jsx)(n.W,{onClick:f}),(0,l.jsx)(h,{isOpen:u,onClose:()=>p(!1),serviceName:(null===(a=i[m])||void 0===a?void 0:a.title)||"",servicePrice:(null===(t=i[m])||void 0===t?void 0:t.price)||0})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[63,411,441,684,358],()=>a(6890)),_N_E=e.O()}]);