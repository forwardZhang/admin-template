import { get, has } from 'es-toolkit/compat';

function mapTree(data, callback, childrenField, info = { level: 1, parent: null }) {
  childrenField = childrenField ?? 'children';
  return data.map((item, index, array) => {
    const children = get(item, childrenField);
    const returnedItem = callback(item, index, info, array);
    if (Array.isArray(children)) {
      const mappedChildren = mapTree(
        children,
        callback,
        childrenField,
        {
          level: info.level + 1,
          parent: item,
        },
      );
      return has(returnedItem, childrenField)
        ? {
            ...returnedItem,
            [childrenField]: mappedChildren,
          }
        : returnedItem;
    }
    return returnedItem;
  });
}
function eachTree(data, callback, childrenField, info = { level: 1, parent: null }) {
  childrenField = childrenField ?? 'children';
  data.forEach((item, index, array) => {
    const children = get(item, childrenField, []);
    callback(item, index, info, array);
    if (Array.isArray(children)) {
      eachTree(
        children,
        callback,
        childrenField,
        { level: info.level + 1, parent: item },
      );
    }
  });
}
export {
  eachTree,
  mapTree,
};
