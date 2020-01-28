const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
chai.should();
const sentenceData = require("../src/data");

const server = setupServer();
describe("Generator API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /api/nouns", () => {
    it("should return the full list of nouns", async () => {
      const res = await request.get("/api/nouns");
      JSON.stringify(res.body).should.equal(JSON.stringify(sentenceData.nouns));
    });
  });
  describe("GET /api/adjectives", () => {
    it("should return the full list of adjectives", async () => {
      const res = await request.get("/api/adjectives");
      JSON.stringify(res.body).should.equal(JSON.stringify(sentenceData.nouns));
    });
  });
});
