# **Introducción**
Una regla de negocio es una condición que se debe satisfacer cuando se realiza una actividad. Una regla puede imponer una política de negocio, tomar una decisión o inferir nuevos datos a partir de información existente.
# **Descripción del proyecto**
El SII (Sistema Integral de Información) cumple la tarea de centralizar toda la información del Instituto Tecnológico de Milpa Alta II con el fin de tener un fácil acceso y poder actualizar, insertar y eliminar información según se requiera. Actualmente el SII cuenta con inconsistencia en la información, así como la implementación de tecnologías desactualizadas por lo cual es necesaria la modernización del mismo.
# **Generalidades**
Para la modernización del SII se requieren varias reformas, las cuales son de carácter general y deben ser notables y respetadas en todo el sistema.
-	El diseño debe contener una cabecera con los logos del TECNM e ITMAII a la izquierda y derecha del nombre de la institución.
-	El logo del ITMAII debe de ser 10% más pequeño que el del TECNM.
-	El diseño debe ser moderno, amigable e intuitivo.
-	Se debe usar Bootstrap 5, FontAwesome y SweetAlert.
-	Se debe usar el Framework Code Blue.
-	El diseño debe tener una barra de navegación lateral que se oculte al dar clic.
-	Dentro de la barra de navegación se debe incluir un sistema de notificaciones donde se muestren eventos importantes al usuario.
-	Los colores institucionales deben ser utilizados en todo el diseño gráfico.
-	El sistema debe contener un único login para todos los roles existentes.
-	El login debe tener un método de recuperación de credenciales mediante correo institucional.
-	La base de datos debe llamarse itma_2
-	Expiración de la cuenta por inactividad (8 minutos),
-	Implementación de un logger al inicio de sesión (IP y/o MAC).
-	Registro de acciones del usuario.
# **Particularidades**
-	Los siguientes roles deben de ser tomados en cuenta:
    -	DIR (Director)
    -	ADMIN (Administrador)
    -	SA (Subdirección Académica)
    -	SE (Servicios Escolares)
    -	DEP (División de Estudios Profesionales)
    -	DDA (Departamento de Desarrollo Académico)
    -	RH (Recursos Humanos)
    -	RF (Recursos Financieros)
    -	DOCENTE (Docente)
    -	ALUMNO (Alumno)
-	Una misma cuenta no puede estar logeada múltiples veces al mismo tiempo.
-	Los números de control se deben generar de manera dinámica.
-	Deben existir diferentes catálogos para facilitar y validar el llenado de formularios.
-	El usuario no podrá realizar operaciones a menos que cuente con un id válido para el sistema.
-	Las tablas en la base de datos deben nombrarse con el prefijo t_
-	Las tablas vinculadas a catálogos deben nombrarse con el prefijo t_cat_
-	Respaldo automático de la base de datos diario.
# **Especificaciones**
**Sobre los roles**

| **Nombre del Rol**                   | **Jerarquía (1 mas alta)** | **Funciones**                                                                                              |
|--------------------------------------|----------------------------|------------------------------------------------------------------------------------------------------------|
| Director                             | 1                          | Auditoria y todas las funciones de los demás roles.                                                        |
| Administrador                        | 2                          | Funciones de los demás roles.                                                                              |
| SUBDIRECCION ACADEMICA               | 3 (Restrictivo a su área)  | Aprobar los números de control.                                                                            |
| SERVIVICIOS ESCOLARES                | 3 (Restrictivo a su área)  | Da de alta los periodos, horas de clase y construye estudiantes.                                           |
| DIVISION DE ESTUDIOS PROFESIONALES   | 3 (Restrictivo a su área)  | Construye los grupos, asigna docentes y estudiantes.                                                       |
| DEPARTAMENTO DE DESARROLLO ACADEMICO | 3 (Restrictivo a su área)  |                                                                                                            |
| DOCENTE                              | 3 (Restrictivo a su área)  |                                                                                                            |
| ALUMNO                               | 3 (Restrictivo a su área)  |                                                                                                            |
| RECURSOS FINANCIEROS                 | 3 (Restrictivo a su área)  |                                                                                                            |
| RECURSOS HUMANOS                     | 3 (Restrictivo a su área)  | Crea, habilita y deshabilita docentes, personal de intendencia, directivos y personal de recursos humanos. |

**Sobre la construcción de Números de Control**

El número de control debe seguir la siguiente nomenclatura: 211190027. Donde 21 es el año, 119 es la clave del plantel y 0027 son números consecutivos que se asignan según las matrículas generadas por Servicios Escolares.

**Sobre la autorización de Números de Control**

El proceso para generar los números de control es el siguiente:

Servicios Escolares establece el número de matrículas que serán creadas; Subdirección Académica autoriza el número de matrículas creadas por Servicios Escolares, de tal manera que las matrículas se crearan únicamente si Subdirección Académica y Servicios Escolares aceptan un convenio donde se autoriza el número de matrículas solicitadas.

**Sobre la interfaz gráfica de creación de números de control.**

En esta interfaz Servicios Escolares puede seleccionar con un dropdown el número de matrículas que necesita crear (de 1 a 200 en intervalos de 50), y luego mandar la solicitud de autorización a Subdirección Académica.

La interfaz debe tener lo siguiente.

-	Un dropdown donde se especifique el número de matrículas que se quieren crear.
-	Un botón para enviar la solicitud de creación a Subdirección Académica.
-	Apartado donde se indique si la solicitud ha sido aceptada.

**Sobre la creación de alumnos**

El formulario de creación de alumnos debe cargar los números de control disponibles como una lista desplegable y todos los campos deben ser validados.

El formulario de creación de alumnos hará uso de los siguientes catálogos:

-	Catálogo de estados de la república con municipios, alcaldías y colonias
-	Catálogo de estado civil del alumno
-	Catálogo de orientación sexual del alumno (incluyendo los géneros no binarios)
-	Catálogo de carreras
-	Catálogo de especialidades
-	Catálogo de estatus de alumnos
-	Catálogo de tipo de ingreso al plantel
-	Catálogo de nivel escolar

**Sobre la interfaz gráfica de creación de alumnos**

-	El número de control debe de ser grande y vistoso.
-	La interfaz debe dividirse en agregar alumno y editar alumno.
-	Debe contener un input donde se especifique el periodo, pero no se pueda modificar (que venga por sistema).
-	El input donde se capture el estatus del alumno debe de tener el valor por defecto de “activo”.
-	El input donde se capture la especialidad del alumno debe de tener el valor por defecto de “sin especialidad”.
-	Se debe implementar un apartado para subir la foto del alumno.
-	El input de estatus de la especialidad puede tener valor de “activo” o “inactivo”.
-	En el apartado de notificaciones se avisará a los usuarios con el rol SE cuando se le puede asignar especialidad al alumno.
-	Se debe agregar alerta de confirmación al apartado de revalidar periodos, donde se indique si quiere proceder o cancelar la operación.

Si el alumno es revalidado, los periodos revalidados únicamente se deben mostrar en el apartado de editar alumno.

**Sobre la generación de NIP.**

-	Se debe generar automáticamente después de que se haya registrado con éxito el alumno.
-	Deber ser un número aleatorio e irrepetible.
-	En caso de olvidarlo el usuario podrá solicitar que el sistema le genere uno nuevo y se envíe a su correo institucional

**Sobre la bitácora de acciones.**

-	Se debe realizar primero el registro de la acción en la bitácora antes de realizarse en la base de datos.
-	Se debe incluir el tipo de acción realizada (UPDATE, DELETE, INSERT, etc.), así como el usuario, la fecha, hora exacta y tabla en que se realizó la acción.

**Sobre la interfaz de consulta de la bitácora.**
-	Debe ser exclusiva para el usuario con el rol DIR.
-	Debe contener un botón que permita generar un documento pdf con el historial de cambios registrado en la bitácora.
-	Debe mostrar la información que estaba en los campos antes de realizar la acción, y la información después de realizarla.






