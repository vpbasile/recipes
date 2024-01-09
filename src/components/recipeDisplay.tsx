import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import { exampleRecipe } from "../dataStructure";

export default function RecipeDisplay() {
    const bgProps = { bg: "gray.500", bgOpacity: '0.5', borderRadius: 'md' }
    // Use a bullet as a delimieter
    const delimiter = <> &#9702; </>;


    return (<Box>
        <Flex id="RecipeTitle" fontSize="lg" fontWeight="bold" mb={4}>{exampleRecipe.title}</Flex>
        <Accordion>
            {exampleRecipe.parts.map((part, index) => {
                const partIndex = index + 1;
                return (<AccordionItem key={partIndex} id={`part-${partIndex}`}>
                    <AccordionButton id="PartTitle" sx={bgProps} fontSize="lg" fontWeight="bold" mb={4}>
                        <AccordionIcon />
                        Part {partIndex} - {part.title}
                    </AccordionButton>
                    <AccordionPanel>
                        {part.ingredients && <Box>
                            <Box id="ingredientHeading" fontSize="lg" fontWeight="bold" mb={4}>
                                <Heading fontSize="lg" fontWeight="bold" mb={4}>Ingredients:</Heading>
                            </Box>
                            <UnorderedList id="ingredientList">
                                {part.ingredients.map((ingredient, index) => {
                                    return (<ListItem key={index}>{ingredient.food.name}
                                        {ingredient.descriptor && <>{delimiter}{ingredient.descriptor}</>}
                                        <>{delimiter}{ingredient.quantity.amount} {ingredient.quantity.unit}</>
                                    </ListItem>)
                                })}
                            </UnorderedList>
                        </Box>}
                        {part.actions && <Box>
                            <Box id="actionHeading" fontSize="lg" fontWeight="bold" mb={4}>
                                <Heading fontSize="lg" fontWeight="bold" mb={4}>Actions:</Heading>
                            </Box>
                            <OrderedList id="actionList">
                                {part.actions.map((action, index) => {
                                    return (<ListItem key={index}>{action}</ListItem>)
                                })}
                            </OrderedList>
                        </Box>}
                    </AccordionPanel>

                </AccordionItem>)
            })}
        </Accordion>
    </Box>)
}