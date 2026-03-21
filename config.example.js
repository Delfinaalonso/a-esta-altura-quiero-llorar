window.__MJ_CONFIG__ = {
  // Requerido para storefront y admin.
  supabaseUrl: 'https://TU-PROYECTO.supabase.co',

  // Storefront (lectura): usar anon key con políticas RLS.
  supabaseAnonKey: 'TU_SUPABASE_ANON_KEY',

  // Admin (escritura): preferir una key restringida a tablas necesarias.
  // Evitá exponer service_role en frontend.
  supabaseKey: 'TU_SUPABASE_ADMIN_KEY',

  adminPassword: 'CAMBIAR_ESTA_PASSWORD',
  businessWhatsapp: '5492302207044',
   // Opcional: link de cobro para abrir Mercado Pago al confirmar pedido.
  mercadoPagoCheckoutUrl: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=TU_PREFERENCE_ID',
};
