import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //console.log(items);
  return _(items).slice(startIndex).take(pageSize).value();
  //     _.slice(items, startIndex);
  //     _.take();
}
