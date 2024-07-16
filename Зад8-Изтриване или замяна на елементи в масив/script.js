var vandors = new Array("apple", "htc", "samsung", "acer", "htc", "zte");
// Изтриване на елемент
vendors.splice(vendors.indexOf("acer"), 1); // "apple", "htc", "samsung", "htc", "zte"

// Замяна на елемент
vendors.splice(vendors.indexOf("acer"), 1, "fly");
// "apple", "htc", "samsung", "fly", "htc", "zte"

