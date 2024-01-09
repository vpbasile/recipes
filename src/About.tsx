import { Box, ListItem, OrderedList, Text } from "@chakra-ui/react";

const RecipeStyleGuide = () => {
  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Recipe Style Guide:
      </Text>

      {/* Mise en Place Section */}
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Mise en Place:
        </Text>

        <OrderedList listStyleType="none" pl={0}>
          {[
            "Dry ingredients",
            "Liquid ingredients",
            "Vegetables",
            "Dairy products",
            "Fresh Herbs",
            "Onions",
            "Garlic",
            "Ginger",
            "Meat, eggs, or other animal products",
          ].map((item, index) => (
            <ListItem key={index} mb={1}>
              {item}
            </ListItem>
          ))}
        </OrderedList>

        <Text mt={2}>
          Units in the mise-en-place list should be abbreviated where
          appropriate: (tsp = teaspoon, TBSP = tablespoon, C = cup, etc.)
        </Text>
        <Text>
          In the case that you are dividing a measured ingredient, it should be
          listed twice.
        </Text>
        <Text>
          Each ingredient should be listed in the following format: "What
          (Preparation) Amount," such as "Red Onion (Finely Diced) 2 Cups or
          one large."
        </Text>
      </Box>

      {/* Instructions Section */}
      <Box mt={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Instructions:
        </Text>

        <Text>Units should not be abbreviated.</Text>
        <Text>Steps should be numbered.</Text>
        <Text>
          Any time the cook should wait or perform an action for a specific
          amount of time, the next action should be in a new step.
        </Text>
      </Box>
    </Box>
  );
};

export default RecipeStyleGuide;
