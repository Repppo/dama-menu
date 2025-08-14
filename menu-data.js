// Dati del menu (IT/EN + emoji)
const MENU = [
  { key: "coffee",   emoji:"☕", it:"Caffetteria", en:"Coffee & Hot Drinks",
    items: [
      {it:"Espresso", en:"Espresso", price:1.30},
      {it:"Decaffeinato", en:"Decaf Espresso", price:1.40},
      {it:"Caffè Americano", en:"American Coffee", price:1.70},
      {it:"Caffè Corretto", en:"Spiked Espresso", price:1.70},
      {it:"Marocchino", en:"Marocchino Espresso", price:1.70},
      {it:"Caffè d’orzo (piccolo/grande)", en:"Barley Coffee (small/big)", price:"1.70 / 2.00"},
      {it:"Caffè al ginseng (piccolo/grande)", en:"Ginseng Coffee (small/big)", price:"1.70 / 2.00"},
      {it:"Cappuccino", en:"Cappuccino", price:1.80},
      {it:"Cappuccino (decaffeinato, soia, avena)", en:"Cappuccino (decaf, soy, oats)", price:2.00},
      {it:"Latte macchiato", en:"Latte Macchiato", price:2.50},
      {it:"Infusi", en:"Infusions", price:3.50},
      {it:"Cioccolata calda / con panna", en:"Hot Chocolate / with whipped cream", price:"4.00 / 4.50"},
      {it:"Shakerato / con alcool", en:"Shakerato / with alcohol", price:"4.00 / 4.50"},
      {it:"Spremuta d’arancia", en:"Orange Juice", price:4.00}
    ]
  },
  { key:"soft",      emoji:"🥤", it:"Bevande", en:"Soft Drinks",
    items:[
      {it:"Acqua naturale o gassata 0,5 l", en:"Water still or sparkling 0.5l", price:1.20},
      {it:"Coca Cola o Zero", en:"Coca Cola or Zero", price:3.50},
      {it:"Sprite", en:"Sprite", price:3.50},
      {it:"Fanta", en:"Fanta", price:3.50},
      {it:"Tè freddo (limone o pesca)", en:"Iced Tea (lemon or peach)", price:3.50},
      {it:"Chinotto", en:"Chinotto", price:3.50},
      {it:"Aranciata amara", en:"Aranciata Amara", price:3.50},
      {it:"Schweppes Tonica", en:"Schweppes Tonic Water", price:3.50},
      {it:"Schweppes Lemon", en:"Schweppes Lemon", price:3.50},
      {it:"Gazzosa al pompelmo", en:"Grapefruit Soda", price:3.50},
      {it:"Ginger Beer", en:"Ginger Beer", price:3.50},
      {it:"Ginger Ale", en:"Ginger Ale", price:3.50},
      {it:"Redbull", en:"Redbull", price:3.50},
      {it:"Succhi di frutta (albicocca, pesca, pera, ace, ananas, pompelmo, mirtillo, melograno)", en:"Fruit juice (apricot, peach, pear, ace, pineapple, grapefruit, blueberry, pomegranate)", price:3.50},
      {it:"Crodino", en:"Crodino", price:3.50},
      {it:"Sanbitter", en:"Sanbitter", price:3.50},
      {it:"Campari Soda", en:"Campari Soda", price:3.50}
    ],
    notes:{it:"I prezzi delle bevande variano con l’opzione aperitivo.", en:"Drink prices vary with the aperitif option."}
  },
  { key:"savory",    emoji:"🥪", it:"Il Salato", en:"Savory",
    items:[
      {it:"Toast (prosciutto cotto, fontina)", en:"Toast (ham, fontina cheese)", price:4.50},
      {it:"Toast Farcito (prosciutto cotto, brie, funghi)", en:"Stuffed Toast (ham, brie, mushrooms)", price:5.00},
      {it:"Toast Vegetariano (scamorza affumicata, verdure grigliate)", en:"Vegetarian Toast (smoked scamorza cheese, grilled vegetables)", price:5.50},
      {it:"Toast Healthy (salmone, pomodoro fresco, avocado)", en:"Healthy Toast (salmon, fresh tomato, avocado)", price:6.00},
      {it:"Uova e Bacon (strapazzate e bacon croccante)", en:"Eggs and Bacon (scrambled eggs, crispy bacon)", price:9.50},
      {it:"Piatto Brunch (salmone affumicato, avocado, uova strapazzate, bacon croccante)", en:"Brunch Plate (smoked salmon, avocado, scrambled eggs, crispy bacon)", price:14.00}
    ]
  },
  { key:"sweet",     emoji:"🍰", it:"Il Dolce", en:"Sweet",
    items:[
      {it:"Brioches", en:"Brioches", price:"da 1.00 a 1.50"},
      {it:"Pasticceria", en:"Pastry", price:"da 0.70 a 2.70"},
      {it:"Torta del giorno *", en:"Cake of the Day *", price:"3.00"},
      {it:"Paninetti al latte ripieni", en:"Stuffed Milk Sandwiches", price:"2.00"}
    ],
    notes:{it:"* I prodotti potrebbero essere congelati", en:"* The products could be frozen"}
  },
  { key:"juice",     emoji:"🧃", it:"Centrifugati", en:"Fresh Mixed Juices",
    items:[
      {it:"Ingredienti a tua scelta", en:"Ingredients of your choice", desc_it:"ananas, arancia, mela, carota, sedano, finocchio, cetriolo, zenzero", desc_en:"pineapple, orange, apple, carrot, celery, fennel, cucumber, ginger", price:7.00}
    ]
  },
  {
  "key": "cocktails",
  "emoji": "🍸",
  "it": "Cocktail List",
  "en": "Cocktail List",
  "items": [
    {"it":"Americano","en":"Americano","price":8.00,
     "desc_it":"Campari, vermouth rosso, soda, fetta d’arancia",
     "desc_en":"Campari, sweet vermouth, soda water, orange slice"},
    {"it":"Negroni","en":"Negroni","price":9.00,
     "desc_it":"Gin, Campari, vermouth rosso, scorza d’arancia",
     "desc_en":"Gin, Campari, sweet vermouth, orange peel"},
    {"it":"Sbagliato","en":"Sbagliato","price":8.00,
     "desc_it":"Campari, vermouth rosso, Prosecco",
     "desc_en":"Campari, sweet vermouth, Prosecco"},
    {"it":"Spritz (Aperol, Campari, Select)","en":"Spritz (Aperol · Campari · Select)","price":8.00,
     "desc_it":"Prosecco, soda, bitter a scelta (Aperol/Campari/Select), fetta d’arancia",
     "desc_en":"Prosecco, soda, chosen bitter (Aperol/Campari/Select), orange slice"},
    {"it":"Boulevardier","en":"Boulevardier","price":9.00,
     "desc_it":"Bourbon, Campari, vermouth rosso",
     "desc_en":"Bourbon, Campari, sweet vermouth"},
    {"it":"Mi-To","en":"Mi-To","price":8.00,
     "desc_it":"Campari, vermouth rosso",
     "desc_en":"Campari, sweet vermouth"},
    {"it":"Campari Shakerato","en":"Campari Shakerato","price":9.00,
     "desc_it":"Campari agitato con ghiaccio, servito liscio",
     "desc_en":"Campari shaken with ice, served straight up"},
    {"it":"Mojito","en":"Mojito","price":9.00,
     "desc_it":"Rum chiaro, lime, menta, zucchero di canna, soda",
     "desc_en":"Light rum, lime, mint, cane sugar, soda"},
    {"it":"Hugo Spritz","en":"Hugo Spritz","price":8.00,
     "desc_it":"Prosecco, sciroppo di sambuco, soda, menta, lime",
     "desc_en":"Prosecco, elderflower syrup, soda, mint, lime"},
    {"it":"Moscow Mule","en":"Moscow Mule","price":9.00,
     "desc_it":"Vodka, lime, ginger beer",
     "desc_en":"Vodka, lime, ginger beer"},
    {"it":"Daiquiri","en":"Daiquiri","price":9.00,
     "desc_it":"Rum, succo di lime, sciroppo di zucchero",
     "desc_en":"Rum, lime juice, simple syrup"},
    {"it":"Margarita","en":"Margarita","price":9.00,
     "desc_it":"Tequila, triple sec, succo di lime, sale sul bordo (opz.)",
     "desc_en":"Tequila, triple sec, lime juice, salt rim (opt.)"},
    {"it":"Caipirinha","en":"Caipirinha","price":9.00,
     "desc_it":"Cachaça, lime, zucchero",
     "desc_en":"Cachaça, lime, sugar"},
    {"it":"Rum Cooler","en":"Rum Cooler","price":9.00,
     "desc_it":"Rum, ginger ale (o soda), lime",
     "desc_en":"Rum, ginger ale (or soda), lime"},
    {"it":"Martini Cocktail (Gin/Dry)","en":"Martini Cocktail (Gin/Dry)","price":9.00,
     "desc_it":"Gin o vodka, vermouth dry, oliva o twist di limone",
     "desc_en":"Gin or vodka, dry vermouth, olive or lemon twist"},
    {"it":"Bloody Mary","en":"Bloody Mary","price":9.00,
     "desc_it":"Vodka, succo di pomodoro, limone, salsa Worcestershire, Tabasco, sale, pepe",
     "desc_en":"Vodka, tomato juice, lemon, Worcestershire, Tabasco, salt, pepper"},
    {"it":"Paloma","en":"Paloma","price":9.00,
     "desc_it":"Tequila o mezcal, lime, soda al pompelmo, sciroppo di zucchero, sale",
     "desc_en":"Tequila or mezcal, lime, grapefruit soda, simple syrup, salt"}
  ]
}
,
  { key:"wines",     emoji:"🍷", it:"Vini", en:"Wines",
    items:[
      {it:"Vini rossi (calice)", en:"Red Wine (glass)", price:6.00},
      {it:"Vini bianchi (calice)", en:"White Wine (glass)", price:6.00},
      {it:"Bollicine (calice)", en:"Sparkling Wine (glass)", price:"6.00 / 8.00"}
    ]
  },
  { key:"aperitif",  emoji:"🧀", it:"Per arricchire l’aperitivo", en:"To Enrich the Aperitif",
    items:[
      {it:"Tagliere", en:"Cold cuts & cheeses board", price:14.00, desc_it:"Salumi e formaggi a seconda della disponibilità, con marmellate e giardiniera", desc_en:"Cold cuts & cheeses depending on availability, with jams and giardiniera"},
      {it:"Pinsa Margherita", en:"Pinsa Margherita", price:10.00}
    ]
  },
  { key:"beer",      emoji:"🍺", it:"Birre", en:"Beers",
    items:[
      {it:"Menabrea Lager 0,4 l", en:"Menabrea Lager 0.4l", price:6.00},
      {it:"Menabrea 0,2 l", en:"Menabrea 0.2l", price:3.50},
      {it:"Beck’s 0,33 l", en:"Beck’s 0.33l", price:5.00},
      {it:"Corona 0,33 l", en:"Corona 0.33l", price:5.00},
      {it:"Tennent’s 0,33 l", en:"Tennent’s 0.33l", price:5.00},
      {it:"Ceres 0,33 l", en:"Ceres 0.33l", price:5.00},
      {it:"Artigianali Legnone 0,33 l (Double IPA · Strong Ale)", en:"Artigianali Legnone 0.33l (Double IPA · Strong Ale)", price:8.00}
    ]
  },
  { key:"mocktails", emoji:"🍹", it:"Alcool Free", en:"Alcohol Free",
    items:[
      {it:"VÜN", en:"VÜN", desc_it:"Succo d’ananas, sciroppo di pesca, sciroppo di cocco", desc_en:"Pineapple juice, peach syrup, coconut syrup", price:8.00},
      {it:"DÜ", en:"DÜ", desc_it:"Ginger ale, lime, menta, zucchero di canna", desc_en:"Ginger ale, lime, mint, brown sugar", price:8.00},
      {it:"TRÌ", en:"TRÌ", desc_it:"Succo di pompelmo, tonica, limone, cetriolo", desc_en:"Grapefruit juice, tonic water, lemon, cucumber", price:8.00},
      {it:"QUÀTER", en:"QUÀTER", desc_it:"Tonica, sciroppo di sambuco, soda, lime, menta", desc_en:"Tonic water, elderberry syrup, soda, lime, mint", price:8.00},
      {it:"POMODORO CONDITO", en:"Tomato Condito", desc_it:"Succo di pomodoro, salsa Worcestershire, Tabasco, limone, olio, sale, pepe", desc_en:"Tomato juice, Worcestershire sauce, Tabasco, lemon, oil, salt, pepper", price:8.00}
    ]
  },
  { key:"sandwiches", emoji:"🥙", it:"Panini e Piadine", en:"Sandwiches & Piadine",
    items:[
      {it:"Brera", en:"Brera", desc_it:"Bresaola, parmigiano, rucola, olio, limone, pepe", desc_en:"Bresaola, parmesan, rocket, oil, lemon, pepper", price:9.00},
      {it:"Porta Genova", en:"Porta Genova", desc_it:"Tacchino, squacquerone, rucola, funghi", desc_en:"Turkey, squacquerone cheese, rocket, mushrooms", price:8.00},
      {it:"San Siro", en:"San Siro", desc_it:"Pancetta, scamorza affumicata, zucchine grigliate", desc_en:"Pancetta, smoked scamorza cheese, grilled zucchini", price:8.00},
      {it:"Sant’Ambrogio", en:"Sant’Ambrogio", desc_it:"Speck, brie, rucola", desc_en:"Speck, brie, rocket", price:8.00},
      {it:"Barona", en:"Barona", desc_it:"Prosciutto crudo, formaggio spalmabile, rucola, pomodori secchi", desc_en:"Raw ham, spreadable cheese, rocket, dried tomatoes", price:9.00},
      {it:"Centrale", en:"Centrale", desc_it:"Prosciutto cotto, mozzarella, gamberetti, insalata, salsa rosa", desc_en:"Ham, mozzarella cheese, shrimps, salad, pink sauce", price:9.00},
      {it:"Missori", en:"Missori", desc_it:"Prosciutto crudo, mozzarella, zucchine grigliate", desc_en:"Raw ham, mozzarella cheese, grilled zucchini", price:8.00},
      {it:"Duomo di Monza", en:"Duomo di Monza", desc_it:"Prosciutto crudo, squacquerone, rucola", desc_en:"Raw ham, squacquerone cheese, rocket", price:8.00},
      {it:"Duomo", en:"Duomo", desc_it:"Squacquerone, pomodoro fresco, verdure grigliate", desc_en:"Squacquerone cheese, fresh tomato, grilled vegetables", price:9.00},
      {it:"Navigli", en:"Navigli", desc_it:"Salmone affumicato, formaggio spalmabile, avocado, pomodoro fresco, limone, pepe", desc_en:"Smoked salmon, spreadable cheese, avocado, fresh tomato, lemon, pepper", price:9.00},
      {it:"De Angeli", en:"De Angeli", desc_it:"Mortadella, burrata, rucola e melanzane grigliate", desc_en:"Mortadella, burrata cheese, rocket & grilled aubergines", price:9.00},
      {it:"Garibaldi", en:"Porta Garibaldi", desc_it:"", desc_en:"", price:7.00},
      {it:"Porchetta", en:"Porchetta", desc_it:"Porchetta montanara", desc_en:"Mountain-style porchetta", price:10.00},
      {it:"Club Sandwich", en:"Club Sandwich", desc_it:"Tacchino, bacon, pomodoro fresco, insalata, maionese", desc_en:"Turkey, bacon, fresh tomato, salad, mayonnaise", price:10.00},
      {it:"Club Vegetariano", en:"Club Vegetariano", desc_it:"Scamorza affumicata, pomodoro fresco, verdure grigliate", desc_en:"Smoked scamorza, fresh tomato, grilled vegetables", price:10.00}
    ]
  },
  { key:"salads",    emoji:"🥗", it:"Insalate", en:"Salads",
    items:[
      {it:"Greca", en:"Greek", desc_it:"Misticanza, feta, pomodoro fresco, cetrioli, cipolla rossa, olive nere, origano", desc_en:"Mixed salad, feta cheese, fresh tomato, cucumbers, red onion, black olives, oregano", price:10.00},
      {it:"Cesar Salad", en:"Cesar Salad", desc_it:"Misticanza, pollo alla griglia*, scaglie di parmigiano, pomodoro fresco, salsa cesar", desc_en:"Mixed salad, grilled chicken*, parmesan flakes, fresh tomato, cesar sauce", price:10.00},
      {it:"Mediterranea", en:"Mediterranean", desc_it:"Misticanza, tonno sott’olio, mozzarella, pomodoro fresco, olive nere, origano", desc_en:"Mixed salad, tuna in oil, mozzarella cheese, fresh tomato, black olives, oregano", price:11.00},
      {it:"Nord Sud", en:"North South", desc_it:"Misticanza, bresaola, burrata, pomodoro fresco, melanzane grigliate", desc_en:"Mixed salad, bresaola, burrata cheese, fresh tomato, grilled aubergines", price:11.00},
      {it:"Estiva", en:"Summer", desc_it:"Misticanza, salmone affumicato, finocchi julienne, pomodoro fresco, olive nere", desc_en:"Mixed salad, smoked salmon, julienne fennel, fresh tomato, black olives", price:12.00},
      {it:"Maiolistica", en:"Maiolistica", desc_it:"Misticanza, salmone affumicato, avocado, pomodoro fresco, arancia, semi di sesamo e papavero", desc_en:"Mixed salad, smoked salmon, avocado, fresh tomato, orange, sesame seeds and poppy", price:12.00}
    ]
  }
];
