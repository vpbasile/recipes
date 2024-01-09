// A recipe is a list of parts, equipment and a title.  From the components of the recipe, we can calculate the list of foods and tools needed.
// Each recipePart has a title, a prep list, and an action list.
// A prep list is a list of ingredients. An action list is a list of strings.
// An ingredient has a food, a descriptor, and a quantity.
// A food has a name and a type.  Types are "produce", "meat", "dairy", "grain", "spice", "other".
// A descriptor is a string. It can be empty.
// A quantity is a number and a unit. It can be empty.
// A unit is one of a list of strings.  The list is in the data file.

export type Recipe = {
    title: string;
    parts: RecipePart[];
};

export type RecipePart = {
    title: string;
    ingredients?: Ingredient[];
    tools?: Tool[];
    actions: string[];
};

export type Ingredient = {
    food: Food;
    descriptor: string;
    quantity: Vector;
};

export type Tool = string;

export type Food = {
    name: string;
    type: string;
};

export type Vector = {
    amount: number;
    unit: string;
};

export const exampleRecipe: Recipe = {
    title: "Chiptole Chicken Tacos",
    parts: [
        {
            title: "Marinate the Chicken",
            ingredients: [{ food: { name: "chicken", type: "meat" }, descriptor: "boneless skinless thighs", quantity: { amount: 1, unit: "pound" } },
            { food: { name: "greek yogurt", type: "dairy" }, descriptor: "", quantity: { amount: 0.5, unit: "cup" } },
            { food: { name: "lime juice", type: "produce" }, descriptor: "", quantity: { amount: 1, unit: "tablespoon" } },
            { food: { name: "chipotle peppers", type: "spice" }, descriptor: "powdered", quantity: { amount: 1, unit: "tablespoon" } },
            { food: { name: "garlic", type: "produce" }, descriptor: "powdered", quantity: { amount: 1, unit: "tablespoon" } },
            { food: { name: "cumin", type: "spice" }, descriptor: "powdered", quantity: { amount: 1, unit: "tablespoon" } },
            { food: { name: "salt", type: "spice" }, descriptor: "", quantity: { amount: 0.5, unit: "teaspoon" } }
            ],
            actions: ["Mix the marinade ingredients in a bowl", "Add the chicken to the marinade", "Cover and refrigerate for at least 30 minutes"]
        }, {
            title: "Cook the Chicken",
            actions: ["Heat a skillet over medium-high heat", "Add the chicken and cook for 5-7 minutes per side", "Remove from heat and let rest for 5-10 minutes under a foil tent. Prep the tacos while you wait.", "Shred the chicken with two forks"]
        },
        {
            title: "Prep the Tacos",
            ingredients: [{ food: { name: "corn tortillas", type: "grain" }, descriptor: "", quantity: { amount: 6, unit: "tortillas" } },
            { food: { name: "cheddar cheese", type: "dairy" }, descriptor: "", quantity: { amount: 1, unit: "cup" } },
            { food: { name: "salsa", type: "produce" }, descriptor: "", quantity: { amount: 1, unit: "cup" } },
            { food: { name: "sour cream", type: "dairy" }, descriptor: "", quantity: { amount: 0.5, unit: "cup" } },
            { food: { name: "cilantro", type: "produce" }, descriptor: "", quantity: { amount: 0.5, unit: "cup" } }
            ],
            actions: ["For each taco, place two corn torillas on a parchment-lined baking sheet", "Top with shredded cheese", "Broil for 2-3 minutes until the cheese is melted and the tortillas are slightly browned", "After the chicken is shredded, top the tortilla with chicken salsa, sour cream, and cilantro."],
        }
    ]
};