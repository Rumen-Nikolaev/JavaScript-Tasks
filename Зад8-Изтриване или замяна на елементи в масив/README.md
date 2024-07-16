var vandors = new Array("apple", "htc", "samsung", "acer", "htc", "zte");
// Изтриване на елемент
vendors.splice(vendors.indexOf("acer"), 1); // "apple", "htc", "samsung", "htc", "zte"

// Замяна на елемент
vendors.splice(vendors.indexOf("acer"), 1, "fly");
// "apple", "htc", "samsung", "fly", "htc", "zte"

Метод splice() приема три параметъра:
Масивът, с който трябва да се работи.
Броят на елементите, които ще бъдат изтрити/заменени
Стойността за замяна. Ако е зададен трети параметър, изтриваните стойсности ще бъдат заменени с тази нова стойност.
