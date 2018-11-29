use blogpost

sh.enableSharding("blogpost")
db.createCollection("demo_collA")
sh.shardCollection("blogpost.demo_collA",{"sector":"hashed"},false,{"numInitialChunks": 4})
db.createCollection("demo_collB")
sh.shardCollection("blogpost.demo_collB",{"address.city":"hashed"},false,{"numInitialChunks": 4})

var docs = [
    {"_id":"10021-2015-ENFO","certificate_number":9278806,"business_name":"ATLIXCO DELI GROCERY INC.","date":"Feb 20 2015","result":"No Violation Issued","sector":"Cigarette Retail Dealer - 127","address":{"city":"RIDGEWOOD","zip":11385,"street":"MENAHAN ST","number":1712}},
    {"_id":"10057-2015-ENFO","certificate_number":6007104,"business_name":"LD BUSINESS SOLUTIONS","date":"Feb 25 2015","result":"Violation Issued","sector":"Tax Preparers - 891","address":{"city":"NEW YORK","zip":10030,"street":"FREDERICK DOUGLASS BLVD","number":2655}},
    {"_id":"10084-2015-ENFO","certificate_number":9278914,"business_name":"MICHAEL GOMEZ RANGHALL","date":"Feb 10 2015","result":"No Violation Issued","sector":"Locksmith - 062","address":{"city":"QUEENS VLG","zip":11427,"street":"214TH ST","number":8823}},
    {"_id":"10129-2015-CMPL","certificate_number":5346909,"business_name":"A\u0026C CHIMNEY CORP.","date":"Apr 22 2015","result":"Violation Issued","sector":"Home Improvement Contractor - 100","address":{"city":"QUEENS VLG","zip":11428,"street":"210TH ST","number":9440}},
    {"_id":"10127-2015-CMPL","certificate_number":5381180,"business_name":"ERIC CONSTRUCTION AND DECORATING INC.","date":"Sep  8 2015","result":"Violation Issued","sector":"Home Improvement Contractor - 100","address":{"city":"STATEN ISLAND","zip":10304,"street":"TODT HILL RD","number":1233}},
    {"_id":"10284-2015-ENFO","certificate_number":9287088,"business_name":"VYACHESLAV KANDZHANOV","date":"Feb 25 2015","result":"No Violation Issued","sector":"Misc Non-Food Retail - 817","address":{"city":"NEW YORK","zip":10030,"street":"FREDRCK D BLVD","number":2655}},
    {"_id":"10312-2015-ENFO","certificate_number":9287090,"business_name":"GRICEYDA M VILLAR","date":"Feb 25 2015","result":"No Violation Issued","sector":"Salons And Barbershop - 841","address":{"city":"NEW YORK","zip":10030,"street":"FREDRCK D BLVD","number":2645}},
    {"_id":"10302-2015-ENFO","certificate_number":9287089,"business_name":"NYC CANDY STORE SHOP CORP","date":"Feb 25 2015","result":"No Violation Issued","sector":"Cigarette Retail Dealer - 127","address":{"city":"NEW YORK","zip":10030,"street":"FREDRCK D BLVD","number":2653}},
    {"_id":"10290-2015-CMPL","certificate_number":9305498,"business_name":"AYAD YOUSSEF","date":"Jul 23 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"JERSEY CITY","zip":7306,"street":"TONNELE AVE","number":70}},
    {"_id":"10318-2015-ENFO","certificate_number":9287092,"business_name":"BISHWANATH BISWAS","date":"Feb 25 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"ELMHURST","zip":11373,"street":"75TH ST","number":4157}},
    {"_id":"12658-2015-ENFO","certificate_number":9287544,"business_name":"ABDUL M NOORZAD","date":"Mar  6 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"FLUSHING","zip":11355,"street":"58TH RD","number":13215}},
    {"_id":"12695-2015-CMPL","certificate_number":9303190,"business_name":"SHENODA AZIZ","date":"Jul 31 2015","result":"Warning","sector":"Mobile Food Vendor - 881","address":{"city":"RIDGEWOOD","zip":11385,"street":"WOODWARD AVE","number":610}},
    {"_id":"12710-2015-CMPL","certificate_number":5381500,"business_name":"AIMAN YOUSSEF","date":"Aug  6 2015","result":"Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"NEW YORK","zip":10027,"street":"W 126TH ST","number":361}},
    {"_id":"12779-2015-ENFO","certificate_number":3019441,"business_name":"UNLIMITED TRUCKING CORP.","date":"Mar 17 2015","result":"Fail","sector":"Fuel Oil Dealer - 814","address":{"city":"EAST MEADOW","zip":11554,"street":"NEWBRIDGE RD","number":361}},
    {"_id":"12787-2015-ENFO","certificate_number":3019443,"business_name":"SPRAGUE OPERATING RESOURCES LLC.","date":"Mar 17 2015","result":"Pass","sector":"Fuel Oil Dealer - 814","address":{"city":"LAWRENCE","zip":11559,"street":"BAY BLVD","number":1}},
    {"_id":"12907-2015-UNIT","certificate_number":10005852,"business_name":"CLASS A RECOVERY INC","date":"Jun  9 2015","result":"Pass","sector":"Tow Truck Company - 124","address":{"city":"NEW ROCHELLE","zip":10801,"street":"MAIN ST","number":212}},
    {"_id":"12900-2015-CMPL","certificate_number":5387918,"business_name":"GREGORY WHITE","date":"Sep 18 2015","result":"Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"BRONX","zip":10473,"street":"BRUCKNER BLVD","number":1760}},
    {"_id":"12933-2015-ENFO","certificate_number":3020031,"business_name":"BARI PORK STORE OF AVENUE U INC","date":"Mar 11 2015","result":"Pass","sector":"Grocery-Retail - 808","address":{"city":"BROOKLYN","zip":11223,"street":"AVENUE U","number":158}},
    {"_id":"13395-2015-CMPL","certificate_number":9304856,"business_name":"AKHTAR CONSTRUCTION CONCEPTS","date":"Sep 29 2015","result":"No Violation Issued","sector":"Home Improvement Contractor - 100","address":{"city":"BROOKLYN","zip":11218,"street":"CONEY ISLAND AVE","number":620}},
    {"_id":"14108-2015-ENFO","certificate_number":9279299,"business_name":"ATHENS WOODWORKING INC.","date":"Mar 21 2015","result":"No Violation Issued","sector":"Home Improvement Contractor - 100","address":{"city":"BROOKLYN","zip":11201,"street":"SMITH ST","number":31}},
    {"_id":"22126-2015-ENFO","certificate_number":9289761,"business_name":"METROPOLITAN LOCKSMITH INC.","date":"Apr 24 2015","result":"No Violation Issued","sector":"Locksmith - 062","address":{"city":"NEW YORK","zip":10014,"street":"7TH AVE S","number":165}},
    {"_id":"22236-2015-ENFO","certificate_number":9295983,"business_name":"ALAN GLICK","date":"Apr 21 2015","result":"No Violation Issued","sector":"Locksmith - 062","address":{"city":"NEW HYDE PARK","zip":11040,"street":"WINDSOR GATE DR","number":112}},
    {"_id":"22140-2014-CMPL","certificate_number":9302251,"business_name":"PAUL COMMODORE \u0026 SONS LTD","date":"Feb 18 2015","result":"No Violation Issued","sector":"Home Improvement Contractor - 100","address":{"city":"BROOKLYN","zip":11217,"street":"NEVINS ST","number":285}},
    {"_id":"22322-2015-ENFO","certificate_number":9300051,"business_name":"ROCBOTTOM CONSTRUCTION LLC","date":"Jun  8 2015","result":"No Evidence of Activity","sector":"Home Improvement Contractor - 100","address":{"city":"STATEN ISLAND","zip":10307,"street":"BARNARD AVE","number":115}},
    {"_id":"22334-2015-ENFO","certificate_number":9303059,"business_name":"JUST SALAD HUDSON SQUARE LLC","date":"May  1 2015","result":"No Violation Issued","sector":"Grocery-Retail - 808","address":{"city":"NEW YORK","zip":10013,"street":"HUDSON ST","number":325}},
    {"_id":"22423-2014-CMPL","certificate_number":5351412,"business_name":"SP SON CONTRACTING CORP.","date":"Mar  4 2015","result":"Violation Issued","sector":"Home Improvement Contractor - 100","address":{"city":"BROOKLYN","zip":11214,"street":"CROPSEY AVE","number":2243}},
    {"_id":"22451-2015-ENFO","certificate_number":9290416,"business_name":"TARIQULH SIKDER","date":"Apr 22 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"JAMAICA","zip":11435,"street":"138TH ST","number":8843}},
    {"_id":"22452-2015-ENFO","certificate_number":9289745,"business_name":"MAC CONTRACTING OF SI, INC.","date":"Apr 22 2015","result":"Closed","sector":"Home Improvement Contractor - 100","address":{"city":"STATEN ISLAND","zip":10314,"street":"SOUTH AVE","number":1110}},
    {"_id":"22461-2015-ENFO","certificate_number":9290417,"business_name":"XIANG CHENG LIN","date":"Apr 22 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"NEW YORK","zip":10002,"street":"CLINTON ST","number":101}},
    {"_id":"22466-2015-ENFO","certificate_number":9287640,"business_name":"MOHAMED A ELADL","date":"Apr 23 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"NEW YORK","zip":10035,"street":"E 119TH ST","number":307}},
    {"_id":"22469-2015-ENFO","certificate_number":9276215,"business_name":"WALYED DELI GROCERY INC","date":"Jul  9 2015","result":"Out of Business","sector":"Cigarette Retail Dealer - 127","address":{"city":"BROOKLYN","zip":11208,"street":"PITKIN AVE","number":2530}},
    {"_id":"22551-2015-ENFO","certificate_number":9287693,"business_name":"LEROY ROBINSON JR","date":"Apr 23 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"NEW YORK","zip":10026,"street":"LENOX AVE","number":151}},
    {"_id":"22593-2015-ENFO","certificate_number":9289758,"business_name":"MAREI ASHRIF","date":"Apr 24 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"ASTORIA","zip":11105,"street":"DITMARS BLVD","number":3811}},
    {"_id":"22633-2015-ENFO","certificate_number":3017050,"business_name":"MOHAMMED M ROHMAN","date":"Apr 27 2015","result":"Pass","sector":"Mobile Food Vendor - 881","address":{"city":"BRONX","zip":10453,"street":"W 181ST ST","number":30}},
    {"_id":"22785-2015-ENFO","certificate_number":50058199,"business_name":"KATI JUNCTION INC.","date":"Apr 30 2015","result":"No Evidence of Activity","sector":"Cigarette Retail Dealer - 127","address":{"city":"NEW YORK","zip":10018,"street":"W 40TH ST","number":200}},
    {"_id":"22788-2015-ENFO","certificate_number":50057981,"business_name":"MTA DELI GROCERY CORP","date":"Apr 26 2015","result":"No Violation Issued","sector":"Cigarette Retail Dealer - 127","address":{"city":"BROOKLYN","zip":11233,"street":"ROCKAWAY AVE","number":145}},
    {"_id":"22797-2015-ENFO","certificate_number":3020380,"business_name":"SKYLIGHT FOOD CORP","date":"Apr 16 2015","result":"Pass","sector":"Grocery-Retail - 808","address":{"city":"BROOKLYN","zip":"","street":"PUTNAM AVE","number":795}},
    {"_id":"22813-2015-ENFO","certificate_number":9289203,"business_name":"JAVIER GARCIA- ROMEIO","date":"Apr 27 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"BRONX","zip":10451,"street":"E 149TH ST","number":295}},
    {"_id":"22827-2015-ENFO","certificate_number":9289204,"business_name":"AHMED MOHAMED","date":"Apr 27 2015","result":"No Violation Issued","sector":"Mobile Food Vendor - 881","address":{"city":"NEW YORK","zip":10030,"street":"W 136TH ST","number":363}},
    {"_id":"22836-2015-ENFO","certificate_number":9304443,"business_name":"HONG KONG SUPERMARKET OF HESTER STREET CORP.","date":"Aug 19 2015","result":"No Violation Issued","sector":"Supermarket - 819","address":{"city":"NEW YORK","zip":10013,"street":"Hester St","number":157}},
    {"_id":"22858-2015-ENFO","certificate_number":9295108,"business_name":"B \u0026 D HOLDING GROUP INC.  BULLFROG REMODELING","date":"Jun 17 2015","result":"Out of Business","sector":"Home Improvement Contractor - 100","address":{"city":"BAYSIDE","zip":11361,"street":"32ND AVE","number":20003}},
    {"_id":"22926-2014-CMPL","certificate_number":9284506,"business_name":"UNITED ROOFING OF NY INC.","date":"Apr 29 2015","result":"No Violation Issued","sector":"Home Improvement Contractor - 100","address":{"city":"BROOKLYN","zip":11219,"street":"12TH AVE","number":6202}},
    {"_id":"23059-2015-ENFO","certificate_number":50058423,"business_name":"#1 JUNIOR INC.","date":"Apr 26 2015","result":"No Violation Issued","sector":"Cigarette Retail Dealer - 127","address":{"city":"BROOKLYN","zip":11233,"street":"T S BOYLAND ST","number":203}},
    {"_id":"23196-2015-ENFO","certificate_number":3020799,"business_name":"E.S.F. TRANSPORT INC","date":"Apr 21 2015","result":"Pass","sector":"Fuel Oil Dealer - 814","address":{"city":"INWOOD","zip":11096,"street":"SHERIDAN BLVD","number":1}},
    {"_id":"2323-2015-ENFO","certificate_number":3030374,"business_name":"SPRAGUE OPERATING RESOURCES LLC.","date":"Jan 16 2015","result":"Pass","sector":"Gasoline Truck-Retail - 822","address":{"city":"LAWRENCE","zip":11559,"street":"BAY BLVD","number":1}},
    {"_id":"23248-2015-ENFO","certificate_number":3037159,"business_name":"MOHAMMAD NASAR","date":"Apr 30 2015","result":"Pass","sector":"Mobile Food Vendor - 881","address":{"city":"BRONX","zip":10461,"street":"OVERING ST","number":1401}},
    {"_id":"23260-2015-ENFO","certificate_number":3037157,"business_name":"MD ISLAM","date":"Apr 30 2015","result":"Pass","sector":"Mobile Food Vendor - 881","address":{"city":"BRONX","zip":10462,"street":"MCGRAW AVE","number":1956}},
    {"_id":"23303-2015-ENFO","certificate_number":3021103,"business_name":"SOLAR TRANSPORT LLC","date":"Apr 22 2015","result":"Pass","sector":"Fuel Oil Dealer - 814","address":{"city":"HUDSON","zip":12534,"street":"COLUMBIA ST","number":720}},
    {"_id":"23440-2015-ENFO","certificate_number":9296390,"business_name":"GOLDEN CHILDREN PLACE INC","date":"Apr 29 2015","result":"No Evidence of Activity","sector":"Cigarette Retail Dealer - 127","address":{"city":"FLUSHING","zip":11355,"street":"KISSENA BLVD","number":"4574B"}},
    {"_id":"23544-2015-ENFO","certificate_number":9272440,"business_name":"ROSE R KAPLAN","date":"Apr 29 2015","result":"No Violation Issued","sector":"Locksmith - 062","address":{"city":"QUEENS VLG","zip":11427,"street":"PECK AVE","number":21739}}
]

db.demo_collA.insertMany(docs)
