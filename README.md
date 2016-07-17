# Desafio Front-end DBR
# Wessek 17/07/2016

# IMPORTANTE

Apos rodar o gulp go, quando aparecer "Connected to BrowserSync", às vezes é necessario dar um refresh na página por causa do Angular.

# Informações sobre a build:

** Precisa do gulp-cli **
Precisa rodar npm install **
Precisa rodar bower install **
Tem angular **
Tem bootstrap **

- Features:

* SEO Tags
* 100% Responsivo (resolução mínima: 640x480 - talvez um pouco menos)
* ngAnimations Ready (não vi necessidade de animar nada com eventos na página)
* ng-scroll-animations funcionais (preciso mandar uma issue deste cara, para que o logo da footer faça o bounce bonitinho que eu quero - se der f5 vc consegue ver a animation, mas o defaultstate dele está sendo no estado :after).

- Implementação backend (supondo que será um PDO email send):

* Validação de campos pendente (posso fazer no front).
* Precisa puxar o true-false boolean da checkbox do gênero e traduzir para nomenclaturas.

- Diretórios:

* /app -> dev, sempre fazer alterações aqui.
* /dist -> build pronta para o webserver.

- Para subir o webserver, rode "gulp go" a partir deste diretório.

# O GULP GO:

* Pega o sass e transforma em css;
* Minifica o css e o js em arquivos únicos (com os frameworks inclusive) na pasta dist. Esse processo demora uns 15s na minha máquina - be patient;
* Otimiza as imagens e joga na dist, com interlace;
* Copia as fontes e templates;
* Sobe o webserver local e -->interno<-- (se não barrar, a sua vlan vai ver no seu IP, se tiver em DMZ ou algo do tipo pelamordedeus toma cuidado), e abre o browser padrão;
* Atualiza a página, minifica, copia e tals dinâmicamente nos browsers que estiverem com a página aberta, quando há alteração nos arquivos da pasta /app.
* Para novos arquivos de imagem/template/fontes, precisa fechar e rodar de novo. Provavelmente.

* - Porta 3000 app, porta 3001 admin panel.

* OBRIGADO pelo incentivo, e pela oportunidade de participar do processo seletivo.

* Cheers!

* <- Original File -> *

Desafio DBR.ag
================

Queremos saber como você trabalha na prática em um “real life project”.  

Que tal refazer esse [projeto][1] do seu jeito?

É isso mesmo!

Faça o download do [PSD][2] e começe a codificar.

Pra enviar basta abrir um `pull request`.

Não vamos disponibilizar o source para não influenciar no desenvolvimento de cada um, assim damos total liberdade pra estrutura e método de desenvolvimento.

É isso aí, manda ver e crie algo interessante.


  [1]: http://vagas.dbr.ag/front
  [2]: http://vagas.dbr.ag/frontend/dbrag_desafio.zip
