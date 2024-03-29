// This is a conversion of the CSV data set from Kaggle here: https://www.kaggle.com/ikarus777/best-artworks-of-all-time
// to a JSON equivalent.
export const GreatArtists = [
  {
    id: 0,
    name: 'Amedeo Modigliani',
    years: '1884 - 1920',
    genre: 'Expressionism',
    nationality: 'Italian',
    bio:
      "Amedeo Clemente Modigliani (Italian pronunciation: [ameˈdɛːo modiʎˈʎaːni]; 12 July 1884 – 24 January 1920) was an Italian Jewish painter and sculptor who worked mainly in France. He is known for portraits and nudes in a modern style characterized by elongation of faces, necks, and figures that were not received well during his lifetime but later found acceptance. Modigliani spent his youth in Italy, where he studied the art of antiquity and the Renaissance. In 1906 he moved to Paris, where he came into contact with such artists as Pablo Picasso and Constantin Brâncuși. By 1912 Modigliani was exhibiting highly stylized sculptures with Cubists of the Section d'Or group at the Salon d'Automne.",
    wikipedia: 'http://en.wikipedia.org/wiki/Amedeo_Modigliani',
    paintings: 193
  },
  {
    id: 1,
    name: 'Vasiliy Kandinskiy',
    years: '1866 - 1944',
    genre: 'Expressionism,Abstractionism',
    nationality: 'Russian',
    bio:
      'Wassily Wassilyevich Kandinsky (Russian: Васи́лий Васи́льевич Канди́нский, tr. Vasíliy Vasílʹevich Kandínskiy) (16 December [O.S. 4 December] 1866 – 13 December 1944) was a Russian painter and art theorist.',
    wikipedia: 'http://en.wikipedia.org/wiki/Wassily_Kandinsky',
    paintings: 88
  },
  {
    id: 2,
    name: 'Diego Rivera',
    years: '1886 - 1957',
    genre: 'Social Realism,Muralism',
    nationality: 'Mexican',
    bio:
      'Diego María de la Concepción Juan Nepomuceno Estanislao de la Rivera y Barrientos Acosta y Rodríguez, known as Diego Rivera (Spanish pronunciation: [ˈdjeɣo riˈβeɾa]; December 8, 1886 – November 24, 1957) was a prominent Mexican painter. His large frescoes helped establish the Mexican mural movement in Mexican art. Between 1922 and 1953, Rivera painted murals in, among other places, Mexico City, Chapingo, Cuernavaca, San Francisco, Detroit, and New York City. In 1931, a retrospective exhibition of his works was held at the Museum of Modern Art in New York. Rivera had a volatile marriage with fellow Mexican artist Frida Kahlo.',
    wikipedia: 'http://en.wikipedia.org/wiki/Diego_Rivera',
    paintings: 70
  },
  {
    id: 3,
    name: 'Claude Monet',
    years: '1840 - 1926',
    genre: 'Impressionism',
    nationality: 'French',
    bio:
      "Oscar-Claude Monet (; French: [klod mɔnɛ]; 14 November 1840 – 5 December 1926) was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting. The term \"Impressionism\" is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874 in the first of the independent exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.Monet's ambition of documenting the French countryside led him to adopt a method of painting the same scene many times in order to capture the changing of light and the passing of the seasons. From 1883, Monet lived in Giverny, where he purchased a house and property and began a vast landscaping project which included lily ponds that would become the subjects of his best-known works. In 1899, he began painting the water lilies, first in vertical views with a Japanese bridge as a central feature and later in the series of large-scale paintings that was to occupy him continuously for the next 20 years of his life.",
    wikipedia: 'http://en.wikipedia.org/wiki/Claude_Monet',
    paintings: 73
  },
  {
    id: 4,
    name: 'Rene Magritte',
    years: '1898 - 1967',
    genre: 'Surrealism,Impressionism',
    nationality: 'Belgian',
    bio:
      "René François Ghislain Magritte (French: [ʁəne fʁɑ̃swa ɡilɛ̃ maɡʁit]; 21 November 1898 – 15 August 1967) was a Belgian Surrealist artist. He became well known for creating a number of witty and thought-provoking images. Often depicting ordinary objects in an unusual context, his work is known for challenging observers' preconditioned perceptions of reality. His imagery has influenced Pop art, minimalist and conceptual art.",
    wikipedia: 'http://en.wikipedia.org/wiki/René_Magritte',
    paintings: 194
  },
  {
    id: 5,
    name: 'Salvador Dali',
    years: '1904 - 1989',
    genre: 'Surrealism',
    nationality: 'Spanish',
    bio:
      'Salvador Domingo Felipe Jacinto Dalí i Domènech, 1st Marquis of Dalí de Púbol (11 May 1904 – 23 January 1989), known professionally as Salvador Dalí (; Catalan: [səlβəˈðo ðəˈli]; Spanish: [salβaˈðoɾ ðaˈli]), was a prominent Spanish surrealist born in Figueres, Catalonia, Spain.',
    wikipedia: 'http://en.wikipedia.org/wiki/Salvador_Dalí',
    paintings: 139
  },
  {
    id: 6,
    name: 'Edouard Manet',
    years: '1832 - 1883',
    genre: 'Realism,Impressionism',
    nationality: 'French',
    bio:
      'Édouard Manet (US: ; UK: ; French: [edwaʁ manɛ]; 23 January 1832 – 30 April 1883) was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism.',
    wikipedia: 'http://en.wikipedia.org/wiki/Édouard_Manet',
    paintings: 90
  },
  {
    id: 7,
    name: 'Andrei Rublev',
    years: '1360 - 1430',
    genre: 'Byzantine Art',
    nationality: 'Russian',
    bio:
      'Andrei Rublev (Russian: Андре́й Рублёв, IPA: [ɐnˈdrʲej rʊˈblʲɵf], also transliterated as Andrey Rublyov; born in the 1360s, died 29 January 1427 or 1430, or 17 October 1428 in Moscow) is considered to be one of the greatest medieval Russian painters of Orthodox icons and frescos.',
    wikipedia: 'http://en.wikipedia.org/wiki/Andrei_Rublev',
    paintings: 99
  },
  {
    id: 8,
    name: 'Vincent van Gogh',
    years: '1853 – 1890',
    genre: 'Post-Impressionism',
    nationality: 'Dutch',
    bio:
      'Vincent Willem van Gogh (Dutch: [ˈvɪnsɛnt ˈʋɪləm vɑŋ ˈɣɔx] (listen); 30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. However, he was not commercially successful, and his suicide at 37 followed years of mental illness and poverty.',
    wikipedia: 'http://en.wikipedia.org/wiki/Vincent_van_Gogh',
    paintings: 877
  },
  {
    id: 9,
    name: 'Gustav Klimt',
    years: '1862 - 1918',
    genre: 'Symbolism,Art Nouveau',
    nationality: 'Austrian',
    bio:
      "Gustav Klimt (July 14, 1862 – February 6, 1918) was an Austrian symbolist painter and one of the most prominent members of the Vienna Secession movement. Klimt is noted for his paintings, murals, sketches, and other objets d'art. Klimt's primary subject was the female body, and his works are marked by a frank eroticism. In addition to his figurative works, which include allegories and portraits, he painted landscapes. Among the artists of the Vienna Secession, Klimt was the most influenced by Japanese art and its methods.",
    wikipedia: 'http://en.wikipedia.org/wiki/Gustav_Klimt',
    paintings: 117
  },
  {
    id: 10,
    name: 'Hieronymus Bosch',
    years: '1450 - 1516',
    genre: 'Northern Renaissance',
    nationality: 'Dutch',
    bio:
      'Hieronymus Bosch ( (listen); Dutch: [ɦijeːˈroːnimʏz ˈbɔs] (listen); born Jheronimus van Aken [jeːˈroːnimʏs fɑn ˈaːkə(n)]; c. 1450 – 9 August 1516) was a Dutch/Netherlandish draughtsman and painter from Brabant. He is one of the most notable representatives of the Early Netherlandish painting school. His work contains fantastic illustrations of religious concepts and narratives. Within his lifetime his work was collected in the Netherlands, Austria, and Spain, and widely copied, especially his macabre and nightmarish depictions of hell.',
    wikipedia: 'http://en.wikipedia.org/wiki/Hieronymus_Bosch',
    paintings: 137
  },
  {
    id: 11,
    name: 'Kazimir Malevich',
    years: '1879 - 1935',
    genre: 'Suprematism',
    nationality: 'Russian',
    bio:
      'Kazimir Severinovich Malevich (February 23 [O.S. 11] 1879 – May 15, 1935) was a Russian avant-garde artist and art theorist, whose pioneering work and writing had a profound influence on the development of non-objective, or abstract art, in the 20th century. Born in Kiev to an ethnic Polish family, his concept of Suprematism sought to develop a form of expression that moved as far as possible from the world of natural forms (objectivity) and subject matter in order to access "the supremacy of pure feeling" and spirituality.Early on, Malevich worked in a variety of styles, quickly assimilating the movements of Impressionism, Symbolism and Fauvism, and after visiting Paris in 1912, Cubism. Gradually simplifying his style, he developed an approach with key works consisting of pure geometric forms and their relationships to one another, set against minimal grounds. His Black Square (1915), a black square on white, represented the most radically abstract painting known to have been created so far and drew "an uncrossable line (…) between old art and new art"; Suprematist Composition: White on White (1918), a barely differentiated off-white square superimposed on an off-white ground, would take his ideal of pure abstraction to its logical conclusion. In addition to his paintings, Malevich laid down his theories in writing, such as "From Cubism and Futurism to Suprematism" (1915) and The Non-Objective World: The Manifesto of Suprematism (1926).Malevich\'s trajectory in many ways mirrored the tumult of the decades surrounding the October Revolution (O.S.) in 1917. In its immediate aftermath, vanguard movements such as Suprematism and Vladimir Tatlin\'s Constructivism were encouraged by Trotskyite factions in the government. Malevich held several prominent teaching positions and received a solo show at the Sixteenth State Exhibition in Moscow in 1919. His recognition spread to the West with solo exhibitions in Warsaw and Berlin in 1927. Upon his return, modern art was falling out of favor with the new government of Joseph Stalin. Malevich soon lost his teaching position, artworks and manuscripts were confiscated, and he was banned from making art. In 1930, he was imprisoned for two months due to suspicions raised by his trip to Poland and Germany. Forced to abandon abstraction, he painted in a representational style in the years before his death from cancer in 1935, at the age of 56.',
    wikipedia: 'http://en.wikipedia.org/wiki/Kazimir_Malevich',
    paintings: 126
  },
  {
    id: 12,
    name: 'Mikhail Vrubel',
    years: '1856 - 1910',
    genre: 'Symbolism',
    nationality: 'Russian',
    bio:
      'Mikhail Aleksandrovich Vrubel (Russian: Михаи́л Алекса́ндрович Вру́бель; March 17, 1856 – April 14, 1910, all n.s.) is usually regarded amongst the Russian painters of the Symbolist movement and of Art Nouveau. In reality, he deliberately stood aloof from contemporary art trends, so that the origin of his unusual manner should be sought in Late Byzantine and Early Renaissance painting.',
    wikipedia: 'http://en.wikipedia.org/wiki/Mikhail_Vrubel',
    paintings: 171
  },
  {
    id: 13,
    name: 'Pablo Picasso',
    years: '1881 - 1973',
    genre: 'Cubism',
    nationality: 'Spanish',
    bio:
      "Pablo Ruiz Picasso (; Spanish: [ˈpaβlo piˈkaso]; 25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a dramatic portrayal of the bombing of Guernica by the German and Italian airforces during the Spanish Civil War.",
    wikipedia: 'http://en.wikipedia.org/wiki/Pablo_Picasso',
    paintings: 439
  },
  {
    id: 14,
    name: 'Peter Paul Rubens',
    years: '1577 - 1640',
    genre: 'Baroque',
    nationality: 'Flemish',
    bio:
      "Sir Peter Paul Rubens (; Dutch: [ˈrybə(n)s]; 28 June 1577 – 30 May 1640) was a Flemish artist. He is considered the most influential artist of Flemish Baroque tradition. Rubens's highly charged compositions reference erudite aspects of classical and Christian history. His unique and immensely popular Baroque style emphasized movement, color, and sensuality, which followed the immediate, dramatic artistic style promoted in the Counter-Reformation. Rubens specialized in making altarpieces, portraits, landscapes, and history paintings of mythological and allegorical subjects.",
    wikipedia: 'http://en.wikipedia.org/wiki/Peter_Paul_Rubens',
    paintings: 141
  },
  {
    id: 15,
    name: 'Pierre-Auguste Renoir',
    years: '1841 - 1919',
    genre: 'Impressionism',
    nationality: 'French',
    bio:
      'Pierre-Auguste Renoir, commonly known as Auguste Renoir (; French: [pjɛʁ oɡyst ʁənwaʁ]; 25 February 1841 – 3 December 1919), was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty and especially feminine sensuality, it has been said that "Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.',
    wikipedia: 'http://en.wikipedia.org/wiki/Pierre-Auguste_Renoir',
    paintings: 336
  },
  {
    id: 16,
    name: 'Francisco Goya',
    years: '1746 - 1828',
    genre: 'Romanticism',
    nationality: 'Spanish',
    bio:
      'Francisco José de Goya y Lucientes (; Spanish: [fɾanˈθisko xoˈse ðe ˈɣoʝa i luˈθjentes]; 30 March 1746 – 16 April 1828) was a Spanish romantic painter and printmaker. He is considered the most important Spanish artist of the late 18th and early 19th centuries and throughout his long career was a commentator and chronicler of his era. Immensely successful in his lifetime, Goya is often referred to as both the last of the Old Masters and the first of the moderns.  He was also one of the great contemporary portraitists.He was born to a modest family in 1746 in the village of Fuendetodos in Aragon. He studied painting from age 14 under José Luzán y Martinez and moved to Madrid to study with Anton Raphael Mengs. He married Josefa Bayeu in 1773; their life was characterised by an almost constant series of pregnancies and miscarriages, and only one child, a son, survived into adulthood. Goya became a court painter to the Spanish Crown in 1786 and this early portion of his career is marked by portraits of the Spanish aristocracy and royalty, and Rococo style tapestry cartoons designed for the royal palace.',
    wikipedia: 'http://en.wikipedia.org/wiki/Francisco_Goya',
    paintings: 291
  },
  {
    id: 17,
    name: 'Frida Kahlo',
    years: '1907 - 1954',
    genre: 'Primitivism,Surrealism',
    nationality: 'Mexican',
    bio:
      "Frida Kahlo de Rivera (Spanish pronunciation: [ˈfɾiða ˈkalo]; born Magdalena Carmen Frida Kahlo y Calderón; 6 July 1907 – 13 July 1954) was a Mexican artist who painted many portraits, self-portraits and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class and race in Mexican society. Her paintings often had strong autobiographical elements and mixed realism with fantasy. In addition to belonging to the post-revolutionary Mexicayotl movement, which sought to define a Mexican identity, Kahlo has been described as a surrealist or magical realist.Born to a German father and a mestiza mother, Kahlo spent most of her childhood and adult life at her family home in Coyoacán, La Casa Azul, now known and publicly accessible as the Frida Kahlo Museum. She was disabled by polio as a child. Until a traffic accident at age eighteen caused lifelong pain and medical problems, she had been a promising student headed for medical school. During her recovery, she returned to her childhood hobby of art with the idea of becoming an artist.",
    wikipedia: 'http://en.wikipedia.org/wiki/Frida_Kahlo',
    paintings: 120
  },
  {
    id: 18,
    name: 'El Greco',
    years: '1541 - 1614',
    genre: 'Mannerism',
    nationality: 'Spanish,Greek',
    bio:
      'Doménikos Theotokópoulos (Greek: Δομήνικος Θεοτοκόπουλος [ðoˈminikos θeotoˈkopulos]; October 1541 –  7 April 1614), most widely known as El Greco ("The Greek"), was a painter, sculptor and architect of the Spanish Renaissance. "El Greco" was a nickname, a reference to his Greek origin, and the artist normally signed his paintings with his full birth name in Greek letters, Δομήνικος Θεοτοκόπουλος, Doménikos Theotokópoulos, often adding the word Κρής Krēs, Cretan.',
    wikipedia: 'http://en.wikipedia.org/wiki/El_Greco',
    paintings: 87
  },
  {
    id: 19,
    name: 'Albrecht Dürer',
    years: '1471 - 1528',
    genre: 'Northern Renaissance',
    nationality: 'German',
    bio:
      'Albrecht Dürer (; German: [ˈʔalbʁɛçt ˈdyːʁɐ]; 21 May 1471 – 6 April 1528) sometimes spelt in English as Durer or Duerer, without umlaut, was a painter, printmaker, and theorist of the German Renaissance. Born in Nuremberg, Dürer established his reputation and influence across Europe when he was still in his twenties due to his high-quality woodcut prints.',
    wikipedia: 'http://en.wikipedia.org/wiki/Albrecht_Dürer',
    paintings: 328
  },
  {
    id: 20,
    name: 'Alfred Sisley',
    years: '1839 - 1899',
    genre: 'Impressionism',
    nationality: 'French,British',
    bio:
      'Alfred Sisley (; French: [sislɛ]; 30 October 1839 – 29 January 1899) was an Impressionist landscape painter who was born and spent most of his life in France, but retained British citizenship. He was the most consistent of the Impressionists in his dedication to painting landscape en plein air (i.e., outdoors). He deviated into figure painting only rarely and, unlike Renoir and Pissarro, found that Impressionism fulfilled his artistic needs.',
    wikipedia: 'http://en.wikipedia.org/wiki/Alfred_Sisley',
    paintings: 259
  },
  {
    id: 21,
    name: 'Pieter Bruegel',
    years: '1525 - 1569',
    genre: 'Northern Renaissance',
    nationality: 'Flemish',
    bio:
      'Pieter Bruegel (also Brueghel) the Elder (Dutch: [ˈpitər ˈbrøːɣəɫ]; c. 1525-1530 – 9 September 1569) was the most significant artist of Dutch and Flemish Renaissance painting, a painter and printmaker from Brabant, known for his landscapes and peasant scenes (so called genre painting); he was a pioneer in making both types of subject the focus in large paintings.',
    wikipedia: 'http://en.wikipedia.org/wiki/Pieter_Bruegel_the_Elder',
    paintings: 134
  },
  {
    id: 22,
    name: 'Marc Chagall',
    years: '1887 - 1985',
    genre: 'Primitivism',
    nationality: 'French,Jewish,Belarusian',
    bio:
      'Marc Zakharovich Chagall ( shə-GAHL; born Moishe Zakharovich Shagal; 6 July [O.S. 24 June] 1887 – 28 March 1985) was a Russian-French artist of Belarusian Jewish origin. An early modernist, he was associated with several major artistic styles  and created works in virtually every artistic format, including painting, book illustrations, stained glass, stage sets, ceramic, tapestries and fine art prints.',
    wikipedia: 'http://en.wikipedia.org/wiki/Marc_Chagall',
    paintings: 239
  },
  {
    id: 23,
    name: 'Giotto di Bondone',
    years: '1266 - 1337',
    genre: 'Proto Renaissance',
    nationality: 'Italian',
    bio:
      'Giotto di Bondone (Italian pronunciation: [ˈdʒɔtto di bonˈdoːne]; c. 1267 – January 8, 1337), known mononymously as Giotto (English: ) and Latinised as Giottus, was an Italian painter and architect from Florence during the Late Middle Ages. He worked during the Gothic/Proto-Renaissance period.Giotto\'s contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was "the most sovereign master of painting in his time, who drew all his figures and their postures according to nature" and of his publicly recognized "talent and excellence".In his Lives of the Most Excellent Painters, Sculptors, and Architects, Giorgio Vasari described Giotto as making a decisive break with the prevalent Byzantine style and as initiating "the great art of painting as we know it today, introducing the technique of drawing accurately from life, which had been neglected for more than two hundred years".Giotto\'s masterwork is the decoration of the Scrovegni Chapel, in Padua, also known as the Arena Chapel, which was completed around 1305. The fresco cycle depicts the Life of the Virgin and the Life of Christ. It is regarded as one of the supreme masterpieces of the Early Renaissance.That Giotto painted the Arena Chapel and that he was chosen by the Commune of Florence in 1334 to design the new campanile (bell tower) of the Florence Cathedral are among the few certainties about his life. Almost every other aspect of it is subject to controversy: his birth date, his birthplace, his appearance, his apprenticeship, the order in which he created his works, whether or not he painted the famous frescoes in the Upper Basilica of Saint Francis in Assisi and his burial place.',
    wikipedia: 'http://en.wikipedia.org/wiki/Giotto_di_Bondone',
    paintings: 119
  },
  {
    id: 24,
    name: 'Sandro Botticelli',
    years: '1445 - 1510',
    genre: 'Early Renaissance',
    nationality: 'Italian',
    bio:
      'Alessandro (c. 1445 – May 17, 1510), known as Sandro Botticelli (Italian: [ˈsandro bottiˈtʃɛlli]), was an Italian painter of the Early Renaissance. He belonged to the Florentine School under the patronage of Lorenzo de\' Medici, a movement that Giorgio Vasari would characterize less than a hundred years later in his Vita of Botticelli as a "golden age". Botticelli\'s posthumous reputation suffered until the late 19th century; since then, his work has been seen to represent the linear grace of Early Renaissance painting.',
    wikipedia: 'http://en.wikipedia.org/wiki/Sandro_Botticelli',
    paintings: 164
  },
  {
    id: 25,
    name: 'Caravaggio',
    years: '1571 - 1610',
    genre: 'Baroque',
    nationality: 'Italian',
    bio:
      'Michelangelo Merisi (Michele Angelo Merigi or Amerighi) da Caravaggio (, US: , Italian pronunciation: [mikeˈlandʒelo meˈriːzi da (k)karaˈvaddʒo]; 28 September 1571 – 18 July 1610) was an Italian painter active in Rome, Naples, Malta, and Sicily from the early 1590s to 1610. His paintings combine a realistic observation of the human state, both physical and emotional, with a dramatic use of lighting, which had a formative influence on Baroque painting.Caravaggio employed close physical observation with a dramatic use of chiaroscuro that came to be known as tenebrism. He made the technique a dominant stylistic element, darkening shadows and transfixing subjects in bright shafts of light. Caravaggio vividly expressed crucial moments and scenes, often featuring violent struggles, torture and death. He worked rapidly, with live models, preferring to forgo drawings and work directly onto the canvas. His influence on the new Baroque style that emerged from Mannerism was profound. It can be seen directly or indirectly in the work of Peter Paul Rubens, Jusepe de Ribera, Gian Lorenzo Bernini, and Rembrandt, and artists in the following generation heavily under his influence were called the "Caravaggisti" or "Caravagesques", as well as tenebrists or tenebrosi ("shadowists").',
    wikipedia: 'http://en.wikipedia.org/wiki/Caravaggio',
    paintings: 55
  },
  {
    id: 26,
    name: 'Leonardo da Vinci',
    years: '1452 - 1519',
    genre: 'High Renaissance',
    nationality: 'Italian',
    bio:
      'Leonardo di ser Piero da Vinci (Italian: [leoˈnardo di ˌsɛr ˈpjɛːro da (v)ˈvintʃi] (listen); 15 April 1452 – 2 May 1519), more commonly Leonardo da Vinci or simply Leonardo, was an Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography. He has been variously called the father of palaeontology, ichnology, and architecture, and he is widely considered one of the greatest painters of all time. Sometimes credited with the inventions of the parachute, helicopter, and tank, he epitomised the Renaissance humanist ideal.',
    wikipedia: 'http://en.wikipedia.org/wiki/Leonardo_da_Vinci',
    paintings: 143
  },
  {
    id: 27,
    name: 'Diego Velazquez',
    years: '1599 - 1660',
    genre: 'Baroque',
    nationality: 'Spanish',
    bio:
      'Diego Rodríguez de Silva y Velázquez (Spanish: [ˈdjeɣo βeˈlaθkeθ]; baptized June 6, 1599 – August 6, 1660) was a Spanish painter, the leading artist in the court of King Philip IV, and one of the most important painters of the Spanish Golden Age. He was an individualistic artist of the contemporary Baroque period. In addition to numerous renditions of scenes of historical and cultural significance, he painted scores of portraits of the Spanish royal family, other notable European figures, and commoners, culminating in the production of his masterpiece Las Meninas (1656).',
    wikipedia: 'http://en.wikipedia.org/wiki/Diego_Velázquez',
    paintings: 128
  },
  {
    id: 28,
    name: 'Henri Matisse',
    years: '1869 - 1954',
    genre: 'Impressionism,Post-Impressionism',
    nationality: 'French',
    bio:
      'Henri Émile Benoît Matisse (French: [ɑ̃ʁi emil bənwɑ matis]; 31 December 1869 – 3 November 1954) was a French artist, known for both his use of colour and his fluid and original draughtsmanship. He was a draughtsman, printmaker, and sculptor, but is known primarily as a painter.',
    wikipedia: 'http://en.wikipedia.org/wiki/Henri_Matisse',
    paintings: 186
  },
  {
    id: 29,
    name: 'Jan van Eyck',
    years: '1395 - 1441',
    genre: 'Northern Renaissance',
    nationality: 'Flemish',
    bio:
      "Jan van Eyck (Dutch: [ˈjɑn vɑn ˈɛik]) (before c. 1390 – 9 July 1441) was an Early Netherlandish painter active in Bruges. He is  one of the founders of Early Netherlandish painting and one of the most significant representatives of Early Northern Renaissance art. The few surviving records of his early life indicate that he was born around 1380–1390, most likely in Maaseik. He took employment in the Hague around 1422, when he was already a master painter with workshop assistants, and employed as painter and valet de chambre with John III the Pitiless, ruler of Holland and Hainaut. He was then employed in Lille as court painter to Philip the Good, Duke of Burgundy after John's death in 1425, until he moved to Bruges in 1429 where he lived until his death. He was highly regarded by Philip and undertook a number of diplomatic visits abroad, including to Lisbon in 1428 to explore the possibility of a marriage contract between the duke and Isabella of Portugal.About 20 surviving paintings are confidently attributed to him, as well as the Ghent Altarpiece and the illuminated miniatures of the Turin-Milan Hours, all dated between 1432 and 1439. Ten are dated and signed with a variation of his motto ALS IK KAN (As I (Eyck) can), a pun on his name, which he typically painted in Greek characters.",
    wikipedia: 'http://en.wikipedia.org/wiki/Jan_van_Eyck',
    paintings: 81
  },
  {
    id: 30,
    name: 'Edgar Degas',
    years: '1834 - 1917',
    genre: 'Impressionism',
    nationality: 'French',
    bio:
      'Edgar Degas (US:  or UK: ; born Hilaire-Germain-Edgar De Gas, French: [ilɛːʁ ʒɛʁmɛ̃ ɛdɡaʁ də ɡɑ]; 19 July 1834 – 27 September 1917) was a French artist famous for his paintings, sculptures, prints, and drawings. He is especially identified with the subject of dance; more than half of his works depict dancers. Regarded as one of the founders of Impressionism, he rejected the term, preferring to be called a realist. He was a superb draftsman, and particularly masterly in depicting movement, as can be seen in his rendition of dancers, racecourse subjects and female nudes. His portraits are notable for their psychological complexity and for their portrayal of human isolation.At the beginning of his career, Degas wanted to be a history painter, a calling for which he was well prepared by his rigorous academic training and close study of classical art. In his early thirties, he changed course, and by bringing the traditional methods of a history painter to bear on contemporary subject matter, he became a classical painter of modern life.',
    wikipedia: 'http://en.wikipedia.org/wiki/Edgar_Degas',
    paintings: 702
  },
  {
    id: 31,
    name: 'Rembrandt',
    years: '1606 - 1669',
    genre: 'Baroque',
    nationality: 'Dutch',
    bio:
      "Rembrandt Harmenszoon van Rijn (; Dutch: [ˈrɛmbrɑnt ˈɦɑrmə(n)soːn vɑn ˈrɛin] (listen); July 15, 1606 – October 4, 1669) was a Dutch draughtsman, painter and printmaker. An innovative and prolific master in three media, he is generally considered one of the greatest visual artists in the history of art and the most important in Dutch art history. Unlike most Dutch masters of the 17th century, Rembrandt's works depict a wide range of style and subject matter, from portraits and self-portraits to landscapes, genre scenes, allegorical and historical scenes, biblical and mythological themes as well as animal studies. His contributions to art came in a period of great wealth and cultural achievement that historians call the Dutch Golden Age, when Dutch art (especially Dutch painting), although in many ways antithetical to the Baroque style that dominated Europe, was extremely prolific and innovative, and gave rise to important new genres. Like many artists of the Dutch Golden Age, such as Jan Vermeer of Delft, Rembrandt was also an avid art collector and dealer.",
    wikipedia: 'http://en.wikipedia.org/wiki/Rembrandt',
    paintings: 262
  },
  {
    id: 32,
    name: 'Titian',
    years: '1488 - 1576',
    genre: 'High Renaissance,Mannerism',
    nationality: 'Italian',
    bio:
      'Tiziano Vecelli or Tiziano Vecellio (pronounced [titˈtsjaːno veˈtʃɛlljo]; c. 1488/1490 – 27 August 1576), known in English as Titian , was an Italian painter, the most important member of the 16th-century Venetian school. He was born in Pieve di Cadore, near Belluno, then in the Republic of Venice). During his lifetime he was often called da Cadore, taken from the place of his birth.',
    wikipedia: 'http://en.wikipedia.org/wiki/Titian',
    paintings: 255
  },
  {
    id: 33,
    name: 'Henri de Toulouse-Lautrec',
    years: '1864 – 1901',
    genre: 'Post-Impressionism',
    nationality: 'French',
    bio:
      'Henri Marie Raymond de Toulouse-Lautrec-Monfa (24 November 1864 – 9 September 1901), also known as Henri de Toulouse-Lautrec (French: [ɑ̃ʁi də tuluz lotʁɛk]), was a French painter, printmaker, draughtsman, caricaturist, and illustrator whose immersion in the colourful and theatrical life of Paris in the late 19th century allowed him to produce a collection of enticing, elegant, and provocative images of the modern, sometimes decadent, affairs of those times.',
    wikipedia: 'https://en.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec',
    paintings: 81
  },
  {
    id: 34,
    name: 'Gustave Courbet',
    years: '1819 - 1877',
    genre: 'Realism',
    nationality: 'French',
    bio:
      'Jean Désiré Gustave Courbet (French: [ɡystav kuʁbɛ]; 10 June 1819 – 31 December 1877) was a French painter who led the Realism movement in 19th-century French painting. Committed to painting only what he could see, he rejected academic convention and the Romanticism of the previous generation of visual artists. His independence set an example that was important to later artists, such as the Impressionists and the Cubists. Courbet occupies an important place in 19th-century French painting as an innovator and as an artist willing to make bold social statements through his work.',
    wikipedia: 'https://en.wikipedia.org/wiki/Gustave_Courbet',
    paintings: 59
  },
  {
    id: 35,
    name: 'Camille Pissarro',
    years: '1830 - 1903',
    genre: 'Impressionism,Post-Impressionism',
    nationality: 'French',
    bio:
      'Camille Pissarro (French: [kamij pisaʁo]; 10 July 1830 – 13 November 1903) was a Danish-French Impressionist and Neo-Impressionist painter born on the island of St Thomas (now in the US Virgin Islands, but then in the Danish West Indies). His importance resides in his contributions to both Impressionism and Post-Impressionism. Pissarro studied from great forerunners, including Gustave Courbet and Jean-Baptiste-Camille Corot. He later studied and worked alongside Georges Seurat and Paul Signac when he took on the Neo-Impressionist style at the age of 54.',
    wikipedia: 'https://en.wikipedia.org/wiki/Camille_Pissarro',
    paintings: 91
  },
  {
    id: 36,
    name: 'William Turner',
    years: '1775 - 1851',
    genre: 'Romanticism',
    nationality: 'British',
    bio:
      'Joseph Mallord William Turner  (23 April 1775 – 19 December 1851), known as J. M. W. Turner and contemporarily as William Turner, was an English Romantic painter, printmaker and watercolourist. He is known for his expressive colourisations, imaginative landscapes and turbulent, often violent marine paintings.',
    wikipedia: 'https://en.wikipedia.org/wiki/J._M._W._Turner',
    paintings: 66
  },
  {
    id: 37,
    name: 'Edvard Munch',
    years: '1863 - 1944',
    genre: 'Symbolism,Expressionism',
    nationality: 'Norwegian',
    bio:
      'Edvard Munch (; Norwegian: [ˈɛdvɑʈ ˈmʊŋk] (listen); 12 December 1863 – 23 January 1944) was a Norwegian painter, whose best known work, The Scream, has become one of the most iconic images of world art.',
    wikipedia: 'https://en.wikipedia.org/wiki/Edvard_Munch',
    paintings: 67
  },
  {
    id: 38,
    name: 'Paul Cezanne',
    years: '1839 – 1906',
    genre: 'Post-Impressionism',
    nationality: 'French',
    bio:
      "Paul Cézanne (US:  or UK: ; French: [pɔl sezan]; 19 January 1839 – 22 October 1906) was a French artist and Post-Impressionist painter whose work laid the foundations of the transition from the 19th-century conception of artistic endeavor to a new and radically different world of art in the 20th century. Cézanne's often repetitive, exploratory brushstrokes are highly characteristic and clearly recognizable. He used planes of colour and small brushstrokes that build up to form complex fields. The paintings convey Cézanne's intense study of his subjects.",
    wikipedia: 'https://en.wikipedia.org/wiki/Paul_Cézanne',
    paintings: 47
  },
  {
    id: 39,
    name: 'Eugene Delacroix',
    years: '1798 – 1863',
    genre: 'Romanticism',
    nationality: 'French',
    bio:
      "Ferdinand Victor Eugène Delacroix (; French: [ø.ʒɛn də.la.kʁwa]; 26 April 1798 – 13 August 1863) was a French Romantic artist regarded from the outset of his career as the leader of the French Romantic school.As a painter and muralist, Delacroix's use of expressive brushstrokes and his study of the optical effects of colour profoundly shaped the work of the Impressionists, while his passion for the exotic inspired the artists of the Symbolist movement. A fine lithographer, Delacroix illustrated various works of William Shakespeare, the Scottish author Walter Scott and the German author Johann Wolfgang von Goethe.",
    wikipedia: 'https://en.wikipedia.org/wiki/Eugène_Delacroix',
    paintings: 31
  },
  {
    id: 40,
    name: 'Henri Rousseau',
    years: '1844 – 1910',
    genre: 'Primitivism',
    nationality: 'French',
    bio:
      "Henri Julien Félix Rousseau (French: [ɑ̃ʁi ʒyljɛ̃ feliks ʁuso]; May 21, 1844 – September 2, 1910) was a French post-impressionist painter in the Naïve or Primitive manner.  He was also known as Le Douanier (the customs officer), a humorous description of his occupation as a toll and tax collector. He started painting seriously in his early forties; by age 49, he retired from his job to work on his art full-time.Ridiculed during his lifetime by critics, he came to be recognized as a self-taught genius whose works are of high artistic quality. Rousseau's work exerted an extensive influence on several generations of avant-garde artists.",
    wikipedia: 'https://en.wikipedia.org/wiki/Henri_Rousseau',
    paintings: 70
  },
  {
    id: 41,
    name: 'Georges Seurat',
    years: '1859 – 1891',
    genre: 'Post-Impressionism',
    nationality: 'French',
    bio:
      "Georges-Pierre Seurat (French: [ʒɔʁʒ pjɛʁ sœʁa]; 2 December 1859 – 29 March 1891) was a French post-Impressionist artist. He is best known for devising the painting techniques known as chromoluminarism and pointillism. While less famous than his paintings, his conté crayon drawings have also garnered a great deal of critical appreciation.  Seurat's artistic personality was compounded of qualities which are usually supposed to be opposed and incompatible: on the one hand, his extreme and delicate sensibility; on the other, a passion for logical abstraction and an almost mathematical precision of mind. His large-scale work, A Sunday Afternoon on the Island of La Grande Jatte (1884–1886), altered the direction of modern art by initiating Neo-impressionism, and is one of the icons of late 19th-century painting.",
    wikipedia: 'https://en.wikipedia.org/wiki/Georges_Seurat',
    paintings: 43
  },
  {
    id: 42,
    name: 'Paul Klee',
    years: '1879 – 1940',
    genre: 'Expressionism,Abstractionism,Surrealism',
    nationality: 'German,Swiss',
    bio:
      "Paul Klee (German: [paʊ̯l ˈkleː]; 18 December 1879 – 29 June 1940) was a Swiss German artist. His highly individual style was influenced by movements in art that included  Expressionism, Cubism, and Surrealism. Klee was a natural draftsman who experimented with and eventually deeply explored color theory, writing about it extensively; his lectures Writings on Form and Design Theory (Schriften zur Form und Gestaltungslehre), published in English as the Paul Klee Notebooks, are held to be as important for modern art as Leonardo da Vinci's A Treatise on Painting for the Renaissance. He and his colleague, Russian painter Wassily Kandinsky, both taught at the Bauhaus school of art, design and architecture. His works reflect his dry humor and his sometimes childlike perspective, his personal moods and beliefs, and his musicality.",
    wikipedia: 'https://en.wikipedia.org/wiki/Paul_Klee',
    paintings: 188
  },
  {
    id: 43,
    name: 'Piet Mondrian',
    years: '1872 – 1944',
    genre: 'Neoplasticism',
    nationality: 'Dutch',
    bio:
      "Pieter Cornelis Mondriaan, after 1906 Piet Mondrian (; Dutch: [ˈpit ˈmɔndrijaːn], later [ˈmɔndrijɑn]; 7 March 1872 – 1 February 1944), was a Dutch painter and theoretician who is regarded as one of the greatest artists of the 20th century. He is known for being one of the pioneers of 20th century abstract art, as he changed his artistic direction from figurative painting to an increasingly abstract style, until he reached a point where his artistic vocabulary was reduced to simple geometric elements.Mondrian's art was highly utopian and was concerned with a search for universal values and aesthetics. He proclaimed in 1914: Art is higher than reality and has no direct relation to reality. To approach the spiritual in art, one will make as little use as possible of reality, because reality is opposed to the spiritual. We find ourselves in the presence of an abstract art. Art should be above reality, otherwise it would have no value for man. His art, however, always remained rooted in nature.",
    wikipedia: 'https://en.wikipedia.org/wiki/Piet_Mondrian',
    paintings: 84
  },
  {
    id: 44,
    name: 'Joan Miro',
    years: '1893 – 1983',
    genre: 'Surrealism',
    nationality: 'Spanish',
    bio:
      'Joan Miró i Ferrà (; Catalan: [ʒuˈam miˈɾo j fəˈra]; 20 April 1893 – 25 December 1983) was a Spanish painter, sculptor, and ceramicist born in Barcelona. A museum dedicated to his work, the Fundació Joan Miró, was established in his native city of Barcelona in 1975, and another, the Fundació Pilar i Joan Miró, was established in his adoptive city of Palma de Mallorca in 1981.',
    wikipedia: 'https://en.wikipedia.org/wiki/Joan_Miró',
    paintings: 102
  },
  {
    id: 45,
    name: 'Andy Warhol',
    years: '1928 – 1987',
    genre: 'Pop Art',
    nationality: 'American',
    bio:
      "Andy Warhol (; born Andrew Warhola; August 6, 1928 – February 22, 1987) was an American artist, director and producer who was a leading figure in the visual art movement known as pop art. His works explore the relationship between artistic expression, celebrity culture, and advertising that flourished by the 1960s, and span a variety of media, including painting, silkscreening, photography, film, and sculpture. Some of his best known works include the silkscreen paintings Campbell's Soup Cans (1962) and Marilyn Diptych (1962), the experimental film Chelsea Girls (1966), and the multimedia events known as the Exploding Plastic Inevitable (1966–67).",
    wikipedia: 'https://en.wikipedia.org/wiki/Andy_Warhol',
    paintings: 181
  },
  {
    id: 46,
    name: 'Paul Gauguin',
    years: '1848 – 1903',
    genre: 'Symbolism,Post-Impressionism',
    nationality: 'French',
    bio:
      'Eugène Henri Paul Gauguin (UK: , US: ; French: [øʒɛn ɑ̃ʁi pɔl ɡoɡɛ̃]; 7 June 1848 – 8 May 1903) was a French post-Impressionist artist. Unappreciated until after his death, Gauguin is now recognized for his experimental use of color and Synthetist style that were distinctly different from Impressionism. Toward the end of his life, he spent ten years in French Polynesia, and most of his paintings from this time depict people or landscapes from that region.',
    wikipedia: 'http://en.wikipedia.org/wiki/Paul_Gauguin',
    paintings: 311
  },
  {
    id: 47,
    name: 'Raphael',
    years: '1483 – 1520',
    genre: 'High Renaissance',
    nationality: 'Italian',
    bio:
      'Raffaello Sanzio da Urbino (Italian: [raffaˈɛllo ˈsantsjo da urˈbiːno]; March 28 or April 6, 1483 – April 6, 1520), known as Raphael (, US: ), was an Italian painter and architect of the High Renaissance. His work is admired for its clarity of form, ease of composition, and visual achievement of the Neoplatonic ideal of human grandeur. Together with Michelangelo and Leonardo da Vinci, he forms the traditional trinity of great masters of that period.Raphael was enormously productive, running an unusually large workshop and, despite his death at 37, leaving a large body of work. Many of his works are found in the Vatican Palace, where the frescoed Raphael Rooms were the central, and the largest, work of his career. The best known work is The School of Athens in the Vatican Stanza della Segnatura. After his early years in Rome much of his work was executed by his workshop from his drawings, with considerable loss of quality. He was extremely influential in his lifetime, though outside Rome his work was mostly known from his collaborative printmaking.',
    wikipedia: 'https://en.wikipedia.org/wiki/Raphael',
    paintings: 109
  },
  {
    id: 48,
    name: 'Michelangelo',
    years: '1475 – 1564',
    genre: 'High Renaissance',
    nationality: 'Italian',
    bio:
      "Michelangelo di Lodovico Buonarroti Simoni or more commonly known by his first name Michelangelo (; Italian: [mikeˈlandʒelo di lodoˈviːko ˌbwɔnarˈrɔːti siˈmoːni]; 6 March 1475 – 18 February 1564) was an Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence, who exerted an unparalleled influence on the development of Western art. Considered by many the greatest artist of his lifetime, and by some the greatest artist of all time, his artistic versatility was of such a high order that he is often considered a contender for the title of the archetypal Renaissance man, along with his rival, the fellow Florentine and client of the Medici, Leonardo da Vinci.A number of Michelangelo's works of painting, sculpture and architecture rank among the most famous in existence. His output in these fields was prodigious; given the sheer volume of surviving correspondence, sketches and reminiscences, he is the best-documented artist of the 16th century. He sculpted two of his best-known works, the Pietà and David, before the age of thirty. Despite holding a low opinion of painting, he also created two of the most influential frescoes in the history of Western art: the scenes from Genesis on the ceiling of the Sistine Chapel in Rome, and The Last Judgment on its altar wall. His design of the Laurentian Library pioneered Mannerist architecture. At the age of 74, he succeeded Antonio da Sangallo the Younger as the architect of St. Peter's Basilica. He transformed the plan so that the western end was finished to his design, as was the dome, with some modification, after his death.",
    wikipedia: 'https://en.wikipedia.org/wiki/Michelangelo',
    paintings: 49
  },
  {
    id: 49,
    name: 'Jackson Pollock',
    years: '1912 – 1956',
    genre: 'Abstract Expressionism',
    nationality: 'American',
    bio:
      'Paul Jackson Pollock (; January 28, 1912 – August 11, 1956) was an American painter and a major figure in the abstract expressionist movement.',
    wikipedia: 'http://en.wikipedia.org/wiki/Jackson_Pollock',
    paintings: 24
  }
];
