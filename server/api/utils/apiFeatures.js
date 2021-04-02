class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // Example: ?sort=-YearReleased
  // Column name is case sensitive
  sort() {
    if (this.queryString.sort) {
      // Uncomment if we want to sort by multiple fields
      //const sortBy = this.queryString.sort.split(",").join(" "); // select() expects fields separated by spaces

      const ascending = this.queryString.sort.charAt(0) === "-" ? -1 : 1; // 1 for ascending
      const field =
        this.queryString.sort.charAt(0) === "-"
          ? this.queryString.sort.substring(1)
          : this.queryString.sort;

      this.query = this.query.sort({ [field]: ascending });
    } else {
      this.query = this.query.sort("-YearReleased");
    }
    return this;
  }

  // Example: ?filterTitle=Title&filterPublisher=Publisher
  // Filter by Title and/or Publisher
  filter() {
    const title = new RegExp(this.queryString.filterTitle || "");
    const publisher = new RegExp(this.queryString.filterPublisher || "");

    this.query = this.query.find({
      Title: { $regex: title, $options: "i" }, // option i for case insensitive query
      Publisher: { $regex: publisher, $options: "i" },
    });
    return this;
  }

  // Example: ?fields=YearReleased,Title,Console
  // -Title would include everything except Title
  limitFields(val) {
    if (val) {
      this.query = this.query.select(val);
      return this;
    }
    if (this.queryString.fields) {
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
