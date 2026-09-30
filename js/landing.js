// Configuración del formulario:
// EMAIL: correo donde quieres recibir los datos (modo "abrir correo").
// ENDPOINT: dirección de Formspree u otro servicio; si la llenas, los datos se envían solos.
const EMAIL="tucorreo@ejemplo.com";const ENDPOINT="https://formspree.io/f/mvkglvvn";
document.querySelectorAll("form.lead").forEach(f=>{const m=f.nextElementSibling;
f.addEventListener("submit",async e=>{e.preventDefault();
const v=n=>(f.elements[n]?f.elements[n].value.trim():"");
const d={nombre:v("nombre"),correo:v("correo"),empresa:v("empresa"),telefono:v("telefono"),mensaje:v("mensaje")};
m.style.display="block";
if(ENDPOINT){try{const r=await fetch(ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(d)});if(!r.ok)throw 0;f.reset();m.textContent="¡Gracias! Recibimos tus datos y te escribiremos pronto.";}catch(_){m.textContent="No pudimos enviar tus datos. Intenta de nuevo en unos minutos.";}return;}
const body=`Nombre: ${d.nombre}\nCorreo: ${d.correo}\nEmpresa: ${d.empresa||"-"}\nTeléfono: ${d.telefono||"-"}\nMensaje: ${d.mensaje||"-"}`;
m.textContent="Se abrió tu aplicación de correo con tus datos. Envía el mensaje para completar tu solicitud.";
location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent("Solicitud de información HydroTech")+"&body="+encodeURIComponent(body);});});
