# Auto-teste HighTechX

#### Para clonar o projeto use o comando <code>git clone git@github.com:lperess/hightechx_aval.git</code>

#### Instale as dependências
<li>Entre no diretório do projeto com <code>cd hightechx_aval</code></li>
<li>Entre no diretório do front-end e instale as dependências com <code>cd front-end/ && npm install</code> e aguarde o fim da instalação</li>
<li>Volte para o diretório raiz com <code>cd ..</code></li>
<li>Entre no diretório do back-end e instale as dependências com <code>cd back-end/ && npm install</code> e aguarde o fim da instalação</li>
<li>Volte para o diretório raiz com <code>cd ..</code></li>

### Criando e populando o banco de dados
<li>No diretório do back-end, altere o nome do arquivo <code>.env.example</code> para <code>.env</code></li>
<li>No conteúdo desse arquivo estão as variáveis de ambiente necessárias para a API se comunicar com o banco de dados (MySQL), que precisa estar rodando na máquina</li>
<li>Altere o valor das variáveis <code>MYSQL_USER</code> e <code>MYSQL_PASSWORD</code> para as credencias de acesso do seu banco</li>
<li>Se necessário, altere também as variáveis <code>MYSQL_HOST</code> e <code>MYSQL_PORT</code>, elas estão com os valores padrão do MySQL</li>
<li>No diretório do back-end, execute o comando <code>npm run db:reset</code></li>

### Rodando a aplicação
<li>No diretório do back-end, execute o comando <code>npm start</code></li>
<li>Abra o diretório do front-end em outra janela</li>
<li>No diretório do front-end, execute o comando <code>npm start</code></li>

### Utilizando a aplicação
<li>Ao fazer login com um usuário que não tem permissão de admin o usuário é redirecionado para a página de login novamente</li>
<li>Exemplo de usuário sem permissão de admin: <code>email: johndoe1@email.com</code> e <code>senha: 123456</code> </li>
<li>Ao fazer login com um usuário que seja admin o usuário tem acesso à pagina de gerenciamento de usuários, onde pode visualizar, filtrar, criar, editar e excluir (inativar) usuários</li>
<li>Exemplo de usuário com permissão de admin: <code>email: admin@email.com</code> e <code>senha: 123456</code> </li>
