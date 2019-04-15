# Comandos de build e criação do container

1. docker-compose build

2. docker-compose up (subindo e verificando os processos do container)

3. docker-compose up -d (sobe o container sem a saída de execuções no terminal)

4. docker-compose run node-8 npm install (para rodar comandos diretamente dentro do container)

5. docker-compose run node-8 /bin/sh (acesso ao bash do container)

6. docker-compose run -u root node-8 /bin/sh (Rodando com usuário root)