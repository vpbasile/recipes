
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import RecipeFooter from './recipeFooter'
import RecipeHeader from './recipeHeader'

export default function Layout() {

    return (<>
        <RecipeHeader />
        <Box id='mainBody' p={9}>
            {/* This is where the children will be rendered */}
            <Outlet />
        </Box>
        <RecipeFooter />
    </>)
}