let TextSearchFilter = PourOver.Filter.extend({
  cacheResults: function(items) {
    this.values = items.map(i => {
      return {
        cid: i.cid,
        val: i[this.name].toLowerCase()
      };
    }, this);

    this.values.sort((a, b) => {
      return a.val - b.val;
    });
  },
  addCacheResults: function(items) {
    this.values = this.values.concat(items);

    this.values.sort((a, b) => {
      return a.val - b.val;
    });
  },
  getFn: function(query) {
    let matches = this.values.filter(value => {
      return value.val.includes(query.toLowerCase());
    });

    return this.makeQueryMatchSet(matches.map(match => match.cid), query);
  }
});

// This is equivalent to functions like PourOver.makeExactFilter() and
// PourOver.makeInclusionFilter().
export function makeTextSearchFilter(filterName, attr) {
  let opts = { associated_attrs: [attr], attr: attr };

  return new TextSearchFilter(filterName, opts);
}
