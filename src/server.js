const sentenceData = require("./data");
const express = require("express");
const config = require("../knexfile.js");
const knex = require("knex")(config);
const path = require("path");

module.exports = function(knex) {
  return {
    sentence: require("./sentences")(knex),
  };
};

const setupServer = () => {
  const app = express();

  app.use(express.json());

  //gets sentence by id
  app.get("/api/sentence/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const oldSentence = await knex("sentences")
        .returning("*")
        .where("id", id);
      res.send(oldSentence[0]);
    } catch (e) {
      res.send(e.message);
    }
  });

  //gets all sentences
  app.get("/api/allSentences", async (req, res) => {
    try {
      const allSentences = await knex("sentences").returning("*");
      res.send(allSentences);
    } catch (e) {
      res.send(e.message);
    }
  });

  //edits sentence by id
  app.patch("/api/sentence/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const editedSentence = await knex("sentences")
        .returning("*")
        .where("id", id)
        .update(req.body);
      res.send(editedSentence);
    } catch (e) {
      res.send(e.message);
    }
  });

  //deletes sentence by id
  app.delete("/api/sentence/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const deleteSentence = await knex("sentences")
        .returning("*")
        .where("id", id)
        .del();
      res.send(`Deleted sentence: ${deleteSentence}`);
    } catch (e) {
      res.send(e.message);
    }
  });

  //adds new randomly generated sentence to database
  app.post("/api/newSentence", async (req, res) => {
    const prepOpen = [
      "at the",
      "at the beginning of the",
      "in front of the",
      "at the end of the",
    ];
    const result = {
      start: "The",
      subject: `${
        sentenceData.adjectives.subjects[
          Math.floor(Math.random() * sentenceData.adjectives.subjects.length)
        ]
      } ${
        sentenceData.nouns.subjects[
          Math.floor(Math.random() * sentenceData.nouns.subjects.length)
        ]
      }`,
      verb:
        sentenceData.verbs[
          Math.floor(Math.random() * sentenceData.verbs.length)
        ],
      adverb:
        sentenceData.adverbs[
          Math.floor(Math.random() * sentenceData.adverbs.length)
        ],
      prep: `${prepOpen[Math.floor(Math.random() * prepOpen.length)]} ${
        sentenceData.adjectives.places[
          Math.floor(Math.random() * sentenceData.adjectives.places.length)
        ]
      } ${
        sentenceData.nouns.places[
          Math.floor(Math.random() * sentenceData.nouns.places.length)
        ]
      }.`,
    };
    try {
      const newSentence = await knex("sentences")
        .returning("*")
        .insert(result);
      res.send(newSentence[0]);
    } catch (e) {
      res.send(e.message);
    }
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(`${__dirname}/../index.html`));
  });

  return app;
};

module.exports = { setupServer };
