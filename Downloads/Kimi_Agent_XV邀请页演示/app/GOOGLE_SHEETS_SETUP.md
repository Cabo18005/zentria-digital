# Configuración de Google Sheets para Registro de Invitados

Este archivo contiene las instrucciones para conectar la invitación con Google Sheets y guardar automáticamente las confirmaciones.

---

## Paso 1: Crear la Hoja de Google Sheets

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una hoja de cálculo nueva
3. Cambia el nombre a "XV Años - Registro de Invitados"
4. En la primera fila (encabezados), escribe:
   - A1: `Fecha`
   - B1: `Nombre`
   - C1: `Pases`
   - D1: `Código QR`
   - E1: `Teléfono`
   - F1: `Confirmado`
   - G1: `Notas`

---

## Paso 2: Crear el Script de Apps Script

1. En tu hoja de Google Sheets, ve a **Extensiones** → **Apps Script**
2. Borra el código predeterminado y pega el siguiente:

```javascript
function doPost(e) {
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  
  try {
    // Obtener datos del POST
    const data = JSON.parse(e.postData.contents);
    
    // Abrir la hoja de cálculo
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Agregar fila con los datos
    sheet.appendRow([
      new Date(),                    // Fecha
      data.nombre || '',             // Nombre
      data.pases || 0,               // Pases
      data.codigo || '',             // Código QR
      data.telefono || '',           // Teléfono
      data.confirmado || 'Sí',       // Confirmado
      data.notas || ''               // Notas
    ]);
    
    // Responder éxito
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Registro guardado correctamente'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'OK',
    message: 'API de registro funcionando'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto (icono de disco) con el nombre "XV-Registro-API"

---

## Paso 3: Desplegar como Aplicación Web

1. En Apps Script, haz clic en **Desplegar** → **Nuevo despliegue**
2. Haz clic en el icono de engranaje ⚙️ y selecciona **Aplicación web**
3. Configura:
   - **Descripción**: API Registro XV Años
   - **Ejecutar como**: Yo
   - **Acceso**: Cualquiera
4. Haz clic en **Desplegar**
5. Autoriza los permisos (es normal que pida permisos)
6. Copia la **URL de la aplicación web**

---

## Paso 4: Configurar en la Invitación

1. Abre el archivo `src/config/event.ts`
2. Busca la sección `confirmacion`
3. Pega la URL en `googleScriptUrl`:

```typescript
confirmacion: {
  semanasAntes: 3,
  whatsapp: '5219991234567',
  mensajeDefault: '¡Hola! Confirmo mi asistencia...',
  googleScriptUrl: 'https://script.google.com/macros/s/TU_CODIGO_AQUI/exec'
}
```

4. Guarda y vuelve a hacer deploy

---

## Verificación

Para probar que funciona:

1. Abre tu invitación
2. Confirma asistencia con un nombre de prueba
3. Revisa tu hoja de Google Sheets
4. Debería aparecer una nueva fila con los datos

---

## Solución de Problemas

### Error "No se pudo guardar"
- Verifica que la URL esté correctamente copiada
- Asegúrate de que la hoja tenga permisos de edición
- Revisa que el script tenga permisos autorizados

### No aparecen los datos
- Verifica que la hoja esté vinculada al script correcto
- Revisa los logs en Apps Script (Ver → Registros)

### CORS Error
- Asegúrate de que el acceso esté configurado como "Cualquiera"
- El modo `no-cors` en el frontend maneja esto automáticamente

---

## Funcionalidades Adicionales

### Agregar notificación por email

Agrega esto al script después de `sheet.appendRow`:

```javascript
// Enviar email de notificación
if (data.nombre) {
  MailApp.sendEmail({
    to: 'tu-email@gmail.com',
    subject: 'Nueva confirmación - XV Años',
    body: `Nueva confirmación:\n\nNombre: ${data.nombre}\nPases: ${data.pases}\nCódigo: ${data.codigo}`
  });
}
```

### Agregar validación de duplicados

```javascript
// Verificar si ya existe
const datos = sheet.getDataRange().getValues();
const existe = datos.some(fila => fila[1] === data.nombre);

if (existe) {
  return ContentService.createTextOutput(JSON.stringify({
    success: false,
    message: 'Este nombre ya está registrado'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

---

## Estructura Final de la Hoja

| Fecha | Nombre | Pases | Código QR | Teléfono | Confirmado | Notas |
|-------|--------|-------|-----------|----------|------------|-------|
| 2025-01-15 | Juan Pérez | 2 | XV-JUA-2-ABC123 | | Sí | |
| 2025-01-16 | María López | 3 | XV-MAR-3-DEF456 | | Sí | |

---

¿Necesitas ayuda? Revisa la documentación de [Google Apps Script](https://developers.google.com/apps-script)
