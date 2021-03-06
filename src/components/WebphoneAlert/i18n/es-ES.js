import webphoneErrors from 'ringcentral-integration/modules/Webphone/webphoneErrors';

export default {
  [webphoneErrors.connectFailed]: 'Envío correcto.',
  [webphoneErrors.browserNotSupported]: 'Las llamadas con el navegador solo se permiten en Chrome.',
  [webphoneErrors.webphoneCountOverLimit]: 'Se han podido registrar 5 teléfonos web en total.',
  [webphoneErrors.notOutboundCallWithoutDL]: 'En este momento, su extensión no puede realizar llamadas salientes con el navegador. Póngase en contacto con su representante de cuentas para acceder a una actualización.',
  [webphoneErrors.getSipProvisionError]: 'No tiene permiso para enviar este mensaje.',
  [webphoneErrors.connected]: 'Teléfono web registrado.',
  [webphoneErrors.toVoiceMailError]: 'No se puede enviar la llamada al buzón de voz debido a un error interno',
  [webphoneErrors.muteError]: 'No se puede silenciar la llamada en este momento.',
  [webphoneErrors.holdError]: 'No se puede poner la llamada en espera en este momento.',
  [webphoneErrors.flipError]: 'No se puede hacer flip en la llamada. Vuelva a intentarlo más tarde.',
  [webphoneErrors.recordError]: 'No puede grabar la llamada en este momento. Código de error: {errorCode}',
  [webphoneErrors.recordDisabled]: 'Su cuenta no incluye la función para grabar llamadas. Póngase en contacto con el administrador de su cuenta.',
  [webphoneErrors.transferError]: 'No se puede transferir la llamada. Vuelva a intentarlo más tarde.',
};

// @key: @#@"[webphoneErrors.connectFailed]"@#@ @source: @#@"Connect with web phone server failed."@#@
// @key: @#@"[webphoneErrors.connected]"@#@ @source: @#@"Web phone registered."@#@
// @key: @#@"[webphoneErrors.browserNotSupported]"@#@ @source: @#@"Calling with browser is only supported on Chrome."@#@
// @key: @#@"[webphoneErrors.webphoneCountOverLimit]"@#@ @source: @#@"A maximum of 5 web phones could be registered."@#@
// @key: @#@"[webphoneErrors.notOutboundCallWithoutDL]"@#@ @source: @#@"Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade."@#@
// @key: @#@"[webphoneErrors.getSipProvisionError]"@#@ @source: @#@"You have no permission to send message."@#@
// @key: @#@"[webphoneErrors.toVoiceMailError]"@#@ @source: @#@"Cannot send call to voicemail due to internal error"@#@
// @key: @#@"[webphoneErrors.muteError]"@#@ @source: @#@"Call cannot be muted at the moment."@#@
// @key: @#@"[webphoneErrors.holdError]"@#@ @source: @#@"Call cannot be hold at the moment."@#@
// @key: @#@"[webphoneErrors.flipError]"@#@ @source: @#@"Cannot flip the call. Please try again later."@#@
// @key: @#@"[webphoneErrors.recordError]"@#@ @source: @#@"You cannot record the call at the moment. Error code: {errorCode}"@#@
// @key: @#@"[webphoneErrors.recordDisabled]"@#@ @source: @#@"Sorry, your account does not have the feature to record a call. Please contact your account administrator."@#@
// @key: @#@"[webphoneErrors.transferError]"@#@ @source: @#@"Cannot transfer the call. Please try again later."@#@
