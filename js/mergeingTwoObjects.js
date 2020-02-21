

function mergeTwoObjects(list1, list2) {
  let result = list1.map(x => {
    let l2 = list2.find(y => y.id === x.id);
    return l2 ? { ...x, ...l2 } : {...x, description: undefined};
  });
  return result
}