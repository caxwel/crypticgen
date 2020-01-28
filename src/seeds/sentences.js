const sentenceData = require("../data");

exports.seed = function(knex) {
  const prepOpen = [
    "at the",
    "at the beginning of the",
    "in front of the",
    "at the end of the",
  ];
  // Deletes ALL existing entries
  return knex("sentences")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("sentences").insert([
        {
          start: "The",
          subject: `${
            sentenceData.adjectives.subjects[
              Math.floor(
                Math.random() * sentenceData.adjectives.subjects.length
              )
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
        },
        {
          start: "The",
          subject: `${
            sentenceData.adjectives.subjects[
              Math.floor(
                Math.random() * sentenceData.adjectives.subjects.length
              )
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
        },
        {
          start: "The",
          subject: `${
            sentenceData.adjectives.subjects[
              Math.floor(
                Math.random() * sentenceData.adjectives.subjects.length
              )
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
        },
      ]);
    });
};
