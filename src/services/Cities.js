let cities = [
    "Abejorral, Antioquia, Colombia","Ábrego, Norte de Santander, Colombia","Abriaquí, Antioquia, Colombia",
    "Acacías, Meta, Colombia","Acandí, Chocó, Colombia","Acevedo, Huila, Colombia","Achí, Bolívar, Colombia","Agrado, Huila, Colombia",
    "Agua de Dios, Cundinamarca, Colombia","Aguachica, Cesar, Colombia","Aguadas, Caldas, Colombia","Aguazul, Casanare, Colombia",
    "Agustín Codazzi, Cesar, Colombia","Aipe, Huila, Colombia","Albán, Cundinamarca, Colombia","Albania, La Guajira, Colombia",
    "Albania, Caquetá, Colombia","Alcalá, Valle del Cauca, Colombia","Aldana, Nariño, Colombia","Algarrobo, Magdalena, Colombia",
    "Algeciras, Huila, Colombia","Almaguer, Cauca, Colombia","Altamira, Huila, Colombia","Altos del Rosario, Bolívar, Colombia",
    "Alvarado, Tolima, Colombia","Amagá, Antioquia, Colombia","Amalfi, Antioquia, Colombia","Ambalema, Tolima, Colombia",
    "Anapoima, Cundinamarca, Colombia","Ancuya, Nariño, Colombia","Andalucía, Valle del Cauca, Colombia","Angelópolis, Antioquia, Colombia",
    "Angostura, Antioquia, Colombia","Anolaima, Cundinamarca, Colombia","Anserma, Risaralda, Colombia","Ansermanuevo, Valle del Cauca, Colombia",
    "Antioquia, Antioquia, Colombia","Anzoátegui, Tolima, Colombia","Apartadó, Antioquia, Colombia","Apía, Risaralda, Colombia",
    "Apulo, Cundinamarca, Colombia","Aquitania, Boyacá, Colombia","Aracataca, Magdalena, Colombia","Aranzazu, Caldas, Colombia",
    "Aratoca, Santander, Colombia","Arauca, Arauca, Colombia","Arauquita, Arauca, Colombia","Arbeláez, Cundinamarca, Colombia",
    "Arboleda, Nariño, Colombia","Arboledas, Norte de Santander, Colombia","Arboletes, Antioquia, Colombia","Arcabuco, Boyacá, Colombia",
    "Arenal, Bolívar, Colombia","Argelia, Antioquia, Colombia","Argelia, Cauca, Colombia","Argelia, Valle del Cauca, Colombia",
    "Ariguaní, Cesar, Colombia","Arjona, Bolívar, Colombia","Armenia, Quindío, Colombia","Armenia, Antioquia, Colombia",
    "Arroyohondo, Bolívar, Colombia","Astrea, Cesar, Colombia","Ataco, Tolima, Colombia","Ayapel, Córdoba, Colombia",
    "Bagadó, Chocó, Colombia","Balboa, Cauca, Colombia","Balboa, Risaralda, Colombia","Baranoa, Atlántico, Colombia","Baraya, Huila,Colombia",
    "Barbacoas, Nariño, Colombia","Barbosa, Antioquia, Colombia","Barbosa, Santander, Colombia","Barichara, Santander, Colombia",
    "Barranca de Upía, Meta, Colombia","Barrancabermeja, Santander, Colombia","Barrancas, La Guajira, Colombia",
    "Barranco de Loba, Bolívar, Colombia","Barranquilla, Atlántico, Colombia","Becerril, Cesar, Colombia","Belalcázar, Caldas, Colombia",
    "Belalcazar, Cauca, Colombia","Belén, Boyacá, Colombia","Belén, Nariño, Colombia","Belén de Umbría, Risaralda, Colombia",
    "Belén de los Andaquíes, Caquetá, Colombia","Bellavista, Chocó, Colombia","Bello, Antioquia, Colombia","Belmira, Antioquia, Colombia",
    "Betania, Antioquia, Colombia","Betulia, Antioquia, Colombia","Betulia, Santander, Colombia","Boavita, Boyacá, Colombia",
    "Bochalema, Norte de Santander, Colombia","Bogotá, Bogota D.C., Colombia","Bojacá, Cundinamarca, Colombia","Bolívar, Valle del Cauca, Colombia",
    "Bolívar, Santander, Colombia","Briceño, Antioquia, Colombia","Bucaramanga, Santander, Colombia","Buenaventura, Valle del Cauca, Colombia",
    "Buenaventura, Valle del Cauca, Colombia","Buenavista, Quindío, Colombia","Buenavista, Córdoba, Colombia","Buenavista, Magdalena, Colombia",
    "Buenos Aires, Cauca, Colombia","Buesaco, Nariño, Colombia","Buga, Valle del Cauca, Colombia","Bugalagrande, Valle del Cauca, Colombia",
    "Buriticá, Antioquia, Colombia","Cabrera, Cundinamarca, Colombia","Cabuyaro, Meta, Colombia","Cáceres, Antioquia, Colombia",
    "Cachipay, Cundinamarca, Colombia","Cáchira, Norte de Santander, Colombia","Cácota, Norte de Santander, Colombia",
    "Caicedo, Antioquia, Colombia","Caicedonia, Valle del Cauca, Colombia","Caimito, Sucre, Colombia","Cajamarca, Tolima, Colombia",
    "Cajibío, Cauca, Colombia","Cajicá, Cundinamarca, Colombia","Calamar, Guaviare, Colombia","Calamar, Magdalena, Colombia",
    "Calarcá, Quindío, Colombia","Caldas, Antioquia, Colombia","Caldono, Cauca, Colombia","Cali, Valle del Cauca, Colombia",
    "Caloto, Cauca, Colombia","Campamento, Antioquia, Colombia","Campo de la Cruz, Atlántico, Colombia","Campoalegre, Huila, Colombia",
    "Canalete, Córdoba, Colombia","Cañasgordas, Antioquia, Colombia","Candelaria, Valle del Cauca, Colombia","Candelaria, Atlántico, Colombia",
    "Cantagallo, Bolívar, Colombia","Caparrapí, Cundinamarca, Colombia","Capitanejo, Santander, Colombia","Cáqueza, Cundinamarca, Colombia",
    "Caracolí, Antioquia, Colombia","Caramanta, Antioquia, Colombia","Carepa, Antioquia, Colombia","Carlosama, Nariño, Colombia",
    "Carmen de Apicalá, Tolima, Colombia","Carmen de Carupa, Cundinamarca, Colombia","Carmen de Viboral, Antioquia, Colombia",
    "Carolina, Antioquia, Colombia","Cartagena, Bolívar, Colombia","Cartagena del Chairá, Caquetá, Colombia",
    "Cartago, Cartago, Valle del Cauca, Colombia","Cartago, Cauca, Colombia","Casabianca, Tolima, Colombia","Castilla La Nueva, Meta, Colombia",
    "Caucasia, Antioquia, Colombia","Cereté, Córdoba, Colombia","Cerinza, Boyacá, Colombia","Cerrito, Santander, Colombia",
    "Cerro de San Antonio, Magdalena, Colombia","Cértegui, Chocó, Colombia","Chachagüí, Nariño, Colombia","Chaguaní, Cundinamarca, Colombia",
    "Chalán, Sucre, Colombia","Chaparral, Tolima, Colombia","Chía, Cundinamarca, Colombia","Chigorodó, Antioquia, Colombia",
    "Chimá, Córdoba, Colombia","Chimichagua, Cesar, Colombia","Chinácota, Norte de Santander, Colombia","Chinavita, Boyacá, Colombia",
    "Chinchiná, Caldas, Colombia","Chinú, Córdoba, Colombia","Chipaque, Cundinamarca, Colombia","Chiquinquirá, Boyacá, Colombia",
    "Chiriguaná, Cesar, Colombia","Chiscas, Boyacá, Colombia","Chita, Boyacá, Colombia","Chitagá, Norte de Santander, Colombia",
    "Chivolo, Magdalena, Colombia","Chivor, Boyacá, Colombia","Choachí, Cundinamarca, Colombia","Chocontá, Cundinamarca, Colombia",
    "Cicuco, Bolívar, Colombia","Ciénaga, Magdalena, Colombia","Ciénaga de Oro, Córdoba, Colombia","Ciénega, Boyacá, Colombia",
    "Cimitarra, Santander, Colombia","Circasia, Quindío, Colombia","Cisneros, Antioquia, Colombia","Ciudad Bolívar, Antioquia, Colombia",
    "Clemencia, Bolívar, Colombia","Cocorná, Antioquia, Colombia","Cogua, Cundinamarca, Colombia","Colombia, Huila, Colombia",
    "Colón, Putumayo, Colombia","Colosó, Sucre, Colombia","Combita, Boyacá, Colombia","Concepción, Antioquia, Colombia",
    "Concepción, Santander, Colombia","Concordia, Antioquia, Colombia","Concordia, Magdalena, Colombia","Condoto, Chocó, Colombia",
    "Consacá, Nariño, Colombia","Contadero, Nariño, Colombia","Contratación, Santander, Colombia","Copacabana, Antioquia, Colombia",
    "Córdoba, Bolívar, Colombia","Córdoba, Quindío, Colombia","Córdoba, Nariño, Colombia","Corinto, Cauca, Colombia",
    "Coromoro, Santander, Colombia","Corozal, Sucre, Colombia","Corrales, Boyacá, Colombia","Cota, Cundinamarca, Colombia",
    "Cotorra, Córdoba, Colombia","Coveñas, Sucre, Colombia","Coyaima, Tolima, Colombia","Cravo Norte, Arauca, Colombia","Cruces de Anorí, Antioquia, Colombia",
    "Cubará, Boyacá, Colombia","Cubará, Boyacá, Colombia","Cucaita, Boyacá, Colombia","Cucunubá, Cundinamarca, Colombia",
    "Cúcuta, Norte de Santander, Colombia","Cucutilla, Norte de Santander, Colombia","Cumaral, Meta, Colombia","Cumbal, Nariño, Colombia",
    "Cumbitara, Nariño, Colombia","Cunday, Tolima, Colombia","Curillo, Caquetá, Colombia","Curití, Santander, Colombia",
    "Curumaní, Cesar, Colombia","Dabeiba, Antioquia, Colombia","Dagua, Valle del Cauca, Colombia","Dibulla, La Guajira, Colombia",
    "Distracción, La Guajira, Colombia","Don Matías, Antioquia, Colombia","Dos Quebradas, Risaralda, Colombia","Duitama, Boyacá, Colombia",
    "Durania, Norte de Santander, Colombia","Ebéjico, Antioquia, Colombia","El Águila, Valle del Cauca, Colombia",
    "El Bagre, Antioquia, Colombia","El Banco, Magdalena, Colombia","El Bordo, Cauca, Colombia","El Cairo, Valle del Cauca, Colombia",
    "El Cantón de San Pablo, Chocó, Colombia","El Carmen, Norte de Santander, Colombia","El Carmen, Chocó, Colombia",
    "El Carmen, Santander, Colombia","El Carmen de Bolívar, Bolívar, Colombia","El Castillo, Meta, Colombia",
    "El Cerrito, Valle del Cauca, Colombia","El Charco, Nariño, Colombia","El Cocuy, Boyacá, Colombia","El Copey, Cesar, Colombia",
    "El Doncello, Caquetá, Colombia","El Dorado, Meta, Colombia","El Dovio, Valle del Cauca, Colombia","El Espino, Boyacá, Colombia",
    "El Guamo, Bolívar, Colombia","El Molino, La Guajira, Colombia","El Paso, Cesar, Colombia","El Paujil, Caquetá, Colombia",
    "El Peñol, Nariño, Colombia","El Peñón, Magdalena, Colombia","El Piñón, Magdalena, Colombia","El Playón, Santander, Colombia",
    "El Retén, Magdalena, Colombia","El Retorno, Guaviare, Colombia","El Roble, Sucre, Colombia","El Rosal, Cundinamarca, Colombia",
    "El Rosario, Nariño, Colombia","El Tablón, Nariño, Colombia","El Tambo, Nariño, Colombia","El Tambo, Cauca, Colombia",
    "El Tarra, Norte de Santander, Colombia","El Zulia, Norte de Santander, Colombia","Elías, Huila, Colombia",
    "Entrerríos, Antioquia, Colombia","Envigado, Antioquia, Colombia","Espinal, Tolima, Colombia","Facatativá, Cundinamarca, Colombia",
    "Falan, Tolima, Colombia","Filadelfia, Caldas, Colombia","Filandia, Quindío, Colombia","Firavitoba, Boyacá, Colombia",
    "Flandes, Tolima, Colombia","Florencia, Caquetá, Colombia","Florencia, Cauca, Colombia","Floresta, Boyacá, Colombia",
    "Florián, Santander, Colombia","Florida, Valle del Cauca, Colombia","Floridablanca, Santander, Colombia","Fómeque, Cundinamarca, Colombia",
    "Fonseca, La Guajira, Colombia","Fosca, Cundinamarca, Colombia","Francisco Pizarro, Nariño, Colombia","Fredonia, Antioquia, Colombia",
    "Fresno, Tolima, Colombia","Frontino, Antioquia, Colombia","Fuente de Oro, Meta, Colombia","Fundación, Magdalena, Colombia",
    "Funes, Nariño, Colombia","Funza, Cundinamarca, Colombia","Fusagasuga, Cundinamarca, Colombia","Gachalá, Cundinamarca, Colombia",
    "Gachancipá, Cundinamarca, Colombia","Gachetá, Cundinamarca, Colombia","Galán, Santander, Colombia","Galapa, Atlántico, Colombia",
    "Galeras, Sucre, Colombia","Gamarra, Cesar, Colombia","Gámeza, Boyacá, Colombia","Garagoa, Boyacá, Colombia","Garzón, Huila, Colombia",
    "Génova, Quindío, Colombia","Génova, Cauca, Colombia","Gigante, Huila, Colombia","Ginebra, Valle del Cauca, Colombia",
    "Giraldo, Antioquia, Colombia","Girardot, Cundinamarca, Colombia","Girón, Santander, Colombia","Gómez Plata, Antioquia, Colombia",
    "González, Cesar, Colombia","Gramalote, Norte de Santander, Colombia","Granada, Cundinamarca, Colombia","Granada, Antioquia, Colombia",
    "Granada, Meta, Colombia","Guaca, Santander, Colombia","Guacarí, Valle del Cauca, Colombia","Guachetá, Cundinamarca, Colombia",
    "Guachucal, Nariño, Colombia","Guadalupe, Santander, Colombia","Guadalupe, Huila, Colombia","Guadalupe, Antioquia, Colombia",
    "Guaduas, Cundinamarca, Colombia","Guaitarilla, Nariño, Colombia","Gualmatán, Nariño, Colombia","Guamal, Magdalena, Colombia",
    "Guamal, Meta, Colombia","Guamo, Tolima, Colombia","Guapi, Cauca, Colombia","Guarne, Antioquia, Colombia","Guasca, Cundinamarca, Colombia",
    "Guatapé, Antioquia, Colombia","Guataquí, Cundinamarca, Colombia","Guatavita, Cundinamarca, Colombia","Guateque, Boyacá, Colombia",
    "Guática, Risaralda, Colombia","Guayabal, Tolima, Colombia","Guayabal de Síquima, Cundinamarca, Colombia","Guayabetal, Cundinamarca, Colombia",
    "Guayatá, Boyacá, Colombia","Güepsa, Santander, Colombia","Güicán, Boyacá, Colombia","Hacarí, Norte de Santander, Colombia",
    "Hatillo de Loba, Bolívar, Colombia","Heliconia, Antioquia, Colombia","Herrán, Norte de Santander, Colombia","Herveo, Tolima, Colombia",
    "Hispania, Antioquia, Colombia","Hobo, Huila, Colombia","Honda, Tolima, Colombia","Ibagué, Tolima, Colombia","Icononzo, Tolima, Colombia",
    "Iles, Nariño, Colombia","Imués, Nariño, Colombia","Inírida, Guainía, Colombia","Inzá, Cauca, Colombia","Ipiales, Nariño, Colombia",
    "Íquira, Huila, Colombia","Iscuandé, Nariño, Colombia","Isnos, Huila, Colombia","Istmina, Chocó, Colombia","Itagüí, Antioquia, Colombia",
    "Ituango, Antioquia, Colombia","Jambaló, Cauca, Colombia","Jamundí, Valle del Cauca, Colombia","Jardín, Antioquia, Colombia",
    "Jenesano, Boyacá, Colombia","Jericó, Antioquia, Colombia","Juan de Acosta, Atlántico, Colombia","Junín, Cundinamarca, Colombia",
    "Juradó, Chocó, Colombia","La Argentina, Huila, Colombia","La Belleza, Santander, Colombia","La Calera, Cundinamarca, Colombia",
    "La Capilla, Boyacá, Colombia","La Ceja, Antioquia, Colombia","La Celia, Risaralda, Colombia","La Cruz, Cauca, Colombia",
    "La Cumbre, Valle del Cauca, Colombia","La Dorada, Caldas, Colombia","La Esperanza, Norte de Santander, Colombia",
    "La Estrella, Antioquia, Colombia","La Florida, Nariño, Colombia","La Gloria, Cesar, Colombia","La Jagua de Ibirico, Cesar, Colombia",
    "La Llanada, Nariño, Colombia","La Macarena, Meta, Colombia","La Merced, Risaralda, Colombia","La Mesa, Cundinamarca, Colombia",
    "La Montañita, Caquetá, Colombia","La Paz, Cesar, Colombia","La Paz, Santander, Colombia","La Peña, Cundinamarca, Colombia",
    "La Pintada, Antioquia, Colombia","La Plata, Huila, Colombia","La Playa, Norte de Santander, Colombia","La Primavera, Vichada, Colombia",
    "La Sierra, Cauca, Colombia","La Tebaida, La Tebaida,  Colombia","La Tola, Nariño, Colombia","La Unión, Valle del Cauca, Colombia",
    "La Unión, Nariño, Colombia","La Unión, Sucre, Colombia","La Unión, Antioquia, Colombia","La Uvita, Boyacá, Colombia",
    "La Vega, Cundinamarca, Colombia","La Vega, Cauca, Colombia","La Victoria, Valle del Cauca, Colombia",
    "La Virginia, Risaralda, Colombia","Labateca, Norte de Santander, Colombia","Landázuri, Santander, Colombia","Lebrija, Santander, Colombia",
    "Leiva, Nariño, Colombia","Lejanías, Meta, Colombia","Lenguazaque, Cundinamarca, Colombia","Lérida, Tolima, Colombia",
    "Leticia, Amazonas, Colombia","Líbano, Tolima, Colombia","Liborina, Antioquia, Colombia","Linares, Nariño, Colombia",
    "Lloró, Chocó, Colombia","López, Cauca, Colombia","Lorica, Córdoba, Colombia","Los Andes, Antioquia, Colombia",
    "Los Córdobas, Córdoba, Colombia","Los Palmitos, Sucre, Colombia","Los Patios, Norte de Santander, Colombia","Los Santos, Santander, Colombia",
    "Lourdes, Norte de Santander, Colombia","Luruaco, Atlántico, Colombia","Maceo, Antioquia, Colombia","Machetá, Cundinamarca, Colombia",
    "Madrid, Cundinamarca, Colombia","Magangué, Bolívar, Colombia","Mahates, Bolívar, Colombia","Maicao, La Guajira, Colombia","Majagual, Sucre, Colombia",
    "Málaga, Santander, Colombia","Malambo, Atlántico, Colombia","Manatí, Atlántico, Colombia","Manaure, La Guajira, Colombia",
    "Manaure Balcón del Cesar, Cesar, Colombia","Maní, Casanare, Colombia","Manizales, Caldas, Colombia","Manta, Cundinamarca, Colombia",
    "Manzanares, Caldas, Colombia","Mapiripán, Meta, Colombia","Margarita, Bolívar, Colombia","María la Baja, Bolívar, Colombia",
    "Marinilla, Antioquia, Colombia","Maripí, Boyacá, Colombia","Mariquita, Tolima, Colombia","Marmato, Caldas, Colombia",
    "Marquetalia, Caldas, Colombia","Marsella, Risaralda, Colombia","Marulanda, Caldas, Colombia","Matanza, Santander, Colombia",
    "Medellín, Antioquia, Colombia","Medina, Cundinamarca, Colombia","Melgar, Tolima, Colombia","Mercaderes, Cauca, Colombia",
    "Mesetas, Meta, Colombia","Milán, Caquetá, Colombia","Miraflores, Boyacá, Colombia","Miraflores, Guaviare, Colombia",
    "Miranda, Cauca, Colombia","Mistrató, Risaralda, Colombia","Mitú, Vaupés, Colombia","Mocoa, Putumayo, Colombia",
    "Mogotes, Santander, Colombia","Molagavita, Santander, Colombia","Momil, Córdoba, Colombia","Mompós, Bolívar, Colombia",
    "Mongua, Boyacá, Colombia","Monguí, Boyacá, Colombia","Moniquirá, Boyacá, Colombia","Moñitos, Córdoba, Colombia",
    "Montebello, Antioquia, Colombia","Montecristo, Bolívar, Colombia","Montelíbano, Córdoba, Colombia","Montenegro, Quindío, Colombia",
    "Montería, Córdoba, Colombia","Monterrey, Casanare, Colombia","Morales, Bolívar, Colombia","Morales, Cauca, Colombia",
    "Morelia, Caquetá, Colombia","Morroa, Sucre, Colombia","Mosquera, Nariño, Colombia","Mosquera, Cundinamarca, Colombia",
    "Mountain, Archipiélago de San Andrés, Providencia y Santa Catalina, Colombia","Municipio Hato Corozal, Casanare, Colombia",
    "Municipio de Fortul, Arauca, Colombia","Murillo, Tolima, Colombia","Murindó, Antioquia, Colombia","Mutatá, Antioquia, Colombia",
    "Mutis, Chocó, Colombia","Muzo, Boyacá, Colombia","Nariño, Nariño, Colombia","Nariño, Antioquia, Colombia","Nariño, Cundinamarca, Colombia",
    "Nátaga, Huila, Colombia","Natagaima, Tolima, Colombia","Nechí, Antioquia, Colombia","Necoclí, Antioquia, Colombia","Neira, Caldas, Colombia",
    "Neiva, Huila, Colombia","Nemocón, Cundinamarca, Colombia","Nilo, Cundinamarca, Colombia","Nobsa, Boyacá, Colombia","Nocaima, Cundinamarca, Colombia",
    "Norcasia, Caldas, Colombia","Nóvita, Chocó, Colombia","Nueva Granada, Magdalena, Colombia","Nunchía, Casanare, Colombia",
    "Nuquí, Chocó, Colombia","Obando, Valle del Cauca, Colombia","Ocaña, Norte de Santander, Colombia","Oiba, Santander, Colombia",
    "Olaya Herrera, Nariño, Colombia","Onzaga, Santander, Colombia","El Colegio, Cundinamarca, Colombia","Oporapa, Huila, Colombia","Orito, Putumayo, Colombia","Orocué, Casanare, Colombia","Ortega, Tolima, Colombia","Ospina, Nariño, Colombia","Otanche, Boyacá, Colombia","Ovejas, Sucre, Colombia","Pacho, Cundinamarca, Colombia","Pácora, Caldas, Colombia","Padilla, Cauca, Colombia","Páez, Boyacá, Colombia","Paicol, Huila, Colombia","Pailitas, Cesar, Colombia","Paipa, Boyacá, Colombia","Paispamba, Cauca, Colombia","Pajarito, Casanare, Colombia","Palermo, Huila, Colombia","Palestina, Huila, Colombia","Palestina, Caldas, Colombia","Palmar de Varela, Atlántico, Colombia","Palmira, Valle del Cauca, Colombia","Palmito, Sucre, Colombia","Palocabildo, Tolima, Colombia","Pamplona, Norte de Santander, Colombia","Pandi, Cundinamarca, Colombia","Paratebueno, Cundinamarca, Colombia","Pasca, Cundinamarca, Colombia","Pasto, Nariño, Colombia","Patía, Cauca, Colombia","Pauna, Boyacá, Colombia","Payán, Nariño, Colombia","Pedraza, Magdalena, Colombia","Pelaya, Cesar, Colombia","Pensilvania, Caldas, Colombia","Peque, Antioquia, Colombia","Pereira, Risaralda, Colombia","Pesca, Boyacá, Colombia","Pié de Pató, Chocó, Colombia","Piedecuesta, Santander, Colombia","Piedrancha, Nariño, Colombia","Piedras, Tolima, Colombia","Pijao, Quindío, Colombia","Pijiño, Magdalena, Colombia","Pinillos, Bolívar, Colombia","Piojó, Atlántico, Colombia","Pital, Huila, Colombia","Pitalito, Huila, Colombia","Pivijay, Magdalena, Colombia","Pizarro, Chocó, Colombia","Planadas, Tolima, Colombia","Planeta Rica, Córdoba, Colombia","Plato, Magdalena, Colombia","Policarpa, Nariño, Colombia","Polonuevo, Atlántico, Colombia","Ponedera, Atlántico, Colombia","Popayán, Cauca, Colombia","Pore, Casanare, Colombia","Potosí, Nariño, Colombia","Pradera, Valle del Cauca, Colombia","Prado, Tolima, Colombia","Providencia, Nariño, Colombia","Pueblo Nuevo, Córdoba, Colombia","Pueblo Rico, Risaralda, Colombia","Pueblorrico, Antioquia, Colombia","Puebloviejo, Magdalena, Colombia","Puente Nacional, Santander, Colombia","Puerres, Nariño, Colombia","Puerto Asís, Putumayo, Colombia","Puerto Berrío, Antioquia, Colombia","Puerto Boyacá, Boyacá, Colombia","Puerto Carreño, Vichada, Colombia","Puerto Colombia, Atlántico, Colombia","Puerto Concordia, Meta, Colombia","Puerto Escondido, Córdoba, Colombia","Puerto Gaitán, Meta, Colombia","Puerto Guzmán, Putumayo, Colombia","Puerto Leguízamo, Putumayo, Colombia","Puerto Lleras, Meta, Colombia","Puerto López, Meta, Colombia","Puerto Nariño, Amazonas, Colombia","Puerto Parra, Santander, Colombia","Puerto Rico, Meta, Colombia","Puerto Rico, Caquetá, Colombia","Puerto Rondón, Arauca, Colombia","Puerto Salgar, Cundinamarca, Colombia","Puerto Santander, Norte de Santander, Colombia","Puerto Tejada, Puerto Tejada, Cauca, Colombia","Puerto Triunfo, Antioquia, Colombia","Puerto Wilches, Santander, Colombia","Pupiales, Nariño, Colombia","Purificación, Tolima, Colombia","Purísima, Córdoba, Colombia","Quetame, Cundinamarca, Colombia","Quibdó, Chocó, Colombia","Quimbaya, Quindío, Colombia","Quinchía, Risaralda, Colombia","Quípama, Boyacá, Colombia","Quipile, Cundinamarca, Colombia","Ragonvalia, Norte de Santander, Colombia","Ramiriquí, Boyacá, Colombia","Ráquira, Boyacá, Colombia","Regidor, Bolívar, Colombia","Remedios, Antioquia, Colombia","Remolino, Magdalena, Colombia","Repelón, Atlántico, Colombia","Restrepo, Valle del Cauca, Colombia","Restrepo, Meta, Colombia","Retiro, Antioquia, Colombia","Ricaurte, Nariño, Colombia","Ricaurte, Cundinamarca, Colombia","Río Viejo, Bolívar, Colombia","Río de Oro, Cesar, Colombia","Rioblanco, Tolima, Colombia","Riofrío, Valle del Cauca, Colombia","Ríohacha, La Guajira, Colombia","Rionegro, Antioquia, Colombia","Riosucio, Caldas, Colombia","Riosucio, Chocó, Colombia","Risaralda, Caldas, Colombia","Rivera, Huila, Colombia","Roldanillo, Valle del Cauca, Colombia","Roncesvalles, Tolima, Colombia","Rosas, Cauca, Colombia","Rovira, Tolima, Colombia","Sabana de Torres, Santander, Colombia","Sabanagrande, Atlántico, Colombia","Sabanalarga, Antioquia, Colombia","Sabanalarga, Atlántico, Colombia","Sabanalarga, Casanare, Colombia","Sabaneta, Antioquia, Colombia","Saboyá, Boyacá, Colombia","Sáchica, Boyacá, Colombia","Sahagún, Córdoba, Colombia","Saladoblanco, Huila, Colombia","Salamina, Caldas, Colombia","Salamina, Magdalena, Colombia","Saldaña, Tolima, Colombia","Salento, Quindío, Colombia","Salgar, Antioquia, Colombia","Samacá, Boyacá, Colombia","Samaniego, Nariño, Colombia","Sampués, Sucre, Colombia","San Agustín, Huila, Colombia","San Alberto, Cesar, Colombia","San Andrés, Archipiélago de San Andrés, Providencia y Santa Catalina, Colombia","San Andrés, Santander, Colombia","San Andrés, Antioquia, Colombia","San Antero, Córdoba, Colombia","San Antonio, Magdalena, Colombia","San Antonio, Tolima, Colombia","San Antonio del Tequendama, Cundinamarca, Colombia","San Benito Abad, Sucre, Colombia","San Bernardo, Cauca, Colombia","San Bernardo del Viento, Córdoba, Colombia","San Calixto, Norte de Santander, Colombia","San Carlos, Antioquia, Colombia","San Carlos, Córdoba, Colombia","San Carlos, Antioquia, Colombia","San Carlos de Guaroa, Meta, Colombia","San Cayetano, Norte de Santander, Colombia","San Cristóbal, Bolívar, Colombia","San Diego, Cesar, Colombia","San Estanislao, Bolívar, Colombia","San Fernando, Bolívar, Colombia","San Francisco, Cundinamarca, Colombia","San Francisco, Antioquia, Colombia","San Francisco, Putumayo, Colombia","San Gil, Santander, Colombia","San Jacinto, Bolívar, Colombia","San Jerónimo, Antioquia, Colombia","San José, Caldas, Colombia","San José, Nariño, Colombia","San José de La Montaña, Antioquia, Colombia","San José de Miranda, Santander, Colombia","San José del Guaviare, Guaviare, Colombia","San José del Palmar, Chocó, Colombia","San Juan Nepomuceno, Bolívar, Colombia","San Juan de Arama, Meta, Colombia","San Juan de Betulia, Sucre, Colombia","San Juan de Urabá, Antioquia, Colombia","San Juan del Cesar, La Guajira, Colombia","San Lorenzo, Nariño, Colombia","San Luis, Tolima, Colombia","San Luis, Antioquia, Colombia","San Luis de Cubarral, Meta, Colombia","San Luis de Gaceno, Boyacá, Colombia","San Luis de Palenque, Casanare, Colombia","San Marcos, Sucre, Colombia","San Martín, Cesar, Colombia","San Martín, Meta, Colombia","San Mateo, Boyacá, Colombia","San Miguel, Putumayo, Colombia","San Onofre, Sucre, Colombia","San Pablo, Bolívar, Colombia","San Pablo, Nariño, Colombia","San Pablo de Borbur, Boyacá, Colombia","San Pedro, Valle del Cauca, Colombia","San Pedro, Antioquia, Colombia","San Pedro, Sucre, Colombia","San Pedro de Urabá, Antioquia, Colombia","San Pelayo, Córdoba, Colombia","San Rafael, Antioquia, Colombia","San Roque, Antioquia, Colombia","San Vicente, Antioquia, Colombia","San Vicente de Chucurí, Santander, Colombia","San Zenón, Bolívar, Colombia","Sandoná, Nariño, Colombia","Santa Ana, Magdalena, Colombia","Santa Bárbara, Antioquia, Colombia","Santa Catalina, Bolívar, Colombia","Santa Genoveva de Docorodó, Chocó, Colombia","Santa Lucía, Atlántico, Colombia","Santa María, Huila, Colombia","Santa María, Boyacá, Colombia","Santa Marta, Magdalena, Colombia","Santa Rosa, Bolívar, Colombia","Santa Rosa de Cabal, Risaralda, Colombia","Santa Rosa de Osos, Antioquia, Colombia","Santa Rosa de Viterbo, Boyacá, Colombia","Santa Rosa del Sur, Bolívar, Colombia","Santa Sofía, Boyacá, Colombia","Santacruz, Nariño, Colombia","Santana, Boyacá, Colombia","Santander de Quilichao, Cauca, Colombia","Santiago, Putumayo, Colombia","Santiago, Norte de Santander, Colombia","Santo Domingo, Antioquia, Colombia","Santo Tomás, Atlántico, Colombia","Santuario, Antioquia, Colombia","Santuario, Risaralda, Colombia","Sapuyes, Nariño, Colombia","Sardinata, Norte de Santander, Colombia","Sasaima, Cundinamarca, Colombia","Segovia, Antioquia, Colombia","Sesquilé, Cundinamarca, Colombia","Sevilla, Valle del Cauca, Colombia","Siachoque, Boyacá, Colombia","Sibaté, Cundinamarca, Colombia","Sibundoy, Putumayo, Colombia","Silos, Norte de Santander, Colombia","Silvania, Cundinamarca, Colombia","Silvia, Cauca, Colombia","Simacota, Santander, Colombia","Simijaca, Cundinamarca, Colombia","Simití, Bolívar, Colombia","Sincé, Sucre, Colombia","Sincelejo, Sucre, Colombia","Sitionuevo, Atlántico, Colombia","Soacha, Cundinamarca, Colombia","Soatá, Boyacá, Colombia","Socha Viejo, Boyacá, Colombia","Socorro, Santander, Colombia","Socotá, Boyacá, Colombia","Sogamoso, Boyacá, Colombia","Solano, Caquetá, Colombia","Soledad, Atlántico, Colombia","Somondoco, Boyacá, Colombia","Sonsón, Antioquia, Colombia","Soplaviento, Bolívar, Colombia","Sopó, Cundinamarca, Colombia","Sotaquirá, Boyacá, Colombia","Sotomayor, Nariño, Colombia","Suaita, Santander, Colombia","Suan, Atlántico, Colombia","Suárez, Cauca, Colombia","Suárez, Tolima, Colombia","Suaza, Huila, Colombia","Subachoque, Cundinamarca, Colombia","Sucre, Sucre, Colombia","Sucre, Santander, Colombia","Sucre, Cauca, Colombia","Suesca, Cundinamarca, Colombia","Supatá, Cundinamarca, Colombia","Supía, Caldas, Colombia","Susa, Cundinamarca, Colombia","Susacón, Boyacá, Colombia","Sutamarchán, Boyacá, Colombia","Sutatausa, Cundinamarca, Colombia","Tabio, Cundinamarca, Colombia","Tadó, Chocó, Colombia","Talaigua Viejo, Bolívar, Colombia","Tamalameque, Cesar, Colombia","Tamara, Casanare, Colombia","Tame, Arauca, Colombia","Támesis, Antioquia, Colombia","Taminango, Nariño, Colombia","Tangua, Nariño, Colombia","Tarqui, Huila, Colombia","Tarso, Antioquia, Colombia","Tasco, Boyacá, Colombia","Tauramena, Casanare, Colombia","Tello, Huila, Colombia","Tenjo, Cundinamarca, Colombia","Tenza, Cundinamarca, Colombia","Teruel, Huila, Colombia","Tesalia, Huila, Colombia","Tibacuy, Cundinamarca, Colombia","Tibaná, Boyacá, Colombia","Tibasosa, Boyacá, Colombia","Tibú, Norte de Santander, Colombia","Tierralta, Córdoba, Colombia","Timaná, Huila, Colombia","Timbiquí, Cauca, Colombia","Tipacoque, Boyacá, Colombia","Tiquisio, Bolívar, Colombia","Titiribí, Antioquia, Colombia","Toca, Boyacá, Colombia","Tocaima, Cundinamarca, Colombia","Tocancipá, Cundinamarca, Colombia","Toledo, Norte de Santander, Colombia","Tolú, Sucre, Colombia","Toluviejo, Sucre, Colombia","Tópaga, Boyacá, Colombia","Topaipí, Cundinamarca, Colombia","Toribío, Cauca, Colombia","Toro, Valle del Cauca, Colombia","Totoró, Cauca, Colombia","Trinidad, Casanare, Colombia","Trujillo, Valle del Cauca, Colombia","Tubará, Atlántico, Colombia","Tuluá, Valle del Cauca, Colombia","Tumaco, Nariño, Colombia","Tunja, Boyacá, Colombia","Túquerres, Nariño, Colombia","Turbaco, Bolívar, Colombia","Turbaná, Bolívar, Colombia","Turbo, Antioquia, Colombia","Turmequé, Boyacá, Colombia","Tuta, Boyacá, Colombia","Ubalá, Cundinamarca, Colombia","Ubaque, Cundinamarca, Colombia","Ubaté, Cundinamarca, Colombia","Ulloa, Valle del Cauca, Colombia","Umbita, Cundinamarca, Colombia","Une, Cundinamarca, Colombia","Ungia, Chocó, Colombia","Uramita, Antioquia, Colombia","Uribia, La Guajira, Colombia","Urrao, Antioquia, Colombia","Urumita, La Guajira, Colombia","Usiacurí, Atlántico, Colombia","Utica, Cundinamarca, Colombia","Valdivia, Antioquia, Colombia","Valencia, Córdoba, Colombia","Valle de San José, Santander, Colombia","Valle de San Juan, Tolima, Colombia","Valle del Guamuez, Putumayo, Colombia","Valledupar, Cesar, Colombia","Valparaíso, Caquetá, Colombia","Valparaíso, Antioquia, Colombia","Vegachí, Antioquia, Colombia","Vélez, Santander, Colombia","Venadillo, Tolima, Colombia","Venecia, Cundinamarca, Colombia","Venecia, Antioquia, Colombia","Ventaquemada, Boyacá, Colombia","Vergara, Cundinamarca, Colombia","Versalles, Valle del Cauca, Colombia","Vetas, Santander, Colombia","Vianí, Cundinamarca, Colombia","Victoria, Caldas, Colombia","Vigía del Fuerte, Antioquia, Colombia","Vijes, Valle del Cauca, Colombia","Villa Rica, Cauca, Colombia","Villa de Leiva, Boyacá, Colombia","Villa del Rosario, Norte de Santander, Colombia","Villagarzón, Putumayo, Colombia","Villahermosa, Tolima, Colombia","Villamaría, Caldas, Colombia","Villanueva, Bolívar, Colombia","Villanueva, La Guajira, Colombia","Villanueva, Santander, Colombia","Villanueva, Casanare, Colombia","Villapinzón, Cundinamarca, Colombia","Villarrica, Tolima, Colombia","Villavicencio, Meta, Colombia","Villavieja, Huila, Colombia","Villeta, Cundinamarca, Colombia","Viotá, Cundinamarca, Colombia","Vista Hermosa, Meta, Colombia","Viterbo, Caldas, Colombia","Yacopí, Cundinamarca, Colombia","Yacuanquer, Nariño, Colombia","Yaguará, Huila, Colombia","Yalí, Antioquia, Colombia","Yarumal, Antioquia, Colombia","Yolombó, Antioquia, Colombia","Yondó, Antioquia, Colombia","Yopal, Casanare, Colombia","Yotoco, Valle del Cauca, Colombia","Yumbo, Valle del Cauca, Colombia","Zambrano, Magdalena, Colombia","Zapatoca, Santander, Colombia","Zaragoza, Antioquia, Colombia","Zarzal, Valle del Cauca, Colombia","Zetaquira, Boyacá, Colombia","Zipacón, Cundinamarca, Colombia","Zipaquirá, Cundinamarca, Colombia","La Palma, Cundinamarca, Colombia"];

export default cities