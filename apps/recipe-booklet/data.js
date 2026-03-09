const RECIPES = [
  {
    id: 1,
    title: "Apple Oatmeal",
    category: "Breakfast",
    servings: 4,
    servingSize: "3/4 cup",
    source: "California Dept. of Public Health",
    ingredients: [
      "1 3/4 cups 100% apple juice",
      "1 cup quick cooking oats",
      "1 large apple, cored and cut into bite-size chunks",
      "1/2 teaspoon ground cinnamon",
      "1/8 teaspoon salt (optional)"
    ],
    instructions: [
      "Combine all ingredients in a medium, microwave-safe bowl.",
      "Place in microwave uncovered and cook on high for about 2 minutes.",
      "Stir and let cool for 1 minute before serving."
    ],
    nutrition: {
      "Calories": 157,
      "Carbohydrate": "34g",
      "Dietary Fiber": "4g",
      "Protein": "3g",
      "Total Fat": "1g",
      "Saturated Fat": "0g",
      "Trans Fat": "0g",
      "Cholesterol": "0mg",
      "Sodium": "78mg"
    }
  },
  {
    id: 2,
    title: "Black Bean Soup",
    category: "Soup",
    servings: 6,
    servingSize: "1 cup",
    source: "Sample Recipe",
    ingredients: [
      "2 cans black beans, drained and rinsed",
      "1 medium onion, diced",
      "3 cloves garlic, minced",
      "4 cups low-sodium vegetable broth",
      "1 teaspoon ground cumin",
      "1/2 teaspoon chili powder"
    ],
    instructions: [
      "Saute onion and garlic in a large pot over medium heat for 5 minutes.",
      "Add beans, broth, cumin, and chili powder. Stir to combine.",
      "Bring to a boil, then reduce heat and simmer for 20 minutes.",
      "Use an immersion blender to partially blend for a thicker texture."
    ],
    nutrition: {
      "Calories": 180,
      "Carbohydrate": "32g",
      "Dietary Fiber": "10g",
      "Protein": "11g",
      "Total Fat": "1g",
      "Saturated Fat": "0g",
      "Trans Fat": "0g",
      "Cholesterol": "0mg",
      "Sodium": "210mg"
    }
  },
  {
    id: 3,
    title: "Corn Rice",
    category: "Side Dish",
    servings: 4,
    servingSize: "1/2 cup",
    source: "Sample Recipe",
    ingredients: [
      "1 cup long grain white rice",
      "1 cup frozen corn kernels",
      "2 cups water",
      "1/2 teaspoon salt",
      "1 tablespoon butter or margarine"
    ],
    instructions: [
      "Combine rice, water, and salt in a medium saucepan.",
      "Bring to a boil over medium-high heat.",
      "Reduce heat to low, cover, and cook for 15 minutes.",
      "Stir in corn and butter. Cover and let sit for 5 minutes before serving."
    ],
    nutrition: {
      "Calories": 210,
      "Carbohydrate": "44g",
      "Dietary Fiber": "2g",
      "Protein": "4g",
      "Total Fat": "3g",
      "Saturated Fat": "1g",
      "Trans Fat": "0g",
      "Cholesterol": "5mg",
      "Sodium": "310mg"
    }
  },
  {
    id: 4,
    title: "Vegetable Stir Fry",
    category: "Main Dish",
    servings: 4,
    servingSize: "1 cup",
    source: "Sample Recipe",
    ingredients: [
      "2 cups broccoli florets",
      "1 medium bell pepper, sliced",
      "1 cup snap peas",
      "2 tablespoons low-sodium soy sauce",
      "1 teaspoon sesame oil"
    ],
    instructions: [
      "Heat a large skillet or wok over high heat.",
      "Add vegetables and stir fry for 5 to 7 minutes.",
      "Add soy sauce and sesame oil, toss to coat.",
      "Serve immediately over rice or noodles."
    ],
    nutrition: {
      "Calories": 95,
      "Carbohydrate": "14g",
      "Dietary Fiber": "4g",
      "Protein": "5g",
      "Total Fat": "3g",
      "Saturated Fat": "0g",
      "Trans Fat": "0g",
      "Cholesterol": "0mg",
      "Sodium": "320mg"
    }
  },
  {
    id: 5,
    title: "Lentil Stew",
    category: "Soup",
    servings: 6,
    servingSize: "1 cup",
    source: "Sample Recipe",
    ingredients: [
      "1 cup red lentils, rinsed",
      "1 medium carrot, diced",
      "1 stalk celery, chopped",
      "4 cups low-sodium broth",
      "1 teaspoon turmeric"
    ],
    instructions: [
      "Combine all ingredients in a large pot.",
      "Bring to a boil over medium-high heat.",
      "Reduce heat and simmer for 25 minutes until lentils are soft.",
      "Season to taste before serving."
    ],
    nutrition: {
      "Calories": 160,
      "Carbohydrate": "28g",
      "Dietary Fiber": "8g",
      "Protein": "10g",
      "Total Fat": "1g",
      "Saturated Fat": "0g",
      "Trans Fat": "0g",
      "Cholesterol": "0mg",
      "Sodium": "190mg"
    }
  },
  {
    id: 6,
    title: "Banana Oat Muffins",
    category: "Breakfast",
    servings: 12,
    servingSize: "1 muffin",
    source: "Sample Recipe",
    ingredients: [
      "2 large ripe bananas, mashed",
      "1 1/2 cups rolled oats",
      "1/4 cup honey",
      "1 teaspoon baking powder",
      "1/2 teaspoon vanilla extract"
    ],
    instructions: [
      "Preheat oven to 350 degrees F.",
      "Mix all ingredients together in a large bowl until combined.",
      "Spoon batter into a greased muffin tin.",
      "Bake for 20 to 22 minutes until golden brown."
    ],
    nutrition: {
      "Calories": 120,
      "Carbohydrate": "24g",
      "Dietary Fiber": "2g",
      "Protein": "3g",
      "Total Fat": "2g",
      "Saturated Fat": "0g",
      "Trans Fat": "0g",
      "Cholesterol": "0mg",
      "Sodium": "45mg"
    }
  },
  {
    id: 7,
    title: "Garden Salad",
    category: "Salad",
    servings: 4,
    servingSize: "1 1/2 cups",
    source: "Sample Recipe",
    ingredients: [
      "4 cups mixed greens",
      "1 cup cherry tomatoes, halved",
      "1/2 medium cucumber, sliced",
      "1/4 cup red onion, thinly sliced",
      "2 tablespoons olive oil and vinegar dressing"
    ],
    instructions: [
      "Wash and dry all vegetables thoroughly.",
      "Combine greens, tomatoes, cucumber, and onion in a large bowl.",
      "Drizzle with dressing just before serving.",
      "Toss gently to coat and serve immediately."
    ],
    nutrition: {
      "Calories": 75,
      "Carbohydrate": "8g",
      "Dietary Fiber": "3g",
      "Protein": "2g",
      "Total Fat": "4g",
      "Saturated Fat": "1g",
      "Trans Fat": "0g",
      "Cholesterol": "0mg",
      "Sodium": "90mg"
    }
  },
  {
    id: 8,
    title: "Chicken and Brown Rice",
    category: "Main Dish",
    servings: 4,
    servingSize: "1 cup",
    source: "Sample Recipe",
    ingredients: [
      "1 lb boneless chicken breast, diced",
      "1 cup brown rice",
      "2 cups low-sodium chicken broth",
      "1 medium onion, diced",
      "1 teaspoon garlic powder"
    ],
    instructions: [
      "Cook onion in a skillet over medium heat for 3 minutes.",
      "Add chicken and cook until no longer pink, about 6 minutes.",
      "Add rice, broth, and garlic powder. Bring to a boil.",
      "Cover and simmer for 40 minutes until rice is tender."
    ],
    nutrition: {
      "Calories": 310,
      "Carbohydrate": "38g",
      "Dietary Fiber": "2g",
      "Protein": "28g",
      "Total Fat": "5g",
      "Saturated Fat": "1g",
      "Trans Fat": "0g",
      "Cholesterol": "65mg",
      "Sodium": "220mg"
    }
  },
  {
    id: 9,
    title: "Sweet Potato Mash",
    category: "Side Dish",
    servings: 4,
    servingSize: "1/2 cup",
    source: "Sample Recipe",
    ingredients: [
      "2 large sweet potatoes, peeled and cubed",
      "2 tablespoons low-fat milk",
      "1 tablespoon butter",
      "1/4 teaspoon cinnamon",
      "1/4 teaspoon salt"
    ],
    instructions: [
      "Boil sweet potatoes in water for 15 minutes until tender.",
      "Drain well and return to pot.",
      "Mash with milk, butter, cinnamon, and salt.",
      "Stir until smooth and serve warm."
    ],
    nutrition: {
      "Calories": 130,
      "Carbohydrate": "26g",
      "Dietary Fiber": "4g",
      "Protein": "2g",
      "Total Fat": "3g",
      "Saturated Fat": "2g",
      "Trans Fat": "0g",
      "Cholesterol": "8mg",
      "Sodium": "180mg"
    }
  },
  {
    id: 10,
    title: "Fruit Yogurt Parfait",
    category: "Breakfast",
    servings: 2,
    servingSize: "1 cup",
    source: "Sample Recipe",
    ingredients: [
      "1 cup low-fat plain yogurt",
      "1/2 cup strawberries, sliced",
      "1/2 cup blueberries",
      "1/4 cup granola",
      "1 tablespoon honey"
    ],
    instructions: [
      "Spoon half the yogurt into each cup or bowl.",
      "Layer strawberries and blueberries over yogurt.",
      "Top with granola and drizzle with honey.",
      "Serve immediately or refrigerate up to 2 hours."
    ],
    nutrition: {
      "Calories": 210,
      "Carbohydrate": "38g",
      "Dietary Fiber": "3g",
      "Protein": "8g",
      "Total Fat": "4g",
      "Saturated Fat": "1g",
      "Trans Fat": "0g",
      "Cholesterol": "5mg",
      "Sodium": "85mg"
    }
  },
  {
    id: 11,
    title: "Minestrone Soup",
    category: "Soup",
    servings: 6,
    servingSize: "1 cup",
    source: "Sample Recipe",
    ingredients: [
      "1 can diced tomatoes",
      "1 can kidney beans, drained",
      "1 cup small pasta",
      "2 cups mixed vegetables, chopped",
      "4 cups low-sodium vegetable broth"
    ],
    instructions: [
      "Bring broth to a boil in a large pot.",
      "Add tomatoes, beans, and vegetables. Simmer for 10 minutes.",
      "Add pasta and cook for an additional 10 minutes.",
      "Season to taste and serve hot."
    ],
    nutrition: {
      "Calories": 175,
      "Carbohydrate": "34g",
      "Dietary Fiber": "6g",
      "Protein": "8g",
      "Total Fat": "1g",
      "Saturated Fat": "0g",
      "Trans Fat": "0g",
      "Cholesterol": "0mg",
      "Sodium": "280mg"
    }
  },
  {
    id: 12,
    title: "Baked Salmon",
    category: "Main Dish",
    servings: 4,
    servingSize: "3 oz",
    source: "Sample Recipe",
    ingredients: [
      "1 lb salmon fillet",
      "1 tablespoon olive oil",
      "1 clove garlic, minced",
      "1 tablespoon lemon juice",
      "1/4 teaspoon black pepper"
    ],
    instructions: [
      "Preheat oven to 400 degrees F.",
      "Place salmon on a lined baking sheet.",
      "Mix olive oil, garlic, lemon juice, and pepper. Brush over salmon.",
      "Bake for 12 to 15 minutes until salmon flakes easily."
    ],
    nutrition: {
      "Calories": 220,
      "Carbohydrate": "1g",
      "Dietary Fiber": "0g",
      "Protein": "25g",
      "Total Fat": "12g",
      "Saturated Fat": "2g",
      "Trans Fat": "0g",
      "Cholesterol": "70mg",
      "Sodium": "90mg"
    }
  }
];