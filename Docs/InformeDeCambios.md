```markdown
### INFORME PROYECTO STOCKS APP (Actualizado)

**Multirepo**
Un multirepo es una estrategia de gestión de código en desarrollo de software donde un proyecto se divide en varios repositorios independientes. Esto promueve la modularidad, agilidad en desarrollo, gestión de versiones específicas y colaboración distribuida, aunque también presenta desafíos en la gestión de dependencias y coordinación de cambios.

**Local Deploy:**

Local deploy se refiere a la implementación y ejecución de una aplicación o sistema en un entorno local, es decir, en la máquina o infraestructura de un usuario o desarrollador en lugar de en un entorno de producción o en la nube. Este despliegue local es común durante el desarrollo y las pruebas, permitiendo a los desarrolladores probar y depurar su aplicación en un entorno controlado antes de llevarla a producción.

### Tecnologías y Herramientas de Desarrollo

### 1. ESLint (Linter):

**Descripción:**
ESLint es una herramienta de linting para JavaScript y TypeScript. Su objetivo es identificar y corregir patrones problemáticos en el código fuente, mejorando la consistencia y reduciendo errores comunes.

**Características Principales:**
- Identificación de errores y patrones problemáticos.
- Configurable y personalizable según las necesidades del proyecto.
- Integración con editores de código para proporcionar retroalimentación en tiempo real.

### 2. Prettier:

**Descripción:**
Prettier es un formateador de código que garantiza la consistencia en la apariencia del código fuente. Se enfoca en el estilo y la presentación del código, eliminando debates sobre la colocación de espacios, sangrías, y otros detalles de formato.

**Características Principales:**
- Formateo automático del código según reglas predefinidas.
- Soporte para varios lenguajes, incluyendo JavaScript, TypeScript, HTML, CSS, y más.
- Integración fácil con otras herramientas de desarrollo.

### 3. Husky (Git Hooks):

**Descripción:**
Husky es una herramienta que facilita la configuración de ganchos (hooks) de Git en un proyecto. Los ganchos permiten ejecutar scripts o comandos en ciertos eventos de Git, como pre-commit o pre-push.

**Características Principales:**
- Configuración sencilla de ganchos de Git en el archivo `package.json`.
- Ejecución de comandos antes de confirmar (`pre-commit`) o empujar (`pre-push`) cambios.
- Integración con otras herramientas como ESLint y Prettier para asegurar la calidad del código.

### 4. MySQL:

**Descripción:**
MySQL es un sistema de gestión de bases de datos relacional ampliamente utilizado. Proporciona una plataforma robusta y escalable para almacenar y recuperar datos.

**Características Principales:**
- Modelo relacional para estructurar datos.
- Soporte para transacciones y operaciones ACID.
- Amplia compatibilidad con lenguajes de programación y frameworks.

### 5. Docker:

**Descripción:**
Docker es una plataforma que permite empaquetar, distribuir y ejecutar aplicaciones en contenedores. Los contenedores proporcionan una forma de encapsular aplicaciones y sus dependencias para garantizar la consistencia en diferentes entornos.

**Características Principales:**
- Contenedores ligeros y portátiles.
- Independencia del entorno: una aplicación en un contenedor se ejecutará de la misma manera en cualquier lugar.
- Facilita la gestión de dependencias y la implementación de microservicios.

### 6. Docker Compose:

**Descripción:**
Docker Compose es una herramienta para definir y gestionar aplicaciones Docker multi-contenedor. Permite describir la configuración de servicios, redes y volúmenes en un archivo `docker-compose.yml`.

**Características Principales:**
- Definición de entornos multi-contenedor en un solo archivo.
- Simplificación del despliegue de aplicaciones complejas.
- Facilita la coordinación de servicios y la definición de dependencias.

### 7. Next.js:

**Descripción:**
Next.js es un framework de desarrollo web para React. Ofrece una estructura de proyecto optimizada, rutas pre-renderizadas y otras características que facilitan la construcción de aplicaciones web modernas.

**Características Principales:**
- Renderización del lado del servidor (SSR) y renderización del lado del cliente (CSR).
- Enrutamiento automático basado en la estructura del proyecto.
- Soporte para desarrollo estático, dinámico e híbrido.

### 8. Express (Node.js):

**Descripción:**
Express es un framework web para Node.js que simplifica la creación de aplicaciones web y APIs. Es minimalista y flexible, permitiendo a los desarrolladores construir rápidamente servicios web escalables.

**Características Principales:**
- Manejo de rutas y middleware para procesar solicitudes HTTP.
- Soporte para la creación de APIs RESTful.
- Amplia comunidad y ecosistema de middleware.

## Historias de Usuario

## Historia de Usuario 1: "Seguimiento de Cartera"

Como un inversionista activo, quiero tener la capacidad de realizar un seguimiento en tiempo real de mi cartera de acciones. Quiero recibir actualizaciones automáticas sobre el rendimiento de mis inversiones, así como visualizar gráficos e informes detallados. Esto me permitirá tomar decisiones informadas sobre cuándo comprar o vender acciones.

**Criterios de Aceptación:**
- La aplicación debe proporcionar una interfaz clara y fácil de usar para visualizar la cartera de acciones.
- Se deben incluir gráficos y datos en tiempo real sobre el rendimiento de las acciones en la cartera.
- Deben existir opciones para personalizar las notificaciones automáticas basadas en umbrales de rendimiento o eventos específicos.

**Cambios y Adiciones:**
- Se implementará un % de cambio diario para cada acción en la cartera.
- Se agregará una sección que refleje la ganancia o pérdida en base al porcentaje de cambio diario.
- El registro de las acciones en la cartera se podrá ordenar por precio y nombre.

---

## Historia de Usuario 2: "Compra Rápida y Segura"

Como un usuario que realiza transacciones frecuentes, quiero poder comprar o vender acciones de manera rápida y segura. Deseo una interfaz eficiente que me permita ejecutar órdenes de compra o venta con solo unos pocos clics, y que también me proporcione información instantánea sobre el estado de mis transacciones.

**Criterios de Aceptación:**
- La aplicación debe proporcionar una interfaz de compra/venta intuitiva

 y de fácil acceso.
- Debe haber una confirmación clara antes de ejecutar cualquier transacción para evitar errores.
- Las transacciones deben procesarse de manera segura y en tiempo real, proporcionando actualizaciones instantáneas sobre el estado de la orden.

**Cambios y Adiciones:**
- Se mostrará el % de cambio al realizar una transacción.
- Se reflejará la ganancia o pérdida en base al porcentaje de cambio en el historial de transacciones.

---

## Historia de Usuario 3: "Exploración de Acciones Disponibles"

Como un inversor interesado en explorar nuevas oportunidades de inversión, quiero tener la capacidad de visualizar fácilmente las acciones disponibles en venta por diferentes empresas. Deseo una funcionalidad que me permita examinar una lista de empresas, ver sus acciones actuales y obtener información clave sobre el rendimiento de dichas acciones para tomar decisiones informadas sobre mis inversiones.

**Criterios de Aceptación:**
- La aplicación debe proporcionar una sección dedicada para explorar las acciones disponibles en venta por diferentes empresas.
- Para cada empresa, debería mostrarse el nombre, símbolo bursátil y un resumen del rendimiento reciente de sus acciones.
- Se debe permitir a los usuarios filtrar la lista de acciones por diferentes criterios, como sector de la empresa, rendimiento histórico o capitalización de mercado.
- Debería haber gráficos interactivos que muestren la evolución reciente del precio de las acciones de la empresa seleccionada.
- Los detalles adicionales sobre la empresa, como noticias relevantes o informes financieros, deberían estar disponibles para un análisis más profundo.

**Cambios y Adiciones:**
- Se incluirá un filtro para ordenar la lista de acciones por precio y nombre.

## Requisitos Básicos para una Aplicación de Venta de Acciones

1. **Autenticación y Seguridad:**
   - Transmisión segura de datos mediante HTTPS.

2. **Exploración de Acciones:**
   - Funcionalidad para explorar y buscar acciones de diferentes empresas.
   - Filtrado y ordenación de la lista de acciones.

3. **Información Detallada:**
   - Presentación de información detallada de ofertas, incluyendo % de cambio.

4. **Seguimiento de Cartera:**
   - Panel de usuario para realizar un seguimiento en tiempo real de las acciones en la cartera.
   - Visualización de ganancia/perdida en base al porcentaje de cambio diario.

5. **Compra y Venta de Acciones:**
   - Interfaz intuitiva para realizar transacciones de compra y venta de acciones.
   - Confirmaciones claras antes de ejecutar cualquier transacción.
   - Mostrar % de cambio al realizar transacciones.

6. **Historial de Transacciones:**
   - Registro detallado de todas las transacciones realizadas, incluyendo % de cambio y ganancia/perdida.

7. **Documentación y Soporte:**
   - Documentación clara sobre el uso de la aplicación y cómo realizar transacciones.
   - Soporte al cliente para resolver consultas y problemas.

8. **Pruebas:**
    - Pruebas de seguridad y rendimiento para garantizar la estabilidad y la protección de datos sensibles.

9. **Escalabilidad:**
    - Diseño que permita la escalabilidad para manejar un crecimiento en la base de usuarios.

10. **Políticas de Privacidad y Términos de Servicio:**
    - Documentos legales que detallen las políticas de privacidad y los términos de servicio para los usuarios.

Autores:
- Mateo Dávalos
- Alex Padilla
- José Terán
```