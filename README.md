<h2>O projektu</h2>
Spletna trgovina, kreirana v okviru predmeta Osnove spletnih tehnologij, omogoča online pregled in nakup motorjev. Stran je narejena s HTML5/CSS in deluje s pomočjo Node.js serverja.<br/>
Uporabnikom omogoča pregledovanje artiklov trgovine Motoshop in dodajanje v košarico (na podstrani 'Sport'). Košarico lahko pregledajo, iz nje odstranijo artikle in izračunajo mesečni obrok v primeru nakupa na obroke. Nakup je simuliran z zapisom podatkov košarice in uporabnika v podatkovno bazo. <br/>
Omogočena je tudi prijava oziroma registracija. Admin lahko ob prijavi izdelke dodaja in odstranjuje iz ponudbe, spremembe pa so vidne ostalim uporabnikom (za prijavo kot admin kot uporabniško ime vnesite 'Admin' in kot geslo '12345'). </br>
Podatki o produktih in uporabnikih se s pomočjo Node.js serverja pridobivajo iz SQLite baze. Dizajn strani je zaradi uporabe Bootstrap-a odziven, zato je spletna aplikacija dostopna za uporabo na vseh velikostih ekranov.<br/>
<br/>
<i>V mapi frontend se nahaja tudi JSON datoteka, ki pa ni v uporabi - podatki strani so se namreč izvirno brali iz JSON datotek, podatkovna baza je bila dodana kasneje. </i>
Za potrebe simuliranja delovanja razvite aplikacije se strežniška stran izvaja na platformi fly.io, medtem ko je frontend na GitHub Pages. Za ogled obiščite naslov https://anjalecnik.github.io/Motoshop/Frontend/index.html.</br>
<br/>
<h2>About</h2>
This online store, created as part of the Basics of Web Technologies course, allows users to browse and purchase engines online. The website is built using HTML5/CSS and operates with the help of a Node.js server. </br>
Users can view the products available in the Motoshop store and add them to their cart (on the 'Sport' subpage). They can also review the cart, remove items from it, and calculate the monthly installment for purchases on installments. The purchase is simulated by recording the cart and user data in the database.</br>
The website also supports user registration and login. The admin user can add and remove products from the offer, and the changes are visible to other users (to log in as
an admin, enter 'Admin' as the username and '12345' as the password).</br>
Product and user data are obtained from an SQLite database using the Node.js server. Additionally, the website design is responsive, thanks to the use of Bootstrap, making the web application accessible on screens of all sizes.</br>
<br/>
<i>There is also a JSON file in the frontend folder that is not in use - originally, the website data was read from JSON files, but a database was added later.</i>
For the purpose of simulating the operation of the developed application, the server-side is running on the fly.io platform (platform for deploying applications), while the frontend is hosted on GitHub Pages. To view it, please visit the following address: https://anjalecnik.github.io/Motoshop/Frontend/index.html.
<br/>
</br>
<h2>Uporabljene tehnologije / Used technologies</h2>
<li>HTML5</li>
<li>CSS</li>
<li>Bootstrap</li>
<li>JavaScript</li>
<li>JSON</li>
<li>Node.js</li>
<li>Express</li>
<li>Bookshelf</li>
<li>Knex</li>
<li>SQLite3</li>
