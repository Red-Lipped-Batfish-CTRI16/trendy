const searchController = {};
const sdk = require("api")("@yelp-developers/v1.0#deudoolf6o9f51");
// process.env.YELP_API;
const data = require("./TEST_DATA");
const cheerio = require("cheerio");

searchController.getBuisnesses = async (req, res, next) => {
  // sdk.auth(
  //   "bearer kuSk_q8ezMZRJiL98mubw4hYgERgyGZ39hSckuAAt6LGvQCV4P-eogXsM2Eolw07rDxCRxJFxYRyI2vc_UeKhkQj3_VAHIEN755YV6Va476d6bQcfkMLVc9bNE9xZHYx"
  // );

  // const { interest, radius } = req.body;
  // const location = req.body.location.replace(/\s/g, "%20");
  // const { data } = await sdk.v3_business_search({
  //   location,
  //   term: interest,
  //   radius,
  //   sort_by: "best_match",
  //   limit: "3",
  // });

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

  next();
};

searchController.getComments = async (req, res, next) => {
  Promise.all(
    res.locals.businesses.map((business) => fetch(business.url))
  ).then((YELPres) => {
    Promise.all(YELPres.map((x) => x.text())).then((html) => {
      const collectionOfComments = [];
      for (const pages of html) {
        const comments = [];
        const $ = cheerio.load(pages);
        const $comment = $("span.raw__09f24__T4Ezm");
        $comment.each((i, e) => {
          comments.push($(e).text().trim());
        });
        console.log(comments);
        collectionOfComments.push(comments);
      }
    });
  });

  next();
};

searchController.getRatings = async (req, res, next) => {
  next();
};

module.exports = searchController;
