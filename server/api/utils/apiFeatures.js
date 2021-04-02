class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // Example: ?sort=-YearReleased
  // Column name is case sensitive
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-YearReleased");
    }
    return this;
  }

  // Example: ?fields=YearReleased,Title,Console
  // -Title would include everything except Title
  limitFields() {
    if (this.queryString.fields) {
      // select() expects fields separated by spaces
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    }

    return this;
  }

  // Example ?page=1&limit=5
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
