const data = require("./khalique_sample_data.json");
// JSON.parse(JSON.stringify(data));
console.log(
  "raw scrape payload: channel avatar url: ",
  data._agent.all_nodes[5].raw_scrape_payload.channelavatarurl,
);
