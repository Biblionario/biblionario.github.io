/* Biblionario — Devocionales diarios (Rediseño 1.4, 2026-10-26).
   31 devocionales ORIGINALES, escritos para la app (título, reflexión breve
   y cierre de oración), cada uno anclado a un versículo del banco temático
   verificado: los textos son Reina-Valera 1909 (ES) y World English Bible
   (EN), dominio público, copiados literalmente de ese banco. El par i de ES
   y de EN es el mismo devocional y la misma cita. La app elige el del día
   con índice = díaDelAño % 31. */
var DEVOCIONALES_ES = [
 {
  "titulo": "Cambia la preocupación por oración",
  "reflexion": "Hay días en que la mente no se apaga: repasa cuentas, conversaciones y miedos como si al pensarlos más se resolvieran. Pablo no te pide que ignores lo que te pesa, sino que cambies el lugar donde lo procesas: de tu cabeza a la presencia de Dios. Cada preocupación puede convertirse en una petición concreta, dicha en voz alta y con gracias por adelantado. La paz de Dios no siempre llega cuando cambia la situación; muchas veces llega antes, guardando el corazón mientras tanto.",
  "cierre": "Señor, hoy cambio mi lista de preocupaciones por una lista de oraciones. Guarda mi corazón con tu paz.",
  "cita": "Filipenses 4:6-7",
  "texto": "Por nada estéis afanosos; sino sean notorias vuestras peticiones delante de Dios en toda oración y ruego, con hacimiento de gracias. Y la paz de Dios, que sobrepuja todo entendimiento, guardará vuestros corazones y vuestros entendimientos en Cristo Jesús."
 },
 {
  "titulo": "No temas: hay una mano que te sostiene",
  "reflexion": "El miedo suele hablar en futuro: «¿y si pasa…?, ¿y si no puedo…?». Dios responde en presente: «yo estoy contigo». No promete que nunca temblarás, sino que no caerás solo: su mano derecha te sostiene. Hoy no necesitas sentirte valiente para avanzar; necesitas avanzar agarrado. Da el paso que tienes delante, aunque sea pequeño, recordando quién va a tu lado.",
  "cierre": "Padre, cuando el miedo hable más fuerte, recuérdame que tu mano ya me tiene agarrado.",
  "cita": "Isaías 41:10",
  "texto": "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo: siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia."
 },
 {
  "titulo": "Gracias en todo, no por todo",
  "reflexion": "Dar gracias «en todo» no es lo mismo que dar gracias «por todo»: hay cosas que duelen y no se celebran. Pero en medio de cualquier circunstancia cabe encontrar un motivo real de gratitud: un pan, una persona, un día más. La gratitud no niega la realidad; le cambia el foco al corazón. Empieza hoy con tres cosas concretas y míralas como lo que son: señales de que Dios no te ha soltado.",
  "cierre": "Gracias, Señor, por lo que tengo hoy entre manos. Enséñame a ver tu fidelidad en lo cotidiano.",
  "cita": "1 Tesalonicenses 5:18",
  "texto": "Dad gracias en todo; porque esta es la voluntad de Dios para con vosotros en Cristo Jesús."
 },
 {
  "titulo": "Fuerzas nuevas para los que esperan",
  "reflexion": "Esperar en Dios no es quedarse quieto cruzado de brazos: es como el águila que no aletea desesperada, sino que abre las alas y deja que el viento la levante. Hay temporadas en que tu trabajo no es correr más rápido, sino renovarte en la presencia de Dios. El cansancio que sientes no es el final de tu historia; puede ser el aviso de que toca volar de otra manera: menos a fuerza de brazos, más a fuerza de confianza.",
  "cierre": "Señor, renueva mis fuerzas como las del águila; quiero correr sin cansarme, sostenido por ti.",
  "cita": "Isaías 40:31",
  "texto": "Mas los que esperan a Jehová tendrán nuevas fuerzas; levantarán las alas como águilas, correrán, y no se cansarán, caminarán, y no se fatigarán."
 },
 {
  "titulo": "Este es el día: hoy",
  "reflexion": "El salmista no dice «aquel día» ni «algún día»: dice «este es el día que hizo Jehová». Hoy, con lo que trae —lo bueno, lo ordinario y hasta lo difícil—, es un regalo hecho a medida por Dios. No lo vivas de puntillas esperando que llegue algo mejor; recíbelo, gózate en él y busca en sus horas la mano de Dios. La alegría también es una decisión que se toma por la mañana.",
  "cierre": "Gracias por este día, Señor. Hoy me gozo en él, porque lo hiciste tú.",
  "cita": "Salmos 118:24",
  "texto": "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él."
 },
 {
  "titulo": "Amado antes de merecerlo",
  "reflexion": "El amor de Dios no empezó cuando mejoraste, ni se detiene cuando fallas: «de tal manera amó Dios al mundo» que entregó a su Hijo cuando el mundo aún no lo buscaba. Si hoy te sientes lejos, recuerda que la distancia la recorrió él. Tu valor no se mide por tu rendimiento de esta semana; se midió una vez y para siempre en la cruz. Desde ahí, amado, también se vive distinto.",
  "cierre": "Padre, gracias porque me amaste primero. Hoy vivo desde tu amor, no tratando de ganarlo.",
  "cita": "Juan 3:16",
  "texto": "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."
 },
 {
  "titulo": "Confiesa y empieza de nuevo",
  "reflexion": "Guardar un pecado escondido pesa más que confesarlo. Juan promete algo enorme: Dios es fiel y justo para perdonar y limpiar, no a veces, sino siempre que venimos con un corazón sincero. Confesar no es informar a Dios de algo que no sabía; es ponerte de acuerdo con él y dejar que su luz entre donde dolía. Hoy puede ser el día de empezar de nuevo, sin arrastrar lo de ayer.",
  "cierre": "Señor, te confieso lo que he callado. Gracias por tu perdón completo y por tu limpieza renovadora.",
  "cita": "1 Juan 1:9",
  "texto": "Si confesamos nuestros pecados, él es fiel y justo para que nos perdone nuestros pecados, y nos limpie de toda maldad."
 },
 {
  "titulo": "Planes de bien, escritos por Dios",
  "reflexion": "Jeremías escribió estas palabras a un pueblo que vivía lejos de casa, en una temporada que no había elegido. Dios no les dijo «no pasa nada», sino «yo sé los planes que tengo»: hay un diseño, y es de bien, aunque el capítulo actual se lea difícil. Tu historia no está a la deriva: el mismo Dios que ve el final también acompaña el proceso. Confía el capítulo de hoy a quien escribió el libro entero.",
  "cierre": "Señor, tus planes son de bien aunque hoy no vea el final. Confío en tu mano sobre mi futuro.",
  "cita": "Jeremías 29:11",
  "texto": "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis."
 },
 {
  "titulo": "Una paz que no depende del ambiente",
  "reflexion": "La paz del mundo depende de que todo esté en orden: si hay salud, dinero y buenas noticias, hay paz; si falta algo, se va. La paz de Jesús funciona al revés: permanece en medio del desorden, porque no nace de las circunstancias sino de su presencia. Él mismo lo dijo: «mi paz os doy; no como el mundo la da». Recíbela hoy como un regalo que nadie te puede quitar.",
  "cierre": "Jesús, recibo tu paz. Que mi corazón no se turbe ni tenga miedo: tú estás conmigo.",
  "cita": "Juan 14:27",
  "texto": "La paz os dejo, mi paz os doy: no como el mundo la da, yo os la doy. No se turbe vuestro corazón, ni tenga miedo."
 },
 {
  "titulo": "Confía y no te apoyes en tu cálculo",
  "reflexion": "Apoyarte en tu propia prudencia es como recostarte en una pared que tú mismo sostienes: tarde o temprano se cansa el brazo. Proverbios te invita a otra cosa: confiar de todo corazón y reconocer a Dios en todos tus caminos, también en los que crees dominar. Enderezar las veredas no es trabajo tuyo; lo tuyo es incluirlo en cada decisión, grande o pequeña. Él se encarga del resto del camino.",
  "cierre": "Señor, te reconozco en mis caminos de hoy. Endereza mis veredas y guía mis decisiones.",
  "cita": "Proverbios 3:5-6",
  "texto": "Fíate de Jehová de todo tu corazón, y no estribes en tu prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas."
 },
 {
  "titulo": "Lámpara para el paso de hoy",
  "reflexion": "Una lámpara no alumbra kilómetros: alumbra el paso siguiente. Así suele guiar Dios: no te muestra todo el mapa, pero te da luz suficiente para hoy, en su Palabra. Si sientes que no ves el futuro, no es que camines a oscuras; es que la luz está diseñada por etapas. Lee, obedece el paso que ves claro, y confía en que la lámpara seguirá encendida mañana.",
  "cierre": "Señor, tu Palabra es mi lámpara. Alumbra mi paso de hoy y enséñame a obedecer lo que ya veo.",
  "cita": "Salmos 119:105",
  "texto": "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
 },
 {
  "titulo": "Fe: certeza de lo que aún no ves",
  "reflexion": "La fe no es cerrar los ojos y desear fuerte; es tener certeza y convicción, como quien sostiene un título de propiedad de algo que aún no ocupa. Dios ya firmó sus promesas; la fe las trata como hechos mientras llegan a la vista. ¿Qué promesa necesitas sostener hoy como un documento en la mano? Léela, repítela y camina en consecuencia: tu Padre cumple lo que promete.",
  "cierre": "Padre, creo lo que dijiste aunque aún no lo vea. Sostén mi fe con la certeza de tu palabra.",
  "cita": "Hebreos 11:1",
  "texto": "Es pues la fe la sustancia de las cosas que se esperan, la demostración de las cosas que no se ven."
 },
 {
  "titulo": "Aunque ande en valle oscuro",
  "reflexion": "David dice «aunque ande», no «si ando»: los valles forman parte del camino de todos. Pero el salmo cambia de tono justo ahí: deja de hablar de Dios y empieza a hablar con Dios: «tú estarás conmigo». En el valle no estás solo ni desarmado: la vara corrige el rumbo y el cayado rescata. Camina despacio si hace falta, pero camina: el valle se atraviesa, no se habita para siempre.",
  "cierre": "Buen Pastor, gracias porque estás conmigo en este valle. Tu vara y tu cayado me dan aliento.",
  "cita": "Salmos 23:4",
  "texto": "Aunque ande en valle de sombra de muerte, no temeré mal alguno; porque tú estarás conmigo: tu vara y tu cayado me infundirán aliento."
 },
 {
  "titulo": "Un día sin lágrimas viene en camino",
  "reflexion": "El llanto de hoy es real, y Dios no lo minimiza: en el Apocalipsis él mismo enjugará cada lágrima, una por una, con sus manos. Esa escena futura le da sentido al presente: el dolor tiene fecha de vencimiento, pero el amor de Dios no. Mientras llega ese día, él está cerca de los que lloran y guarda cada lágrima como algo precioso. Tu esperanza no es un consuelo vacío; es una cita ya agendada.",
  "cierre": "Señor, espero el día en que seques mis lágrimas. Mientras tanto, sosténme con tu esperanza.",
  "cita": "Apocalipsis 21:4",
  "texto": "Y limpiará Dios toda lágrima de los ojos de ellos; y la muerte no será más; y no habrá más llanto, ni clamor, ni dolor: porque las primeras cosas son pasadas."
 },
 {
  "titulo": "Una decisión para toda la casa",
  "reflexion": "Josué no esperó a que su familia estuviera de acuerdo ni a que los tiempos mejoraran: plantó bandera con una frase corta, «yo y mi casa serviremos a Jehová». Las decisiones espirituales de un hogar rara vez se toman en un momento espectacular; se toman en lo diario: una oración en la mesa, una conversación honesta, un ejemplo que se repite. Si lideras una casa, empieza hoy con una decisión clara y sostenla con amor.",
  "cierre": "Señor, en mi casa te serviremos a ti. Dame sabiduría y constancia para guiar a los míos.",
  "cita": "Josué 24:15",
  "texto": "Y si mal os parece servir a Jehová, escogeos hoy a quién sirváis; si a los dioses a quienes sirvieron vuestros padres, cuando estuvieron de esotra parte del río, o a los dioses de los Amorrheos en cuya tierra habitáis: que yo y mi casa serviremos a Jehová."
 },
 {
  "titulo": "Todo lo puedo… en Cristo",
  "reflexion": "Pablo escribió «todo lo puedo» desde una cárcel, no desde un escenario. No es una frase para exigirle a Dios el resultado que queremos, sino para declarar que en Cristo hay fuerza para la abundancia y para la escasez, para el día de victoria y para el día gris. Tu capacidad de hoy no se mide por tus recursos, sino por la compañía que llevas. En él, alcanza.",
  "cierre": "Cristo, tú eres mi fuerza hoy. En ti puedo enfrentar lo que este día traiga.",
  "cita": "Filipenses 4:13",
  "texto": "Todo lo puedo en Cristo que me fortalece."
 },
 {
  "titulo": "Ven: el descanso tiene una dirección",
  "reflexion": "Jesús no dice «esfuérzate más» a los cargados; dice «venid a mí». El descanso del alma no es un lugar ni una técnica: es una persona. Muchas cargas que llevas no te las puso Dios: te las puso la prisa, la culpa o la expectativa de otros. Acércate tal como estás, sin ordenar primero tu vida. En su presencia, lo pesado se pone en su sitio y el corazón vuelve a respirar.",
  "cierre": "Jesús, vengo a ti con mis cargas. Recibo tu descanso para mi alma.",
  "cita": "Mateo 11:28",
  "texto": "Venid a mí todos los que estáis trabajados y cargados, que yo os haré descansar."
 },
 {
  "titulo": "Nada nos separará",
  "reflexion": "Pablo hace una lista agotadora —vida, muerte, presente, futuro, altura, profundidad— y concluye que ninguna fuerza del universo puede romper el amor de Dios en Cristo. Fíjate que no dice que no vendrán cosas difíciles; dice que ninguna de ellas tiene poder de separación. Tu relación con Dios no depende de que aguantes, sino de que él te sostiene. Descansa en eso hoy: estás más unido a él de lo que tus sentimientos sugieren.",
  "cierre": "Padre, gracias porque nada podrá separarme de tu amor. Vivo seguro en Cristo.",
  "cita": "Romanos 8:38-39",
  "texto": "Por lo cual estoy cierto que ni la muerte, ni la vida, ni ángeles, ni principados, ni potestades, ni lo presente, ni lo por venir, ni lo alto, ni lo bajo, ni ninguna criatura nos podrá apartar del amor de Dios, que es en Cristo Jesús Señor nuestro."
 },
 {
  "titulo": "Mi Dios suplirá lo que falta",
  "reflexion": "La provisión de Dios no sale de tus reservas, sino de «sus riquezas en gloria»: el almacén no depende de tu sueldo ni de la temporada. Pablo lo afirmó habiendo conocido la escasez de cerca. Hoy haz tu parte con diligencia —trabaja, administra, siembra— y deja la parte imposible en manos de Dios. Él sabe exactamente lo que te falta, y su manera de suplir suele ser más creativa que la tuya.",
  "cierre": "Señor, tú conoces lo que me falta. Trabajo con diligencia y confío en tu provisión.",
  "cita": "Filipenses 4:19",
  "texto": "Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús."
 },
 {
  "titulo": "Nunca te dejará, nunca te desamparará",
  "reflexion": "Hay personas que se van y mensajes que no se responden; la soledad puede doler incluso rodeado de gente. Contra eso, Dios repite su promesa dos veces en un mismo versículo: no te dejará, no te desamparará. No es una frase bonita para un cuadro: es un compromiso firmado. Cuando sientas que nadie nota tu ausencia, recuerda que hay uno que nunca se ha ido ni se irá.",
  "cierre": "Señor, gracias porque nunca me dejas. Tu presencia me basta en medio de la soledad.",
  "cita": "Deuteronomio 31:8",
  "texto": "Y Jehová es el que va delante de ti; él será contigo, no te dejará, ni te desamparará; no temas, ni te intimides."
 },
 {
  "titulo": "Misericordias nuevas cada mañana",
  "reflexion": "Jeremías escribió esto entre ruinas, con la ciudad destruida a la vista. Y sin embargo, al amanecer, descubrió algo que no se había acabado: las misericordias de Dios, que se renuevan cada mañana como el pan fresco. Ayer pudo ser un desastre; hoy Dios estrena su fidelidad contigo otra vez. No vivas del recuerdo de su bondad pasada: hay una porción nueva con tu nombre, esta misma mañana.",
  "cierre": "Grande es tu fidelidad, Señor. Hoy recibo tu misericordia nueva como pan fresco.",
  "cita": "Lamentaciones 3:22-23",
  "texto": "Es por la misericordia de Jehová que no somos consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad."
 },
 {
  "titulo": "Su gracia basta, incluso con el aguijón",
  "reflexion": "Pablo pidió tres veces que le quitaran su aguijón, y la respuesta de Dios no fue quitarlo, sino darle gracia suficiente para llevarlo. Hay oraciones que Dios responde cambiando la situación, y otras, cambiándonos a nosotros en medio de ella. Su poder se perfecciona en tu debilidad: justo donde te sientes menos capaz, su gracia trabaja más visible. No esperes a sentirte fuerte para servir y avanzar: hazlo apoyado en su gracia.",
  "cierre": "Señor, tu gracia me basta. Que tu poder se muestre en mi debilidad de hoy.",
  "cita": "2 Corintios 12:9",
  "texto": "Y me ha dicho: Bástate mi gracia; porque mi potencia en la flaqueza se perfecciona. Por tanto, de buena gana me gloriaré más bien en mis flaquezas, porque habite en mí la potencia de Cristo."
 },
 {
  "titulo": "Bienaventurados los que lloran",
  "reflexion": "Jesús no felicita a los que nunca lloran, sino a los que lloran: porque ellos recibirán consolación. El duelo no es falta de fe; es el precio de haber amado. Dios no te pide que sonrías en el funeral de tus sueños: te promete consuelo en medio del proceso. Llora lo que tengas que llorar, pero no lo llores solo: el Consolador conoce tu nombre y tu historia.",
  "cierre": "Señor, en mi llanto recibo tu consolación. Quédate cerca de mi corazón herido.",
  "cita": "Mateo 5:4",
  "texto": "Bienaventurados los que lloran: porque ellos recibirán consolación."
 },
 {
  "titulo": "¿Te falta sabiduría? Pídela",
  "reflexion": "Santiago parte de una suposición amable: a todos nos falta sabiduría alguna vez. La salida no es avergonzarse, sino pedir: Dios da abundantemente y sin reproche. Fíjate en la generosidad del retrato: un Dios que no regaña por preguntar, sino que responde con gusto. Antes de decidir eso que te quita el sueño, haz la oración más sencilla: «Señor, dame sabiduría». Él prometió responder, y a veces la respuesta llega como una idea clara en el momento justo.",
  "cierre": "Padre, me falta sabiduría y te la pido con confianza. Gracias porque das sin reproche.",
  "cita": "Santiago 1:5",
  "texto": "Y si alguno de vosotros tiene falta de sabiduría, demándela a Dios, el cual da a todos abundantemente, y no zahiere; y le será dada."
 },
 {
  "titulo": "Todo ayuda a bien (aunque hoy no se vea)",
  "reflexion": "Romanos 8:28 no dice que todo lo que pasa es bueno; dice que Dios hace que todo —lo bueno, lo malo y lo que no entendemos— trabaje junto para bien de los que le aman. Es la diferencia entre una pieza suelta y el cuadro completo: una pieza oscura no arruina la obra si el Artista sabe dónde va. Entrégale también lo que hoy no entiendes: en sus manos, hasta eso coopera.",
  "cierre": "Señor, aunque no entiendo este capítulo, confío: tú estás obrando todo para mi bien.",
  "cita": "Romanos 8:28",
  "texto": "Y sabemos que a los que a Dios aman, todas las cosas les ayudan a bien, es a saber, a los que conforme al propósito son llamados."
 },
 {
  "titulo": "Guardado en perfecta paz",
  "reflexion": "La promesa de Isaías tiene una condición práctica: la mente perseverante en Dios. La perfecta paz no es ausencia de ruido alrededor, sino un ancla por dentro: volver el pensamiento a Dios una y otra vez, como quien regresa a casa. Hoy, cada vez que la preocupación te jale, haz el ejercicio consciente: nombra a Dios, recuerda una de sus promesas y quédate ahí un momento. La paz también se practica.",
  "cierre": "Señor, guardo mi pensamiento en ti. Guárdame en tu perfecta paz.",
  "cita": "Isaías 26:3",
  "texto": "Tú le guardarás en completa paz, cuyo pensamiento en ti persevera; porque en ti se ha confiado."
 },
 {
  "titulo": "Todo buen don viene de arriba",
  "reflexion": "Santiago traza el origen de cada cosa buena de tu vida: ninguna fue casualidad completa; detrás hay un Padre que da. Haz el inventario con calma: la salud que tienes, la persona que te ayuda, la oportunidad que llegó, incluso lo que aprendiste en lo difícil. Reconocer la fuente cambia la actitud: de la queja a la gratitud, y de la gratitud a la generosidad. Lo que recibiste de arriba, compártelo hacia los lados.",
  "cierre": "Padre de las luces, gracias por cada buen don de mi vida. Hazme generoso como tú.",
  "cita": "Santiago 1:17",
  "texto": "Toda buena dádiva y todo don perfecto es de lo alto, que desciende del Padre de las luces, en el cual no hay mudanza, ni sombra de variación."
 },
 {
  "titulo": "Qué bueno es estar de acuerdo",
  "reflexion": "El salmo 133 compara la unidad con aceite precioso y con el rocío que refresca: es bendición que baja y vida que se renueva. La unidad no es que todos piensen igual, sino que el corazón apunte en la misma dirección y nadie se quede peleando solo. Hoy puedes ser el que acerca en vez del que aleja: una palabra suave, una llamada pendiente, un perdón ofrecido. Donde hay unidad, Dios ordenó bendición.",
  "cierre": "Señor, hazme instrumento de unidad. Que en mi casa y mi iglesia se respire tu paz.",
  "cita": "Salmos 133:1",
  "texto": "¡Mirad cuán bueno y cuán delicioso es habitar los hermanos igualmente en uno!"
 },
 {
  "titulo": "Esperanza: un ancla firme y segura",
  "reflexion": "Un ancla no evita la tormenta: evita que la tormenta se lleve el barco. La esperanza en Cristo es así: firme y segura, echada dentro del velo, donde está Jesús. Cuando las emociones suben y bajan como oleaje, el ancla no se mueve porque no depende del clima, sino del fondo al que está agarrada. Si hoy el mar está movido, revisa tu ancla, no tu valor: estás sostenido desde arriba.",
  "cierre": "Señor Jesús, mi esperanza está anclada en ti. En la tormenta, no me soltaré.",
  "cita": "Hebreos 6:19",
  "texto": "La cual tenemos como segura y firme ancla del alma, y que entra hasta dentro del velo."
 },
 {
  "titulo": "Por su llaga fuimos curados",
  "reflexion": "La sanidad del alma y del cuerpo tiene una dirección en la Escritura: la cruz. Isaías anuncia que el castigo de nuestra paz cayó sobre el Siervo, y que por su llaga fuimos nosotros curados. Orar por salud no es pedirle a Dios algo ajeno a su corazón: es apoyarse en lo que Cristo ya cargó. Presenta tu dolor y el de los tuyos con esa confianza, y descansa en sus tiempos y su manera, que siempre son perfectos.",
  "cierre": "Señor, por las llagas de Cristo recibo tu sanidad. Pongo mi dolor y el de los míos en tus manos.",
  "cita": "Isaías 53:5",
  "texto": "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados: el castigo de nuestra paz sobre él; y por su llaga fuimos nosotros curados."
 },
 {
  "titulo": "Primero el reino: el orden que libera",
  "reflexion": "Jesús pone un orden que alivia: primero el reino de Dios y su justicia; lo demás —comida, vestido, techo— entra como añadidura, no como obsesión. Cuando las añadiduras ocupan el primer lugar, la ansiedad manda en la casa; cuando Dios ocupa su trono, cada cosa encuentra su tamaño real. Ordena hoy tu día con él primero: una oración antes que el teléfono, su Palabra antes que las noticias. El resto se acomoda mejor de lo que crees.",
  "cierre": "Señor, hoy te pongo primero. Ordena mi corazón y encárgate de las añadiduras.",
  "cita": "Mateo 6:33",
  "texto": "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas."
 }
];
var DEVOCIONALES_EN = [
 {
  "titulo": "Trade worry for prayer",
  "reflexion": "Some days the mind will not switch off: it replays bills, conversations and fears as if thinking harder could fix them. Paul does not ask you to ignore what weighs on you, but to change where you process it: from your head into God's presence. Every worry can become a specific request, spoken out loud and with thanks ahead of time. God's peace does not always arrive when the situation changes; often it arrives first, guarding your heart in the meantime.",
  "cierre": "Lord, today I trade my list of worries for a list of prayers. Guard my heart with your peace.",
  "cita": "Philippians 4:6-7",
  "texto": "In nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your thoughts in Christ Jesus."
 },
 {
  "titulo": "Do not fear: a hand is holding you",
  "reflexion": "Fear usually speaks in the future tense: 'What if it happens...? What if I can't...?' God answers in the present: 'I am with you.' He does not promise you will never tremble, but that you will not fall alone: his right hand holds you up. Today you do not need to feel brave to move forward; you need to move forward holding on. Take the step in front of you, however small, remembering who walks beside you.",
  "cierre": "Father, when fear speaks louder, remind me that your hand already holds me.",
  "cita": "Isaiah 41:10",
  "texto": "Don’t you be afraid, for I am with you. Don’t be dismayed, for I am your God. I will strengthen you. Yes, I will help you. Yes, I will uphold you with the right hand of my righteousness."
 },
 {
  "titulo": "Thanks in everything, not for everything",
  "reflexion": "Giving thanks 'in everything' is not the same as giving thanks 'for everything': some things hurt and are not celebrated. But in the middle of any circumstance there is room for one real reason to be grateful: a meal, a person, one more day. Gratitude does not deny reality; it changes the heart's focus. Start today with three specific things and see them for what they are: signs that God has not let you go.",
  "cierre": "Thank you, Lord, for what I hold in my hands today. Teach me to see your faithfulness in everyday things.",
  "cita": "1 Thessalonians 5:18",
  "texto": "In everything give thanks, for this is the will of God in Christ Jesus toward you."
 },
 {
  "titulo": "New strength for those who wait",
  "reflexion": "Waiting on God is not sitting still with folded arms: it is like the eagle that does not flap in desperation but spreads its wings and lets the wind lift it. There are seasons when your job is not to run faster, but to be renewed in God's presence. The weariness you feel is not the end of your story; it may be the signal that it is time to fly differently: less by arm strength, more by trust.",
  "cierre": "Lord, renew my strength like the eagle's; I want to run without growing weary, held up by you.",
  "cita": "Isaiah 40:31",
  "texto": "But those who wait for Yahweh will renew their strength. They will mount up with wings like eagles. They will run, and not be weary. They will walk, and not faint."
 },
 {
  "titulo": "This is the day: today",
  "reflexion": "The psalmist does not say 'that day' or 'someday': he says 'this is the day that the Lord has made.' Today, with whatever it brings—the good, the ordinary and even the hard—is a gift made to measure by God. Do not tiptoe through it waiting for something better; receive it, rejoice in it, and look for God's hand in its hours. Joy is also a decision made in the morning.",
  "cierre": "Thank you for this day, Lord. Today I rejoice in it, because you made it.",
  "cita": "Psalms 118:24",
  "texto": "This is the day that Yahweh has made. We will rejoice and be glad in it!"
 },
 {
  "titulo": "Loved before deserving it",
  "reflexion": "God's love did not begin when you got better, and it does not stop when you fail: 'God so loved the world' that he gave his Son while the world was not even looking for him. If you feel far away today, remember that he already crossed the distance. Your worth is not measured by this week's performance; it was measured once and for all at the cross. And from there, being loved, life is lived differently too.",
  "cierre": "Father, thank you for loving me first. Today I live from your love, not trying to earn it.",
  "cita": "John 3:16",
  "texto": "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life."
 },
 {
  "titulo": "Confess and start over",
  "reflexion": "Keeping a sin hidden weighs more than confessing it. John promises something huge: God is faithful and just to forgive and to cleanse, not sometimes, but whenever we come with a sincere heart. Confessing is not informing God of something he did not know; it is agreeing with him and letting his light into the place that hurt. Today can be the day you start over, without dragging yesterday along.",
  "cierre": "Lord, I confess to you what I have kept silent. Thank you for your complete forgiveness and your renewing cleansing.",
  "cita": "1 John 1:9",
  "texto": "If we confess our sins, he is faithful and righteous to forgive us the sins, and to cleanse us from all unrighteousness."
 },
 {
  "titulo": "Plans for good, written by God",
  "reflexion": "Jeremiah wrote these words to a people living far from home, in a season they had not chosen. God did not tell them 'nothing is wrong,' but 'I know the plans I have': there is a design, and it is for good, even if the current chapter reads hard. Your story is not adrift: the same God who sees the end also walks with you through the process. Entrust today's chapter to the one who wrote the whole book.",
  "cierre": "Lord, your plans are for good even if I cannot see the end today. I trust your hand over my future.",
  "cita": "Jeremiah 29:11",
  "texto": "For I know the thoughts that I think toward you,” says Yahweh, “thoughts of peace, and not of evil, to give you hope and a future."
 },
 {
  "titulo": "A peace that does not depend on the weather",
  "reflexion": "The world's peace depends on everything being in order: if there is health, money and good news, there is peace; if something is missing, it leaves. The peace of Jesus works the other way around: it remains in the middle of the mess, because it is born not of circumstances but of his presence. He said it himself: 'My peace I give to you; not as the world gives.' Receive it today as a gift no one can take from you.",
  "cierre": "Jesus, I receive your peace. Let my heart not be troubled or afraid: you are with me.",
  "cita": "John 14:27",
  "texto": "Peace I leave with you. My peace I give to you; not as the world gives, give I to you. Don’t let your heart be troubled, neither let it be fearful."
 },
 {
  "titulo": "Trust and do not lean on your own math",
  "reflexion": "Leaning on your own understanding is like resting against a wall you are holding up yourself: sooner or later your arm gets tired. Proverbs invites you to something else: trust with all your heart and acknowledge God in all your ways, including the ones you think you have mastered. Straightening the path is not your job; yours is to include him in every decision, big or small. He takes care of the rest of the road.",
  "cierre": "Lord, I acknowledge you in my ways today. Straighten my paths and guide my decisions.",
  "cita": "Proverbs 3:5-6",
  "texto": "Trust in Yahweh with all your heart, and don’t lean on your own understanding. In all your ways acknowledge him, and he will make your paths straight."
 },
 {
  "titulo": "A lamp for today's step",
  "reflexion": "A lamp does not light up miles ahead: it lights up the next step. That is how God usually guides: he does not show you the whole map, but he gives you enough light for today, in his Word. If you feel you cannot see the future, it is not that you walk in darkness; the light is designed in stages. Read, obey the step you can see clearly, and trust that the lamp will still be lit tomorrow.",
  "cierre": "Lord, your Word is my lamp. Light my step today and teach me to obey what I already see.",
  "cita": "Psalms 119:105",
  "texto": "Your word is a lamp to my feet, and a light for my path."
 },
 {
  "titulo": "Faith: certainty about what you cannot yet see",
  "reflexion": "Faith is not closing your eyes and wishing hard; it is certainty and conviction, like holding the title deed to something you do not occupy yet. God has already signed his promises; faith treats them as facts while they come into view. Which promise do you need to hold today like a document in your hand? Read it, repeat it, and walk accordingly: your Father keeps what he promises.",
  "cierre": "Father, I believe what you said even though I cannot see it yet. Hold my faith up with the certainty of your word.",
  "cita": "Hebrews 11:1",
  "texto": "Now faith is assurance of things hoped for, proof of things not seen."
 },
 {
  "titulo": "Even in the darkest valley",
  "reflexion": "David says 'though I walk,' not 'if I walk': valleys are part of everyone's road. But the psalm changes tone right there: it stops talking about God and starts talking to God: 'you are with me.' In the valley you are neither alone nor unarmed: the rod corrects the course and the staff rescues. Walk slowly if you must, but walk: a valley is crossed, not lived in forever.",
  "cierre": "Good Shepherd, thank you for being with me in this valley. Your rod and your staff give me courage.",
  "cita": "Psalms 23:4",
  "texto": "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me. Your rod and your staff, they comfort me."
 },
 {
  "titulo": "A day without tears is on its way",
  "reflexion": "Today's weeping is real, and God does not minimize it: in Revelation he himself will wipe away every tear, one by one, with his hands. That future scene gives meaning to the present: pain has an expiration date, but God's love does not. Until that day comes, he stays near those who mourn and keeps every tear as something precious. Your hope is not empty comfort; it is an appointment already scheduled.",
  "cierre": "Lord, I wait for the day you wipe away my tears. In the meantime, hold me up with your hope.",
  "cita": "Revelation 21:4",
  "texto": "He will wipe away from them every tear from their eyes. Death will be no more; neither will there be mourning, nor crying, nor pain, any more. The first things have passed away."
 },
 {
  "titulo": "A decision for the whole house",
  "reflexion": "Joshua did not wait until his family agreed or times improved: he planted a flag with a short sentence, 'as for me and my house, we will serve the Lord.' A home's spiritual decisions are rarely made in a spectacular moment; they are made in the daily things: a prayer at the table, an honest conversation, an example repeated. If you lead a household, start today with one clear decision and hold it with love.",
  "cierre": "Lord, in my house we will serve you. Give me wisdom and consistency to guide my family.",
  "cita": "Joshua 24:15",
  "texto": "If it seems evil to you to serve Yahweh, choose today whom you will serve; whether the gods which your fathers served that were beyond the River, or the gods of the Amorites, in whose land you dwell; but as for me and my house, we will serve Yahweh."
 },
 {
  "titulo": "I can do all things... in Christ",
  "reflexion": "Paul wrote 'I can do all things' from a prison, not from a stage. It is not a phrase for demanding from God the outcome we want, but for declaring that in Christ there is strength for abundance and for scarcity, for the day of victory and for the grey day. Your capacity today is not measured by your resources, but by the company you keep. In him, it is enough.",
  "cierre": "Christ, you are my strength today. In you I can face whatever this day brings.",
  "cita": "Philippians 4:13",
  "texto": "I can do all things through Christ, who strengthens me."
 },
 {
  "titulo": "Come: rest has a direction",
  "reflexion": "Jesus does not say 'try harder' to the burdened; he says 'come to me.' Rest for the soul is not a place or a technique: it is a person. Many burdens you carry were not put on you by God: haste, guilt or other people's expectations put them there. Come just as you are, without tidying up your life first. In his presence, what is heavy finds its place and the heart breathes again.",
  "cierre": "Jesus, I come to you with my burdens. I receive your rest for my soul.",
  "cita": "Matthew 11:28",
  "texto": "Come to me, all you who labor and are heavily burdened, and I will give you rest."
 },
 {
  "titulo": "Nothing will separate us",
  "reflexion": "Paul makes an exhaustive list—life, death, the present, the future, height, depth—and concludes that no force in the universe can break God's love in Christ. Notice he does not say hard things will not come; he says none of them has the power to separate. Your relationship with God does not depend on your holding on, but on his holding you. Rest in that today: you are closer to him than your feelings suggest.",
  "cierre": "Father, thank you that nothing can separate me from your love. I live secure in Christ.",
  "cita": "Romans 8:38-39",
  "texto": "For I am persuaded that neither death, nor life, nor angels, nor principalities, nor things present, nor things to come, nor powers, nor height, nor depth, nor any other created thing, will be able to separate us from God’s love, which is in Christ Jesus our Lord."
 },
 {
  "titulo": "My God will supply what is lacking",
  "reflexion": "God's provision does not come out of your reserves, but from 'his riches in glory': the storehouse does not depend on your paycheck or the season. Paul affirmed this having known scarcity up close. Today do your part diligently—work, manage, sow—and leave the impossible part in God's hands. He knows exactly what you lack, and his way of supplying is usually more creative than yours.",
  "cierre": "Lord, you know what I lack. I work diligently and trust in your provision.",
  "cita": "Philippians 4:19",
  "texto": "My God will supply every need of yours according to his riches in glory in Christ Jesus."
 },
 {
  "titulo": "He will never leave you nor forsake you",
  "reflexion": "Some people leave and some messages go unanswered; loneliness can hurt even in a crowd. Against that, God repeats his promise twice in a single verse: he will not leave you, he will not forsake you. It is not a pretty phrase for a picture frame: it is a signed commitment. When you feel no one notices your absence, remember there is one who has never left and never will.",
  "cierre": "Lord, thank you that you never leave me. Your presence is enough for me in the middle of loneliness.",
  "cita": "Deuteronomy 31:8",
  "texto": "Yahweh himself is who goes before you. He will be with you. He will not fail you nor forsake you. Don’t be afraid. Don’t be discouraged."
 },
 {
  "titulo": "Mercies new every morning",
  "reflexion": "Jeremiah wrote this among ruins, with the destroyed city in view. And yet, at dawn, he discovered something that had not run out: God's mercies, renewed every morning like fresh bread. Yesterday may have been a disaster; today God offers his faithfulness to you all over again. Do not live off the memory of his past kindness: there is a new portion with your name on it, this very morning.",
  "cierre": "Great is your faithfulness, Lord. Today I receive your new mercy like fresh bread.",
  "cita": "Lamentations 3:22-23",
  "texto": "It is because of Yahweh’s loving kindnesses that we are not consumed, because his compassion doesn’t fail. They are new every morning; great is your faithfulness."
 },
 {
  "titulo": "His grace is enough, even with the thorn",
  "reflexion": "Paul asked three times for his thorn to be removed, and God's answer was not to remove it, but to give him grace enough to carry it. Some prayers God answers by changing the situation; others, by changing us in the middle of it. His power is perfected in your weakness: right where you feel least capable, his grace works most visibly. Do not wait until you feel strong to serve and move forward: do it leaning on his grace.",
  "cierre": "Lord, your grace is enough for me. Let your power be shown in my weakness today.",
  "cita": "2 Corinthians 12:9",
  "texto": "He has said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Most gladly therefore I will rather glory in my weaknesses, that the power of Christ may rest on me."
 },
 {
  "titulo": "Blessed are those who mourn",
  "reflexion": "Jesus does not congratulate those who never cry, but those who do: for they will be comforted. Grief is not a lack of faith; it is the price of having loved. God does not ask you to smile at the funeral of your dreams: he promises comfort in the middle of the process. Weep what you must weep, but do not weep alone: the Comforter knows your name and your story.",
  "cierre": "Lord, in my weeping I receive your comfort. Stay close to my wounded heart.",
  "cita": "Matthew 5:4",
  "texto": "Blessed are those who mourn, for they shall be comforted."
 },
 {
  "titulo": "Lacking wisdom? Ask for it",
  "reflexion": "James starts from a kind assumption: we all lack wisdom sometimes. The way out is not shame, but asking: God gives generously and without reproach. Notice the generosity in the picture: a God who does not scold you for asking, but answers gladly. Before deciding the thing that keeps you awake, pray the simplest prayer: 'Lord, give me wisdom.' He promised to answer, and sometimes the answer arrives as a clear idea at just the right moment.",
  "cierre": "Father, I lack wisdom and I ask you for it with confidence. Thank you for giving without reproach.",
  "cita": "James 1:5",
  "texto": "But if any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach; and it will be given to him."
 },
 {
  "titulo": "All things work for good (even if unseen today)",
  "reflexion": "Romans 8:28 does not say that everything that happens is good; it says God makes all things—good, bad and confusing—work together for good for those who love him. It is the difference between a loose piece and the whole picture: a dark piece does not ruin the work if the Artist knows where it goes. Hand him also what you do not understand today: in his hands, even that works together.",
  "cierre": "Lord, though I do not understand this chapter, I trust you: you are working all things for my good.",
  "cita": "Romans 8:28",
  "texto": "We know that all things work together for good for those who love God, to those who are called according to his purpose."
 },
 {
  "titulo": "Kept in perfect peace",
  "reflexion": "Isaiah's promise has a practical condition: the mind stayed on God. Perfect peace is not the absence of noise around you, but an anchor within: turning your thoughts back to God again and again, like coming home. Today, every time worry pulls at you, do the conscious exercise: name God, remember one of his promises, and stay there a moment. Peace is also practiced.",
  "cierre": "Lord, I keep my mind on you. Keep me in your perfect peace.",
  "cita": "Isaiah 26:3",
  "texto": "You will keep whoever’s mind is steadfast in perfect peace, because he trusts in you."
 },
 {
  "titulo": "Every good gift comes from above",
  "reflexion": "James traces the origin of every good thing in your life: none of it was pure chance; behind it there is a Father who gives. Take inventory calmly: the health you have, the person who helps you, the opportunity that arrived, even what you learned through hardship. Recognizing the source changes your attitude: from complaint to gratitude, and from gratitude to generosity. What you received from above, share sideways.",
  "cierre": "Father of lights, thank you for every good gift in my life. Make me generous like you.",
  "cita": "James 1:17",
  "texto": "Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom can be no variation, nor turning shadow."
 },
 {
  "titulo": "How good it is to dwell in unity",
  "reflexion": "Psalm 133 compares unity to precious oil and to the dew that refreshes: it is blessing coming down and life renewed. Unity is not everyone thinking alike, but hearts pointing in the same direction, with no one left fighting alone. Today you can be the one who draws near instead of pushing away: a gentle word, a pending call, a forgiveness offered. Where there is unity, God commanded the blessing.",
  "cierre": "Lord, make me an instrument of unity. Let your peace be breathed in my home and my church.",
  "cita": "Psalms 133:1",
  "texto": "See how good and how pleasant it is for brothers to live together in unity!"
 },
 {
  "titulo": "Hope: a firm and secure anchor",
  "reflexion": "An anchor does not prevent the storm: it prevents the storm from carrying the ship away. Hope in Christ is like that: firm and secure, cast within the veil, where Jesus is. When emotions rise and fall like waves, the anchor does not move, because it depends not on the weather but on the ground it holds. If the sea is rough today, check your anchor, not your worth: you are held from above.",
  "cierre": "Lord Jesus, my hope is anchored in you. In the storm, I will not let go.",
  "cita": "Hebrews 6:19",
  "texto": "This hope we have as an anchor of the soul, a hope both sure and steadfast and entering into that which is within the veil;"
 },
 {
  "titulo": "By his wounds we were healed",
  "reflexion": "Healing of soul and body has a direction in Scripture: the cross. Isaiah announces that the punishment for our peace fell on the Servant, and that by his wounds we were healed. Praying for health is not asking God for something foreign to his heart: it is leaning on what Christ already carried. Present your pain and your loved ones' pain with that confidence, and rest in his timing and his way, which are always perfect.",
  "cierre": "Lord, by Christ's wounds I receive your healing. I place my pain and my loved ones' pain in your hands.",
  "cita": "Isaiah 53:5",
  "texto": "But he was pierced for our transgressions. He was crushed for our iniquities. The punishment that brought our peace was on him; and by his wounds we are healed."
 },
 {
  "titulo": "First the kingdom: the order that sets you free",
  "reflexion": "Jesus sets an order that relieves: first the kingdom of God and his righteousness; everything else—food, clothing, shelter—comes as an addition, not an obsession. When additions take first place, anxiety rules the house; when God occupies his throne, everything finds its real size. Order your day with him first today: a prayer before the phone, his Word before the news. The rest falls into place better than you think.",
  "cierre": "Lord, today I put you first. Order my heart and take care of the rest.",
  "cita": "Matthew 6:33",
  "texto": "But seek first God’s Kingdom, and his righteousness; and all these things will be given to you as well."
 }
];
