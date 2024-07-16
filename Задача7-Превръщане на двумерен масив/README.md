var vendors = [];
vendors[0] = ['apple', 'htc'];
vendors[1] = ['samsung', 'acer'];
vendors[2] = ['nokia', 'zte'];

// Преобразуваме масива в едномерен
var flatVendors = vendors.concat.apply([], vendors);
alert(flatVendors[2]);

Метод concat() приема един или повече масиви и съединява и съединява елементите им в един голям масив, а след това връща получения масив като резултат.
