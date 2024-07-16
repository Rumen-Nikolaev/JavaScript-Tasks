var vendors = [];
vendors[0] = ['apple', 'htc'];
vendors[1] = ['samsung', 'acer'];
vendors[2] = ['nokia', 'zte'];

// Преобразуваме масива в едномерен
var flatVendors = vendors.concat.apply([], vendors);
alert(flatVendors[2]);
