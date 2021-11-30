const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// CAMINHO DOS ARQUIVOS
const path_json = "./pessoas.json";

app.use(express.json());

// CRIAR ARQUIVO
function archive(path, archive) {
    fs.exists(path, (exists) => {
        if (!exists) {
            fs.writeFile(path, archive, 'utf8', () => {
                console.log("Arquivo criado com sucesso!");
            });
        }
    });
}

// SALVAR ALTERAÇÕES DA API
function save(data) {
    fs.writeFile(path_json, JSON.stringify(data, null, 4), () => {
        console.log('Alteração realizada com sucesso!');
    });
}

// ADICIONAR PESSOA
function post_person(person) {
    let persons = require(path_json);

    const exists = persons.some(element => {
        return element.nome == person.nome;
    });

    if (!exists) {
        persons.push(person);
        save(persons);
        return { 
            mensagem: "Essa pessoa foi registrada com sucesso!"
        };
    }
    else {
        return {
            mensagem: "Essa pessoa já está registrada!"
        };
    }
}

// LISTAR PESSOAS
function get_persons() {
    const persons = require(path_json);
    return persons;
}

// LISTAR PESSOAS POR NOME
function get_person(nome) {
    let persons = require(path_json);
    persons = persons.filter(element => {
        return element.nome == nome;
    });
    return persons;
}

// EDITAR PESSOA
function put_person(req) {
    let persons = require(path_json);
    const position = persons.map(element => {
        return element.nome;
    }).indexOf(req.params.nome);

    persons[position] = req.body;
    save(persons);

    return { Mensagem: "Pessoa modificada com sucesso!" };
}

// REMOVER PESSOA
function delete_pessoa(nome) {
    let persons = require(path_json);

    const position = persons.map(element => {
        return element.nome;
    }).indexOf(nome);

    persons.splice(position, 1)
    save(persons);

    return { 
        mensagem: "Pessoa removida com sucesso!"
    };
}

// ROTA PARA ADICIONAR UMA NOVA PESSOA
app.post("/pessoa", (req, res) => {
    archive(path_json, "[]");
    res.send(post_person(req.body));
});

// ROTA PARA LISTAR TODAS AS PESSOAS
app.get("/pessoas", (req, res) => {
    res.send(get_persons());
});

// ROTA PARA LISTAR PESSOA POR NOME
app.get("/:nome/", (req, res) => {
    res.send(get_person(req.params.nome));
});

// ROTA PARA EDITAR PESSOA
app.put("/:nome/", (req, res) => {
    res.send(put_person(req));
});

// ROTA PARA DELETAR PESSOA
app.delete("/:nome/", (req, res) => {
    res.send(delete_pessoa(req.params.nome));
});

app.listen(port, () => {
    console.log(`A API NodeJS está rodando na porta (${port}).`);
});

archive(path_json, "[]");