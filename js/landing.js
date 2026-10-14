/* =========================================================
   HydroTech — landing.js
   1) Eventos al dataLayer (los 5 que GTM envía a GA4)
   2) Formulario HubSpot
   ========================================================= */
window.dataLayer = window.dataLayer || [];

function track(eventName, params) {
  var payload = { event: eventName };
  for (var k in (params || {})) payload[k] = params[k];
  window.dataLayer.push(payload);
}

/* ---- Evento 1 y 2: clic en CTA 1 / CTA 2 ----
   Cualquier elemento con data-track="cta_principal_click" o "cta_final_click" */
document.querySelectorAll('[data-track]').forEach(function (el) {
  el.addEventListener('click', function () {
    var name = el.getAttribute('data-track');
    // El botón del menú solo se registra como CTA 1 para no crear un sexto evento
    if (name === 'menu_click') name = 'cta_principal_click';
    track(name, { cta_id: el.getAttribute('data-cta') || 'menu', cta_text: (el.textContent || '').trim() });
  });
});

/* ---- Evento 3: envío del formulario HubSpot ---- */
function onHubspotSubmit() {
  track('form_submit_hubspot', { form_id: HS_CONFIG.formId, form_location: 'prefooter' });
}

/* ---- Evento 4: scroll al 50 % de la página (una sola vez) ---- */
(function () {
  var fired = false;
  window.addEventListener('scroll', function () {
    if (fired) return;
    var h = document.documentElement;
    var pct = (h.scrollTop + window.innerHeight) / h.scrollHeight;
    if (pct >= 0.5) {
      fired = true;
      track('scroll_50', { scroll_percent: 50 });
    }
  }, { passive: true });
})();

/* ---- Evento 5: apertura de una pregunta del FAQ ---- */
document.querySelectorAll('[data-faq]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Solo cuando se abre (el botón queda sin la clase "collapsed")
    setTimeout(function () {
      if (!btn.classList.contains('collapsed')) {
        track('faq_open', { faq_question: btn.getAttribute('data-faq') });
      }
    }, 50);
  });
});

/* =========================================================
   HubSpot — REEMPLAZA estos dos valores con los tuyos:
   portalId: HubSpot > Configuración (esquina sup. derecha) > ID de cuenta
   formId:   HubSpot > Marketing > Formularios > tu formulario > Compartir > Incrustar
   ========================================================= */
var HS_CONFIG = {
  region: 'na1',                 // si tu cuenta es de Europa pon 'eu1'
  portalId: '52165683',
  formId: 'b66abc40-c754-439d-8fac-f2bf2d378751'
};

window.addEventListener('load', function () {
  var box = document.getElementById('hubspot-form');
  if (window.hbspt && HS_CONFIG.portalId) {
    box.innerHTML = '';
    hbspt.forms.create({
      region: HS_CONFIG.region,
      portalId: HS_CONFIG.portalId,
      formId: HS_CONFIG.formId,
      target: '#hubspot-form',
      onFormSubmitted: onHubspotSubmit
    });
  } else {
    box.innerHTML = '<p class="body-text mb-0">Falta configurar el portalId y formId de HubSpot en js/landing.js.</p>';
  }
});