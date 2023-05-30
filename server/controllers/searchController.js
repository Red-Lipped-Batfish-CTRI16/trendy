const searchController = {};
const sdk = require("api")("@yelp-developers/v1.0#deudoolf6o9f51");
// process.env.YELP_API;
// const data = require("./TEST_DATA"); //comment out after
const cheerio = require("cheerio");

searchController.getBuisnesses = async (req, res, next) => {
  sdk.auth(
    "bearer kuSk_q8ezMZRJiL98mubw4hYgERgyGZ39hSckuAAt6LGvQCV4P-eogXsM2Eolw07rDxCRxJFxYRyI2vc_UeKhkQj3_VAHIEN755YV6Va476d6bQcfkMLVc9bNE9xZHYx"
  );

  const { interest, radius } = req.query;
  const location = req.query.location.replace(/\s/g, "%20");
  const { data } = await sdk.v3_business_search({
    location,
    term: interest,
    radius,
    sort_by: "best_match",
    limit: "20",
  });

  res.locals.businesses = data.businesses.map((business) => {
    const { id, name, image_url, url, categories, location } = business;
    return {
      id,
      name,
      image_url,
      url,
      categories,
      location: location.display_address,
    };
  });

  // res.locals.businesses = data.business; // COMMENT THIS OUT AS WELL!@!!!!!
  next();
};

searchController.getComments = async (req, res, next) => {
  Promise.all(
    res.locals.businesses.map((business) => fetch(business.url))
  ).then((YELPres) => {
    Promise.all(YELPres.map((x) => x.text())).then((html) => {
      for (const index in html) {
        const comments = [];
        const $ = cheerio.load(html[index]);
        const $comment = $("span.raw__09f24__T4Ezm");
        $comment.each((i, e) => {
          comments.push($(e).text().trim());
        });
        res.locals.businesses[index].comments = comments;
      }
      next();
    });
  });
  // next(); /// comment out after
};

async function getRatingsHelper(business) {
  try {
    const data = await Promise.all(
      business.comments.map((comment) => {
        return fetch(
          "https://api.api-ninjas.com/v1/sentiment?text=" + comment,
          {
            headers: {
              "X-Api-Key": "MofWezqyBu8SjjAHqQVkXw==tBwSkmuPFMyyhNr8",
            },
          }
        );
      })
    );
    const rating = await Promise.all(data.map((rate) => rate.json()));
    let validResponses = 0;
    const avg =
      rating.reduce((acc, curr) => {
        if (curr.score !== undefined) {
          acc += curr.score;
          validResponses++;
        }
        return acc;
      }, 0) / validResponses;
    return Promise.resolve(avg + 30);
  } catch (error) {
    return Promise.resolve("ERROR");
  }
}

searchController.getRatings = async (req, res, next) => {
  const average = await Promise.all(
    res.locals.businesses.map((buisiness) => {
      return getRatingsHelper(buisiness);
    })
  );

  const filterBbusinesses = [];
  for (const index in average) {
    if (average[index] !== "ERROR") {
      res.locals.businesses[index].averageScore = average[index];
      filterBbusinesses.push(res.locals.businesses[index]);
    }
  }
  res.locals.businesses = filterBbusinesses;
  next();
};

module.exports = searchController;
