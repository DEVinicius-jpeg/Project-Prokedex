function urlSlug(title) {
  const cleanTitle = title.toLowerCase().trim();
  let arrTitle = cleanTitle.split(' ');

  const space = arrTitle.reduce((acc, item, index) => {
    if(item === "") acc.push(index);
    return acc;
  },[]);

  for(let i = 0; i < space.length; i++){
    arrTitle.splice(space[i]);
  }

  return arrTitle.join('-');
}

const result = urlSlug(" Winter Is  Coming ");

console.log(result);
