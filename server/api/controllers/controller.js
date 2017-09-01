const bind = (db, collection) => ({
    collection,
    get_all: (req, res) => {
      db.loadDatabase({}, () => {
        try {
          const books = db.getCollection(collection).data;
          res.json(books);
        } catch (ex) {
          res.send(ex);
        }
      })
    },

    get: (req, res) => {
      db.loadDatabase({}, function () {
        try {
          const book = db.getCollection(collection).findOne({id: parseInt(req.params.id)});
          res.json(book);
        } catch (ex) {
          res.send(ex);
        }
      })
    }
  })
;

export {bind};
