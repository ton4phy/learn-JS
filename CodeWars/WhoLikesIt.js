// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items.
// We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, 
// which must take in input array, containing the names of people who like an item.
// It must return the display text as shown in the examples:




const likes = (name) => {
  let str = " like this";
  if(name.length == 0) return 'no one likes this';
  if(name.length == 1) return name[0] + ' likes this';
  if(name.length == 2) return name[0] + " and " + name[1] + str;
  if(name.length == 3) return name[0] + ", " + name[1] + " and " + name[2] + str;
  if(name.length > 3) return name[0] + ", " + name[1] + " and " + (name.length - 2) + " others" + str;
};
