const proteins1 = ["Chicken", "Beef", "Tofu", "Salmon", "Pork", "Duck", "Turkey", "Lamb", "Shrimp", "Bacon"];
const vegetables1 = ["Carrots", "Spinach", "Broccoli", "Peppers", "Zucchini", "Mushrooms", "Asparagus", "Cauliflower", "Eggplant", "Cabbage"];
const fruits1 = ["Apple", "Banana", "Grapes", "Mango", "Strawberry", "Pineapple", "Blueberry", "Orange", "Kiwi", "Watermelon"];
const grains1 = ["Rice", "Quinoa", "Pasta", "Bread", "Couscous", "Barley", "Oats", "Corn", "Buckwheat", "Millet"];
const sauces1 = ["Soy sauce", "Ketchup", "BBQ sauce", "Hot sauce", "Pesto", "Mustard", "Ranch", "Buffalo sauce", "Teriyaki", "Tahini"];
const proteins = ["Spam", "Frog Legs", "Sardines", "Anchovies", "Jellyfish", "Chicken Feet", "Sea Urchin"];
const vegetables = ["Eggplant", "Cabbage", "Pickles", "Brussels Sprouts", "Pickled Beets", "Okra", "Kimchi", "Bitter Melon", "Sauerkraut"];
const fruits = ["Durian", "Jackfruit", "Lychee", "Dragon Fruit", "Rambutan", "Persimmon", "Starfruit"];
const grains = ["Cereal", "Tortilla Chips", "Popcorn", "Rice Cakes", "Puffed Quinoa", "Rye Bread", "Buckwheat Noodles"];
const sauces = ["Chocolate Syrup", "Peanut Butter", "Maple Syrup", "Wasabi", "Marmite", "Fish Sauce", "Nutella"];


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomCombo() {
    const protein = getRandomElement(proteins);
    const vegetable = getRandomElement(vegetables);
    const fruit = getRandomElement(fruits);
    const grain = getRandomElement(grains);
    const sauce = getRandomElement(sauces);

    return `${protein} with ${vegetable}, ${fruit}, ${grain}, and ${sauce}`;
}

document.getElementById("generateButton").addEventListener("click", () => {
    const combo = generateRandomCombo();
    document.getElementById("comboDisplay").textContent = combo;
});
