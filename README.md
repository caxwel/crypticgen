This was created during my time as a student at Code Chrysalis.

# CrypticGen: Mysterious Prompt Generator

![App Preview](./src/assets/preview.png)

## Description
CrypticGen: "Probably the first time you've seen those words together"

This project was originally intended to generate writing prompts, but through lots of contributions from creative friends, it ended up having a really interesting angle. Enjoy!

## Initial Setup
Clone this project, and then do the following steps:

 1. Install dependencies.
 2. Initialize the crypticgen database
 3. Use the migration file to create the sentences table
 4. Seed the table with some ready-to-go weirdness if you want
 5. Check out the front end via `yarn start`

## API Endpoints
### Generate a new sentence object:
POST --> `/api/newSentence`

### Search previously-generated sentences by number:
GET --> `/api/sentence/:id`

### View all sentence objects:
GET --> `/api/allSentences`

### Edit any sentence by number:
PATCH --> `/api/sentence/:id`

### Delete sentence by number (maybe they got too weird...?):
DELETE --> `/api/sentence/:id`

